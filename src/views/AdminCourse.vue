<template>

  <!--    Dialog Add Lesson-->
  <div class="lesson-container">
    <v-dialog v-model="dialog" max-width="1000">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
            class="btn-add-lesson"
            prepend-icon="mdi-plus"
            text="Thêm khóa học"
            
            v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card prepend-icon="mdi-school" title="THÊM KHÓA HỌC">
        <v-card-item>
          <v-col cols="12">
            <v-text-field variant="outlined" required >
              <template v-slot:label>
                <span class="required">Tên khóa học</span>
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
                variant="outlined"
                label="Mô tả"
                no-resize
                rows="3"
                max-rows="3"
            ></v-textarea>
          </v-col>

          <!--            <small class="text-caption text-medium-emphasis">*Thông tin không được để trống</small>-->
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Thoát" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" text="Hoàn thành" variant="tonal" @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <!-- content-lesson-->
  <v-row>
    <div class="content-lesson">
      <v-data-table :headers="headers" :items="desserts">
        <template v-slot:item.actions="{ item }">
          <v-icon
              class="me-2"
              size="small"
              @click="readItem(item)"
          >
            mdi-eye
          </v-icon>

          <v-icon
              class="me-2"
              size="small"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>

          <v-icon
              size="small"
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </v-row>

</template>

<script>

export default {
  data: () => ({
    dialog: false,
      headers: [
        { title: 'STT', key: 'index' },
        { title: 'Tên khóa học', key: 'course' },
        { title: 'Số người dùng tham gia', key: 'numberUser' },
        { title: 'Hành động', key: 'actions' },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        course: '',
        numberUser: 0,
        actions: 0,
      },
      defaultItem: {
        course: '',
        numberUser: 0,
        actions: 0,
      },
    }),

    computed: {
    desserts() {
      return this.desserts.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
    },
  },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            course: 'Lớp 1',
            numberUser: 2,
            actions: 0,
          },
          {
            course: 'Lớp 2',
            numberUser: 0,
            actions: 0,
          },
          {
            course: 'Lớp 3',
            numberUser: 0,
            actions: 0,
          },
          {
            course: 'Lớp 4',
            numberUser: 0,
            actions: 0,
          },
          {
            course: 'Lớp 5',
            numberUser: 0,
            actions: 0,
          },
        ]
      },

      // addCourse() {
      //   this.$router.push('/course')
      // },

      readItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        // this.dialog = true
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        // this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        // this.dialogDelete = true
      },

    },

}

</script>

<style scoped>
/*lesson*/
.lesson-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.btn-add-lesson {
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 30px;
  background-color: #ffd071;
}
/*content-lesson*/

.content-lesson {
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #eeeeee;
  border-radius: 7px;
}
</style>