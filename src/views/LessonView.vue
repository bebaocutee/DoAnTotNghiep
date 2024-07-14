<template>
  <Layout>
    <v-container class="lesson_wrapper">
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>

      <v-row>
        <div class="name_lesson">
          <h2 class="h2_name_lesson">{{ course.course_name }}</h2>
        </div>
      </v-row>

      <v-row>
        <v-col cols="3">
          <div class="menu-lesson">
            <v-table class="table-lesson">
              <tbody>
              <tr v-for="item in content" :key="item.content">
                <td class="item-lesson">
                  <router-link :to="getRoute(item.content)">{{ item.content }}</router-link>
                </td>
              </tr>
              </tbody>
            </v-table>
          </div>
        </v-col>

        <v-col cols="8">
          <v-row>
            <div class="chapter_1">
              <div class="name_status">
                <v-col cols="6">
                  <p class="p_content_lesson">Nội dung khóa học</p>
                </v-col>
                <v-col cols="5">
                  <p class="p_stutas_lesson">Trạng thái</p>
                </v-col>
              </div>

              <v-table class="table-lesson" v-for="(chapter, index) in course.chapters">
                <thead>
                <tr>
                  <th class="chapter_lesson" style="width: 75%">{{ chapter.chapter_name }}</th>
                  <th class="chapter_lesson" style="width: 25%"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(lesson, lIndex) in chapter.lessons" :key="lIndex" @click="toQuestionView(lesson.id)">
                  <td class="item-lesson">{{lesson.lesson_name}}</td>
                  <td>{{lesson.status ?? '-'}}</td>
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
      content: [
        {
          content: 'Nội dung khóa học',
        },
        {
          content: 'Làm bài kiểm tra',
        },
      ],
      course: {
        chapters: []
      },
    }
  },
  created() {
    this.listLesson()
  },
  computed: {
    items() {
      return [
        {
          title: 'Trang chủ',
          disable: false,
          href: '/',
        },
        {
          title: this.course.course_name,
          disabled: false,
          href: '/lesson_home',
        },
        {
          title: 'Nội dung khóa học',
          disabled: true,
          href: '/lesson',
        },
      ]
    }
  },
  methods: {
    getRoute(content) {
      switch (content) {
        case 'Nội dung khóa học':
          return `/lesson/${this.$route.params.id}`;
        case 'Làm bài kiểm tra':
          return '/test';
        // case 'Lịch sử làm bài':
        //   return '/history';
        default:
          return `/lesson/${this.$route.params.id}`;
      }
    },

    toQuestionView(id) {
      this.$router.push({name: 'question', params: {lessonId: id}});
    },
    async listLesson() {
      const response = await axios.get(`home/list-lesson/${this.$route.params.id}`)
      this.course = response.data
    },
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
  margin-top: 20px;
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
  font-size: 1.25em;
}

.p_stutas_lesson {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 1.25em;
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