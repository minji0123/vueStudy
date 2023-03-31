<template>

  <div>

    <PostTemp :postData="postData[i]"
              v-for="(a,i) in postData" :key="i"
              />

  </div>

</template>

<script>
import PostTemp from './PostTemp.vue'

export default {
  name: 'ContainerTemp',
  props:{
    postData : Array,
  },
  components: {
    PostTemp,
  }
}
</script>

<style>
</style>