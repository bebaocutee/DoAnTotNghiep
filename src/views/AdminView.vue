<template>
  <div class="layout_teacher">
    <v-col cols="2">
      <div class="menu_teacher">
        <v-card>
          <v-layout>
            <v-navigation-drawer

                style="background-color: rgba(224,139,68,8)"
                theme="dark"
            >
              <div class="logo">
                <img src="@/assets/images/logo.png" width="230px" height="70px" alt="logo" class="logo">
              </div>
              <v-list color="transparent">
                <v-list-item prepend-icon="mdi-school" title="Quản lý khóa học"></v-list-item>
                <v-list-item prepend-icon="mdi-badge-account-horizontal-outline" title="Quản lý giáo viên"></v-list-item>
                <v-list-item prepend-icon="mdi-account-group" title="Quản lý người dùng"></v-list-item>
              </v-list>

              <template v-slot:append>
                <div class="pa-2">
                  <v-btn block>
                    Đăng xuất
                  </v-btn>
                </div>
              </template>
            </v-navigation-drawer>
            <v-main style="height: max-content"></v-main>
          </v-layout>
        </v-card>
      </div>
    </v-col>

    <v-col><slot></slot></v-col>
    <v-col cols="10">
      <v-row class="body_teacher">
        <div class="btn-add-lesson">
            <v-btn variant="tonal" class="bg-amber-accent-2" @click="addCourse">
              Thêm khóa học
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
    </v-col>

  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { title: 'Tên khóa học', key: 'course' },
      { title: 'Số người dùng tham gia', key: 'numberUser' },
      { title: 'Hành động', key: 'actions' },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      course: '',
      numberUser: 0,
      actions: 0,
    },
    defaultItem: {
      course: '',
      numberUser: 0,
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
          course: 'Lớp 1',
          numberUser: 0,
          actions: 0,
        },
        {
          course: 'Lớp 2',
          numberUser: 0,
          actions: 0,
        },
        {
          course: 'Lớp 3',
          numberUser: 0,
          actions: 0,
        },
        {
          course: 'Lớp 4',
          numberUser: 0,
          actions: 0,
        },
        {
          course: 'Lớp 5',
          numberUser: 0,
          actions: 0,
        },
      ]
    },

    addCourse() {
      this.$router.push('/course')
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
.layout_teacher {
  display: flex;
  width: 100%;
}

/*lesson*/
.select-lesson {
  display: flex;
  width: 100%;
}

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