<template>
  <p>{{msg}}</p>
</template>

<script lang="ts">
export default {
  name: 'AsyncDemo',
  setup () {
     return new Promise((resolve) => {
       setTimeout(() => {
         resolve({
           msg: 'async import'
         })
       }, 2000)
     })
  }
}
</script>