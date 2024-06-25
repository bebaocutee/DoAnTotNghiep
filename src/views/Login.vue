<template>
  <div class="login_wrapper">

    <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"

    >
      <h2 class="h2-login">ĐĂNG NHẬP</h2>
      <div class="text-subtitle-1 text-medium-emphasis">Tài khoản</div>

      <v-text-field
          density="compact"
          placeholder="Địa chỉ Email"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Mật khẩu

        <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
        >
          Quên mật khẩu?</a>
      </div>

      <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Nhập mật khẩu"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
      ></v-text-field>


      <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
      >
        ĐĂNG NHẬP
      </v-btn>

      <v-card-text class="text-center">
        <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
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
</style>