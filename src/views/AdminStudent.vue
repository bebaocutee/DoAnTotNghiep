<template>
  <!--    Dialog Add Lesson-->
<div class="lesson-container">
    <v-dialog v-model="dialog" max-width="1000">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
            class="btn-add-lesson"
            prepend-icon="mdi-plus"
            text="Thêm học sinh"
            v-bind="activatorProps"
        ></v-btn>
    
      </template>

      <v-card prepend-icon="mdi-account-group" title="THÊM HỌC SINH">
        <v-card-item>
          <v-row dense class="mt-1">
            <v-col cols="12" sm="6"> 
              <v-text-field variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Họ và tên</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Số điện thoại</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field variant="outlined" placeholder="abc@gmail.com" required >
                <template v-slot:label>
                  <span class="required">Địa chỉ Email</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field variant="outlined" placeholder="Gồm 8 ký tự a->Z; 0->9" required >
                <template v-slot:label>
                  <span class="required">Mật khẩu</span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <!--            <small class="text-caption text-medium-emphasis">*Thông tin không được để trống</small>-->
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Thoát" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" text="Hoàn thành" variant="tonal" @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <!-- content-lesson-->
  <v-row>
    <div class="sum-student">
        <p>Tổng số học sinh: {{ indexedDesserts.length }}</p>
    </div>

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

</template>

<script>

export default {
  data: () => ({
    dialog: false,
    headers: [
      { title: 'STT', key: 'index' },
      { title: 'Danh sách học sinh', key: 'listStudent' },
      { title: 'Khóa học đang học', key: 'courseStudent' },
      { title: 'Xem lịch sử bài làm', key: 'workHistory' },
      { title: 'Hành động', key: 'actions' },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      listStudent: '',
      courseStudent: '',
      workHistory: '',
      actions: 0,
    },
    defaultItem: {
      listStudent: '',
      courseStudent: '',
      workHistory: '',
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
          listStudent: 'Phạm Thị Lan Anh',
          courseStudent: 'Toán 1',
          workHistory: '>>> Xem chi tiết',
          actions: 0,
        },
        {
          listStudent: 'Trần Xuân Đức',
          courseStudent: 'Toán 1',
          workHistory: '>>> Xem chi tiết',
          actions: 0,
        },

      ]
    },

    // addTeacher() {
    //   this.$router.push('/admin-teacher')
    // },

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

  },

}

</script>

<style scoped>

.sum-student {
 margin-left: 25px;
 margin-bottom: 15px; 
}
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

.content-lesson {
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #eeeeee;
  border-radius: 7px;
}
</style>