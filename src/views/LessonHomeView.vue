<template>
  <Layout>
    <v-container class="main-wrapper">
      <p class="course">Danh sách khóa học</p>
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
    </v-container>
  </Layout>
</template>

<script>

import LayoutView from "@/views/LayoutView.vue";
import Layout from "@/views/LayoutView.vue";
export default {
  components: {
    Layout,
    LayoutView,
  },
  methods: {
    goToLesson() {
      this.$router.push('/lesson');
    }
  }
}
</script>

<style scoped>
.course {
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 25px;
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
</style>