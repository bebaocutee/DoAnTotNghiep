<template>
  <v-row class="lesson-container">
    <v-col cols="12" sm="4">
      <v-select
          v-model="filter.course_id"
          :items="courses"
          variant="outlined"
          item-title="course_name"
          item-value="id"
          clearable
          @update:model-value="() => {
            filter.chapter_id = null
            listLessons()
          }"
      >
        <template v-slot:label>
          <span>Khóa học</span>
        </template>
      </v-select>
    </v-col>

    <v-col cols="12" sm="4">
      <v-select
          v-model="filter.chapter_id"
          :items="chapters"
          variant="outlined"
          item-title="chapter_name"
          item-value="id"
          clearable
          @update:model-value="listLessons"
      >
        <template v-slot:label>
          <span>Chương</span>
        </template>
      </v-select>
    </v-col>

      <!--    Dialog Add Lesson-->
    <v-col cols="12" sm="4" class="d-flex justify-end">
      <v-dialog v-model="dialog" max-width="1000">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
              class="btn-add-lesson"
              prepend-icon="mdi-plus"
              text="Thêm bài học"
              v-bind="activatorProps"
          ></v-btn>

        </template>

        <v-card prepend-icon="mdi-account-box-edit-outline" title="THÊM BÀI HỌC">
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
                >
                  <template v-slot:label>
                    <span class="required">Khóa học</span>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                    v-model="form.chapter_id"
                    :items="formChapters"
                    required
                    variant="outlined"
                    item-title="chapter_name"
                    item-value="id"
                >
                  <template v-slot:label>
                    <span class="required">Chương</span>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="12">
                <v-radio-group v-model="form.lesson_type" label="Loại" inline>
                  <v-radio label="Bài học" :value="1"></v-radio>
                  <v-radio label="Kiểm tra" :value="2"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-text-field variant="outlined" required v-model="form.lesson_name">
                  <template v-slot:label>
                    <span class="required">Tên {{ form.lesson_type === 1 ? ' bài học' : ' bài kiểm tra' }}</span>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12" v-if="form.lesson_type === 2">
                <v-text-field variant="outlined" required v-model="form.time_limit" type="number">
                  <template v-slot:label>
                    <span class="required">Thời gian (phút)</span>
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

  <v-dialog max-width="700px" v-model="dialogAddQuestion">
    <v-card title="Chọn câu hỏi">
      <v-data-table-virtual
          v-model="selected"
          :headers="addQuestionHeaders"
          :items="questions"
          show-select
      ></v-data-table-virtual>
      <v-card-actions>
        <v-spacer/>
        <v-btn density="compact" @click="dialogAddQuestion = false">Hủy</v-btn>
        <v-btn density="compact" color="primary" @click="save">Lưu</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

<!-- content-lesson-->
  <v-row>
    <div class="content-lesson">
      <v-data-table :headers="headers" :items="indexedDesserts">
        <template v-slot:item.lesson_type="{item}">
          <span>{{ item.lesson_type == 1 ? 'Bài học' : 'Bài kiểm tra' }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon class="me-2" size="small" @click="readItem(item)">mdi-eye</v-icon>
          <v-icon class="me-2" size="small" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
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
      { title: 'Tên', key: 'lesson_name' },
      { title: 'Loại bài', key: 'lesson_type' },
      { title: 'Chương', key: 'chapter' },
      { title: 'Khóa học', key: 'course' },
      { title: 'Số câu hỏi', key: 'questions_count' },
      { title: 'Hành động', key: 'actions' },
    ],
    addQuestionHeaders: [
      {title: 'Nội dung câu hỏi', key: 'question_content'}
    ],
    form: {
      course_id: null,
      chapter_id: null,
      lesson_name: '',
      lesson_type: 1,
      description: '',
      time_limit: null
    },
    filter: {
      course_id: null,
      chapter_id: null,
    },
    courses: [],
    chapters: [],
    desserts: [],
    editedItem: {},
    dialogAddQuestion: false,
    questions: [],
    selected: [],
    lessonSelectedId: null,
  }),

  computed: {
    indexedDesserts() {
      return this.desserts.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
    },
    chapters() {
      return this.chapters.filter(chapter => chapter.course_id === this.filter.course_id)
    },
    formChapters() {
      return this.chapters.filter(chapter => chapter.course_id === this.form.course_id)
    }
  },

  async created () {
    await this.listCourses()
    if (this.$route.query.course_id) {
      this.filter.course_id = Number.parseInt(this.$route.query.course_id) ?? null
    }
    await this.listChapters()
    await this.listLessons()
  },

  methods: {
    async submitForm() {
      try {
        if (this.editedItem.id) {
          await axios.put(`/lessons/${this.editedItem.id}`, this.form)
          this.success(`Cập nhật ${this.form.lesson_type === 1 ? 'bài học' : 'bài kiểm tra'} thành công`)
        } else {
          await axios.post('/lessons', this.form)
          this.success(`Thêm ${this.form.lesson_type === 1 ? 'bài học' : 'bài kiểm tra'} thành công`)
        }
        await this.listLessons()
        this.dialog = false
        this.resetForm()
      } catch (error) {
        console.error(error)
      }
    },
    async listCourses() {
      const response = await axios.get('/courses')
      this.courses = response.data
    },
    async listChapters() {
      const response = await axios.get('/chapters')
      this.chapters = response.data
    },
    async listLessons() {
      const response = await axios.get('/lessons', {
        params: this.filter
      })
      this.desserts = response.data
    },
    async listQuestions() {
      const response = await axios.get('/questions')
      this.questions = response.data
    },
    async save() {
      try {
        await axios.post(`/lessons/selected/${this.lessonSelectedId}`, {
          selected: this.selected
        })
        this.success('Lưu câu hỏi thành công')
        await this.listLessons()
        this.dialogAddQuestion = false
        this.lessonSelectedId = null
      } catch (e) {
        this.error('Lưu câu hỏi thất bại')
        console.log(e)
      }

    },
    async readItem (item) {
      this.lessonSelectedId = item.id
      await this.listQuestions()
      const response = await axios.get(`/lessons/selected/${item.id}`)
      this.selected = response.data
      this.dialogAddQuestion = true
    },
    editItem (item) {
      this.editedItem = item
      this.form = {
        course_id: item.course_id,
        chapter_id: item.chapter_id,
        lesson_name: item.lesson_name,
        description: item.description,
        lesson_type: item.lesson_type,
        time_limit: item.time_limit
      }
      this.dialog = true
    },
    resetForm() {
      this.form = {
        course_id: null,
        chapter_id: null,
        lesson_name: '',
        lesson_type: 1,
        description: '',
        time_limit: null
      }
      this.editedItem = {}
    },
    deleteItem (item) {
      Swal.fire({
        title: 'Xác nhận xóa',
        text: `Bạn có chắc chắn muốn xóa ${this.form.lesson_type === 1 ? 'bài học' : 'bài kiểm tra'} này không?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(`/lessons/${item.id}`)
            this.success(`Xóa ${this.form.lesson_type === 1 ? 'bài học' : 'bài kiểm tra'} thành công`)
            await this.listLessons()
          } catch (error) {
            this.error(`Xóa ${this.form.lesson_type === 1 ? 'bài học' : 'bài kiểm tra'} thất bại`)
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

.input-hidden {
  display: none;
}

.preview {
  height: 88px;
}

label {
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  border-radius: 8px;
  padding: 8px;
  background-color: rgb(101, 101, 255);
}
.img-preview {
  margin-top: 4px;
  object-fit: contain;
  width: 60px;
  height: 60px;
}

</style>