## 기본 세팅

1. 설치
```bash
npm install vue-router@4
yarn add vue-router@4
```

2. main.js 에 라우터 세팅

```js
import router from './router'

// 원래 여기서 라우터를 설정을 하는데 
// 코드가 기니까 router 파일을 따로 만들어서 import 한다.
createApp(App).use(router).mount('#app') 
```

3. router.js 만들기

```js
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/list",
    component: DetailList.vue,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
```

4. 사용하고 싶은 vue 컴포넌트에다 사용

```html
<!-- 보여줄 곳을 router-view 로 표시 -->
<router-view ></router-view>

<!-- 다른 페이지 이동링크 만들 때 사용 -->
<router-link to="/">홈</router-link>
<p></p>
<router-link to="/list">리스트페이지</router-link>
```

https://router.vuejs.org/guide/
vue-router 4 참고...


## url parameter


1. router.js

```js

const routes = [

  // url parameter "/detail/:id/:id2/:id3",
  // 정규식사용도 가능 "/detail/:id(\\d+)", -> 숫자만 입력 가능

  {
    // path: "/detail/:id(\\d+)",
    path: "/detail/:id",
    component: DetailContent,
    // nested routes
    children:[
      {
        path: "author",
        component:AuthorPage
      },
      {
        path: "comment",
        component:CommentPage
      },
    ]
  },

];

```

## nested routes

1. router.js

```js

const routes = [
  {
    path: "/detail/:id",
    component: DetailContent,
    children:[
      {
        path: "author",
        component:AuthorPage
      },
      {
        path: "comment",
        component:CommentPage
      },
    ]
  },

];

```
