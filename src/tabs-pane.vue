<template>
    <div class="tabs-pane">
<slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLuTabsPane',
        inject:['eventBus'],
        created() {
            console.log(`爷爷给pane的  eventBus`);
            console.log(this.eventBus);
        }
    }
</script>
<style>

</style>