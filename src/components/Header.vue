<template>
    <header class="header">
        <div class="_container content">
            <div class="content__logo logo">
                <div class="logo__icon">
                    <img src="../assets/logo.svg" alt="">
                </div>
                <div class="logo__title">Portfolio</div>
            </div>
            <ul class="content__nav nav">
                <li class="nav__item">Contacts</li>
                <li class="nav__item">Works</li>
                <li class="nav__item">Skills</li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style lang="scss">
    .header{
        height: 45px;
        background-color: #181717;
        widows: 100%;
        .content{
            height: inherit;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo{
                display: flex;
                align-items: center;
                .logo__icon{
                    width: 40px;
                    height: 40px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .logo__title{
                    font-size: 18px;
                }
            }
            .nav{
                display: flex;
                align-items: center;
                .nav__item{
                    font-size: 14px;
                    font-weight: 300;
                    &:not(:last-child){
                        margin-right: 20px;
                    }
                }
            }
        }
    }
</style>