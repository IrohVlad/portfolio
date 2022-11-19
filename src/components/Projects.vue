<template>
    <section class="projects">
        <div class="projects-content iner-container">
            <div class="title">My projects</div>
            <div class="sites">
                <projectcard/>
                <projectcard/>
                <projectcard/>
            </div>
        </div>
    </section>
</template>

<script>
import projectcard from '../components/ProjectCard.vue'
export default {
    name: 'projects',
    components: {
        projectcard
    }
    
}
</script>

<style lang="scss">
    .iner-container{
        box-sizing: content-box;
        padding: 0 25px;
        margin: 0 auto;
        max-width: 1350px;
    }
    .title{
        font-weight: 400;
        font-size: 25px;
        line-height: 39px;
        color: #FF6B00;
        margin: 25px 0;
    }
    .sites{
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
    @media(max-width: 750px){
        .title{
        font-weight: 400;
        font-size: 25px;
        line-height: 39px;
        color: #FF6B00;
        margin: 25px 0;
    }
    }
</style>