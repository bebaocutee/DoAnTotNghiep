<template>
  <Layout>
    <div class="course-wrapper">
      <h2 class="h2-add-course">THÊM KHÓA HỌC</h2>

    </div>
  </Layout>

</template>

<script>
import AdminView from "@/views/AdminView.vue";
import Layout from "@/views/AdminView.vue";

export default {
  components: {
    Layout,
    AdminView,
  },

}

</script>

<style scoped>
.course-wrapper {
  display: flex;
}

.h2-add-course {
  display: flex;
  justify-content: center;
}
</style>