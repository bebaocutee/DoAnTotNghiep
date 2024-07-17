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

      <v-card prepend-icon="mdi-account-group" :title="editedItem.id ? 'SỬA HỌC SINH' : 'THÊM HỌC SINH'">
        <v-card-item>
          <v-row dense class="mt-1">
            <v-col cols="12" sm="6"> 
              <v-text-field variant="outlined" required v-model="form.full_name">
                <template v-slot:label>
                  <span class="required">Họ và tên</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field variant="outlined" required v-model="form.phone_number">
                <template v-slot:label>
                  <span class="required">Số điện thoại</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field variant="outlined" required v-model="form.email">
                <template v-slot:label>
                  <span class="required">Địa chỉ Email</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field variant="outlined" required v-model="form.password">
                <template v-slot:label>
                  <span :class="editedItem.id ? '' : 'required'">Mật khẩu</span>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

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
    <div class="sum-student">
        <p>Tổng số học sinh: {{ indexedDesserts.length }}</p>
    </div>

    <div class="content-lesson">
      <v-data-table :headers="headers" :items="indexedDesserts">
        <template v-slot:item.courses="{ item }">
          {{ coursesLabel(item.courses) }}
        </template>
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
      { title: 'Họ và tên', key: 'full_name' },
      { title: 'Khóa học đang học', key: 'courses' },
      { title: 'Xem lịch sử bài làm', key: 'workHistory' },
      { title: 'Hành động', key: 'actions' },
    ],
    form: {
      full_name: '',
      phone_number: '',
      email: '',
      password: '',

    },
    desserts: [],
    editedIndex: -1,
    editedItem: {},
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
    this.listStudent()
  },

  methods: {
    async listStudent() {
      const response = await axios.get('/students')
      this.desserts = response.data
    },

    async submitForm() {
      try {
        if (this.editedItem.id) {
          await axios.put(`/students/${this.editedItem.id}`, this.form)
          this.editedItem = {}
          this.success('Cập nhật học sinh thành công')
        } else {
          await axios.post('/students', this.form)
          this.success('Thêm học sinh thành công')
        }
        await this.listStudent()
        this.dialog = false
        this.resetForm()
      } catch (error) {
        if (this.editedItem.id) {
          this.error('Cập nhật học sinh thất bại')
        } else {
          this.error('Thêm học sinh thất bại')
        }
        console.log(error)
      }
    },

    coursesLabel(courses) {
      if (courses.length === 0) {
        return 'Chưa có'
      }
      return courses.map((course) => course.course_name).join(', ')
    },

    resetForm() {
      this.form = {
        full_name: '',
        phone_number: '',
        email: '',
        password: '',
      }
      this.editedItem = {}
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
      this.editedItem = item
      this.form = {
        full_name: item.full_name,
        phone_number: item.phone_number,
        email: item.email,
        password: item.password,
      }
      this.dialog = true
    },

    deleteItem (item) {
      Swal.fire({
        title: "Xác nhận",
        text: "Bạn có chắc chắn muốn xóa học sinh này không?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) { // Nếu xác nhận xóa
          try {
            await axios.delete(`/students/${item.id}`)
            this.success('Xóa học sinh thành công')
            await this.listStudent()
          } catch (error) {
            this.error('Xóa học sinh thất bại')
            console.log(error)
          }
        }
      })
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