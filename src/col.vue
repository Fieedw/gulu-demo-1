<template>
    <div :class="[`col-${span}`]" class="col">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLu-col',
        props: {
            span: {
            type:[Number,String]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col{
        background-color: grey;
        height: 56px;
        width: 50%;
        border: 1px solid red;

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