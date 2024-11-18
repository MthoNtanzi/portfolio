<template>
  <div class="main homePage">
    <div class="intro">
      <h1>Mthobisi<br/> Ntanzi</h1>
      <h2>Software Developer</h2>
      <router-link class="knowMe" to="/about"><button>Get To Know Me</button></router-link>
    </div>
    <img src="../assets/img/profile.jpg" alt="Mthobisi Ntanzi Profile image">
  </div>
  
</template>

<style scoped>
  .homePage{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-transform: uppercase;
    gap: 4rem;
  }

  .intro{
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  img{
    max-width: 20rem;
    border-radius: 10rem;
    height: auto;
  }

  button{
    width: 18rem;
    padding: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.6rem;
    font-size: larger;
    text-align: center;
    box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.45);
  }
  button:hover{
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  h1{
    font-size: 3.5rem;
  }
  h2{
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
  }
  .knowMe{
    text-decoration: none;
    color: #000;
  }

  /* Responsive styling */
  @media (max-width: 800px) {
    .homePage{
      flex-direction: column;
    }
    .intro{
      align-self: flex-start;
    }

    img{
     /* margin-left: auto; */
     max-width: 65%;
    }

    h1{
    font-size: 2rem;
    }

    h2{
      font-size: 1rem;
      letter-spacing: 0.2rem;
    }

    button{
      width: 10rem;
      padding: 0.3rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.2rem;
      font-size:x-small;
    }
  }
</style>
