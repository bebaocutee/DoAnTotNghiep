<template>
  <v-container>
    <v-row class="body_teacher">
      <div class="select-lesson">
        <v-col cols="4">
          <v-select
              label="Khóa học"
              :items="['Toán 1', 'Toán 2', 'Toán 3', 'Toán 4', 'Toán 5']"
              variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="4">
          <v-select
              label="Chương"
              :items="['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5', 'Chương 6']"
              variant="outlined"
          ></v-select>
        </v-col>
<!--        <v-col cols="4" class="btn-add-lesson">-->
<!--          <v-btn variant="tonal" class="bg-amber-accent-2" @click="addLesson">-->
<!--            Thêm bài học-->
<!--          </v-btn>-->
<!--        </v-col>-->
      </div>
    </v-row>

    <v-row>
      <div class="content-lesson">
        <v-data-table
            :headers="headers"
            :items="desserts"

        >
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

<!--    Dialog Add Lesson-->

    <div class="pa-4 text-center">
      <v-dialog v-model="dialog" max-width="1000">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
              class="btn-add-lesson"
              prepend-icon="mdi-account"
              text="Thêm bài học"
              variant="tonal"
              v-bind="activatorProps"
          ></v-btn>

        </template>

        <v-card prepend-icon="mdi-account-box-edit-outline" title="THÊM BÀI HỌC">
          <v-card-text>
            <v-row dense>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-select
                    :items="['Toán 1', 'Toán 2', 'Toán 3', 'Toán 4', 'Toán 5']"
                    required
                    variant="outlined"
                ></v-select>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
              >
                <v-autocomplete
                    :items="['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5', 'Chương 6']"
                    label="Chương*"
                    required
                    variant="outlined"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text>
            <v-col cols="12">
              <v-text-field variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Tên bài học</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                  variant="underlined"
                  hint="example of helper text only on focus"
                  label="Mô tả"
                  no-resize
                  rows="3"
                  max-rows="3"
              ></v-textarea>
            </v-col>

            <small class="text-caption text-medium-emphasis">*Thông tin không được để trống</small>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Thoát" variant="plain" @click="dialog = false"></v-btn>

            <v-btn color="primary" text="Hoàn thành" variant="tonal" @click="dialog = false"></v-btn>
          </v-card-actions>
        </v-card>

        <v-row>
          <v-btn>Thêm câu hỏi</v-btn>
        </v-row>
      </v-dialog>
    </div>

  </v-container>

</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      { title: 'Danh sách bài học', key: 'listLesson' },
      { title: 'Số người tham gia', key: 'numberStudent' },
      { title: 'Số câu hỏi', key: 'numberQuestion' },
      { title: 'Hành động', key: 'actions' },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      listLesson: '',
      numberStudent: 0,
      numberQuestion: 0,
      actions: 0,
    },
    defaultItem: {
      listLesson: '',
      numberStudent: 0,
      numberQuestion: 0,
      actions: 0,
    },
  }),

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          listLesson: 'Chương 1: Làm quen với một số hình',
          numberStudent: 0,
          numberQuestion: 0,
          actions: 0,
        },
        {
          listLesson: 'Chương 2: Các số đến 10',
          numberStudent: 0,
          numberQuestion: 0,
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

    // addLesson() {
    //   this.$router.push('/add-lesson')
    // }

  },

}
</script>

<style scoped>
/*lesson*/
.select-lesson {
  display: flex;
  width: 100%;
}

.btn-add-lesson {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  color: #ffd071;
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