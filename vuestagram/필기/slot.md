props 쓰기 귀찮으면 slot 써보쟈


slot 으로 부모 -> 자식 데이터 전송 가능!

자식컴포넌트
1. slot 태그 넣기

부모컴포넌트
2. 자식컴포넌트 태그 사이에 데이터 넣기



slot 여러개 사용하는 법

자식컴포넌트
<slot name="b"></slot>

부모컴포넌트
<template v-slot:b>오잉오잉</template>



<template v-slot:b><span>오잉오잉</span></template>
이렇게 쓰면 html 태그까지 같이 넘어감


slot props
부모가 자식데이터 필요한 경우에 사용

자식컴포넌트
    <slot :msg="msg"></slot>
<script>
export default {
    name: 'FilterBox',
    data(){
        return{
            msg : 'hello',
        }
    },
    props:{
        이미지url : String,
        필터 : String,
    },
}
</script>


부모컴포넌트
<template v-slot:default="작명"><span>{{작명.msg}}</span></template>
작명은 object 임
