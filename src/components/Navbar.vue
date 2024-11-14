<template>
     <nav class="navbar">
        <router-link to="/" class="navbar-brand">Mthobisi Ntanzi</router-link>
        <span class="menu-toggle" @click="toggleMenu">☰</span>
        <ul class="navbar-links">
            <li><router-link to="/about">About Me</router-link></li>
            <li><router-link to="/education">Education</router-link></li>
            <li><router-link to="/experience">Experience</router-link></li>
            <li><router-link to="/project">Project</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
    .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1.8rem 3rem;
    color: #fff;
}

.navbar-brand {
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
}

.navbar-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.navbar-links li {
    display: inline;
}

.navbar-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1.3em;
}

.navbar-links a:hover {
    text-decoration: underline;
    text-underline-offset: 1rem;
}

/* Mobile Menu */
.menu-toggle {
    display: none;
    font-size: 1.5em;
    cursor: pointer;
}

/* Responsive styling */
@media (max-width: 768px) {
    .navbar-links {
        display: none;
        flex-direction: column;
        gap: 15px;
        position: absolute;
        top: 60px;
        right: 30px;
        background-color: #333;
        padding: 15px;
        border-radius: 8px;
    }

    .navbar-links.show {
        display: flex;
    }

    .menu-toggle {
        display: block;
        color: #fff;
    }
}
</style>

<script>
    export default {
    methods: {
        toggleMenu() {
            document.querySelector('.navbar-links').classList.toggle('show');
        }
        }    
    }
      
</script>