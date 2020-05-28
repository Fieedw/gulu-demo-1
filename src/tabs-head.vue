<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuLuTabsHead',
        inject:['eventBus'],
        created() {
            console.log(`爷爷给head的 eventBus`);
            console.log(this.eventBus)
        }
    }
</script>
<style>

</style>