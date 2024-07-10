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
            <div class="result" v-if="results.length">
              <div :class="{'result-item': true, 'wrong': !result.is_correct, 'correct': result.is_correct}" v-for="(result, index) in results" :key="index">
                {{ index + 1 }}
              </div>
            </div>
            <div v-else>
              <p class="text-center pt-2">Chưa làm câu hỏi nào</p>
            </div>
          </v-col>

          <v-col cols="8" class="question">
            <p>Câu hỏi: {{question.question_content}}</p>
            <v-radio-group v-model="answerSelected">
              <v-radio v-for="(answer, index) in question.answers" :key="index" :value="answer.id">
                <template v-slot:label>
                  <div>
                    <span class="mr-2">{{answer.answer_content}}</span>
                    <div class="image">
                      <img class="opacity-100" v-if="answer.image" :src="answer.image">
                    </div>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
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
          <v-btn class="btn-back">Câu trước</v-btn>
          <v-btn color="primary" class="btn-submit" @click="submit">Nộp bài</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </Layout>

</template>

<script>
import Layout from "@/views/LayoutView.vue";

export default {
  components: {Layout},
  data() {
    return {
      question: {
        question_content: '',
        answers: []
      },
      results: [],
      course_name: null,
      course_id: null,
      chapter_name: null,
      lesson_name: null,
      answerSelected: null,
    };
  },
  computed: {
    // completedQuestionsCount() {
    //   return this.questions.filter(question => question.completed).length;
    // }
    items() {
      return [
        {
          title: this.course_name,
          disable: false,
          href: '/lesson_home',
        },
        {
          title: this.chapter_name,
          disabled: false,
          href: '/lesson',
        },
        {
          title: this.lesson_name,
          disabled: true,
          href: '/lesson',
        },
      ]
    }
  },
  created() {
    this.getQuestion()
  },
  methods: {
    async getQuestion() {
      const response = await axios.get(`home/get-question/${this.$route.params.lessonId}`)
      this.question = response.data.question || {}
      this.course_name = response.data.course_name
      this.course_id = response.data.course_id
      this.chapter_name = response.data.chapter_name
      this.lesson_name = response.data.lesson_name
      this.results = response.data.results || []
    },
    async submit() {
      await axios.post(`home/submit-lesson/${this.$route.params.lessonId}`, {
        question_id: this.question.id,
        answer_id: this.answerSelected
      })
      await this.getQuestion()
    }
    // submitAnswers() {
    //   // Logic để xử lý nộp bài
    //   console.log('Nộp bài');
    // },
    // goBack() {
    //   // Logic để xử lý quay lại trang trước
    //   this.$router.go(-1);
    // },
  },


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
  margin-left: 20px;
}

.image {
  max-width: 100px;
  max-height: 100px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
