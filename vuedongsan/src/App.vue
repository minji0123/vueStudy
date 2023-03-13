<template>

  <!-- 모달창 -->
  <DetailModal :원룸들="원룸들"
                :누른거="누른거"
                :모달창열렸니="모달창열렸니"
                 @closeModal="모달창열렸니 = false;"
                 />

  <!-- 메인 -->
  <div class="menu">
    <!-- key: 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 -->
    <a v-for="(a,i) in 메뉴들" :key="i" >{{ a }}</a>
  </div>

  <!-- alert -->
  <DiscountBanner/>

  <!-- 본문 -->
  <!-- <MainProducts :원룸들="원룸들"/> -->
  <MainProducts :원룸="원룸들[i]"
               v-for="(a,i) in 원룸들" :key="i"
               @openModal="
                          모달창열렸니 = true;
                          누른거 = $event;
                          "
              />
<!-- 누른거 = i; -->
  <!-- <div v-for="(a,i) in 원룸들" :key="i">
    <img :src=" a.image" 
        class="room-img" 
        @click="모달창열렸니 = true;
                누른거 = i;
                "
        >
    <h4>{{ a.title }}</h4>
    <p>{{ a.price  }} 만원</p>

  </div> -->
    <!-- <button @click="increase(0)">허위 매몰 신고</button>
    <span>신고수 : {{신고수[0]}} </span> -->

</template>

<script>
import data from './assets/oneroom.js';
import DiscountBanner from './DiscountBanner.vue';
import DetailModal from './DetailModal.vue';
import MainProducts from './MainProducts.vue';


export default {
  name: 'App',
  data(){

    return{
      // 데이터 보관함
      스타일: 'color : #2c3e50',
      신고수: [0,0,0],
      메뉴들: ['Home', 'Shop', 'About'],
      원룸들 : data,
      모달창열렸니: false,
      누른거:0,
    }

  },
  methods : {
    // 함수 저장함
    increase(i){
      this.신고수[i]++;
    },
  },
  components: {
    DiscountBanner,
    DetailModal,
    MainProducts,
  }
}
</script>

<style>
button{
  cursor: pointer;
}
/* 모달창 */
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
/* 이미지 */
.room-img{
  /* max-width: 100%; */
  width:100%;
  margin-top: 40px;
  border-radius: 5px;
  cursor: pointer;
}
/* alert */
.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}

</style>
