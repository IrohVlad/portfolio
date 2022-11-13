<template>
    <div>
        <xheader/>
        <hello/>
    </div>
</template>

<script>
    import header from '../../components/Header.vue'
    import hello from '../../components/HelloSection.vue'
    export default {
        name: 'MainPage',
        components: {
            xheader: header,
            hello
        }
    }
</script>

<style lang="scss">

</style>