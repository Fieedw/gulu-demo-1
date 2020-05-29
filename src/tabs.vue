<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name: 'GuLuTabs',
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator (value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data () {
            return {
                eventBus: new Vue()
            }
        },
        provide () {
            return {
                eventBus: this.eventBus
            }
        },
        mounted () {
            if (this.$children.length === 0) {
                console && console.warn &&
                console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
            }
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GuLuTabsHead') {
                    vm.$children.forEach((childVm) => {
                        if (childVm.$options.name === 'GuLuTabsItem'
                            && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
        }
    }
</script>
<style>
    .tabs {
        border-radius: 4px 4px 0 0;
        border: 1px solid burlywood;
    }
</style>