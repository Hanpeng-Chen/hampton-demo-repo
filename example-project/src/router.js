import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index.vue'
import PdfjsDemo from './pages/pdfjs-demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/pdfjs-demo',
      name: 'PdfjsDemo',
      component: PdfjsDemo
    }
  ]
})
