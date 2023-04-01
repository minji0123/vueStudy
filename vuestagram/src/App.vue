<template>

<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  <!-- <div style="margin-top : 500px"></div> -->

    <!-- tab 만들기 -->
  <div v-if="step === 0">내용0</div>
  <div v-if="step === 1">내용1</div>
  <div v-if="step === 2">내용2</div>
  <button @click="connectStepData(0)">버튼0</button>
  <button @click="connectStepData(1)">버튼1</button>
  <button @click="connectStepData(2)">버튼2</button>

  <ContainerTemp :postData="postData"
                  :step="step"/>
  <!-- ajax 요청 -->
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import ContainerTemp from './components/ContainerTemp.vue';
import postData from './assets/postData.js';
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return{
      postData : postData,
      클릭데이터: 0,
      step : 0,
    }
  },
  components: {
    ContainerTemp,
  },
  methods:{
    more(){
      if(this.클릭데이터 < 1){
      axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((결과)=>{
          // 요청성공시 실행할 코드
          console.log(결과.data);
          this.postData.push(결과.data)
        });
      }else{
      axios.get('https://codingapple1.github.io/vue/more1.json')
        .then((결과)=>{
          // 요청성공시 실행할 코드
          console.log(결과.data);
          this.postData.push(결과.data)
        });
      }
      this.클릭데이터++;
    },
    connectStepData(x){
      this.step = x;
    },
  },
}
</script>

<style>
/* @import 'style.css'; */
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
