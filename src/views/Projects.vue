<template>
    <div class="main">
        <h1 id="projects-title">PROJECTS</h1>
        <div class="myProjects" aria-labelledby="projects-title">
            <div class="project-template">
                <img src="../assets/img/projects.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi voluptatem eveniet esse deleniti, nisi rem laboriosam. Aspernatur dolore neque illo aliquam natus, ut necessitatibus rerum officiis, odio magnam laboriosam.</p>
                <div class="myButtons">
                    <button>
                        <a href="/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </button>
                    <button>
                        <a href="/" target="_blank" rel="noopener noreferrer">View Repo</a>
                    </button>
                </div>
            </div>
            <div class="project-template">
                <img src="../assets/img/projects.jpg" alt="">
                <p>Lorem ipsum dolor sit amiti, nisi rem laboriosam. Aspernatur dolore neque illo aliquam natus, ut necessitatibus rerum officiis, odio magnam laboriosam.</p>
                <div class="myButtons">
                    <button>
                        <a href="/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </button>
                    <button>
                        <a href="/" target="_blank" rel="noopener noreferrer">View Repo</a>
                    </button>
                </div>
            </div>
            <div class="project-template">
                <img src="../assets/img/projects.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi voluptatem eveniet esse deleniti, nisi rem laboriosam. Aspernatur dolore neque illo aliquam natus, ut necessitatibus rerum officiis, odio magnam laboriosam.</p>
                <div class="myButtons">
                    <button>
                        <a href="/" target="_blank" rel="noopener noreferrer">View Project</a>
                    </button>
                    <button>
                        <a href="/" target="_blank" rel="noopener noreferrer">View Repo</a>
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
    }

    h1{
        writing-mode: vertical-lr;
        transform: rotate(-90deg);
        text-align: center;
        letter-spacing: 0.5rem;
        /* margin: -8rem 0 -5rem 0; */
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