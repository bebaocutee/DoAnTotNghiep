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
        <v-col cols="4" class="btn-add-lesson">
          <v-btn variant="tonal" class="bg-amber-accent-2" @click="addTest">
            Thêm bài kiểm tra
          </v-btn>
        </v-col>
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
  </v-container>

</template>

<script>
export default {
  name: 'teacher-lesson',
  data: () => ({
    headers: [
      { title: 'Danh sách bài kiểm tra', key: 'listTest' },
      { title: 'Số câu hỏi', key: 'numberQuestion' },
      { title: 'Hành động', key: 'actions' },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      listTest: '',
      numberQuestion: 0,
      actions: 0,
    },
    defaultItem: {
      listTest: '',
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
          listTest: 'Phiếu bài tập cuối tuần 1',
          numberQuestion: 0,
          actions: 0,
        },
        {
          listTest: 'Bài tập cuối tuần 2',
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

    addCourse() {
      this.$router.push('/course')
    }

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
  justify-content: flex-end;
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