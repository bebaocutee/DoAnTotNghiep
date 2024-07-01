<template>
  <Layout>
    <v-container class="main-wrapper">
      <p class="course">KHÓA HỌC NỔI BẬT</p>
      <v-row class="course-content">
        <v-col cols="3" class="math-1">
          <div class="math-1_item" @click="goToLesson">
            <img src="@/assets/images/khoahoc.png"  alt="image-math-1" class="image-math-1">
            <a class="a-math-1">Toán lớp 1</a>
            <p class="p-math-1">Cùng học, cùng đam mê Toán học, đồng thời phát triển tư duy và năng lực toán học</p>
          </div>
        </v-col>
        <v-col cols="3" class="math-2">
          <div class="math-1_item" @click="Lesson">
            <img src="@/assets/images/khoahoc.png"  alt="image-math-1" class="image-math-1">
            <a class="a-math-1">Toán lớp 2</a>
            <p class="p-math-1">Cùng học, cùng đam mê Toán học, đồng thời phát triển tư duy và năng lực toán học</p>
          </div>
        </v-col>
        <v-col cols="3" class="math-3">
          <div class="math-1_item" @click="lesson">
            <img src="@/assets/images/khoahoc.png"  alt="image-math-1" class="image-math-1">
            <a class="a-math-1">Toán lớp 3</a>
            <p class="p-math-1">Cùng học, cùng đam mê Toán học, đồng thời phát triển tư duy và năng lực toán học</p>
          </div>
        </v-col>
        <v-col cols="3" class="math-3">
          <div class="math-1_item" @click="lesson">
            <img src="@/assets/images/khoahoc.png"  alt="image-math-1" class="image-math-1">
            <a class="a-math-1">Toán lớp 4</a>
            <p class="p-math-1">Cùng học, cùng đam mê Toán học, đồng thời phát triển tư duy và năng lực toán học</p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3" class="math-3">
          <div class="math-1_item" @click="lesson">
            <img src="@/assets/images/khoahoc.png"  alt="image-math-1" class="image-math-1">
            <a class="a-math-1">Toán lớp 5</a>
            <p class="p-math-1">Cùng học, cùng đam mê Toán học, đồng thời phát triển tư duy và năng lực toán học</p>
          </div>
        </v-col>

        <v-col cols="3" class="math-3">
          <div class="math-1_item" @click="lesson">
            <img src="@/assets/images/khoahoc.png"  alt="image-math-1" class="image-math-1">
            <a class="a-math-1">Ôn tập hè Lớp 1</a>
            <p class="p-math-1">Cùng học, cùng đam mê Toán học, đồng thời phát triển tư duy và năng lực toán học</p>
          </div>
        </v-col>

        <v-col cols="3" class="math-3">
          <div class="math-1_item" @click="lesson">
            <img src="@/assets/images/khoahoc.png"  alt="image-math-1" class="image-math-1">
            <a class="a-math-1">Ôn tập hè lớp 2</a>
            <p class="p-math-1">Cùng học, cùng đam mê Toán học, đồng thời phát triển tư duy và năng lực toán học</p>
          </div>
        </v-col>

        <v-col cols="3" class="math-3">
          <div class="math-1_item" @click="lesson">
            <img src="@/assets/images/khoahoc.png"  alt="image-math-1" class="image-math-1">
            <a class="a-math-1">Ôn tập hè Lớp 3</a>
            <p class="p-math-1">Cùng học, cùng đam mê Toán học, đồng thời phát triển tư duy và năng lực toán học</p>
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
                      <img src="@/assets/images/teacher.png" width="160px" height="160px" alt="image-teacher-math-1" class="image-teacher-math-1">
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
                      <img src="@/assets/images/teacher2.png" width="160px" height="160px" alt="image-teacher-math-1" class="image-teacher-math-1">
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
                      <img src="@/assets/images/teacher3.png" width="160px" height="160px" alt="image-teacher-math-1" class="image-teacher-math-1">
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

/*course*/

.course {
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 35px;
}

.course::after {
  content: '';
  display: block;
  width: 100px;
  height: 5px;
  background-color: red;
  position: absolute;
  bottom: 17px;
}

.course-content {
  margin-bottom: 20px;
}

/*math-1*/
.math-1_item {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.math-1_item:hover {
  transform: translateY(-10px);
}

.image-math-1 {
  width: 100%;
  border-radius: 10px;
}

.a-math-1 {
  padding: 0 15px 10px 15px;
  font-size: 25px;
  font-weight: bold;
}

.p-math-1 {
  margin-bottom: 20px;
  padding: 0 15px;
  line-height: 35px;

}

/*teacher*/
.teachers-math_1 {
  display: flex;
  flex-direction: column;
  width: 270px;
  background-image: url("src/assets/images/bg-teacher.png");
  background-size: 360px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  cursor: pointer;
}

.teacher-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.teacher-inf {
  padding-top: 7px;
  padding-left: 7px;
  padding-bottom: 9px;
  width: 260px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  line-height: 45px;
}

</style>