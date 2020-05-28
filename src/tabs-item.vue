<template>
    <div :class="classes" @click="xxx" class="tabs-item">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLuTabsItem',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            name: {
                type: [String, Number]
            }
        },
        computed:{
            classes(){
                return{active: this.active}
            }
        },
        created() {
            // console.log(`爷爷给item的 eventBus`);
            // console.log(this.eventBus)
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        &.active{
        background: red;
         }
    }
</style>