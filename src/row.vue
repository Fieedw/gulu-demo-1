<template>
    <div :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}" class="row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLu-row',
        props:{
            gutter:{
                type:[Number,String]
            }
        },
        //页面打印空对象，创建于内存
        created() {
  console.log('row created')
        },
        //页面有对象，创建并显示于body
        mounted() {
            console.log('row mounted ')
            this.$children.forEach((vm)=>{
                vm.gutter =this.gutter
            })
        }
    }
    var div = document.createElement('div')
    var childDiv = document.createElement('div')
    div.appendChild(childDiv)
    document.body.appendChild(div)
</script>
<style lang="scss" scoped>
    .row{
        display: flex;
    }
</style>