import { createWebHistory, createRouter } from "vue-router";
import DetailList from './components/DetailList'
import DetailContent from './components/DetailContent'
import MainHome from './components/MainHome'
import AuthorPage from './components/AuthorPage'
import CommentPage from './components/CommentPage'


const routes = [
  {
    path: "/",
    component: MainHome,
  },
  {
    path: "/list",
    component: DetailList,
  },
  /**
   * named views
  여러개 컴포넌트를 보여줄 때
  /list 방문 시 여러 컴포넌트들을 한번에 보여줄 수 있음
   */
  // {
  //   path: "/list",
  //   component: {
  //     DetailList:DetailList,
  //     CommentPage:CommentPage,
  //   },
  // },
  // url parameter "/detail/:id/:id2/:id3",
  // 정규식사용도 가능 "/detail/:id(\\d+)", -> 숫자만 입력 가능
  // vue-router 4 참고...
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
  
  // 이상한 문자 입력하면 페이지 찾을 수 없습니다. 오류
  {
    path: "/:sss(.*)",
    component: MainHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 