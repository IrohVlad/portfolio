<template>
    <section class="hello">
        <div class="iner-container content">
            <div class="foreground">
                <div class="orange">hi, i am</div>
                <div class="white">Web Developer</div>
            </div>
            <div class="background">
                <span>Hello</span>
            </div>
            <div class="vector">
                <img class="img-1" src="../assets/Vector.svg" alt=""/>
                <img class="img-2" src="../assets/Vector.svg" alt=""/>
                <img class="img-3" src="../assets/Vector.svg" alt=""/>
            </div>
        </div>
    </section>  
</template>

<script>
export default {
    name: 'hellosection'
}
</script>

<style lang="scss">
    :root{
        --helloheight: calc(100vh - 45px)
    }
    .iner-container{
        box-sizing: content-box;
        padding: 0 25px;
        margin: 0 auto;
        max-width: 1350px;
    }
    .hello{
        height: var(--helloheight);
        .content{
            @keyframes moveright{
                    0%{
                        transform: translate(0px);
                    }
                    40%{
                        transform: translate(35px, 20px);
                    }
                    60%{
                        transform: translate(35px, 20px);
                    }
                    90%{
                        transform: translate(0px)
                    }
                    100%{
                        transform: translateX(0px);
                    }
                }
            position: relative;
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .foreground{
                animation: moveright 30s ease infinite alternate;
                z-index: 2;
                .orange{
                    font-size: 32px;
                    color: #FF6B00;
                }
                .white{
                    font-size: 80px;
                }
            }
            .background{
                @keyframes changeblur {
                    0%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    40%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    60%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    90%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    100%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                }
                right: 0;
                position: absolute;
                font-size: 400px;
                color: #181717;
                font-weight: 500;
                animation: changeblur 30s ease infinite alternate;
            }
            .vector{
                margin-bottom: 20px;
                position: absolute;
                bottom: 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 40px;
                    height: 27px;
                }
                @keyframes vectors {
                    0%{
                        opacity: 100%;
                    }
                    30%{
                        opacity: 0%;
                    }
                    100%{
                        opacity: 0%;
                    }
                }
                .img-1{
                    animation: vectors 1.5s linear infinite alternate 0s;
                }
                .img-2{
                    animation: vectors 1.5s linear infinite alternate 0.5s;
                }
                .img-3{
                    animation: vectors 1.5s linear infinite alternate 1s;
                }
            }
        }
    }
    @media(max-width: 960px){
        .hello{
        .content{
            @keyframes moveright{
                    0%{
                        transform: translate(0px);
                    }
                    40%{
                        transform: translate(35px, 20px);
                    }
                    60%{
                        transform: translate(35px, 20px);
                    }
                    90%{
                        transform: translate(0px)
                    }
                    100%{
                        transform: translateX(0px);
                    }
                }
            position: relative;
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .foreground{
                animation: moveright 30s ease infinite alternate;
                z-index: 2;
                .orange{
                    font-size: 32px;
                    color: #FF6B00;
                }
                .white{
                    font-size: 80px;
                }
            }
            .background{
                @keyframes changeblur {
                    0%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    40%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    60%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    90%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    100%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                }
                right: 0;
                position: absolute;
                font-size: 300px;
                color: #181717;
                font-weight: 500;
                animation: changeblur 30s ease infinite alternate;
            }
        }
    }
    }
    @media(max-width: 720px){
        .hello{
        .content{
            @keyframes moveright{
                    0%{
                        transform: translate(0px);
                    }
                    10%{
                        transform: translate(0px);
                    }
                    40%{
                        transform: translate(35px, 20px);
                    }
                    60%{
                        transform: translate(35px, 20px);
                    }
                    90%{
                        transform: translate(0px)
                    }
                    100%{
                        transform: translateX(0px);
                    }
                }
            position: relative;
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .foreground{
                animation: moveright 30s ease infinite alternate;
                z-index: 2;
                .orange{
                    font-size: 28px;
                    color: #FF6B00;
                }
                .white{
                    font-size: 40px;
                }
            }
            .background{
                @keyframes changeblur {
                    0%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    10%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    50%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    60%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    90%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    100%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                }
                right: 0;
                position: absolute;
                font-size: 160px;
                color: #181717;
                font-weight: 500;
                animation: changeblur 30s ease infinite alternate;
            }
        }
    }
    }
    @media(max-width: 400px){
        .hello{
        .content{
            position: relative;
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .foreground{
                animation: none;
                z-index: 2;
                .orange{
                    font-size: 22px;
                    color: #FF6B00;
                }
                .white{
                    font-size: 35px;
                }
            }
            .background{
                @keyframes changeblur {
                    0%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    50%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    60%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    90%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    100%{
                        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                }
                right: 0;
                position: absolute;
                font-size: 120px;
                color: #181717;
                font-weight: 500;
                animation: changeblur 30s ease infinite alternate;
            }
        }
    }
    }
</style>