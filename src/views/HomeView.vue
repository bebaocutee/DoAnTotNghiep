<template>
  <header class="header-wrapper">
    <v-row class="pa-0">
      <v-col cols="2 pa-0">
        <img src="@/assets/images/logo-math.png" width="120px" height="120px" alt="logo" class="logo">
      </v-col>

      <v-col cols="6" class="tool-bar">
        <div class="tool-bar_item">
          <a href="#" class="home">Trang chủ</a>
          <a href="#" class="home">Học bài</a>
          <a href="#" class="home">Kiểm tra</a>
        </div>
      </v-col>

      <v-col cols="4" class="login">
        <div class="login_register">
          <v-btn variant="outlined">
            Đăng nhập
          </v-btn>
          <v-btn variant="outlined">
            Đăng ký
          </v-btn>
        </div>

      </v-col>
    </v-row>
  </header>
  <main>
    <v-container class="main-wrapper">
      <v-row>
        <v-col cols="6" class="math-1">
          <div class="math-1_item">
            <a href="#" class="math-1">TOÁN LỚP 1</a>
            <img src="@/assets/images/math-3.png" width="500px" height="250px" alt="logo">
          </div>
        </v-col>
        <v-col cols="6" class="math-2">
          <div class="math-2_item">
            <a href="#" class="math-1">TOÁN LỚP 1</a>
            <img src="@/assets/images/math-3.png" width="500px" height="250px" alt="logo">

          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" class="math-1">
          <div class="math-1_item">
            <a href="#" class="math-1">TOÁN LỚP 1</a>
            <img src="@/assets/images/math-3.png" width="500px" height="250px" alt="logo">
          </div>
        </v-col>
        <v-col cols="6" class="math-2">
          <div class="math-2_item">
            <a href="#" class="math-1">TOÁN LỚP 1</a>
            <img src="@/assets/images/math-3.png" width="500px" height="250px" alt="logo">

          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" class="math-1">
          <div class="math-1_item">
            <a href="#" class="math-1">TOÁN LỚP 1</a>
            <img src="@/assets/images/math-3.png" width="500px" height="250px" alt="logo">
          </div>
        </v-col>
      </v-row>

    </v-container>

  </main>
  <footer>

  </footer>
</template>

<script>
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
  margin: 15px 0 3px 50px;
}

.tool-bar_item {
  display: flex;
  justify-content: center;
  justify-items: center;
}
.home {
  text-decoration: none;
  color: white;}

/*main*/
.math-1_item {
  display: flex;
  flex-direction: column;
}
</style>