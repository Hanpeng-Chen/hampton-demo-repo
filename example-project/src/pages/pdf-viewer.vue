<template>
  <div class="main-container">
    <iframe style="width:100%;height:100%;" id="previewPdfIframe" :src="'/static/pdf/web/viewer.html?file=' + url"></iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 如果出现iframe里面显示“载入 PDF 时发生错误”，控制台显示错误：file origin does not match viewer's
      // 在/static/pdf/web/viewer.js文件中找到下面三行代码，注释掉即可
      // if (origin !== viewerOrigin && protocol !== "blob:") {
      //   throw new Error("file origin does not match viewer's");
      // }
      url: 'http://localhost:8088/1.pdf'
    }
  }
}
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 800px;
}
</style>