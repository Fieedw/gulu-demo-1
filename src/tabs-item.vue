<template>
    <div class="tabs-item">
<slot></slot>
    </div>
</template>
<script>
    export default {
        name:'GuLuTabsItem',
        props:{
            disabled:{
                type:Boolean,
                default:false,
    }
        },
        inject:['eventBus'],
        created() {
            console.log(`爷爷给item的 eventBus`);
            console.log(this.eventBus)
        }
    }
</script>
<style>

</style>