<template>
  <suspense>
    <template #default>
      <async-demo />
    </template>
    <template #fallback>
      <div>
        Loading...
      </div>
    </template>
  </suspense>
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
  components: {
    AsyncDemo: defineAsyncComponent(() => import('./AsyncDemo.vue'))
  }
}
</script>