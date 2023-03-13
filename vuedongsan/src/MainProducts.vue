<template>
<div>
    <img :src=" 원룸.image" 
        class="room-img" 
                @click="클릭"
        >
    <h4>{{ 원룸.title }}</h4>
    <p>{{ 원룸.price  }} 만원</p>
    <!-- <button @click="increase(0)">허위 매몰 신고</button>
    <span>신고수 : {{신고수[0]}} </span> -->
</div>
</template>

<script>

export default {
    name:'MainProducts',
    props:{
        원룸 : Object,
    },
    methods:{
        클릭(){
            this.$emit('openModal', this.원룸.id)
        }
    }
}
</script>

<style>

</style>