<template>
    <div class="layout">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLu-layout',
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach(() => {
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