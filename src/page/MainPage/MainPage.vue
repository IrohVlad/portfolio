<template>
    <div>
        <xheader/>
        <hello/>
        <profile/>
        <projects/>
        <xfooter/>
    </div>
</template>

<script>
    import header from '../../components/Header.vue'
    import hello from '../../components/HelloSection.vue'
    import profile from '../../components/Profile.vue'
    import projects from '../../components/Projects.vue'
    import xfooter from '../../components/Footer.vue'
    export default {
        name: 'MainPage',
        components: {
            xheader: header,
            hello,
            profile,
            projects,
            xfooter
        }
    }
</script>

<style lang="scss">

</style>