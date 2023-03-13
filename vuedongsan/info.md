# vue 공부

## [0] 환경설정 & 기본세팅

1. vue 설치 (전역 cmd)

```bash
npm install -g @vue/cli
yarn global add @vue/cli
```

2. vue 프로젝트 설치

```bash
vue create 프로젝트명
```
3. VSC 부가기능 설치

Extension 이동 후 
Vetur, Vue 3 snippets, HTML CSS Support 세개 설치

---

## [1] 기본 틀

```html
<template>
    // html 
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
      신고수: [0,0,0],
      메뉴들: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포동원룸']
    }

  },
  methods : {
    // 함수 작성함
    increase(i){
      this.신고수[i]++;
    }
  },
  components: {
  }
}
</script>

<style>
    /* css */
    body {
    margin : 0;
    }
</style>

```

---

## [2] 데이터 바인딩

```html
  <div>
    <h4>{{ products[0] }}</h4>
    <p>{{ price1 }} 만원</p>
  </div>
  
    <script>
        export default {
        name: 'App',
        data(){
            return{
                price1: 60,
                products: ['역삼동원룸', '천호동원룸', '마포동원룸']
            }
        },
        methods : {
        },
        components: {
        }
        }
  </script>

```

---

## [] style 넣기
<img alt="Vue logo" src="./assets/logo.png">
<h2 :style="스타일">원룸샵</h2>

<script>
    export default {
    name: 'App',
    data(){
        return{
            스타일: 'color : #2c3e50',
        }
    },
    methods : {
    },
    components: {
    }
    }
  </script>

---

## [] for 반복문

```html
  <div class="menu">
    <!-- key: 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀 -->
    <a v-for="(a,i) in 메뉴들" :key="i" >{{ a }}</a>
  </div>

  <script>
    export default {
    name: 'App',
    data(){
        return{
        메뉴들: ['Home', 'Shop', 'About'],
        }
    },
    methods : {
    },
    components: {
    }
    }
  </script>

```

---

## [] 이벤트 핸들러

```html
<button v-on:click="increase">허위 매몰 신고</button>
<button @click="increase(0)">허위 매몰 신고</button>

<script>
    export default {
        name: 'App',
        data(){
            return{
                신고수: [0,0,0],
                신고수들: 0
            }
        },
        methods : {
            increase(i){
               this.신고수[i]++;
            },
            increase(){
               this.신고수들++;
            }
        },
        components: {
        }
    }
</script>

```
    
## [] ifelse 반응형

동적인 ui 만드는 법
1. html css 디자인 해놓기
2. ui 현재 상태를 데이터로 저장
3. 데이터에 따라 ui 가 어떻게 보일지 작성

v-if 문법
조건식이 참일 때만 html 보여줌

```html
<img src="./assets/room0.jpg" 
    class="room-img" 
    @click="모달창열렸니 = true"
>
  <div class="black-bg" v-if="모달창열렸니 === true">
    <div class="white-bg" >
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="모달창열렸니 = false" > 닫기 </button>
    </div>  
  </div>

<script>
    export default {
        name: 'App',
        data(){
            return{
                모달창열렸니: false,
            }
        },
        methods : {
        },
        components: {
        }
    }
</script>

```
v-else-if: 조건식을 연달아서 두개 세개 사용
v-else: v-if,v-else-if 에 적은 조건식이 참이 아닐 경우 실행


```html
<div v-if="1 == 2">
  안녕하세요
</div>
<div v-else-if="1 == 3">
  안녕하세요2
</div>
<div v-else>
  안녕하세요2
</div>
```


---

## [999] 기타 팁

### 1. css 모달창
```html
  <div class="black-bg" >
    <div class="white-bg" >
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
    </div>  
  </div>
```
```css
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
```