<template>
    <nav class="navbar" @click="handleOutsideClick"> <!-- Added click event to handle outside clicks -->
      <a href="#" class="navbar-brand"><img src="/Mthobisi_Ntanzi.png" alt=""></a>
      <span class="menu-toggle" @click="toggleMenu($event)">☰</span> <!-- Pass the event to toggleMenu -->
      <ul class="navbar-links">
        <li @click="closeMenu"><a href="#about">About Me</a></li> <!-- Added closeMenu on click -->
        <li @click="closeMenu"><a href="#education">Education</a></li> <!-- Added closeMenu on click -->
        <!-- <li @click="closeMenu"><a href="/games">Games</a></li> Added closeMenu on click -->
        <li @click="closeMenu"><a href="#projects">Projects</a></li> <!-- Added closeMenu on click -->
        <li @click="closeMenu"><a href="#contact">Contact</a></li> <!-- Added closeMenu on click -->
      </ul>
    </nav>
  </template>
  
  <style scoped>
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.8rem 0;
      padding: 1.8rem 3rem;
      color: #fff;
      z-index: 100;
    }
  
    .navbar-brand {
      font-size: 1.5em;
      font-weight: bold;
      color: #fff;
      text-decoration: none;
    }

    .navbar-brand img{
      width: 2.5rem;
    }
  
    .navbar-links {
      list-style: none;
      display: flex;
      gap: 20px;
      z-index: 100;
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
    @media (max-width: 800px) {
      .navbar-links {
        display: none;
        flex-direction: column;
        gap: 15px;
        position: absolute;
        top: 80px;
        right: 30px;
        background-color: #333;
        padding: 15px;
        border-radius: 8px;
        font-size: 0.7rem;
      }
  
      .navbar-links.show {
        display: flex;
      }
  
      .menu-toggle {
        display: block;
        color: #fff;
      }

      .navbar-brand{
        font-size: 0.9rem;
      }
    }
  </style>
  
  <script>
    export default {
      methods: {
        toggleMenu(event) {
          event.stopPropagation(); // Prevent the click event from triggering on the navbar
          document.querySelector('.navbar-links').classList.toggle('show');
        },
        closeMenu() {
          document.querySelector('.navbar-links').classList.remove('show'); // Close the menu when a menu item is clicked
        },
        handleOutsideClick(event) {
          // Prevent closing when clicking on the menu toggle icon
          if (event.target.closest('.menu-toggle')) return;
  
          const navbar = document.querySelector('.navbar');
          if (!navbar.contains(event.target)) { // If click is outside the navbar, close the menu
            this.closeMenu();
          }
        }
      }
    }
  </script>
  