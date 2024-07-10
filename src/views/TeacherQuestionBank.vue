<template>
  <v-dialog v-model="dialog" max-width="800" scrollable>
    <v-card prepend-icon="mdi-clipboard-list-outline" title="THÊM CÂU HỎI">
      <v-card-item>
        <v-row dense class="mt-1">
          <v-col cols="12">
            <v-select
                v-model="form.question_bank_id"
                :items="banks"
                required
                variant="outlined"
                item-title="name"
                item-value="id"
                density="compact"
            >
              <template v-slot:label>
                <span class="required">Ngân hàng câu hỏi</span>
              </template>
            </v-select>
          </v-col>

          <v-col cols="12">
            <v-row>
              <v-col cols="10">
                <v-textarea v-model="form.question_content" rows="3" max-rows="3" variant="outlined" required density="compact" no-resize>
                  <template v-slot:label>
                    <span class="required">Nội dung câu hỏi</span>
                  </template>
                </v-textarea>
              </v-col>
              <v-col cols="2" class="preview-container">
                <div class="preview">
                  <input accept="image/*" type="file" class="input-hidden" id="question-img" @change="changeImageQuestion"/>
                  <label for="question-img">Chọn ảnh</label>
                  <img class="img-preview" v-if="previewImageQuestion" :src="previewImageQuestion" />
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" v-for="(answer, index) in form.answers" :key="index">
            <v-row>
              <v-col cols="8">
                <v-text-field variant="outlined" density="compact" required v-model="form.answers[index].answer_content">
                  <template v-slot:label>
                    <span class="required">Lựa chọn {{ getCharAnswer(index) }}</span>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="2">
                <div style="height: 40px" class="d-flex gap-2 justify-center align-center">
                  <v-checkbox v-model="form.answers[index].is_correct" @update:model-value="updateCorrectAnswer(index)" :true-value="1" :false-value="0"></v-checkbox>
                  <v-icon icon="mdi-minus" v-if="form.answers.length > 2" @click="removeAnswer(index)"></v-icon>
                </div>
              </v-col>
              <v-col cols="2" class="preview-container">
                <div class="preview">
                  <input accept="image/*" type="file" class="input-hidden" :id="`answer-img-${index}`" @change="changeImageAnswer($event, index)"/>
                  <label :for="`answer-img-${index}`">Chọn ảnh</label>
                  <img class="img-preview" v-if="getUrlPreviewAnswer(index)" :src="getUrlPreviewAnswer(index)" />
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col v-if="form.answers.length < 4">
            <v-btn @click="addAnswer">Thêm lựa chọn</v-btn>
          </v-col>

          <v-col cols="12">
            <!-- <small class="text-caption text-medium-emphasis">*Thông tin không được để trống</small> -->
          </v-col>
        </v-row>
      </v-card-item>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text="Thoát" variant="plain" @click="dialog = false"></v-btn>
        <v-btn color="primary" text="Hoàn thành" variant="tonal" @click="submitForm"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <div class="d-flex justify-space-between px-2 mb-2 lesson-container">
    <div class="w-33">
      <v-select
          v-model="filter.question_bank_id"
          :items="banks"
          variant="outlined"
          item-title="name"
          item-value="id"
          density="compact"
      >
        <template v-slot:label>
          <span>Ngân hàng câu hỏi</span>
        </template>
      </v-select>
    </div>
    
    <v-btn
      class="btn-add-lesson"
      prepend-icon="mdi-plus"
      text="Thêm câu hỏi"
      @click="dialog = true"
    ></v-btn>
  </div>
  

<!-- content-lesson-->
  <v-row>
    <div class="content-lesson">
      <v-data-table :headers="headers" :items="indexedDesserts">
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon class="me-2" size="small" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </div>
  </v-row>

</template>

<script>
import constants from '@/constants';
import Swal from "sweetalert2";

export default {
  data: () => ({
    dialog: false,
    headers: [
      { title: 'Nội dung', key: 'question_content' },
      { title: 'Người tạo', key: 'teacher' },
      { title: 'Hành động', key: 'actions' },
    ],
    desserts: [],
    filter: {
      question_bank_id: null,
    },
    editedItem: {},
    form: {
      question_bank_id: null,
      question_content: null,
      image: null,
      answers: [
        {answer_content: null, image: null, is_correct: 0},
        {answer_content: null, image: null, is_correct: 0},
      ]
    }
  }),

  computed: {
    banks() {
      return constants.banks
    },
    previewImageQuestion() {
      if (this.form.image == null) {
        return null
      }
      if (typeof this.form.image === 'string') {
        return this.form.image
      }
      return URL.createObjectURL(this.form.image)
    },
    indexedDesserts() {
      return this.desserts.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
    },
  },
  created () {
    this.listQuestions()
  },
  methods: {
    updateCorrectAnswer(index) {
      this.form.answers.forEach((item, i) => {
        if (i != index) {
          return item.is_correct = false
        }
      })
    },
    editItem (item) {
      this.editedItem = item
      this.form = {
        question_bank_id: item.question_bank_id,
        question_content: item.question_content,
        image: item.image,
        answers: item.answers
      }
      this.dialog = true
    },
    deleteItem (item) {
      Swal.fire({
        title: "Xác nhận",
        text: "Bạn có chắc chắn muốn xóa câu hỏi này không?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) { // Nếu xác nhận xóa
          try {
            await axios.delete(`/questions/${item.id}`)
            this.success('Xóa câu hỏi thành công')
            await this.listQuestions()
          } catch (error) {
            this.error('Xóa câu hỏi thất bại')
            console.log(error)
          }
        }
      })
    },
    async submitForm() {
      const formData = new FormData()
      for (const key in this.form) {
        if (key == 'answers') {
          this.form.answers.forEach((item, index) => {
            for (const subkey in item) {
              if (item[subkey]) {
                formData.append(`answers[${index}][${subkey}]`, item[subkey])
              }
            }
          })
        } else if (this.form[key]) {
          formData.append(key, this.form[key])
        }
      }
      try {
        if (this.editedItem.id) {
          formData.append('_method', 'PUT')
          await axios.post(`/questions/${this.editedItem.id}`, formData)
          this.success('Cập nhật câu hỏi thành công')
        } else {
          await axios.post('/questions', formData)
          this.success('Thêm câu hỏi thành công')
        }
        await this.listQuestions()
        this.dialog = false
        this.resetForm()
      } catch (error) {
        console.error(error)
      }
    },
    async listQuestions() {
      const response = await axios.get('/questions', {
        params: this.filter
      })
      this.desserts = response.data
    },
    changeImageQuestion(event) {
      this.form.image = event.target.files[0] ?? null
    },
    changeImageAnswer(event, index) {
      this.form.answers[index].image = event.target.files[0] ?? null
    },
    getUrlPreviewAnswer(index) {
      if (!this.form.answers[index] || !this.form.answers[index].image) {
        return null
      }
      if (typeof this.form.answers[index].image === 'string') {
        return this.form.answers[index].image
      }
      return URL.createObjectURL(this.form.answers[index].image)
    },
    getCharAnswer(index) {
      switch (index) {
        case 0: 
          return 'A'
        case 1:
          return 'B'
        case 2:
          return 'C'
        case 3:
          return 'D'
        default:
          return 'A'
      }
    },
    addAnswer() {
      if (this.form.answers.length == 4) {
        // max 4 dap an
        return
      }
      this.form.answers.push({content: null, image: null})
    },
    removeAnswer(index) {
      this.form.answers = this.form.answers.filter((item, i) => { return i != index })
    }
  }

}
</script>

<style scoped>
.lesson-container {
  margin-top: 20px;
  margin-left: 1px;
}

.btn-add-lesson {
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