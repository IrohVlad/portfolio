<template>
    <div class="site">
        <div class="card">
            <a :href="projectdata.link">
                <img :src='"http://62.113.105.113:5000/"+projectdata.img' alt=""/>
            </a>
        </div>
        <div class="content showload">
            <div class="text">{{projectdata.desc}}</div>
            <div class="tech">
                <div v-for="icon in projectdata.tech" class="icon">
                    <img :src='"http://62.113.105.113:5000/"+icon.name' alt=""/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'projectcard',
    props: ['projectdata'],
    mounted() {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(item => {
                if (item.isIntersecting){
                    item.target.classList.add('shown')
                    observer.unobserve(item.target)
                }
            });
        }, {threshold: 0.5});
        document.querySelectorAll('.showload').forEach(item => {
            observer.observe(item);
        })
    },
}
</script>

<style lang="scss" scoped>
    .showload{
        transition-property: transform, opacity;
        transition-duration: 0.5s;
        opacity: 0%;
        transform: translateX(-45px);
    }
    .shown{
        opacity: 100% !important;
        transform: translateY(0) !important;
    }   
    .site{
        height: fit-content;
        display:flex;
        align-items:center;
        justify-content: center;
        height: fit-content;
        &:nth-child(even){
            .card{
                order: 2;
                box-shadow: -10px 0px 15px black;
            }
            .content{
                order: 1;
                opacity: 0%;
                transform: translateX(45px);
            }
        }
        .card{
            z-index: 2;
            box-shadow: 10px 0px 15px black;
            flex: 0 0 auto;
            width: 250px;
            height: 400px;
            overflow: hidden;
            transition-property: transform, border-radius;
            transition-duration: 0.3s;
            &:hover{
                cursor: pointer;
                border-radius: 20px;
                transform: scale(1.07);
            }
            img{
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 100%;
            }
        }
        .content{
            box-shadow: 1px 3px 8px black;
            padding: 20px;
            height: min-content;
            background-color: #181717;
            .text{
                height: min-content;
                margin-bottom: 30px;
                line-height: 24px;
            }
            .tech{
                display: flex;
                align-items:center;
                height: min-content;
                height: 35px;
                .icon{
                    height: 100%;
                    width: 35px;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
    @media(max-width: 750px){
        .showload{
            transition-property: transform, opacity;
            transition-duration: 0.5s;
            opacity: 0%;
            transform: translateY(30px);
        }
        .site{
        height: fit-content;
        display:flex;
        align-items:center;
        justify-content: center;
        height: fit-content;
        position: relative;
        &:hover{
            cursor: pointer;
            .card{
                opacity: 100%;
            }
            .content{
                display: none;
            }
        }
        &:nth-child(even){
            .card{
                order: 2;
                box-shadow: -10px 0px 15px black;
            }
            .content{
                order: 1;
                opacity: 0%;
                transform: translateY(30px);
            }
        }
        .card{
            opacity: 60%;
            z-index: 2;
            box-shadow: 10px 0px 15px black;
            flex: 0 0 auto;
            width: 300px;
            height: 468px;
            overflow: hidden;
            transition-property: opacity;
            transition-duration: 0.3s;
            &:hover{
                cursor: pointer;
                border-radius: 0px;
                transform: scale(1);
            }
            img{
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 100%;
            }
        }
        .content{
            transition-property: transform, border-radius, opacity;
            transition-duration: 0.3s;
            box-shadow: 1px 3px 8px black;
            padding: 20px;
            height: min-content;
            background-color: transparent;
            position: absolute;
            z-index: 5;
            box-sizing: border-box;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            .text{
                height: min-content;
                margin-bottom: 30px;
                line-height: 24px;
            }
            .tech{
                display: flex;
                align-items:center;
                height: min-content;
                height: 35px;
                .icon{
                    height: 100%;
                    width: 35px;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
    }
</style>