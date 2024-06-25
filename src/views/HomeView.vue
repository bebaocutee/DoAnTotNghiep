<template>
  <Layout>
    <v-container class="main-wrapper">
      <p class="course">KHÓA HỌC</p>
      <v-row >
        <v-col cols="4" class="math-1">
          <div class="math-1_item" @click="goToLesson">
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

      <v-row>
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

      <v-row >
        <p class="course">ĐỘI NGŨ GIÁO VIÊN</p>
        <v-col cols="12">
          <v-carousel
              height="450"
              show-arrows="hover"
              cycle
              hide-delimiter-background
          >
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
            >
              <v-row class="teachers">
                <v-col>
                  <div class="teachers-math_1">
                    <div class="teacher-avatar">
                      <img src="@/assets/images/giaovientoan1.png" width="130px" height="130px" alt="image-teacher-math-1" class="image-teacher-math-1">
                    </div>
                    <div class="teacher-inf">
                      <h3>Giáo viên Toán lớp 1</h3>
                      <p>Cô Trần Thị Bích Liên</p>
                      <p>Trình độ: Giáo viên</p>
                      <p>Chuyên môn: Toán 1</p>
                      <a href="#">Xem chi tiết >>></a>
                    </div>
                  </div>
                </v-col>
                <v-col>
                  <div class="teachers-math_1">
                    <div class="teacher-avatar">
                      <img src="@/assets/images/giaovientoan1.png" width="130px" height="130px" alt="image-teacher-math-1" class="image-teacher-math-1">
                    </div>
                    <div class="teacher-inf">
                      <h3>Giáo viên Toán lớp 1</h3>
                      <p>Cô Trần Thị Bích Liên</p>
                      <p>Trình độ: Giáo viên</p>
                      <p>Chuyên môn: Toán 1</p>
                      <a href="#">Xem chi tiết >>></a>
                    </div>
                  </div>
                </v-col>
                <v-col>
                  <div class="teachers-math_1">
                    <div class="teacher-avatar">
                      <img src="@/assets/images/giaovientoan1.png" width="130px" height="130px" alt="image-teacher-math-1" class="image-teacher-math-1">
                    </div>
                    <div class="teacher-inf">
                      <h3>Giáo viên Toán lớp 1</h3>
                      <p>Cô Trần Thị Bích Liên</p>
                      <p>Trình độ: Giáo viên</p>
                      <p>Chuyên môn: Toán 1</p>
                      <a href="#">Xem chi tiết >>></a>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

    </v-container>

  </Layout>
  <footer />

</template>

<script>
import LayoutView from "@/views/LayoutView.vue";
import Layout from "@/views/LayoutView.vue";
export default {
  components: {
    Layout,
    LayoutView,
  },
  data() {
    return {
      slides: [
        {
          name: 'Cô Trần Thị Bích Liên',
          level: 'giáo viên',
          specialize: 'Toán 1'
        },{
          name: 'Cô Trần Thị Bích Liên',
          level: 'giáo viên',
          specialize: 'Toán 1'
        },{
          name: 'Cô Trần Thị Bích Liên',
          level: 'giáo viên',
          specialize: 'Toán 1'
        },{
          name: 'Cô Trần Thị Bích Liên',
          level: 'giáo viên',
          specialize: 'Toán 1'
        },
      ]
    }
  },
  methods: {
    goToLesson() {
      this.$router.push('/lesson');
    }
  }

}
</script>

<style scoped>

/*main*/
.course {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 25px;
  text-decoration: underline solid #ffd071 ;
}

.main-wrapper {
  margin-top: 15px;
}

/*math-1*/
.math-1_item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
  width: 100%;
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

/*teacher*/
.teachers-math_1 {
  display: flex;
  flex-direction: column;
  width: 260px;
  background-image: url("src/assets/images/background-main.jpg");
  background-size: contain;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

.teacher-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 17px;
}

.teacher-inf {
  padding-top: 7px;
  padding-left: 7px;
  padding-bottom: 9px;
  width: 260px;
  border: 1px solid #eeeeee;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  line-height: 45px;
}

</style>