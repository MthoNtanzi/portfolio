<template>
  <Navbar />
  <div>
    <section id="home"><HomeView /></section>
    <section id="about"><AboutMe /></section>
    <section id="education"><Education /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import HomeView from './views/HomeView.vue';
  import AboutMe from './views/AboutMe.vue';
  import Education from './views/Education.vue';
  import Projects from './views/Projects.vue';
  import Contact from './views/Contact.vue';

  export default {
    components: {
      Navbar,
      HomeView,
      AboutMe,
      Education,
      Projects,
      Contact
    }
}
</script>