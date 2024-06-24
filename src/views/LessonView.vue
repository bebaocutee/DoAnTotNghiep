<template>
  <Layout>
    <v-container class="lesson_wrapper">
      <v-row>
        <div class="name_lesson">
          <h2 class="h2_name_lesson"> TOÁN LỚP 1</h2>
        </div>
      </v-row>
      <v-row>
        <v-col cols="3">
          <div class="menu-lesson">
<!--            <p>Nội dung khóa học</p>-->
<!--            <p>Làm bài kiểm tra</p>-->
<!--            <p>Lịch sử làm bài</p>-->
            <v-table>
              <tbody>
              <tr v-for="item in content" :key="item.content">
                <td>{{item.content}}</td>

              </tr>
              </tbody>
            </v-table>
          </div>
        </v-col>
        <v-col cols="7">
          <v-row>
            <div class="chapter_1">
<!--              <p class="p_content_lesson">Noi dung khoa hoc</p>-->
<!--              <div class="chapter_content">-->
<!--                <h3 class="h3_chapter_title">CHUONG 1</h3>-->
<!--                <p>Noi dung khoa hoc</p>-->
<!--                <p>Lam bai kiem tra</p>-->
<!--                <p>Lich su lam bai</p>-->
<!--              </div>-->
              <v-table>
                <thead>
                <tr>
                  <th class="title_lesson">Nội dung khóa học</th>
                  <th class="status_lesson">Trạng thái</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in title" :key="item.title">
                  <td>{{item.title}}</td>
                  <td>{{item.status}}</td>

                </tr>
                </tbody>
              </v-table>

            </div>
          </v-row>
        </v-col>
      </v-row>

    </v-container>

  </Layout>

</template>
<script>
import Layout from "@/views/LayoutView.vue";

export default {
  name: 'lesson',
  components: {Layout},
  data () {
    return {
      title: [
        {
          title: 'Chương 1: Làm quen với một số hình',
          status: 'Chưa hoàn thành',
        },
        {
          title: 'Bài 1. Vị trí',
          status: 'Chưa hoàn thành',
        },
        {
          title: 'Bài 2. Khối hộp chữ nhập- Khối lập phương',
          status: 'Chưa hoàn thành',
        },
        {
          title: 'Bài 2: Hình tròn- Hình tam giác- Hình vuông- Hình chữ nhật',
          status: 'Chưa hoàn thành',
        },
      ],

      content: [
        {
          content: 'Nội dung khóa học',
        },
        {
          content: 'Làm bài kiểm tra',
        },
        {
          content: 'Lịch sử làm bài',
        },
      ]
    }
  }
}

</script>

<style scoped>

.lesson_wrapper {
  width: 100%;
}
.name_lesson {
  display: flex;
  justify-content: center;
  width: 100%;
}

/*menu-lesson*/
.menu-lesson {
  border: 1px solid #eee;
}
/*chapter_1*/
.chapter_1 {
  width: 100%;
}
.chapter_content {
  border: 1px solid #eee;
}
</style>