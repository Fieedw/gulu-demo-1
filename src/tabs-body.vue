<template>
    <div class="tabs-body">
<slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLuTabsBody',
        inject:['eventBus'],
        created() {
            console.log(`爷爷给body的 eventBus`);
            console.log(this.eventBus)
        }
    }
</script>
<style>

</style>