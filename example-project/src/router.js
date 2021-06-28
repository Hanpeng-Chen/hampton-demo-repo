import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index.vue'
import PdfjsDemo from './pages/pdfjs-demo.vue'
import PdfViewer from './pages/pdf-viewer.vue'

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
    },
    {
      path: '/pdf-viewer',
      name: 'pdfViewer',
      component: PdfViewer
    }
  ]
})
