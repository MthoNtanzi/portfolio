<template>
    <div class="main">
        <img src="../assets/img/about.png" alt="">
        <div class="about-me">
            <h1>ABOUT ME</h1>
            <p>
                I am a software developer, who uses Python and JavaScript alongside frameworks such as Vue.js and Flutter. I usually prefer solving real-world problems that will have a positve impact. 
            </p>
            <p>
                I am detail oriented, have discipline when it comes to my work and I thrive on consistency. I enjoy working on myself, and growing my skill, and having fun while doing it.
            </p>
        </div>
    </div>
    <div class="myLanguages">
        <Carousel :items-to-show="5" :autoplay="3000" :wrap-around="true" :pause-autoplay-on-hover="true">
            <Slide v-for="(slide, index) in sliderImages" :key="index">
                <img :src="getImageUrl(slide.image)" :alt="'Slide ' + index" class="svgImg" />
            </Slide>
        </Carousel>
    </div>
</template>

<script setup>
    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    const sliderImages = [
        { image: "../assets/logos/html-5.svg"},
        { image: "../assets/logos/css.svg"},
        { image: "../assets/logos/js.svg"},
        { image: "../assets/logos/git.svg"},
        { image: "../assets/logos/bootstrap.svg"},
        { image: "../assets/logos/postgresql.svg"},
        { image: "../assets/logos/linux.svg"},
        { image: "../assets/logos/python.svg"},
        { image: "../assets/logos/react.svg"},
        { image: "../assets/logos/tailwindcss.svg"},
        { image: "../assets/logos/sass.svg"},
        { image: "../assets/logos/vue.svg"},
        { image: "../assets/logos/api.svg"}
    ];

    const getImageUrl = (path) => {
        return new URL(path, import.meta.url).href
    }
</script>

<style scoped>
    .svgImg{
        width: 120px;
        height: 120px;
        padding-inline: 20px;
    }

    .main{
        display: flex;
        justify-content: space-around;
        align-items:flex-end;
        gap: 3rem;
    }

    .main img{
        width: 100%;
        max-width: 22rem;
        border-radius: 12rem;
    }

    .about-me{
        max-width: 28rem;
        text-align: justify;
    }

    .myLanguages{

    }

    /* Responsive styling */
  @media (max-width: 800px) {
    .main{
      flex-direction: column;
      align-items: center;
      gap: 3rem;
      padding-block: 50px;
    }

    .main img{
        width: 80%;
        max-width: 22rem;
        border-radius: 12rem;
    }

    
   
  }
</style>