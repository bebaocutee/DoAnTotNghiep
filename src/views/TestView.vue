<template>
  <Layout>
    <v-container class="lesson_wrapper">
      <v-row>
        <v-col cols="3">
          <div class="menu-lesson">
            <v-table class="table-lesson">
              <tbody>
              <tr v-for="(course, index) in courses" :key="index">
                <td class="item-lesson" @click="changeCourse(course.id)">{{course.course_name}}</td>
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

              <v-table v-if="courseSelected.chapters?.length" class="table-lesson" v-for="(chapter, index) in courseSelected.chapters">
                <thead>
                <tr>
                  <th class="chapter_lesson" style="width: 75%">{{ chapter.chapter_name }}</th>
                </tr>
                </thead>
                <tbody v-if="chapter.lessons?.length">
                  <tr v-for="(test, index) in chapter.lessons" :key="index">
                    <td class="item-lesson" @click="$router.push(`/test/${test.id}`)">{{test.lesson_name}}</td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr><td>Chưa có bài kiểm tra nào</td></tr>
                </tbody>
              </v-table>
              <div v-else class="w-100 p-2 text-red">
                Chưa có dữ liệu
              </div>
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
      courses: [],
      courseSelected: {
        chapters: []
      },
      course_id: null
    }
  },
  created() {
    this.listTest()
  },
  methods: {
    async listTest() {
      try {
        const response = await axios.get('home/test', {
          params: {
            course_id: this.course_id
          }
        });
        this.courses = response.data.courses ?? [];
        this.courseSelected = response.data.course ?? {chapter: []};
      } catch (error) {
        console.log(error);
      }
    },
    changeCourse(courseId) {
      this.course_id = courseId;
      this.listTest();
    }
  },
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