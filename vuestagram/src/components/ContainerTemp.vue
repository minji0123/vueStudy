<template>
  <!-- app.vue step 이 0 일 때 -->
  <!-- 포스팅 페이지 -->
  <div v-if="step === 0">
    <PostTemp :postData="postData[i]"
            v-for="(a,i) in postData" :key="i"
            />
  </div>
                  <!-- :filterData = "a" -->

  <!-- app.vue step 이 1 일 때 -->
  <!-- 필터선택페이지 -->
  <div v-if="step === 1">
    <div class="upload-image" 
        :style="`background-image:url(${이미지url})`"
    ></div>
    <div class="filters">
      <FilterBox  v-for = "(a,i) in 필터들" :key="i" 
                  :이미지url = "이미지url"
                  :필터 = "a"
                  >
                  {{a}}
                  </FilterBox>
    </div>
  </div>

  <!-- app.vue step 이 2 일 때 -->
  <!-- 글작성페이지 -->
  <div v-if="step === 2">
    <div class="upload-image"></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
    </div>
  </div>

</template>

<script>
import PostTemp from './PostTemp.vue'
import FilterBox from './FilterBox.vue'

export default {
  name: 'ContainerTemp',
  data(){
    return{
      필터들 : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
              "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
              "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
              ],

    }
  },
  props:{
    postData : Array,
    step: Number,
    이미지url : String,
  },
  components: {
    PostTemp,
    FilterBox,
  }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>