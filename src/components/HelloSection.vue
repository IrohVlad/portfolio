<template>
    <section class="hello">
        <div class="iner-container content">
            <div class="foreground">
                <div class="orange"><div :class="loaded ? 'after' : 'before'">hi, i am</div></div>
                <div class="white"><div :class="loaded ? 'after' : 'before'">Web Developer</div></div>
            </div>
            <div :class="loaded ? 'background after' : 'background before'">
                <div>Hello</div>
            </div>
            <div class="vector">
                <img class="img-1" src="../assets/Vector.svg" alt=""/>
                <img class="img-2" src="../assets/Vector.svg" alt=""/>
                <img class="img-3" src="../assets/Vector.svg" alt=""/>
            </div>
        </div>
        <div class="drop1" :style="'transform: rotate('+angel+'deg)'" ></div>
        <div class="drop2" :style="'transform: rotate('+angel+'deg)'" ></div>
        <div class="drop3" :style="'transform: rotate('+angel+'deg)'" ></div>
    </section>  
</template>

<script>
export default {
    name: 'hellosection',
    data() {
        return {
            loaded: false,
            angel: 90 -(Math.atan(window.outerHeight/window.outerWidth) * 180 / 3.14),
            d: Math.sqrt(Math.pow(window.outerHeight, 2) + Math.pow(window.outerWidth, 2))
        }
    },
    mounted() {
        window.addEventListener('resize', ()=>{
            this.angel = 90 -(Math.atan(window.outerHeight/window.outerWidth) * 180 / 3.14);
            this.d = Math.sqrt(Math.pow(window.outerHeight, 2) + Math.pow(window.outerWidth, 2))
        })
        this.$nextTick(() => {
            setTimeout(() => {
                this.loaded = true 
            }, 0);
        })
    },
    computed: {

    }
}
</script>

<style lang="scss">
    :root{
        --helloheight: calc(100vh - 45px);
        --incline: calc(100vh/100vw);
    }
    .iner-container{
        box-sizing: content-box;
        padding: 0 25px;
        margin: 0 auto;
        max-width: 1350px;
    }
    .hello{
        margin-top: 45px;
        overflow: hidden;
        position: relative;
        @keyframes dropmove1 {
            0%{
                top: calc(-15vh - 200px);
                right: - 200px
            }
            50%{
                top: calc(-15vh - 200px);
                right: -200px
            }
            60%{
                top: calc(85vh + 200px);
                right: calc(100vw + 200px);
            }
            100%{
                top: calc(85vh + 200px);
                right: calc(100vw + 200px);
            }
        }
        @keyframes dropmove2 {
            0%{
                top: calc(-15vh - 200px);
                right: calc(50vw - 200px);
            }
            10%{
                top: calc(-15vh - 200px);
                right: calc(50vw - 200px);
            }
            20%{
                top: calc(35vh + 200px);
                right: calc(100vw + 200px);
            }
            100%{
                top: calc(35vh + 200px);
                right: calc(100vw + 200px);
            }
        }
        @keyframes dropmove3 {
            0%{
                top: calc(35vh - 200px);
                right: -200px;
            }
            20%{
                top: calc(35vh - 200px);
                right: - 200px;
            }
            30%{
                top: calc(85vh + 200px);
                right: calc(50vw + 200px);
            }
            100%{
                top: calc(85vh + 200px);
                right: calc(50vw + 200px);
            }
        }
        .drop1{
            z-index: 0;
            transform-origin: bottom;
            position: absolute;
            animation: dropmove1 10s ease infinite 1s forwards;
            width: 5px;
            height: 200px;
            background: linear-gradient(0deg, #FFFFFF 0%, #0F0B0A 100%);
            border-radius: 50px;
        }
        .drop2{
            z-index: 0;
            transform-origin: bottom;
            position: absolute;
            animation: dropmove2 9s ease infinite 1.1s forwards;
            width: 5px;
            height: 200px;
            background: linear-gradient(0deg, #FFFFFF 0%, #0F0B0A 100%);
            border-radius: 50px;
        }
        .drop3{
            z-index: 0;
            transform-origin: bottom;
            position: absolute;
            animation: dropmove3 7s ease infinite 1.3s forwards;
            width: 5px;
            height: 200px;
            background: linear-gradient(0deg, #FFFFFF 0%, #0F0B0A 100%);
            border-radius: 50px;
        }
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
                    overflow: hidden;
                    font-size: 32px;
                    color: #FF6B00;
                    .before{
                        transition-property: transform;
                        transition-duration: 0.3s;
                        transform-origin: bottom left ;
                        transform: rotate(90deg);
                    }
                    .after{
                        transition-property: transform;
                        transition-duration: 0.3s;
                        transform-origin: bottom left ;
                        transform: rotate(0);
                    }
                }
                .white{
                    overflow: hidden;
                    font-size: 80px;
                    .before{
                        transition-property: transform;
                        transition-duration: 0.3s;
                        transition-delay: 0.5s;
                        transform-origin: bottom left ;
                        transform: rotate(90deg);
                    }
                    .after{
                        transition-property: transform;
                        transition-duration: 0.3s;
                        transition-delay: 0.5s;
                        transform-origin: bottom left ;
                        transform: rotate(0);
                    }
                }
            }
            .background{
                @keyframes changeblur {
                    0%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    40%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    60%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(3px);
                        -webkit-text-fill-color: transparent;
                        right: 35px;
                    }
                    90%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
                        background-clip: text;
                        filter: blur(0px);
                        -webkit-text-fill-color: transparent;
                        right: 0;
                    }
                    100%{
                        background: radial-gradient(50% 95.85% at 73.05% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #181717;
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
                &.before{
                    transition-property: opacity;
                    transition-duration: 1s;
                    transition-delay: 1s;
                    opacity: 0%;
                }
                &.after{
                    transition-property: opacity;
                    transition-duration: 1s;
                    transition-delay: 1s;
                    opacity: 100%;
                }
            }
            .vector{
                margin-bottom: 20px;
                position: absolute;
                bottom: 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-sizing: border-box;
                transform: translateX(-25px);
                img{
                    width: 40px;
                    height: 27px;
                    opacity: 0%;
                }
                @keyframes vectors {
                    0%{
                        opacity: 0%;
                    }
                    30%{
                        opacity: 100%;
                    }
                    100%{
                        opacity: 100%;
                    }
                }
                .img-1{
                    animation: vectors 1.5s linear infinite alternate 1s;
                }
                .img-2{
                    animation: vectors 1.5s linear infinite alternate 1.5s;
                }
                .img-3{
                    animation: vectors 1.5s linear infinite alternate 2s;
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