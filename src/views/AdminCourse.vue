<template>

  <!--    Dialog Add Lesson-->
  <div class="lesson-container">
    <v-dialog v-model="dialog" max-width="1000">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
            class="btn-add-lesson"
            prepend-icon="mdi-plus"
            text="Thêm khóa học"
            
            v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card prepend-icon="mdi-school" title="THÊM KHÓA HỌC">
        <v-card-item>
          <v-col cols="12">
            <v-text-field variant="outlined" required v-model="form.course_name">
              <template v-slot:label>
                <span class="required">Tên khóa học</span>
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

          <!--            <small class="text-caption text-medium-emphasis">*Thông tin không được để trống</small>-->
        </v-card-item>
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
  </div>

  <!-- content-lesson-->
  <v-row>
    <div class="content-lesson">
      <v-data-table :headers="headers" :items="desserts">
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

</template>

<script>

import Swal from "sweetalert2";

export default {
  data: () => ({
    dialog: false,
      headers: [
        { title: 'STT', key: 'index' },
        { title: 'Tên khóa học', key: 'course_name' },
        { title: 'Số người dùng tham gia', key: 'user_count' },
        { title: 'Hành động', key: 'actions' },
      ],
      desserts: [],
      form: {
        course_name: '',
        description: '',
      },
      editedIndex: -1,
      editedItem: {
        course: '',
        numberUser: 0,
        actions: 0,
      },
      defaultItem: {
        course: '',
        numberUser: 0,
        actions: 0,
      },
    }),

    computed: {
    desserts() {
      return this.desserts.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
    },
  },

    created () {
      this.listCourse()
    },

    methods: {
      async listCourse() {
        try {
          const response = await axios.get('/courses')
          this.desserts = response.data
        } catch (e) {
          console.log(e)
        }
      },

      async submitForm() {
        try {
          if (this.editedItem.id) {
            await axios.put(`/courses/${this.editedItem.id}`, this.form)
            this.success('Cập nhật khóa học thành công')
          } else {
            await axios.post('/courses', this.form)
            this.success('Thêm khóa học thành công')
          }
          await this.listCourse()
          this.resetForm()
          this.dialog = false
        } catch (e) {
          if (this.editedItem.id)
            this.error('Cập nhật khóa học thất bại')
          else {
            this.error('Thêm khóa học thất bại')
          }
          console.log(e)
        }
      },

      resetForm() {
        this.form = {
          course_name: '',
          description: '',
        }
        this.editedItem = {}
      },

      // addCourse() {
      //   this.$router.push('/course')
      // },

      readItem (item) {
        this.$router.push({
          name: 'admin-lesson',
          query: {
            course_id: item.id
          }
        })
      },

      editItem (item) {
        this.editedItem = item
        this.form = {
          course_name: item.course_name,
          description: item.description,
        }
        this.dialog = true
      },

      deleteItem (item) {
        Swal.fire({
          title: "Xác nhận",
          text: "Bạn có chắc chắn muốn xóa khóa học này không?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Xóa",
          cancelButtonText: "Hủy",
        }).then(async (result) => {
          if (result.isConfirmed) { // Nếu xác nhận xóa
            try {
              await axios.delete(`/courses/${item.id}`)
              this.success('Xóa khoá học thành công')
              await this.listCourse()
            } catch (error) {
              this.error('Xóa khoá học thất bại')
              console.log(error)
            }
          }
        })
      },

    },

}

</script>

<style scoped>
/*lesson*/
.lesson-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.btn-add-lesson {
  margin-top: 20px;
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