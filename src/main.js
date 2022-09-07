import { createApp } from 'vue'
import App from './App.vue'
import em from 'emyuyan'

console.log('你好,我是表情语言包')
console.log(em.chouxiang('你好,我是表情语言包'))
//app原型
const app = createApp(App)
app.config.globalProperties.$em = em
window.bianyi = em.chouxiang
window.jieshi = em.dechouxiang
app.mount('#app')
