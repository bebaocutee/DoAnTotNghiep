<template>
  <header class="header-wrapper">
    <v-row class="pa-0">
      <v-col cols="2 pa-0">
        <img src="@/assets/images/logo-math.png" width="90px" height="90px" alt="logo" class="logo">
      </v-col>

      <v-col cols="6 pa-0" class="tool-bar">
        <div class="tool-bar_item">
          <ul>
            <li><a href="#" class="home">Trang chủ</a></li>
            <li><a href="#" class="home">Học bài</a></li>
            <li><a href="#" class="home">Kiểm tra</a></li>
          </ul>
        </div>
      </v-col>

      <v-col cols="4 pa-0" class="login">
        <div class="login_register">
          <v-btn variant="outlined" class="login">
            Đăng nhập
          </v-btn>
          <v-btn variant="outlined" class="register">
            Đăng ký
          </v-btn>
        </div>

      </v-col>
    </v-row>
  </header>
  <main>
    <v-container class="main-wrapper">
      <v-row >
        <v-col cols="4" class="math-1">
          <div class="math-1_item">
            <a href="#" class="math-1">TOÁN LỚP 1</a>
            <img src="@/assets/images/math-1.png" width="373px" height="230px" alt="image-math-1" class="image-math-1">
          </div>
        </v-col>
        <v-col cols="4" class="math-2">
          <div class="math-1_item">
            <a href="#" class="math-2">TOÁN LỚP 2</a>
            <img src="@/assets/images/math-2.png" width="373px" height="230px" alt="image-math-2" class="image-math-1">

          </div>
        </v-col>
        <v-col cols="4" class="math-3">
          <div class="math-1_item">
            <a href="#" class="math-3">TOÁN LỚP 3</a>
            <img src="@/assets/images/math-3.png" width="373px" height="230px" alt="image-math-3" class="image-math-1" >

          </div>
        </v-col>
      </v-row>

      <v-row class="row-2">
        <v-col cols="4" class="math-4">
          <div class="math-1_item">
            <a href="#" class="math-4">TOÁN LỚP 4</a>
            <img src="@/assets/images/math-4.png" width="373px" height="230px" alt="image-math-1" class="image-math-1">
          </div>
        </v-col>
        <v-col cols="4" class="math-5">
          <div class="math-1_item">
            <a href="#" class="math-5">TOÁN LỚP 5</a>
            <img src="@/assets/images/math-5.jpg" width="373px" height="230px" alt="image-math-1" class="image-math-1">

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

/*main*/
.main-wrapper {
  margin-top: 70px;
}
.math-1_item {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

}
.math-1_item .math-1 {
  display: flex;
  align-items: center;
  height: 40px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  background-color: #ffd071;
  border: 0 solid #ffd071;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-left: 10px;
}
.image-math-1 {
  border: 0 solid #ffffff;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}

.math-1_item .math-2 {
  display: flex;
  align-items: center;
  height: 40px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  background-color: #ffd071;
  border: 0 solid #ffd071;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-left: 10px;
}
.image-math-1 {
  border: 0 solid #ffffff;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}

.math-1_item .math-3 {
  display: flex;
  align-items: center;
  height: 40px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  background-color: #ffd071;
  border: 0 solid #ffd071;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-left: 10px;
}
.image-math-1 {
  border: 0 solid #ffffff;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}

.math-1_item .math-4 {
  display: flex;
  align-items: center;
  height: 40px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  background-color: #ffd071;
  border: 0 solid #ffd071;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-left: 10px;
}
.image-math-1 {
  border: 0 solid #ffffff;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}

.math-1_item .math-5 {
  display: flex;
  align-items: center;
  height: 40px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  background-color: #ffd071;
  border: 0 solid #ffd071;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-left: 10px;
}
.image-math-1 {
  border: 0 solid #ffffff;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}

</style>