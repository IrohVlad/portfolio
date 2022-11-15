<template>
    <div>
        <xheader/>
        <hello/>
        <profile/>
        <projects/>
    </div>
</template>

<script>
    import header from '../../components/Header.vue'
    import hello from '../../components/HelloSection.vue'
    import profile from '../../components/Profile.vue'
    import projects from '../../components/Projects.vue'
    export default {
        name: 'MainPage',
        components: {
            xheader: header,
            hello,
            profile,
            projects
        }
    }
</script>

<style lang="scss">

</style>