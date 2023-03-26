<template>
    <!-- 모달창 -->
  <div class="black-bg" v-if="모달창열렸니 === true">
    <div class="white-bg" >
      <img :src=" 원룸들[누른거].image" 
        class="room-img" 
        >
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>

      
      <!-- 사용자가 input 에 입력한 것은 전부 문자자료형 -->
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model="month">
      <!-- <input type="range" min="1" max="12" v-model="month"> -->
      <p>{{ Number(month) }}개월 선택함 : {{ Number(원룸들[누른거].price) * Number(month)  }} 원</p>

      <button @click="클릭" > 닫기 </button>
    </div>  
  </div>
</template>

<script>
// props 는 readonly 임. 
// 받아온거 수정, 재할당하면 큰일남
export default {
    name:'DetailModal',
    data(){
      return{
        month : 1,
      }
    },
    watch:{
      // 사용자가 입력한 데이터 감시
      // 함수이름 = 감시할 데이터
      month( a,b ){
        // month 라는 데이터가 변할 때마다 여기있는 코드 실행됨
        // a: 변경 전 데이터, b: 변경 후 데이터        
        if(a >= 13){
          alert("1년치만 입력해죠😥");
          this.month = b;
          return false;
        }
        if(isNaN(a+b)){
          alert("숫자만 입력해죠🤔");
          this.month = 1;
        }
      },
    },
    props:{
        원룸들 : Array,
        누른거: Number,
        모달창열렸니: Boolean,
    },
    methods:{
        클릭(){
            this.$emit('closeModal');
        }
    }
}
</script>

<style>
</style>