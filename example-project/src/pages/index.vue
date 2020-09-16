<template>
  <div>
    <button @click="go2PdfDemoPage">PDF在线预览</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  methods: {
    go2PdfDemoPage () {
      this.$router.push('/pdfjs-demo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
