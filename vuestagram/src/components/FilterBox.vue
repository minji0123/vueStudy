<template>
  <!-- <span>{{필터}}</span> -->
  <div class="filter-item" 
        :class="필터"
        :style="`background-image:url(${이미지url})`"
  >
    <slot></slot>
  </div>

</template>

<script>
export default {
    name: 'FilterBox',
    data(){
        return{
            msg : 'hello',
        }
    },
    props:{
        이미지url : String,
        필터 : String,
    },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>