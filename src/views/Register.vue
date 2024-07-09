<template>
  <div class="login_wrapper">
    <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"

    >
      <h2 class="h2-login">ĐĂNG KÝ</h2>
      <div class="text-subtitle-1">Địa chỉ Email</div>

      <v-text-field
        v-model="form.email"
        density="compact"
        placeholder="Địa chỉ Email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1">Họ và tên</div>

      <v-text-field
        v-model="form.full_name"
        density="compact"
        placeholder="Họ và tên"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1">Mật khẩu</div>

      <v-text-field
        v-model="form.password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Nhập mật khẩu"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        style="font-size: 2rem"
      ></v-text-field>

      <v-btn
          class="mb-8"
          color="blue"
          size="large"
          block
          @click="register"
      >
        Đăng ký
      </v-btn>

      <v-card-text class="text-center">
        <p>Bạn đã có tài khoản?</p>
        
        <router-link to="/login">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            style="margin-left: 1em;"
          >
            Đăng nhập 
            <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </router-link>
          
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
    form: {
      email: '',
      full_name: '',
      password: '',
    }
  }),
  methods: {
    async register() {
      try {
        const response = await axios.post('register', this.form)
        this.success('Đăng ký thành công!')
        this.$router.push({name: 'login'})
      } catch (error) {
        console.log(error)
        this.error('Đăng ký thất bại!')
      }
    }
  },
}
</script>

<style scoped>
.login_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.h2-login {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.text-subtitle-1 {
  width: 350px;
  height: 50px;
}
.forgot_password {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
}
.text-center {
  display: flex;
  flex-direction: row;
}
</style>