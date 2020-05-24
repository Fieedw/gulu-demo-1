<template>
    <div :class="[span&&`col-${span}`,offset &&`offset-${offset}`]" :style="{paddingRight:gutter/2+'px',paddingLeft:gutter/2+'px'}" class="col">
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
        created() {
            console.log('col created')
        },
        mounted() {
            console.log('col mounted')
        }
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
    }
</style>