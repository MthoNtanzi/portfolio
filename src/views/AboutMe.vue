<template>
    <div class="main">
        <img src="../assets/img/about.png" alt="">
        <div class="about-me">
            <h1>ABOUT ME</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus totam inventore corrupti iste quas in tempore facere perspiciatis ratione?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia magnam a voluptas, reiciendis voluptatem harum. Earum, nostrum ipsam. Iste vitae cumque nobis iusto. Error qui in quam sequi eum.
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