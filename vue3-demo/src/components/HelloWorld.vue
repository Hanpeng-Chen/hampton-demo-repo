<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>count: {{ count }}</p>
  </div>
</template>

<script>
import { ref, isRef } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)
    console.log('count is ref：', isRef(count))
    console.log('count: ', count)
    console.log('count.value：', count.value)
    return {
      count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
