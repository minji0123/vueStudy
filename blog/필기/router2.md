## router 와 route

### router

router 는 페이지 이동관련 기능    
- $router.push('/detail/0') 원하는 페이지로 이동   
- $router.go(1)           앞으로 한페이지 이동   
- $router.go(-1)           뒤로가기 한번 (-2는 두번)   

```html
<div>
  <h5
      @click="$router.push('/detail/0')"
    >제목</h5>
</div>
```


### route

- $route: 현재 URL 정보가 담겨있음   
- $route.params: 현재 URL 정보의 파라미터 (여러개 존재할 수 있음)   
- $route.params.id: 현재 URL 정보의 id 파라미터   
 
```html
<div>
  <h5> {{블로그글[$route.params.id].title}} </h5>
</div>
```




## 주요기능

1. router-view

```html
<!-- 보여줄 곳을 router-view 로 표시 -->
<router-view :블로그글="블로그글"></router-view>

```

2. router-link

```html
<!-- 다른 페이지 이동링크 만들 때 사용 -->
<router-link to="/">홈</router-link>
<router-link to="/list">리스트페이지</router-link>
```

3. 


named views
여러개 컴포넌트를 보여줄 때
/list 방문 시 여러 컴포넌트들을 한번에 보여줄 수 있음

redirect 도 있음 
찾아보면 나옴