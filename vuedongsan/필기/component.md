# component

## 컴포넌트화 시키면 좋은 거

- 다른 곳에서 쓸거 같을 때  
- 라우터로 나눌 페이지  
- html 이 너무 길어서 복잡할 때  

## 순서

자식
1. 컴포넌트화 시킬 자식 파일 만들기  
    이름은 multiword 로 짓기 (DetailModal.vue)  
2. 자식컴포넌트 name key : 자식컴포넌트 이름 value  
    name:'DetailModal',  

부모
3. 부모컴포넌트에 import 시켜주기  
    import DetailModal from './DetailModal.vue';  
4. 부모컴포넌트 components key : 자식컴포넌트 이름 value  
    
```js
components: {
    DetailModal,
}
```

    원래는 DetailModal : DetailModal인데 두 데이터가 같으면 하나만 적어도 된다.(js 문법)   

5. template 태그에서 사용하기   
    <DetailModal />   


