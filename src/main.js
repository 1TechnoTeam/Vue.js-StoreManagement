import './assets/main.css'
import App from './App.vue'

import { createApp } from 'vue'
import { createNotivue } from 'notivue'

import 'notivue/notification.css' // Only needed if using built-in notifications
import 'notivue/animations.css' // Only needed if using built-in animations
import 'notivue/notification-progress.css'

const notivue = createNotivue({position: 'top-right' ,   notifications: {
  global: {
    duration: 5000
  }
} })
const app = createApp(App)

app.use(notivue)
app.mount('#app')
