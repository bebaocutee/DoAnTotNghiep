<template>
  <v-row class="lesson-container">
    <v-col cols="12" sm="4">
      <v-select
          :items="courses"
          required
          variant="outlined"
          item-title="name"
          item-value="id"
      >
        <template v-slot:label>
          <span class="required">Khóa học</span>
        </template>
      </v-select>
    </v-col>

    <v-col cols="12" sm="4">
      <v-select
          :items="chapters"
          required
          variant="outlined"
          item-title="name"
          item-value="id"
      >
        <template v-slot:label>
          <span class="required">Chương</span>
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
                    :items="courses"
                    required
                    variant="outlined"
                    item-title="name"
                    item-value="id"
                >
                  <template v-slot:label>
                    <span class="required">Khóa học</span>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                    :items="chapters"
                    required
                    variant="outlined"
                    item-title="name"
                    item-value="id"
                >
                  <template v-slot:label>
                    <span class="required">Chương</span>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="12">
                <v-text-field variant="outlined" required >
                  <template v-slot:label>
                    <span class="required">Tên bài học</span>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
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

            <v-btn text="Thoát" variant="plain" @click="dialog = false"></v-btn>

            <v-btn color="primary" text="Hoàn thành" variant="tonal" @click="dialog = false"></v-btn>
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
export default {
  data: () => ({
    dialog: false,
    headers: [
      { title: 'STT', key: 'index' },
      { title: 'Danh sách bài học', key: 'listLesson' },
      { title: 'Số người tham gia', key: 'numberStudent' },
      { title: 'Số câu hỏi', key: 'numberQuestion' },
      { title: 'Hành động', key: 'actions' },
    ],
    courses: [
      {id: 1, name: 'Toán 1'},
      {id: 2, name: 'Toán 2'},
      {id: 3, name: 'Toán 3'},
      {id: 4, name: 'Toán 4'},
      {id: 5, name: 'Toán 5'},
    ],

    chapters: [
      {id: 1, name: 'Chương 1'},
      {id: 2, name: 'Chương 2'},
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

  computed: {
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
          listLesson: 'Bài 1. Vị trí',
          numberStudent: 2,
          numberQuestion: 0,
          actions: 0,
        },
        {
          listLesson: 'Bài 2. Khối hình lập phương',
          numberStudent: 0,
          numberQuestion: 0,
          actions: 0,
        },
        {
          listLesson: 'Phiếu bài học tuần 1',
          numberStudent: 0,
          numberQuestion: 0,
          actions: 0,
        },
        {
          listLesson: 'Bài 3. Hình tròn- Hình tam giác- Hình vuông- Hình chữ nhật',
          numberStudent: 0,
          numberQuestion: 0,
          actions: 0,
        },
        {
          listLesson: 'Bài 4. Xếp hình',
          numberStudent: 0,
          numberQuestion: 0,
          actions: 0,
        },
        {
          listLesson: 'Bài tập cuối tuần 2',
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