<template>
  <div>
    <div class="share" :class="{'active-share': !active}" @click="toggle"><i class='bx bxs-share-alt' ></i></div>
    <div class="share-div" :class="{'hide': active}">
      <a class="facebook" title="Compartir en Facebook" :href="[`https://www.facebook.com/sharer.php?u=${url}`]" target="_blank"><i class='bx bxl-facebook'></i></a>
      <a class="twitter" title="Compartir en Twitter" :href="[`https://twitter.com/intent/tweet?text=Mira ${infoTitle} online con la mejor calidad en PelisLatino&url=${url}&hashtags=pelislatino`]" target="_blank"><i class='bx bxl-twitter' ></i></a>
      <a class="whatsapp" title="Compartir en Whatsapp" :href="[`https://api.whatsapp.com/send?text=Mira ${infoTitle} online con la mejor calidad en PelisLatino, link: ${url}`]" target="_blank"><i class='bx bxl-whatsapp' ></i></a>
      <a class="linkedin" title="Compartir en Linkedin" :href="[`https://www.linkedin.com/sharing/share-offsite/?url=${url}`]" target="_blank"><i class='bx bxl-linkedin' ></i></a>
      <a class="url" title="Copiar Url" @click.prevent="getlink" :href="url"><i class='bx bx-link-alt'></i></a>
    </div>
    <div>
      <span class="copy" :class="{'hide-url': !copyAlert}">Copiado</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      url: window.location.href,
      active: true,
      copyAlert: false
    }
  },
  methods: {
    toggle() {
      this.copyAlert = false;
      this.active = !this.active
    },
    getlink() {
      var aux = document.createElement("input");
      aux.setAttribute("value", this.url);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
      this.copyAlert = true;
      setTimeout(() => {
        this.copyAlert = false;
      }, 1500)
    }
  },
  watch: {
    '$route.path'() {
      this.url = window.location.href
    }
  },
  computed: {
    ...mapGetters({'infoTitle': 'todo/infoTitle'}),
  }
}
</script>

<style scoped>
  .share {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50px;
    background-color: #0E1014;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: transform .25s, background-color .3s;
    z-index: 999999;
  }
  
  .share i {
    font-size: 1.7em;
  }

  .share:hover, .active-share {
    background-color: #090a0c;
    transform: scale(1.15);
  }

  .share-div {
    z-index: 99999;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 250px;
    overflow: hidden;
    position: fixed;
    bottom: 90px;
    right: 20px;
    transition: transform .3s, height .3s, visibility .3s;
  }

  .hide {
    height: 0px;
    transform: translateY(50px) scale(0);
    visibility: hidden;
  }
  
  .share-div a {
    color: #fff;
    font-size: 1.6em;
    width: 100%;
    height: 20%;
    text-align: center;
    line-height: 50px;
    transition: background-color .4s;
  }

  .share-div a i {
    transition: transform .3s;
  }

  .facebook {
    background-color: rgb(66, 103, 178);
  }
  .facebook:hover {
    background-color: rgb(66, 93, 178);
  }
  .facebook:hover i {
    transform: scale(1.15);
  }

  .twitter {
    background-color: rgb(29, 161, 242);
  }
  .twitter:hover {
    background-color: rgba(29, 151, 242);
  }
  .twitter:hover i {
    transform: scale(1.15);
  }

  .whatsapp {
    background-color: rgb(37, 211, 102);
  }
  .whatsapp:hover {
    background-color: rgb(37, 201, 102);
  }
  .whatsapp:hover i {
    transform: scale(1.15);
  }

  .linkedin {
    background-color: rgb(0, 114, 177);
    }
  .linkedin:hover {
    background-color: rgb(0, 104, 177);
    }
  .linkedin:hover i {
    transform: scale(1.15);
  }

  .url {
    background-color: rgb(38, 55, 63);
  }
  .url:hover {
    background-color: rgb(38, 45, 63);
  }
  .url:hover i {
    transform: scale(1.15);
  }

  .copy {
    z-index: 99;
    position: fixed;
    color: #fff;
    overflow: hidden;
    background-color: crimson;
    border-radius: 5px;
    width: 75px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    bottom: 100px;
    right: 80px;
    transition: transform .3s, width .3s, visibility .3s;
  }
  .hide-url {
    /* transform: translateX(20px); */
    visibility: hidden;
    transform: scaleY(0);
    /* width: 0; */
  }

</style>