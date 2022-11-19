<template>
    <div class="site">
        <div class="card">
            <img src="../assets/site.png" alt="">
        </div>
        <div class="content showload">
            <div class="text">Portfolio site for famos designer, Dmitry Filippov. It made frontend made with React. Backend made with Node js, Express, PostgreSQL. Have functions adding pictures and cotegories. Portfolio site for famos designer, Dmitry Filippov. It made frontend made with React. Backend made with Node js, Express, PostgreSQL. Have functions adding pictures and cotegories.</div>
            <div class="tech">
                <div class="icon">
                    <img src="../assets/react.svg" alt=""/>
                </div>
                <div class="icon">
                    <img src="../assets/node.svg" alt=""/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'projectcard',
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

<style lang="scss">
    .showload{
        transition-property: transform, opacity;
        transition-duration: 0.5s;
        opacity: 0%;
        transform: translateY(30px);
    }
    .shown{
        opacity: 100%;
        transform: translateY(0);
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
            }
        }
        .card{
            z-index: 2;
            box-shadow: 10px 0px 15px black;
            flex: 0 0 auto;
            width: 250px;
            height: 400px;
            overflow: hidden;
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
</style>