<template>
    <div class="main">
        <img src="../assets/img/about.png" alt="">
        <div class="about-me">
            <h1>ABOUT ME</h1>
            <p>
                I am a software developer, who uses Python and JavaScript alongside frameworks such as Vue.js and Flutter. I usually prefer solving real-world problems that will have a positve impact. 
            </p>
            <p>
                I am detail oriented, have discipline when it comes to my work and I thrive on consistency. I enjoy working on myself, and growing my skill, and having fun while doing it. Fun fact: I support Manchester united ;)
            </p>
        </div>
    </div>
</template>

<style scoped>

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

    /* Responsive styling */
  @media (max-width: 800px) {
    .main{
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }

    .main img{
        width: 80%;
        max-width: 22rem;
        border-radius: 12rem;
    }

    
   
  }
</style>