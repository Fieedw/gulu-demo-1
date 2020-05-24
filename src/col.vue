<template>
    <div :class="colClass" :style="colStyle" class="col">
        <div style="border:1px solid palevioletred; height:32px;">
        <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'GuLu-col',
        props: {
            span: {
            type:[Number,String]
            },
            offset:{
                type:[Number,String]
            }
        },
        data(){
            return{
                gutter:0
            }
        },
        computed:{
            colClass(){
                let {span,offset} =this
                return [span&&`col-${span}`,offset &&`offset-${offset}`]
            },
            colStyle(){
              return   {
                  paddingRight:this.gutter/2+'px',
                  paddingLeft:this.gutter/2+'px'}
            }

        },
        // created() {
        //     console.log('col created')
        // },
        // mounted() {
        //     console.log('col mounted')
        // }
    }
</script>
<style lang="scss" scoped>
    .col{
        /*background-color: grey;*/
        /*height: 56px;*/
        width: 50%;
        /*border: 1px solid red;*/

        $class: col-;

        // loops through 100 times
        @for $n from 1 through 24{

            // for each $col_#{i}
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%
            }
        }
        $class: offset-;

        // loops through 100 times
        @for $n from 1 through 24{

            // for each $col_#{i}
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%
            }
        }
    }
</style>