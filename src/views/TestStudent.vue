<template>
  <Layout>
    <v-container>
      <p class="test-name">{{ test.lesson_name }}</p>

      <v-row>
        <v-col cols="3" class="block">
          <div class="node" v-for="(question, index) in test.questions">
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
            <v-radio-group column>
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
    }
  },
  created() {
    this.getTest()
  },
  methods: {
    async getTest() {
      try {
        const response = await axios.get(`home/get-test/${this.$route.params.id}`)
        this.test = response.data
      } catch (error) {
        console.log(error);
      }
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
</style>