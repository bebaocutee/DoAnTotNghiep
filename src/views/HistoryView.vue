<template>
  <Layout>
    <v-container>
      <v-data-table-virtual
        :items="history"
        :headers="headers"
        height="600px"
        no-data-text="Chưa làm bài tập nào"
      >
        <template v-slot:item.index="{ item }">
          {{ history.indexOf(item) + 1 }}
        </template>
        <template v-slot:item.lesson_name="{item}">
          <span>{{ item.lesson?.lesson_name ?? '' }}</span>
        </template>

      </v-data-table-virtual>
    </v-container>
  </Layout>
</template>

<script>
import Layout from "@/views/LayoutView.vue";

export default {
  components: {Layout},
  data: () => {
    return {
      headers: [
        { title: 'STT', key: 'index' },
        { title: 'Tên bài học', key: 'lesson_name' },
        { title: 'Điểm hoàn thành', key: 'score' },
        { title: 'Số câu đúng', key: 'total_correct' },
        { title: 'Số câu sai', key: 'total_wrong' },
        { title: 'Tổng số câu', key: 'total_question' },
      ],
      history: []
    }
  },
  created() {
    this.listHistory()
  },
  methods: {
    async listHistory() {
      const response = await axios.get(`home/history/${this.$route.params.id}`)
      this.history = response.data
    }
  }
}
</script>

<style scoped>

</style>