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
                  <img src="@/assets/images/logo-math.png" width="230px" height="70px" alt="logo" class="logo">
                </div>
                <v-list color="transparent">
                  <router-link to="/admin-lesson">
                    <v-list-item prepend-icon="mdi-account-box-edit-outline" title="Quản lý bài học" class="list-item" @click="toLessonManage"></v-list-item>
                  </router-link>

                  <router-link to="/admin-lesson">
                  <v-list-item prepend-icon="mdi-account-file-text" title="Quản lý bài kiểm tra" class="list-item" @click="toTestManage"></v-list-item>
                  </router-link>

                  <router-link to="/admin-lesson">
                  <v-list-item prepend-icon="mdi-application-edit-outline" title="Quản lý chương" class="list-item" @click="toChapterMange"></v-list-item>
                  </router-link>

                  <router-link to="/admin-lesson">
                  <v-list-item prepend-icon="mdi-clipboard-list-outline" title="Ngân hàng câu hỏi" @click="toQuestionBank"></v-list-item>
                  </router-link>
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

    <v-col cols="10">
      <router-view></router-view>
    </v-col>

<!--    <v-col cols="10">-->
<!--      <v-row class="body_teacher">-->
<!--        <div class="select-lesson">-->
<!--          <v-col cols="4">-->
<!--            <v-select-->
<!--                label="Khóa học"-->
<!--                :items="['Toán 1', 'Toán 2', 'Toán 3', 'Toán 4', 'Toán 5']"-->
<!--                variant="outlined"-->
<!--            ></v-select>-->
<!--          </v-col>-->
<!--          <v-col cols="4">-->
<!--            <v-select-->
<!--                label="Chương"-->
<!--                :items="['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5', 'Chương 6']"-->
<!--                variant="outlined"-->
<!--            ></v-select>-->
<!--          </v-col>-->
<!--          <v-col cols="4" class="btn-add-lesson">-->
<!--            <v-btn variant="tonal" class="bg-amber-accent-2" @click="addCourse">-->
<!--              Thêm bài học-->
<!--            </v-btn>-->
<!--          </v-col>-->
<!--        </div>-->
<!--      </v-row>-->

<!--      <v-row>-->
<!--        <div class="content-lesson">-->
<!--          <v-data-table-->
<!--              :headers="headers"-->
<!--              :items="desserts"-->

<!--          >-->
<!--            <template v-slot:item.actions="{ item }">-->
<!--              <v-icon-->
<!--                  class="me-2"-->
<!--                  size="small"-->
<!--                  @click="readItem(item)"-->
<!--              >-->
<!--                mdi-eye-->
<!--              </v-icon>-->

<!--              <v-icon-->
<!--                  class="me-2"-->
<!--                  size="small"-->
<!--                  @click="editItem(item)"-->
<!--              >-->
<!--                mdi-pencil-->
<!--              </v-icon>-->

<!--              <v-icon-->
<!--                  size="small"-->
<!--                  @click="deleteItem(item)"-->
<!--              >-->
<!--                mdi-delete-->
<!--              </v-icon>-->
<!--            </template>-->
<!--          </v-data-table>-->
<!--        </div>-->

<!--      </v-row>-->
<!--    </v-col>-->

  </div>
</template>

<script>
export default {
  name: 'teacher',
//   data: () => ({
//     headers: [
//       { title: 'Nội dung chương', key: 'contentChapter' },
//       { title: 'Số câu hỏi', key: 'numberQuestion' },
//       { title: 'Hành động', key: 'actions' },
//     ],
//     desserts: [],
//     editedIndex: -1,
//     editedItem: {
//       contentChapter: '',
//       numberQuestion: 0,
//       actions: 0,
//     },
//     defaultItem: {
//       contentChapter: '',
//       numberQuestion: 0,
//       actions: 0,
//     },
//   }),
//
//   created () {
//     this.initialize()
//   },
//
//   methods: {
//     initialize () {
//       this.desserts = [
//         {
//           contentChapter: 'Chương 1: Làm quen với một số hình',
//           numberQuestion: 0,
//           actions: 0,
//         },
//         {
//           contentChapter: 'Chương 2: Các số đến 10',
//           numberQuestion: 0,
//           actions: 0,
//         },
//       ]
//     },
//
//     readItem (item) {
//       this.editedIndex = this.desserts.indexOf(item)
//       this.editedItem = Object.assign({}, item)
//       // this.dialog = true
//     },
//
//     editItem (item) {
//       this.editedIndex = this.desserts.indexOf(item)
//       this.editedItem = Object.assign({}, item)
//       // this.dialog = true
//     },
//
//     deleteItem (item) {
//       this.editedIndex = this.desserts.indexOf(item)
//       this.editedItem = Object.assign({}, item)
//       // this.dialogDelete = true
//     },
//
//     addCourse() {
//       this.$router.push('/course')
//     }
//
//   },
//
};
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




.list-item {
  cursor: pointer;
}
.list-item:hover {
  color: #ffd071;
}
</style>