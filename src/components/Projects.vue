<template>
    <section class="projects">
        <div class="projects-content iner-container">
            <div class="title">My projects</div>
            <div class="sites">
                <div>efrf</div>
                <div>tfhfy</div>
                <div>uilkhj</div>
                <div>erfeggf</div>
                <div>tjuyl</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'projects'
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
        div{
            height: 300px;
            width: 100%;
        }
    }
</style>