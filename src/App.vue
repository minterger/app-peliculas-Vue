<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer class="footer" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  body {
    min-height: 100vh;
    position: relative;
    padding: 0 0 3em 0;
    margin: 0;
  }

</style>
