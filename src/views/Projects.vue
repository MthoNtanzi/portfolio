<template>
    <div class="main">
        <h1>PROJECTS</h1>
        <div class="myProjects">
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
        grid-template-columns: min-content auto; /* Adjust column sizes */
        align-items: center;
        /* overflow: hidden; */
    }

    h1{
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
        width: 100%;
        justify-content: space-around;
    }

    .project-template {
        box-sizing: border-box;
        width: 18rem;
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
</style>