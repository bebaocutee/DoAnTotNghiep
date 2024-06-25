<template>
  <Layout>
    <v-container class="lesson_wrapper">
      <v-row>
        <v-col cols="3">
          <div class="menu-lesson">
            <v-table class="table-lesson">
              <tbody>
              <tr v-for="item in content" :key="item.content">
                <td class="item-lesson">{{item.content}}</td>
              </tr>
              </tbody>
            </v-table>
          </div>
        </v-col>

        <v-col cols="8">
          <v-row>
            <div class="chapter_1">
              <div class="name_status">
                <p class="p_content_lesson">Danh sách bài kiểm tra</p>
              </div>

              <v-table class="table-lesson">
                <thead>
                <tr>
                  <th class="chapter_lesson" style="width: 75%">Chương 1: Làm quen với một số hình</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in title" :key="item.title">
                  <td class="item-lesson">{{item.title}}</td>
                </tr>
                </tbody>
              </v-table>

              <v-table class="table-lesson">
                <thead>
                <tr>
                  <th class="chapter_lesson" style="width: 75%">Chương 2: Các số đến 10</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in title" :key="item.title">
                  <td class="item-lesson">{{item.title}}</td>
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
          title: 'Phiếu bài tập cuối tuần 1',
        },
        {
          title: 'Bài tập cuối tuần 2',
        },
      ],

      content: [
        {
          content: 'Toán lớp 1 ',
        },
        {
          content: 'Toán lớp 2',
        },
        {
          content: 'Toán lớp 3',
        },
        {
          content: 'Toán lớp 4',
        },
        {
          content: 'Toán lớp 5',
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

/*menu-lesson*/
.menu-lesson {
  border: 1px solid #eee;
  margin-top: 30px;
  margin-right: 20px;
  border-radius: 8px;
}

/*chapter_1*/
.chapter_1 {
  width: 100%;
}

.chapter_lesson {
  padding-left: 10px;
  font-size: 1.8em;
  background-color: #eeeeee;
  color: #384fa1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.name_status {
  display: flex;
  width: 100%;
  margin-top: 30px;
}

.p_content_lesson {
  font-size: 1.75em;
  font-weight: 600;
  margin-bottom: 20px;
}

.table-lesson {
  width: 100%;
  margin-bottom: 30px;
  border-radius: 8px;
}

.table-lesson th,
.table-lesson td {
  border: 1px solid #eeeeee;
}

.item-lesson {
  cursor: pointer;
}

.item-lesson:hover {
  text-decoration: underline;
  background-color: #eceff8;
}

</style>