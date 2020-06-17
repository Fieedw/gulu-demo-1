<template>
    <transition name="fade">
    <div class="sider" v-if="visible">
        <slot></slot>
        <button @click="visible=false">close</button>
    </div>
    </transition>
</template>
<script>
    export  default {
        name:'GuLuSider',
        data(){
          return{
              visible:true
          }
        },
        methods:{}
    }
</script>
<style lang="scss" scoped>
.sider{
    position:relative;
    > button{
        position: absolute;
        top:10px;
        right:10px;
    }
}
.fade-enter-active, .fade-leave-active{transition: all .5s;}
    .fade-enter , .fade-leave-to{margin-left: -200px;}
</style>