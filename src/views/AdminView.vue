<template>
  <div class="layout_teacher">
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer style="background-color: rgba(224,139,68,8)">
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

          <router-link to="/admin-student" class="manage_list">
            <v-list-item prepend-icon="mdi-account-group" title="Quản lý học sinh" class="list-item"></v-list-item>
          </router-link>

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
      </v-navigation-drawer>

      <v-app-bar >
        <div class="d-flex justify-end w-100" v-if="userLoggedIn">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-avatar color="brown" size="large">
                  <span class="text-h5">{{ userLoggedIn.short_name ?? '' }}</span>
                </v-avatar>
              </v-btn>
            </template>

            <v-card>
              <v-card-text>
                <div class="mx-auto text-center">
                    <p class="text-caption mt-1">
                      {{ userLoggedIn.email}}               
                    </p>
                  <v-divider class="my-3"></v-divider>
                  <v-btn variant="text" rounded>Đổi mật khẩu</v-btn>
                  <v-divider class="my-3"></v-divider>
                  <v-btn variant="text" rounded @click="logout">
                    Đăng xuất
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>

          </v-menu>
        </div>
      </v-app-bar>

      <v-main >
        <router-view></router-view>
      </v-main>

    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    userLoggedIn() {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user')) ?? null
      } 
      return null
      }
  },
  created() {
    if (!this.userLoggedIn) {
      this.$router.push({name: 'login'});
    }
  },
  methods: {
    logout() {
      // Xóa dữ liệu từ localStorage
      localStorage.removeItem('user');

      // Chuyển hướng về trang chủ và đảm bảo computed được cập nhật
      this.$router.push({name: 'home'});
    }
  },
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