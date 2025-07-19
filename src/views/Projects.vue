<template>
    <div class="main">
        <h1 id="projects-title">PROJECTS</h1>
        <div class="myProjects" aria-labelledby="projects-title">
            <div class="project-template">
                <img src="../assets/img/mike_s_hotel.PNG" alt="Mike's hotel">
                <p><strong>Mike's hotel</strong> is a full stack project I made from scratch. From building thr API's to integrating them into my project. Users can book and get their reference via email, explore the site below!</p>
                <div class="myButtons">
                    <button>
                        <a href="https://mikes-hotel-revised.vercel.app/" target="_blank">View Project</a>
                    </button>
                    <button>
                        <a href="https://github.com/MthoNtanzi/GuessTheNumberGame" target="_blank">View Repo</a>
                    </button>
                </div>
            </div>
            <div class="project-template">
                <img src="../assets/img/guessTheGame.png" alt="Guess The Game">
                <p><strong>Guess The Game.</strong> This project is a mini-game I made to pass the time. I made it using VueJs. At the moment it is a desktop game but I plan on making it responsive soon.</p>
                <div class="myButtons">
                    <button>
                        <a href="https://guess-the-number-game-omega-six.vercel.app/" target="_blank">View Project</a>
                    </button>
                    <button>
                        <a href="https://github.com/MthoNtanzi/GuessTheNumberGame" target="_blank">View Repo</a>
                    </button>
                </div>
            </div>
            <div class="project-template">
                <img src="../assets/img/age_calc.png" alt="Age Calculator">
                <p><strong>Age Calculator.</strong> This is a project I got from <a class="links" href="https://frontendmentor.io/">Frontend Mentor</a>. I was given a picture as reference to work on. I took that image and brought the project to life using reactJs</p>
                <div class="myButtons">
                    <button>
                        <a href="https://age-calculator-app-main-snowy.vercel.app/" target="_blank">View Project</a>
                    </button>
                    <button>
                        <a href="https://github.com/MthoNtanzi/age-calculator-app-main" target="_blank">View Repo</a>
                    </button>
                </div>
            </div>
            <div class="project-template">
                <img src="../assets/img/advice_gen.png" alt="Advice generator">
                <p>This project uses the Advice Slip API to generate random quotes of advice. I got it from frontend mentor. It was a fun project to do and the advice given is quite enjoyable.</p>
                <div class="myButtons">
                    <button>
                        <a href="https://advice-generator-app-five-amber.vercel.app/" target="_blank">View Project</a>
                    </button>
                    <button>
                        <a href="https://github.com/MthoNtanzi/advice-generator-app" target="_blank">View Repo</a>
                    </button>
                </div>
            </div>

            
        </div>
    </div>
</template>

<style scoped>
    .main{
        display: grid;
        grid-template-columns: min-content auto;
        grid-template-areas: 
        "header content"; /* Default layout */
        align-items: center;
        margin: auto;
    }

    h1{
        grid-area: header; 
        writing-mode:vertical-lr;
        transform: rotate(180deg);
        height: fit-content;
        text-align: center;
        letter-spacing: 2rem;
        justify-self: center;
        align-content: center;
        margin-left: 0;
    }

    .myProjects{
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        /* width: 100%; */
        justify-content: space-between;
        align-items: stretch;
    }

    .project-template {
        box-sizing: border-box;
        width: 18em;
        height: 35rem;
        margin: 2px;
        /* background-color: white; */
        /* border: 1px solid white; */
        box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.45);
    }

    .project-template img{
        width: 100%;
        height: auto;
    }

    .project-template p{
        padding: 1rem;
        text-align: justify;
        height: 180px;
    }

    .myButtons{
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: 1rem;
    }

    button{
        margin-bottom: 0.2rem;
        padding: 1rem 1.2rem;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.6rem;
        font-size: medium;
        text-align: center;
        box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.45);
        border: none;
    }
    button:hover{
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
    button a{
        
        text-decoration: none;
        color: #000;
    }

    .links{
        color: white;
    }

      /* Responsive styling */
  @media (max-width: 900px) {
    .main{
        display: inline-block;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        align-items: center;
        grid-template-areas: 
            "header"
            "content"; 
        gap: 3rem;
        width: 100%;
        padding-block: 50px;
    }

    h1{
        writing-mode: vertical-lr;
        transform: rotate(-90deg);
        text-align: center;
        letter-spacing: 0.5rem;
        margin: -8rem auto -5rem auto;
        height: auto;
    }
    .myProjects{
        flex-direction: column;
        align-content: center;
    }
    button{
        margin-bottom: 0.1rem;
        padding: 0.8rem 1rem;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.4rem;
        font-size: small;
        text-align: center;
    }
   
  }
</style>