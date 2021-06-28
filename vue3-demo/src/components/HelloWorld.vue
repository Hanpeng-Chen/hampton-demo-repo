<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ title }}</h1>
    <p>count: {{ count }}</p>
    <p>number: {{number}}</p>
  </div>
</template>

<script>
import { ref, isRef, toRefs, reactive, watch } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: String
  },
  setup() {
    const count = ref(0)
    console.log('count is ref：', isRef(count))
    console.log('count: ', count)
    console.log('count.value：', count.value)

    const state = reactive({
      number: 0,
      date: '20210628'
    })
    const state2 = toRefs(state)
    setInterval(() => {
      state.number++ 
    }, 1000)

    const name = ref('前端极客技术')
    const otherName = reactive({
      firstName: '前端',
      lastName: '技术'
    })
    watch(name, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    watch(
      () => {
        return otherName.firstName + otherName.lastName
      },
      value => {
        console.log(value)
      }
    )

    setTimeout(() => {
      name.value = '前端极客'
      otherName.firstName = '前端极客'
    }, 3000)
    return {
      count,
      ...state2
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
