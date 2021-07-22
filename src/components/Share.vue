<template>
  <div>
    <div class="share" :class="{'active-share': !active}" @click="toggle"><i class='bx bxs-share-alt' ></i></div>
    <div class="share-div" :class="{'hide': active}">
      <a class="facebook" :href="[`https://www.facebook.com/sharer.php?u=${url}`]"><i class='bx bxl-facebook'></i></a>
      <a class="twitter" :href="[`https://twitter.com/intent/tweet?text=Mira ${infoTitle} online con la mejor calidad en PelisLatino&url=${url}&hashtags=pelislatino`]"><i class='bx bxl-twitter' ></i></a>
      <a class="whatsapp" :href="[`https://api.whatsapp.com/send?text=Mira ${infoTitle} online con la mejor calidad en PelisLatino, link: ${url}`]"><i class='bx bxl-whatsapp' ></i></a>
      <a class="linkedin" :href="[`https://www.linkedin.com/sharing/share-offsite/?url=${url}`]"><i class='bx bxl-linkedin' ></i></a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      url: window.location.href,
      active: true
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
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
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 200px;
    overflow: hidden;
    position: fixed;
    bottom: 90px;
    right: 20px;
    transition: transform .3s, height .3s;
  }

  .hide {
    height: 0px;
    transform: translateY(50px) scale(0);
  }
  
  .share-div a {
    z-index: 999;
    color: #fff;
    font-size: 1.6em;
    width: 100%;
    height: 25%;
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

</style>