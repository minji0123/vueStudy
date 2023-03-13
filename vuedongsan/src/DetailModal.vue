<template>
    <!-- 모달창 -->
  <div class="black-bg" v-if="모달창열렸니 === true">
    <div class="white-bg" >
      <img :src=" 원룸들[누른거].image" 
        class="room-img" 
        >
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <p>{{ 원룸들[누른거].price  }} 만원</p>
      <!-- <button @click="모달창열렸니 = false" > 닫기 </button> -->
      <button @click="클릭" > 닫기 </button>
    </div>  
  </div>
</template>
// props 는 readonly 임. 
받아온거 수정, 재할당하면 큰일남
<script>
export default {
    name:'DetailModal',
    props:{
        원룸들 : Array,
        누른거: Number,
        모달창열렸니: Boolean,
    },
    methods:{
        클릭(){
            this.$emit('closeModal')
        }
    }
}
</script>

<style>

</style>