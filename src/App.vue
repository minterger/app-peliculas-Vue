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

  *::-webkit-scrollbar {
    width: 11px;
    background-color: #12161C;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #2A3A7E;
    border-radius: 50px;
    border: 2px solid #12161C;
  }

  *::-webkit-scrollbar-track {

  }

</style>
