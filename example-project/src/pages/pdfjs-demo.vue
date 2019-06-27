<!--查看pdf票据-->
<template>
  <div>
    <input type="file" ref="fielinput" @change="uploadFile" />
    <div class="canvas-container">
      <canvas ref="myCanvas" class="pdf-container">
      </canvas>
    </div>
  </div>
</template>

<script>
  import pdfJS from 'pdfjs-dist'
  export default {
    mounted() {
    },
    data() {
      return {
        pdfData: '', // PDF的base64
        scale: 1 // 缩放值
      }
    },
    methods: {
      uploadFile () {
        let inputDom = this.$refs.fielinput
        let file = inputDom.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.pdfData = atob(reader.result.substring(reader.result.indexOf(',') + 1))
          this.previewPDF()
        }
      },
      previewPDF() {
        // 引入pdf.js的字体
        let CMAP_URL = 'https://unpkg.com/pdfjs-dist@2.0.943/cmaps/'
        //读取base64的pdf流文件
        let loadingTask = pdfJS.getDocument({
          data: this.pdfData, // PDF base64编码
          cMapUrl: CMAP_URL,
          cMapPacked: true
        })
        loadingTask.promise.then((pdf) => {
          this.loadFinished = true
          let numPages = pdf.numPages
          let pageNumber = 1
          this.getPage(pdf, pageNumber, numPages)
        })
      },
      getPage(pdf, pageNumber, numPages) {
        let _this = this
        pdf.getPage(pageNumber)
          .then((page) => {
            // 获取DOM中为预览PDF准备好的canvasDOM对象
            let canvas = this.$refs.myCanvas
            let viewport = page.getViewport(_this.scale)
            canvas.height = viewport.height
            canvas.width = viewport.width

            let ctx = canvas.getContext('2d')
            let renderContext = {
              canvasContext: ctx,
              viewport: viewport
            }
            page.render(renderContext).then(() => {
              pageNumber += 1
              if (pageNumber <= numPages) {
                _this.getPage(pdf, pageNumber, numPages)
              }
            })
          })
      }
    }
  }
</script>

<style scoped>
  .pdf-container {
    width: 750px;
  }
  .canvas-container {
    border: 1px dashed black;
    position: relative;
  }
</style>
