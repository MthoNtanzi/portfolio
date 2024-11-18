<template>
    <div class="main">
        <img src="../assets/img/phone.jpg" alt="picture of a telephone">
        <div>
            <h1>CONTACT ME</h1>
            <!-- Contact Info is a grid -->
            <div class="contact-info">
                <!-- Email -->
                <p class="sites">Email</p>
                <p><a target="_blank" href="mailto:mthontanzi99@gmail.com">mthontanzi99@gmail.com</a></p>
                <!-- LinkedIN -->
                <p class="sites">LinkedIn</p>
                <p><a target="_blank" href="https://www.linkedin.com/in/mthobisi-ntanzi-17234820b/">Mthobisi Ntanzi</a></p>
                <!-- Github -->
                <p class="sites">Github</p>
                <p><a target="_blank" href="https://www.github.com/MthoNtanzi/">MthoNtanzi</a></p>
                <!-- Upwork -->
                <p class="sites">Upwork</p>
                <p><a href="https://www.upwork.com/freelancers/~011a5816fb5ac94684" target="_blank" rel="noopener noreferrer">Mthobisi N.</a></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main{
        display: flex;
        flex-direction: column;
    }
    .contact-info{
        display: grid;
        grid-template-columns: repeat(2, 15rem);
    }

    .main img{

        width: 100%;
        max-width: 22rem;
        border-radius: 12rem;
        height: auto;
       
        align-self: end;
        margin-right: 10rem;
        border-radius: 30rem;
    }

    .sites{
        font-weight: 700;
        font-size: 1.5rem;
    }
    a{
        color: white;
        text-decoration: none;
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
        margin:auto;
    }

    .contact-info{
        display: flex;
        flex-direction: column; /* Stacking the items in column direction */
        gap: 0.4rem;
    }

    .contact-info :nth-child(1), 
    .contact-info :nth-child(3), 
    .contact-info :nth-child(5),
    .contact-info :nth-child(7)
    {
        margin-bottom: 0;
    }
   
  }
</style>