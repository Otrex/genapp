import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const sb = window.sb
sb.options.obj.count = 10;
sb.options.obj.color = ["red", "yellow", "white"]
sb.options.obj.speedX = 10;
sb.options.obj.speedY = 10;
sb.options.bg = "black"
sb.options.moveType = "move"
sb.start()


createApp(App).use(router).mount('#app')
