<template>
    <div :class="rowClass" :style="rowStyle" class="row">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLu-row',
        props: {
            gutter: {
                type: [Number, String]
            },
            align:{
              type:[Number,String]  ,
                validator(value){
                  return ['right','left','content'].indexOf(value) >=0;
                }
            }
        },
        //页面打印空对象，创建于内存
        created() {
            console.log('row created')
        },
        //页面有对象，创建并显示于body
        mounted() {
            console.log('row mounted ')
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
                // return   {marginLeft:-(this.gutter/2+'px'),marginRight:-(this.gutter/2+'px')}
            },
            rowClass() {
                let {align} = this
                return [align && `align-${align}`]
            }
        }
    }
    // var div = document.createElement('div')
    // var childDiv = document.createElement('div')
    // div.appendChild(childDiv)
    // document.body.appendChild(div)
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;
        &.align-left{
            justify-content: flex-start;
        }
        &.align-right{
            justify-content: flex-end;
        }
        &.align-content{
            justify-content: center;
        }
    }
</style>