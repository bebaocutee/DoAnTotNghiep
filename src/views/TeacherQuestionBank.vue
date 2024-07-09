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
                <v-textarea v-model="form.content" rows="3" max-rows="3" variant="outlined" required density="compact" no-resize>
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

          <v-col
              cols="12"
              v-for="(answer, index) in form.answers"
              :key="index"
          >
            <v-row>
              <v-col cols="9">
                <v-text-field variant="outlined" density="compact" required >
                  <template v-slot:label>
                    <span class="required">Lựa chọn {{ getCharAnswer(index) }}</span>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="1">
                <v-icon icon="mdi-minus" v-if="index >= 2" @click="removeAnswer(index)"></v-icon>
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

          <v-col>
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

        <v-btn color="primary" text="Hoàn thành" variant="tonal" @click="dialog = false"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <div class="d-flex justify-space-between px-2 mb-2 lesson-container">
    <div class="w-33">
      <v-select
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
import constants from '@/constants';

export default {
  data: () => ({
    dialog: false,
    headers: [
      { title: 'Danh sách câu hỏi', key: 'listQuestion' },
      { title: 'Người tạo', key: 'teacherName' },
      { title: 'Hành động', key: 'actions' },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      listQuestion: '',
      teacherName: '',
      actions: 0,
    },
    defaultItem: {
      listQuestion: '',
      teacherName: '',
      actions: 0,
    },
    form: {
      question_bank_id: null,
      content: null,
      image: null,
      answers: [
        {content: null, image: null},
        {content: null, image: null},
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
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          listQuestion: 'Câu 1: Đâu là bên trái, đâu là bên phải?',
          teacherName: 'Thầy Hoàng Văn Kiên',
          actions: 0,
        },
        {
          listQuestion: 'Câu 2: Đâu là bên trái, đâu là bên phải?',
          teacherName: 'Thầy Hoàng Văn Kiên',
          actions: 0,
        },
      ]
    },
    readItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      // this.dialog = true
    },
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      // this.dialog = true
    },
    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      // this.dialogDelete = true
    },
    addCourse() {
      this.$router.push('/course')
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