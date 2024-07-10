<template>
  <v-row class="lesson-container">
    <v-col cols="12" sm="4">
      <v-select
          v-model="filter.course_id"
          :items="courses"
          required
          variant="outlined"
          item-title="course_name"
          item-value="id"
          clearable
          @update:model-value="listChapters"
      >
        <template v-slot:label>
          <span>Khóa học</span>
        </template>
      </v-select>
    </v-col>

    <v-col cols="12" sm="4"></v-col>

      <!--    Dialog Add Lesson-->
    <v-col cols="12" sm="4" class="d-flex justify-end">
      <v-dialog v-model="dialog" max-width="1000">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
              class="btn-add-lesson"
              prepend-icon="mdi-plus"
              text="Thêm chương"
              v-bind="activatorProps"
          ></v-btn>

        </template>

        <v-card prepend-icon="mdi-application-edit-outline" :title="editedItem.id ? 'SỬA CHƯƠNG' : 'THÊM CHƯƠNG'">
          <v-card-item>
            <v-row dense class="mt-1">
              <v-col cols="12" sm="6">
                <v-select
                    v-model="form.course_id"
                    :items="courses"
                    required
                    variant="outlined"
                    item-title="course_name"
                    item-value="id"
                    clearable
                >
                  <template v-slot:label>
                    <span class="required">Khóa học</span>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="12">
                <v-text-field variant="outlined" required v-model="form.chapter_name">
                  <template v-slot:label>
                    <span class="required">Tên chương</span>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                    v-model="form.description"
                    variant="outlined"
                    label="Mô tả"
                    no-resize
                    rows="3"
                    max-rows="3"
                ></v-textarea>
              </v-col>

              <v-col cols="12">
                <!-- <small class="text-caption text-medium-emphasis">*Thông tin không được để trống</small> -->
              </v-col>
            </v-row>
          </v-card-item>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Thoát" variant="plain" @click="() => {
              dialog = false
              resetForm()
            }"></v-btn>

            <v-btn color="primary" text="Hoàn thành" variant="tonal" @click="submitForm"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
  

<!-- content-lesson-->
  <v-row>
    <div class="content-lesson">
      <v-data-table :headers="headers" :items="indexedDesserts">
        <template v-slot:item.actions="{ item }">
          <v-icon
              class="me-2"
              size="small"
              @click="readItem(item)"
          >
            mdi-eye
          </v-icon>

          <v-icon
              class="me-2"
              size="small"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>

          <v-icon
              size="small"
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </v-row>

<!--  </v-container>-->

</template>

<script>
import Swal from "sweetalert2";

export default {
  data: () => ({
    dialog: false,
    headers: [
      { title: 'STT', key: 'index' },
      { title: 'Tên chương', key: 'chapter_name' },
      { title: 'Khóa học', key: 'course_name' },
      { title: 'Số bài học', key: 'lesson_count' },
      { title: 'Hành động', key: 'actions' },
    ],
    courses: [],
    form: {
      course_id: null,
      chapter_name: '',
      description: '',
    },
    filter: {
      course_id: null,
    },
    desserts: [],
    editedItem: {},
  }),

  computed: {
    indexedDesserts() {
      return this.desserts.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
    },
  },

  created () {
    this.listCourses()
    this.listChapters()
  },

  methods: {
    async listChapters() {
      const response = await axios.get('/chapters', {
        params: this.filter,
      })
      this.desserts = response.data
    },

    async listCourses() {
      const response = await axios.get('/courses')
      this.courses = response.data
    },

    async submitForm() {
      if (this.editedItem.id) {
        await axios.put(`/chapters/${this.editedItem.id}`, this.form)
        this.success('Cập nhật chương thành công')
      } else {
        await axios.post('/chapters', this.form)
        this.success('Thêm chương thành công')
      }
      await this.listChapters()
      this.dialog = false
      this.resetForm()
    },

    resetForm() {
      this.form = {
        course_id: null,
        chapter_name: '',
        description: '',
      }
      this.editedItem = {}
    },

    readItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      // this.dialog = true
    },

    editItem (item) {
      this.editedItem = item
      this.form = {
        course_id: item.course_id,
        chapter_name: item.chapter_name,
        description: item.description,
      }
      this.dialog = true
    },

    deleteItem (item) {
      Swal.fire({
        title: "Xác nhận",
        text: "Bạn có chắc chắn muốn xóa chương này không?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) { // Nếu xác nhận xóa
          try {
            await axios.delete(`/chapters/${item.id}`)
            this.success('Xóa chương thành công')
            await this.listChapters()
          } catch (error) {
            this.error('Xóa chương thất bại')
            console.log(error)
          }
        }
      })
    },

    // addLesson() {
    //   this.$router.push('/add-lesson')
    // }

  },

}
</script>

<style scoped>
/*lesson*/
.lesson-container {
  margin-top: 20px;
  margin-left: 1px;
}

.btn-add-lesson {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
  background-color: #ffd071;
}
/*content-lesson*/
.content-lesson {
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #eeeeee;
  border-radius: 7px;
}

</style>