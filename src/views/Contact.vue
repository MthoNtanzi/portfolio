<template>
    <div class="main">
        <img src="../assets/img/phone.jpg" alt="picture of a telephone">
        <div>
            <h1>CONTACT ME</h1>
            <h2>Click on the name to view the respective profiles</h2>
            <!-- Contact Info is a grid -->
            <div class="contact-info">
                <!-- Email -->
                <p class="sites"><a target="_blank" href="mailto:mthontanzi99@gmail.com">Email</a></p>
                <!-- LinkedIN -->
                <p class="sites"><a target="_blank" href="https://www.linkedin.com/in/mthobisi-ntanzi-17234820b/">LinkedIn</a></p>
                <!-- Github -->
                <p class="sites"><a target="_blank" href="https://www.github.com/MthoNtanzi/">Github</a></p>
                <!-- Frontend mentor -->
                <p class="sites"><a target="_blank" href="https://www.frontendmentor.io/profile/MthoNtanzi">Frontend Mentor</a></p>
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
        display: flex;
        gap: 140px;
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
        justify-content: center;
    }
    a{
        color: white;
        text-decoration: none;
    }
    .contact-info :nth-child(1), 
    .contact-info :nth-child(2), 
    .contact-info :nth-child(3),
    .contact-info :nth-child(4)
    {
        padding-top: 0.9rem;
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
        margin:auto;
    }

    .contact-info{
        display: flex;
        flex-direction: column; /* Stacking the items in column direction */
        gap: 0.4rem;
    }

    .contact-info :nth-child(1), 
    .contact-info :nth-child(2), 
    .contact-info :nth-child(3),
    .contact-info :nth-child(7)
    {
        margin-bottom: 0;
    }
   
  }

</style>

