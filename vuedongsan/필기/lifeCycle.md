# lifecycle

## 단계

create 단계  
⬇⬇  
mount 단계  
⬇⬇  
컴포넌트 생성  
⬇⬇  
update 단계  
⬇⬇  
unmount 단계  

--- 

create 단계  
    데이터만 존재하는 단계  

mount 단계  
    template 안에 있는 애들을 html 로 바꿔줌  

컴포넌트 생성  
    index.html 에 장착함  

--- 

data 가 변하면   
html 은 실시간 재랜더링  
 => 컴포넌트가 실시간 재랜더링됨  

--- 

beforeCreate()
created()
beforeMount()
mounted()
beforeUpdate()
updated()
beforeUnmount()
unmounted()


---


서버에서 데이터 받아올 때: created(), mounted() 를 많이 씀

