<template>
  <!-- class 명을 조건부로 넣으려면 
    { 클래스명 : 조건 } -->
  <!-- <div class="start" :class="{ end : 모달창열렸니 }"> -->
  <Transition name="fade">
    <!-- 모달창 -->
    <DetailModal :원룸들="원룸들"
                  :누른거="누른거"
                  :모달창열렸니="모달창열렸니"
                  @closeModal="모달창열렸니 = false;"
                  />
  </Transition>
  
  <!-- 메인 -->
  <div class="menu">
    <!-- key: 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 -->
    <a v-for="(a,i) in 메뉴들" :key="i" >{{ a }}</a>
  </div>

  <!-- alert -->
  <DiscountBanner v-if="showDiscount === true"/>

  <button @click="priceSortA"> 저렴한거부터 </button>
  <br>
  <button @click="priceSortD"> 비싼거부터 </button>
  <br>
  <input><button> 원보다 싼거만 </button>
  <br>
  <input><button> 원보다 비싼거만 </button>
  <br>
  <button @click="priceSortL"> 가나다순 </button>
  <br>
  <button @click="sortBack"> 되돌리기 </button>
  <!--
    심심할 때 해볼거
  상품명 가나다순 정렬은 어떻게 할까요? 
  50만원 이하의 상품만 보여주는 필터기능은요? 
  -->
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
      showDiscount : true,
      스타일: 'color : #2c3e50',
      신고수: [0,0,0],
      메뉴들: ['Home', 'Shop', 'About'],
      원룸들 : data,
      원룸들오리지널 : [...data],
      모달창열렸니: false,
      누른거:0,
    }

  },
  methods : {
    // 함수 저장함
    increase(i){
      this.신고수[i]++;
    },
    priceSortA(){
    // 문자정렬
      // this.원룸들.sort();
    // 숫자정렬
      this.원룸들.sort((a,b)=>{
        // a - b 가 음수면 a 를 왼쪽으로 아니면 오른쪽으로
        return a.price - b.price;
      });
      /*
        sort 함수 특: 원본이 변형됨
        원본을 보호해줘야됨...
       */
    },
    priceSortD(){
      this.원룸들.sort((a,b)=>{
        return b.price - a.price;
      });
    },
    // priceSortL(){
    //   this.원룸들.sort();
    // },
    sortBack(){
      /*
        sort 함수 특: 원본이 변형됨
        원본을 보호해줘야됨...
       */
      return this.원룸들 = [...this.원룸들오리지널];
    },
  },

  // lifecycle
  mounted(){
    // setTimeout(()=>{
    //   this.showDiscount = false;
    // },2000);

    /* 숙제1
    메인페이지 로드 후부터 1초마다 1% 감소하게
    setInterval

    숙제2
    모달창의 input 안에 2를 기입했을 때 알림창 띄우려면?
    근데 watcher 말고 lifecycle 로 ㄱㄱ
    */
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
p{
  max-width: 100%;
}
/* css 애니메이션 
  1. 시작전 class 명
  2. 애니메이션 끝난 후 class 명
  3. 원할 때 2번 class 명 부착
*/
.start{
  opacity: 0;
  transition: all 1s;
}
.end{
  opacity: 1;
}
/* Transition */
/* 열 때 */
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity: 1;
}
/* 닫을 때 */
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to{
  opacity: 0;
}
</style>
