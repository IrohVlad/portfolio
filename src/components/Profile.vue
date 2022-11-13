<template>
    <section class="profile">
        <div class="iner-container content">
            <div class="content__data data">
                <div class="data__title">
                    My name is Vladislav
                </div>
                <div class="data__text">
                    I am a developer who work with frontend and backend sides of website. Creation of quality site layouts with pretty animations and transitions, working with databases not big problem for me. This work
                </div>
                <ul class="data__links">
                    <img src="../assets/mail.svg" alt=""/>
                    <img src="../assets/vk.svg" alt=""/>
                    <img src="../assets/git.svg" alt=""/>
                </ul>
            </div>
            <div class="content__avatar">
                <img src="../assets/Face.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'profile'
}
</script>

<style lang="scss">
    .iner-container{
        box-sizing: content-box;
        padding: 0 25px;
        margin: 0 auto;
        max-width: 1350px;
    }
    .profile{
        height: 300px;
        background-color: #181717;
        .content{
            display: flex;
            align-items:center;
            justify-content: space-between;
            height: 100%;
            .data{
                padding: 10px 25px;
                margin-right: 30px;
                .data__title{
                    font-weight: 400;
                    font-size: 25px;
                    line-height: 39px;
                    color: #FF6B00;
                }
                .data__text{
                    font-size: 15px;
                    line-height: 20px;
                    max-width: 800px;
                    margin-bottom: 25px;
                }
                .data__links{
                    img{
                        width: 30px;
                        height: 30px;
                        &:not(:last-child){
                            margin-right: 20px;
                        }
                    }
                }
            }

            .content__avatar{
                flex: 0 0 auto;
                height: 200px;
                width: 200px;
                img{
                    object-fit: cover;
                    object-position: center;
                    height: 100%;
                    width: 100%;
                    border-radius: 50%;
                }
            }
        }
    }
</style>