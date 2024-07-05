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
                <router-link to="/admin-course" class="manage_list">
                  <v-list-item prepend-icon="mdi-school" title="Quản lý khóa học" class="list-item"></v-list-item>
                </router-link>

                <router-link to="/admin-teacher" class="manage_list">
                  <v-list-item prepend-icon="mdi-badge-account-horizontal-outline" title="Quản lý giáo viên" class="list-item"></v-list-item>
                </router-link>

                <v-list-item prepend-icon="mdi-account-group" title="Quản lý học sinh" class="list-item"></v-list-item>

                <router-link to="/admin-lesson" class="manage_list">
                  <v-list-item prepend-icon="mdi-account-box-edit-outline" title="Quản lý bài học" class="list-item" @click="toLessonManage"></v-list-item>
                </router-link>

                <router-link to="/admin-test" class="manage_list">
                  <v-list-item prepend-icon="mdi-account-file-text" title="Quản lý bài kiểm tra" class="list-item" @click="toTestManage"></v-list-item>
                </router-link>

                <router-link to="/admin-chapter" class="manage_list">
                  <v-list-item prepend-icon="mdi-application-edit-outline" title="Quản lý chương" class="list-item" @click="toChapterMange"></v-list-item>
                </router-link>

                <router-link to="/admin-question-bank" class="manage_list">
                  <v-list-item prepend-icon="mdi-clipboard-list-outline" title="Ngân hàng câu hỏi" class="list-item"  @click="toQuestionBank"></v-list-item>
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

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.layout_teacher {
  display: flex;
  width: 100%;
}

.manage_list {
  color: white;
  text-decoration: none;
}


.list-item {
  cursor: pointer;
}

.list-item:hover {
  color: #ffd071;
}
</style>