<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import '../styles/svg'
    export default {
        name:'GuLu-icon',
        props: ['name']
    }
</script>
<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>