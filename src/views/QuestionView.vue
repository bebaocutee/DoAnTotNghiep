<template>
  <Layout>
    <v-container>

      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>

      <div class="content">
        <v-row>
          <!-- Cột hiển thị số câu hỏi và trạng thái đã làm -->
          <v-col cols="3" class="number-check">
            <v-list>
              <v-list-item
                  v-for="(question, index) in questions"
                  :key="index"
                  :class="{ 'completed': question.completed }"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ index + 1 }}
                    <v-icon v-if="question.completed" color="green">mdi-check-circle</v-icon>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="8" class="question">
            <div v-for="(question, index) in questions" :key="index" class="question-block">
              <h3>{{ question.name }}</h3>
              <p>{{ question.content }}</p>
            </div>
          </v-col>

        </v-row>
      </div>



<!--      <v-row>-->
<!--        <v-col cols="12">-->
<!--          <p>Hoàn thành: {{ completedQuestionsCount }} / {{ questions.length }}</p>-->
<!--        </v-col>-->
<!--      </v-row>-->

      <!-- Button Nộp bài và Quay lại -->
      <v-row>
        <v-col class="btn-question">
          <v-btn color="primary" class="btn-submit">Nộp bài</v-btn>
          <v-btn class="btn-back">Quay lại</v-btn>
          <!--          <v-btn color="primary" @click="submitAnswers">Nộp bài</v-btn>-->
          <!--          <v-btn @click="goBack">Quay lại</v-btn>-->
        </v-col>
      </v-row>
    </v-container>
  </Layout>

</template>

<script>
import Layout from "@/views/LayoutView.vue";

export default {
  components: {Layout},
  props: {
    lessonId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      questions: [
        { name: 'Câu 1', content: 'Tay nào là tay trái, tay nào là tay phải?', completed: false },

      ],
      items: [
        {
          title: 'Toán lớp 1',
          disable: false,
          href: '/lesson_home',
        },
        {
          title: 'Chương 1: Làm quen với một số hình học',
          disabled: false,
          href: '/lesson',
        },
        {
          title: 'Bài 1: Vị trí',
          disabled: true,
          href: '/lesson',
        },
      ],

    };
  },
  // computed: {
  //   completedQuestionsCount() {
  //     return this.questions.filter(question => question.completed).length;
  //   }
  // },
  // methods: {

    // submitAnswers() {
    //   // Logic để xử lý nộp bài
    //   console.log('Nộp bài');
    // },
    // goBack() {
    //   // Logic để xử lý quay lại trang trước
    //   this.$router.go(-1);
    // },
  // },


};
</script>

<style scoped>
.content {
  display: flex;
  width: 100%;
}

.completed {
  font-weight: bold;
  color: green;
}

.question {
  height: 500px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.number-check {
  margin-right: 30px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-question {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 40px;
  margin-right: 55px;
}

.btn-submit {
  margin-right: 20px;
}
</style>
