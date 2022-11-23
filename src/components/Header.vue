<template>
    <header :class="loaded ? 'header' : 'before'">
        <div class="_container content">
            <div class="content__logo logo">
                <div class="logo__icon">
                    <img src="../assets/logo.svg" alt="">
                </div>
                <div class="logo__title">Portfolio</div>
            </div>
            <ul class="content__nav nav">
                <li @click="toContacts" class="nav__item"><div class="item">Contacts</div> <div class="background"></div></li>
                <li @click="toWorks" class="nav__item"><div class="item">Works</div> <div class="background"></div></li>
                <!-- <li class="nav__item"><div class="item">Skills</div> <div class="background"></div></li> -->
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header',
    data () {
        return {
            loaded: false
        }
    },
    methods: {
        toContacts () {
            document.querySelector('.profile').scrollIntoView({behavior: "smooth", block: "center"})
        },
        toWorks () {
            document.querySelector('.projects').scrollIntoView({behavior: "smooth", block: "start"})
        },
        toSkills () {
            document.querySelector('.projects').scrollIntoView({behavior: "smooth", block: "start"})
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.loaded = true 
            }, 0);
        })
    },
}
</script>

<style lang="scss">
    .before{
        transform: translateY(-50px);
    }
    .header{
        transition-property: transform;
        transition-duration: 0.5s;
        transition-delay: 1s;
        transform: translateY(0px);
        box-shadow: 1px 1px 8px black;
        position: fixed;
        top: 0;
        z-index: 10;
        height: 45px;
        background-color: #181717;
        width: 100%;
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
                height: 100%;
                display: flex;
                align-items: center;
                .nav__item{
                    cursor: pointer;
                    position: relative;
                    font-size: 14px;
                    font-weight: 300;
                    height: 100%;
                    display: flex;
                    align-items:center;
                    &:not(:last-child){
                        margin-right: 15px;
                    }
                    &:hover{
                        .item{
                            color: #181717;
                        }
                        .background{
                            height: 100%;
                        }
                    }
                    .item{
                        padding: 0 3px;
                        font-weight: 500;
                        z-index: 1;
                        transition-property: color;
                        transition-duration: 0.5s;
                    }
                    .background{
                        transition-property: height;
                        transition-duration: 0.5s;
                        z-index: 0;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 0;
                        background-color: #FF6B00;
                    }
                }
            }
        }
    }
</style>