<template>
  <Layout>
    <v-container>
      <p class="test-name">{{ test.lesson_name }}</p>

      <v-row>
        <v-col cols="3" class="d-flex">
          <div :class="{'node': true, 'selected': selectedAnswer(index)}" v-for="(question, index) in test.questions">
            {{ index + 1 }}
          </div>
        </v-col>
        <v-col cols="9" class="questions">
          <v-row v-for="(question, index) in test.questions" :key="index">
            <v-col cols="12">
              <p>{{ `Câu ${index + 1}. ${question.question_content}` }}</p>
              <div class="image" v-if="question.image">
                <img :src="question.image"/>
              </div>
            </v-col>
            <v-radio-group class="question-answers" v-model="selected[index]">
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
          </v-row>
          <v-btn color="primary" @click="submit">Nộp bài</v-btn>
        </v-col>
      </v-row>
    </v-container>

  </Layout>
</template>

<script>
import Layout from "@/views/LayoutView.vue";

export default {
  components: {Layout},
  data: () => {
    return {
      test: {
        questions: []
      },
      selected: [],
    }
  },
  created() {
    this.getTest()
  },
  methods: {
    async submit() {
      try {
        const response = await axios.post('home/submit-test', {
          test_id: this.test.id,
          answers: this.selected
        })
        this.success('Nộp bài thành công. Điểm của bạn là: ' + response.data.score ?? '')
        if (response.data.course_id) {
          this.$router.push(`/lesson/${response.data.course_id}`)
        } else  {
          this.$router.push('/lesson_home')
        }
      } catch (error) {
        console.log(error);
        this.error('Nộp bài thất bại')
      }

    },
    async getTest() {
      try {
        const response = await axios.get(`home/get-test/${this.$route.params.id}`)
        this.test = response.data
      } catch (error) {
        console.log(error);
      }
    },
    selectedAnswer(index) {
      return this.selected[index] != null
    },
  }
}
</script>

<style scoped>
.test-name {
  font-size: 1.75em;
  font-weight: 600;
  margin-bottom: 20px;
}

.node {
  width: 30px;
  height: 30px;
  background-color: #b7b7b7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 4px;
}

.image {
  width: 200px;
  max-height: 200px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.selected {
  background-color: #384fa1;
  color: white;
}
</style>