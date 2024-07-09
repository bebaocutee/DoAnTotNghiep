import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { VDateInput } from 'vuetify/labs/VDateInput'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/main.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { errorMessages } from 'vue/compiler-sfc'

axios.defaults.baseURL = 'http://localhost:8000/api/'

window.axios = axios

const vuetify = createVuetify({
    components: {
        ...components,
        VDateInput
    },
    directives,
})

const mixins = {
    data() {
        return {}
    },
    methods: {
        success(message) {
            Swal.fire({
                icon: 'success',
                title: 'Thành công',
                text: message,
                confirmButtonColor: '#00c4fd',
            })
        },
        error(message) {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: message,
                confirmButtonColor: '#00c4fd',
            })
        }
    }
}

const app = createApp(App)

app.mixin(mixins)
app.use(router)
app.use(vuetify)

app.mount('#app')
