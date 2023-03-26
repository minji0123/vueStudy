<template>
  <div>
    <!-- router 는 페이지 이동관련 기능 
        $router.push('/detail/0') 원하는 페이지로 이동
        $router.go(1)           앞으로 한페이지 이동
        $router.go(-1)           뒤로가기 한번 (-2는 두번)
    -->
    <h5
        @click="$router.push('/detail/0')"
    >{{ 블로그글[0].title }}</h5>
    <p>{{블로그글[0].date}}</p>
  </div>
  <div>
    <h5>{{ 블로그글[1].title }}</h5>
    <p>{{블로그글[1].date}}</p>

  </div>
  <div>
    <h5>{{ 블로그글[2].title }}</h5>
    <p>{{블로그글[2].date}}</p>
  </div>
</template>

<script>

export default {
    name:'DetailList',
    data(){
        return {
        }
  },
  components: {
  },
  props: {
    블로그글:Array,
  }
}
</script>

<style>

</style>