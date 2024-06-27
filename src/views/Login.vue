<template>
  <div class="login_wrapper">

    <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"

    >
      <h2 class="h2-login">ĐĂNG NHẬP</h2>
      <div class="text-subtitle-1">Tài khoản</div>

      <v-text-field
          density="compact"
          placeholder="Địa chỉ Email"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1">
        Mật khẩu
      </div>

      <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Nhập mật khẩu"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          style="font-size: 2rem"
      ></v-text-field>

      <div class="forgot_password">
        <a
            class="text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            style="font-size: 1em"
        >
          Quên mật khẩu?</a>
      </div>
      <v-btn
          class="mb-8"
          color="blue"
          size="large"
          block
      >
        Đăng nhập
      </v-btn>

      <v-card-text class="text-center">
        <p>Bạn chưa có tài khoản?</p>
        <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            style="margin-left: 1em;"
        >
         Đăng ký ngay <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
  }),
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