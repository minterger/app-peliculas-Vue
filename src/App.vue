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
    width: 12px;
    background-color: #151a21;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #5d616a;
    border-radius: 50px;
    border: 3px solid #12161C;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: #4e535e
  }
  *::-webkit-scrollbar-thumb:active {
    background-color: #435ac0;
  }

</style>
