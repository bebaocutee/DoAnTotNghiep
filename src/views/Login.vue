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
          v-model="form.email"
          density="compact"
          placeholder="Địa chỉ Email"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1">
        Mật khẩu
      </div>

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

      <div class="forgot_password">
        <v-dialog v-model="dialog" max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <span
                class="text-decoration-none text-blue cursor-pointer"

                variant="plain"
                v-bind="activatorProps"
            >Quên mật khẩu</span>

          </template>

          <v-card title="Tìm tài khoản">
            <v-card-item>
              <v-row dense class="mt-1">
                <v-col cols="12"> 
                  <v-text-field variant="outlined" required >
                    <template v-slot:label>
                      <span class="required">Địa chỉ Email</span>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-item>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Thoát" variant="plain" @click="dialog = false"></v-btn>

              <v-btn color="primary" text="Gửi" variant="tonal" @click="openOtpDialog">Gửi</v-btn>
            </v-card-actions>  
          </v-card>
        </v-dialog>

        <!-- Nhập mã OTP -->
        <v-dialog v-model="dialog2" max-width="500">
          <v-card class="py-8 px-6 text-center mx-auto ma-4" elevation="12">
            <h3 class="text-h6 mb-4">Xác thực tài khoản</h3>

            <div class="text-body-2">
              Vui lòng kiểm tra địa chỉ Email
            </div>

            <v-sheet color="surface">
              <v-otp-input
                v-model="otp"
                type="password"
                variant="solo"
              ></v-otp-input>
            </v-sheet>

            <v-btn
              class="my-4 text-center mx-auto ma-2"
              color="purple"
              height="40"
              text="Xác nhận"
              variant="flat"
              width="70%"
            ></v-btn>

            <div class="text-caption">
              Không nhận được mã OTP? <a href="#" @click.prevent="otp = ''">Gửi lại</a>
            </div>
          </v-card>
        </v-dialog>

      </div>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        block
        @click="login"
      >
        Đăng nhập
      </v-btn>

      <v-card-text class="text-center">
        <p>Bạn chưa có tài khoản?</p>
        <router-link to="/register">
          <span
            class="text-blue text-decoration-none"
            style="margin-left: 1em;"
        >
            Đăng ký ngay <v-icon icon="mdi-chevron-right"></v-icon>
          </span>
        </router-link>       
      </v-card-text>
    </v-card>  
  </div>
</template>

<script>
import constants from '@/constants'

export default {
  data: () => ({
    dialog: false, 
    visible: false,
    dialog2: false,
    otp: '',
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    openOtpDialog() {
      this.dialog = false;
      this.dialog2 = true;
    },
    async login() {
      try {
        const response = await axios.post('login', this.form)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        this.success('Đăng nhập thành công!')
        if (response.data.user.role === constants.roles.ADMIN) {
          this.$router.push({name: 'admin-course'})
        } else if (response.data.user.role === constants.roles.TEACHER) {
          this.$router.push({name: 'teacher-lesson'})
        } else {
          this.$router.push({name: 'home'})
        }
      } catch (error) {
        console.log(error)
        this.error('Đăng nhập thất bại!')
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