<template>
  <v-row class="body_teacher">
    <div class="btn-add-lesson">
      <v-btn variant="tonal" class="bg-amber-accent-2" @click="addTeacher">
        Thêm giáo viên
      </v-btn>
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

</template>

<script>

export default {
  data: () => ({
    headers: [
      { title: 'Danh sách giáo viên', key: 'listTeacher' },
      { title: 'Đơn vị công tác', key: 'workUnit' },
      { title: 'Số điện thoại', key: 'phoneNumber' },
      { title: 'Địa chỉ Email', key: 'email' },
      { title: 'Hành động', key: 'actions' },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      listTeacher: '',
      workUnit: '',
      phoneNumber: '',
      email: '',
      actions: 0,
    },
    defaultItem: {
      listTeacher: '',
      workUnit: '',
      phoneNumber: '',
      email: '',
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
          listTeacher: 'Thầy Hoàng Văn Kiên',
          workUnit: 'Trường tiểu học Achimedes',
          phoneNumber: '0355937014',
          email: 'hoangvankien@gmail.com',
          actions: 0,
        },
        {
          listTeacher: 'Cô Hoàng Thị Lan',
          workUnit: 'Trường tiểu học Đoàn Thị Điểm',
          phoneNumber: '0375776189',
          email: 'hoangthilan@gmail.com',
          actions: 0,
        },
        {
          listTeacher: 'Cô Nguyễn Thu Thủy',
          workUnit: 'Trường tiểu học Đoàn Thị Điểm',
          phoneNumber: '0989554596',
          email: 'nguyenthuthuy@gmail.com',
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
/*lesson*/
.btn-add-lesson {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 30px;
  margin-bottom: 30px;
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