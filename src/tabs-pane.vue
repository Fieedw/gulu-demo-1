<template>
    <div :class="classes" class="tabs-pane" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLuTabsPane',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            name: {
                type: [String, Number],
                require: true,
            }
        },
        computed:{
            classes(){
                return{active: this.active}
            }
        },
        created: function () {
            // console.log(`爷爷给pane的  eventBus`);
            // console.log(this.eventBus);
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },

    }
</script>
<style lang="scss" scoped>
.tabs-pane{
    &.active{
        background: red;
    }
}
</style>