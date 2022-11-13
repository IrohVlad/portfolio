<template>
    <div>
        <xheader/>
        <hello/>
        <profile/>
    </div>
</template>

<script>
    import header from '../../components/Header.vue'
    import hello from '../../components/HelloSection.vue'
    import profile from '../../components/Profile.vue'
    export default {
        name: 'MainPage',
        components: {
            xheader: header,
            hello,
            profile
        }
    }
</script>

<style lang="scss">

</style>