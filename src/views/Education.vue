<template>
    <div class="main">
        <div class="education">
            <h1>EDUCATION</h1>
            <ul>
                <li>
                    <h2>2021</h2>
                    <h2>IT Varsity</h2>
                    <p>Diploma in Systems Development</p>
                </li>
                <li>
                    <h2>2021</h2>
                    <h2>Damelin College</h2>
                    <p>Diploma in Information Technology</p>
                </li>
            </ul>
        </div>
        <img src="../assets/img/education.jpg" alt="">
    </div>
</template>

<style scoped>
    .main{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items:flex-end;
    }

    .main img{
        max-height: 13rem;
        border-radius: 12rem;
    }

    /* h1{
        font-size: 3rem;
    }

    h3{
        font-size: 1.5rem;
    } */

    ul{
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    li{
        margin: 1.7rem 0;
    }

    li *{
        margin: 0.4rem 0;
    }
</style>