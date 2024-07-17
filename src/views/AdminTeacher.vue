<template>
<!--    Dialog Add Lesson-->
<div class="lesson-container">
    <v-dialog v-model="dialog" max-width="1000">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
            class="btn-add-lesson"
            prepend-icon="mdi-plus"
            text="Thêm giáo viên"
            v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card prepend-icon="mdi-badge-account-horizontal-outline" :title="editedItem.id ? 'SỬA GIÁO VIÊN' : 'THÊM GIÁO VIÊN'">
        <v-card-item>
          <v-row dense class="mt-1">
            <v-col cols="6">
              <v-text-field variant="outlined" required v-model="form.full_name">
                <template v-slot:label>
                  <span class="required">Họ và tên</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="6">
              <v-date-input
                label="Ngày sinh"
                prepend-icon=""
                variant="outlined"
                @update:model-value="changeDate"
              >
              </v-date-input>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="form.email" variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Địa chỉ Email</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="form.password" variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Mật khẩu</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="form.phone_number" variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Số điện thoại</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="form.experience" variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Kinh nghiệm</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="form.work_unit" variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Đơn vị công tác</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                  v-model="form.introduction"
                  variant="outlined"
                  label="Giới thiệu"
                  no-resize
                  rows="3"
                  max-rows="3"
              ></v-textarea>
            </v-col>

          </v-row>

          <!--            <small class="text-caption text-medium-emphasis">*Thông tin không được để trống</small>-->
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Thoát" variant="plain" @click="() => {
            dialog = false
            resetData()
          }"></v-btn>

          <v-btn color="primary" text="Hoàn thành" variant="tonal" @click="submitForm"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <!-- content-lesson-->
  <v-row>
    <div class="sum-teacher">
        <p>Tổng số giáo viên: {{ desserts.length }}</p>
    </div>

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
  form: {
    full_name: '',
    email: '',
    password: '',
    phone_number: '',
    date_of_birth: null,
    experience: '',
    work_unit: '',
    introduction: '',
  },
  headers: [
    { title: 'STT', key: 'index' },
    { title: 'Họ và tên', key: 'full_name' },
    { title: 'Đơn vị công tác', key: 'work_unit' },
    { title: 'Số điện thoại', key: 'phone_number' },
    { title: 'Địa chỉ Email', key: 'email' },
    { title: 'Hành động', key: 'actions' },
  ],
  desserts: [],
  editedItem: {},

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
    this.listTeacher()
  },

  methods: {
    resetData() {
      this.form= {
        full_name: '',
        email: '',
        password: '',
        phone_number: '',
        date_of_birth: null,
        experience: '',
        work_unit: '',
        introduction: '',
      }
      this.editedItem = {}
    },
    changeDate(newValue) {
      const date = new Date(newValue);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' };
      const formattedDate = date.toLocaleDateString('vi-VN', options).split('/').reverse().join('-');
      this.form.date_of_birth = formattedDate
    },
    async listTeacher() {
      try {
        const response = await axios.get('teachers')
        this.desserts = response.data
      } catch (error) {
        console.log(error)
      }
    },

    async submitForm() {
      try {
        if (this.editedItem.id) {
          await axios.put(`teachers/${this.editedItem.id}`, this.form)
          this.editedIndex = {}
          this.success('Cập nhật giáo viên thành công')
        } else {
          await axios.post('teachers', this.form)
          this.success('Thêm giáo viên thành công')
        }
        await this.listTeacher()
        this.dialog = false;
        this.resetData()
      } catch (error) {
        if (this.editedItem.id) {
          this.error('Cập nhật giáo viên thất bại')
        } else {
          this.error('Thêm giáo viên thất bại')
        }
        console.log(error)
      }
    },

    readItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      // this.dialog = true
    },

    editItem (item) {
      this.editedItem = item
      this.form = {
        full_name: item.full_name,
        email: item.email,
        password: item.password,
        phone_number: item.phone_number,
        date_of_birth: item.date_of_birth,
        experience: item.experience,
        work_unit: item.work_unit,
        introduction: item.introduction,
      }
      this.dialog = true
    },

    deleteItem (item) {
      Swal.fire({
        title: "Xác nhận",
        text: "Bạn có chắc chắn muốn xóa giáo viên này không?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) { // Nếu xác nhận xóa
          try {
            await axios.delete(`/teachers/${item.id}`)
            this.success('Xóa giáo viên thành công')
            await this.listTeacher()
          } catch (error) {
            this.error('Xóa giáo viên thất bại')
            console.log(error)
          }
        }
      })
    },

  },

}

</script>

<style scoped>

.sum-teacher {
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

.input-hidden {
  display: none;
}

.preview {
  height: 88px;
}

.label-img {
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