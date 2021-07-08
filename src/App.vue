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
    min-height: calc(100vh - 3em);
    position: relative;
    padding: 0 0 3em 0;
    margin: 0;
    background-color: #1D232B;
    --bg-dark: #161b21;

    --color-boton-primary: #4a5eb56b;
    --color-boton-primary-active: #4a5eb596;
    --color-boton-primary-shadow: #4a5eb56b;

    --color-boton-primary-card: #4a5eb56b;

    --color-boton-dark: #1a2438;
    --color-boton-dark-active: #161f30;
    --color-boton-dark-shadow: #161f3077;


    --card-background-color: #1e242b;
    --background-color-items: #00000051;
  }

  .bg-dark {
      background-color: var(--bg-dark)!important;
  }

  .btn-check:active+.btn-primary, .btn-check:checked+.btn-primary, .btn-primary.active, .btn-primary:active, .show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: var(--color-boton-primary-active);
    border-color: var(--color-boton-primary-active);
  }

  .btn-primary {
    color: #fff;
    background-color: var(--color-boton-primary);
    border-color: var(--color-boton-primary);
  }
  .btn-primary:hover {
    color: #fff;
    background-color: var(--color-boton-primary-active);
    border-color: var(--color-boton-primary-active);
  }

  .btn-check:active+.btn-primary:focus, .btn-check:checked+.btn-primary:focus, .btn-primary.active:focus, .btn-primary:active:focus, .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem var(--color-boton-primary-shadow);
  }

  .btn-check:active+.btn-dark, .btn-check:checked+.btn-dark, .btn-dark.active, .btn-dark:active, .show>.btn-dark.dropdown-toggle {
    color: #fff;
    background-color: var(--color-boton-dark-active);
    border-color: var(--color-boton-dark-active);
  }

  .btn-dark {
    color: #fff;
    background-color: var(--color-boton-dark);
    border-color: var(--color-boton-dark);
  }
  .btn-dark:hover {
    color: #fff;
    background-color: var(--color-boton-dark-active);
    border-color: var(--color-boton-dark-active);
  }

  .btn-check:active+.btn-dark:focus, .btn-check:checked+.btn-dark:focus, .btn-dark.active:focus, .btn-dark:active:focus, .show>.btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 .25rem var(--color-boton-dark-shadow);
  }

  .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: var(--color-boton-primary-card);
  }

  .card {
    background-color: var(--card-background-color);
  }
  .card-header-tabs .nav-link.active {
      background-color: var(--background-color-items);
      border-bottom-color: var(--background-color-items);
  }

  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
      border-color: var(--background-color-items);
  }

  .card-body {
    background-color: var(--background-color-items);
  }

</style>
