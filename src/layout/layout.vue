<template>
    <div :class="layoutClass" class="layout">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLuLayout',
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            // console.log(this.$children);
            this.$children.forEach((vm) => {
                // console.log(vm.$options.name)
                if (vm.$options.name === 'GuLuSider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        /*border: 1px solid red;*/
        &.hasSider {
            flex-direction: row;
        }
    }
</style>