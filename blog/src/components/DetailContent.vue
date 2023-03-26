<template>
<!--    $route: 현재 URL 정보가 담겨있음
        $route.params: 현재 URL 정보의 파라미터 (여러개 존재할 수 있음)
        $route.params.id: 현재 URL 정보의 id 파라미터
 -->
    <h4>상세 페이지</h4>
    <h5
        > {{블로그글[$route.params.id].title}} </h5>
    <p> {{블로그글[$route.params.id].content}} </p>
    <router-view></router-view>
</template>

<script>
export default {
    name:'DetailContent',
    data(){
        return{}
    },
    components:{

    },
    props:{
    블로그글:Array,

    }
}
</script>

<style>

</style>