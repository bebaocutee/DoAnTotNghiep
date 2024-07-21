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
import { createStore } from 'vuex'

axios.defaults.baseURL = 'http://localhost:8000/api/'

axios.interceptors.request.use(
    config => {
        store.state.loading = true
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        setTimeout(() => {
            store.state.loading = false
        }, 300)
        return response
    },
    error => {
        console.log(error)
        setTimeout(() => {
            store.state.loading = false
        }, 300)
        if (error.response.data?.message && error.response.status !== 401) {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: error.response.data.message,
                confirmButtonColor: '#00c4fd',
            })
        } else if (error.response.status === 401) {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại',
                text: 'Phiên đăng nhập đã hết hạn',
                confirmButtonColor: '#00c4fd',
            })
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            router.push({ name: 'home' })
        }
        return Promise.reject(error)
    }
)

window.axios = axios

// config vuex with state and getters for loading
const store = createStore({
    state: {
        loading: false
    },
    getters: {
        loading: state => state.loading
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        }
    }
})

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
        success(message, url = null) {
             Swal.fire({
                icon: 'success',
                title: 'Thành công',
                text: message,
                confirmButtonColor: '#00c4fd',
            }).then(result => {
                if (url != null) {
                    try {
                        router.push(url)
                    } catch (e) {
                        console.log(e)
                    }
                }
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
app.use(store)

app.mount('#app')
