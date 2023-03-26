# component

## 순서

자식
1. 컴포넌트화 시킬 자식 파일 만들기  
    이름은 multiword 로 짓기 (DetailModal.vue)  
2. 자식파일 name key 에 자식파일 이름 value  
    name:'DetailModal',  

부모
3. 부모파일에 import 시켜주기  
    import DetailModal from './DetailModal.vue';  
4. 부모파일 components key 에 자식파일 이름 value  
    
    ```js
    components: {
        DiscountBanner,
        DetailModal,
        MainProducts,
    }
    ```

    원래는 DetailModal : DetailModal인데 DetailModal 만 적어도 된다.(js 문법)   
5. template 태그에서 사용하기   
    <DetailModal />   


