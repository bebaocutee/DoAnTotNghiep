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

      <v-card prepend-icon="mdi-badge-account-horizontal-outline" title="THÊM GIÁO VIÊN">
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
              <v-date-input
                label="Ngày sinh"
                prepend-icon=""
                variant="outlined"
                @update:model-value="changeDate"
              >
              </v-date-input>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="form.email" variant="outlined" placeholder="abc@gmail.com" required >
                <template v-slot:label>
                  <span class="required">Địa chỉ Email</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="form.password" variant="outlined" placeholder="Gồm 6 số" required >
                <template v-slot:label>
                  <span class="required">Mật khẩu</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="form.phone_number" variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Số điện thoại</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field v-model="form.experience" variant="outlined" required >
                <template v-slot:label>
                  <span class="required">Kinh nghiệm</span>
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
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

          <v-btn text="Thoát" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" text="Hoàn thành" variant="tonal" @click="addTeacher"></v-btn>
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
  editedIndex: -1,
  editedItem: {
    full_name: '',
    work_unit: '',
    phone_number: '',
    email: '',
    actions: 0,
  },

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

    async addTeacher() {
      try {
        const response = await axios.post('teachers', this.form)
        this.listTeacher()
        this.dialog = false;
        this.success('Thêm giáo viên thành công')
      } catch (error) {
        console.log(error)
        this.error('Lỗi hệ thống')
      }
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

</style>