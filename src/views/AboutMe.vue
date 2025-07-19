<template>
    <div class="main">
        <img :src="aboutImage" alt="About Image" loading="lazy">
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
                <img :src="slide.image" :alt="'Slide ' + index" class="svgImg" loading="lazy"/>
            </Slide>
        </Carousel>
    </div>
</template>

<script setup>
    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    import aboutImage from '../assets/img/about.png'


    // Import images statically so Vite can resolve them correctly
    import html from '../assets/logos/html-5.svg'
    import css from '../assets/logos/css.svg'
    import js from '../assets/logos/js.svg'
    import git from '../assets/logos/git.svg'
    import bootstrap from '../assets/logos/bootstrap.svg'
    import postgresql from '../assets/logos/postgresql.svg'
    import linux from '../assets/logos/linux.svg'
    import python from '../assets/logos/python.svg'
    import react from '../assets/logos/react.svg'
    import tailwindcss from '../assets/logos/tailwindcss.svg'
    import sass from '../assets/logos/sass.svg'
    import vue from '../assets/logos/vue.svg'
    import api from '../assets/logos/api.svg'

    const sliderImages = [
        { image: html },
        { image: css },
        { image: js },
        { image: git },
        { image: bootstrap },
        { image: postgresql },
        { image: linux },
        { image: python },
        { image: react },
        { image: tailwindcss },
        { image: sass },
        { image: vue },
        { image: api }
    ];

</script>

<style scoped>
    .svgImg{
        width: 120px;
        height: 120px;
        padding-inline: 50px;
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