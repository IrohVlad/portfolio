<template>
    <footer>
        <div class="footer-content">
            <div class="text">Created by Vladislav Filippov</div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'xfooter'
}
</script>

<style lang="scss">
    footer{
        margin-top: 35px;
        height: 200px;
        background-color: #181717;
        display: flex;
        align-items:center;
        justify-content: center;
        .text{
            font-weight: 700;
            font-size: 15px;
            color: rgb(107, 106, 106);
        }
    }
</style>