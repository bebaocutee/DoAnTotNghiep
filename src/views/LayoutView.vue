<template>
  <header class="header-wrapper">
    <v-row class="pa-0">
      <v-col cols="3 pa-0">
        <div class="header-logo"></div>
        <img src="@/assets/images/logo-math.png" width="230px" height="70px" alt="logo" class="logo">
      </v-col>

      <v-col cols="5 pa-0" class="tool-bar">
        <div class="tool-bar_item">
          <ul>
            <li><router-link to="/"  class="home">Trang chủ</router-link></li>
            <li><router-link to="/lesson_home"  class="home">Học bài</router-link></li>
            <li><router-link to="/test"  class="home">Kiểm tra</router-link></li>
          </ul>
        </div>
      </v-col>

      <v-col cols="4 pa-0" class="login">
        <div v-if="userLoggedIn == null" class="login_register">
          <v-btn variant="outlined" @click="login" class="login">
            Đăng nhập
          </v-btn>
          <v-btn variant="outlined" @click="register" class="register">
            Đăng ký
          </v-btn>
        </div>
        
        <div v-else class="login_register w-100">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-avatar color="brown" size="large">
                  <span class="text-h5">{{ userLoggedIn.short_name }}</span>
                </v-avatar>
              </v-btn>
            </template>

            <v-card>
              <v-card-text>
                <div class="mx-auto text-center">
                  <p class="text-caption mt-1">
                    {{ userLoggedIn.email }}
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

          <!-- <v-btn variant="outlined" @click="logout" class="login">
            Đăng xuất
          </v-btn> -->
        </div>
      </v-col>
    </v-row>
  </header>
  <main>
    <v-container class="main-wrapper">
      <slot></slot>
    </v-container>

  </main>
  <footer class = "footer-wrapper">
    <v-container>
      <v-row class="footer-container">
        <v-col cols="4" class="footer-logo" >
          <img src="/src/assets/images/logo-footer.png" height="50px" width="220px" alt="logo-footer" class="logo-footer">
          <p class="p-logo"> Toán học là trang web học tập thú vị, tuyệt vời, cung cấp  những khoá học chất lượng cao cho học sinh tiểu học</p>
        </v-col>

        <v-col cols="4" class="footer-address">
          <h4 class="h1-address"> ĐỊA CHỈ</h4>
          <p class="p-address">175 Tây Sơn - Đống Đa - Hà Nội</p>
        </v-col>

        <v-col cols="4" class="footer-information">
          <h4 class="h1-address"> LIÊN HỆ</h4>
          <p class="p-address">Email: phamtlananh2410@gmail.com</p>
          <p class="p-address">Số điện thoại: 0334779979</p>
        </v-col>


      </v-row>

    </v-container>

  </footer>
</template>

<script>
  export default {
    name: 'layout',
    computed: {
      userLoggedIn() {
        if (localStorage.getItem('user')) {
          return JSON.parse(localStorage.getItem('user')) ?? null
        } 
        return null
      }
    },
    methods: {
      login() {
        this.$router.push('/login')
      },

      register() {
        this.$router.push('/register')
      },
      logout() {
      // Xóa dữ liệu từ localStorage
      localStorage.removeItem('user');

      // Chuyển hướng về trang chủ và đảm bảo computed được cập nhật
      this.$router.push({name: 'home'});
      this.$nextTick(() => {
        window.location.reload();
      });
    }

    },
  }

</script>

<style scoped>
/*header*/
.header-wrapper {
  width: 100%;
  height: max-content;
  background-image: url('/src/assets/images/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}
.logo {
  display: flex;
  margin: 12px 0 0 70px;
}

.tool-bar_item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-left: 1px solid #eee;
}

.tool-bar_item li {
  display: inline-block;
  list-style: outside none none;
  margin: .5em 1em;
  padding: 0;
}

.tool-bar_item a {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: .5em .8em;
  color: white;
  position: relative;
  text-decoration: none;
  font-size: 18px;
}

.tool-bar_item a::before,
.tool-bar_item a::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}

.tool-bar_item a::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #ffd071;
  border-right: 3px solid #ffd071;
  transform: translate(-100%, 50%);
}

.tool-bar_item a:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #ffd071;
  border-left: 3px solid #ffd071;
  transform: translate(100%, -50%)
}

.tool-bar_item a:hover:before,
.tool-bar_item a:hover:after{
  transform: translate(0,0);
  opacity: 1;
}

.tool-bar_item a:hover {
  color: #ffd071;
}

.login_register {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #eee;
  column-gap: 50px;
}

.login_register .login:hover {
  background-color: #ffd071;

}

.login_register .register:hover {
  background-color: #ffd071;
}

/*footer*/
.footer-wrapper {
  background-image: url("src/assets/images/footer_img.png");
  background-position: 0 bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #eeeeee;
}

.footer-container {
  display: flex;
}

.footer-logo {
  border-right: 1px solid #ffffff;
}
.logo-footer {
  margin-top: 20px;
  margin-bottom: 20px;
}
.p-logo {
  margin-bottom: 60px;
  padding-left: 12px;
}

.footer-address {
  margin-top: 30px;
}
.p-address {
  padding-top: 10px;
}

.footer-information {
  margin-top: 30px;
}


</style>