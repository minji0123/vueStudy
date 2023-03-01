<template>
  
  <div class="menu">
    <!-- key: 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 -->
    <a v-for="(a,i) in 메뉴들" :key="i" >{{ a }}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">
  
  <h2 :style="스타일">원룸샵</h2>

  <!-- <div v-for="(a,i) in products" :key="i">  
    <h4>{{ a }}</h4>
    <p>{{ price1 }} 만원</p>
  </div> -->

  <div>  
    <h4>{{ products[0] }}</h4>
    <p>{{ price1 }} 만원</p>
    <button v-on:click="increase">허위 매몰 신고</button>
    <button @click="increase">허위 매몰 신고</button>
    <span>신고수 : {{신고수}} </span>
  </div>

  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ price2 }} 만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>{{ price2 }} 만원</p>
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){

    return{
      // 데이터 보관함
      price1: 60,
      price2: 70,
      스타일: 'color : #2c3e50',
      신고수: 0,
      메뉴들: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포동원룸']
    }

  },
  methods : {
    increase(){
      this.신고수++;
    }
  },
  components: {
  }
}
</script>

<style>
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
