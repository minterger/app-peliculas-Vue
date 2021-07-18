<template>
  <div>
    <div class="share" @click="toggle"><i class='bx bxs-share-alt' ></i></div>
    <div class="share-div" :class="{hide: active}">
      <a class="facebook" :href="[`https://www.facebook.com/sharer.php?u=${url}`]"><i class='bx bxl-facebook'></i></a>
      <a class="twitter" :href="[`https://twitter.com/intent/tweet?text=ver ${infoTitle} online en pelislatino.ga&url=${url}&hashtags=pelislatino`]"><i class='bx bxl-twitter' ></i></a>
      <a class="whatsapp" :href="[`https://api.whatsapp.com/send?text=ver ${infoTitle} online en ${url}`]"><i class='bx bxl-whatsapp' ></i></a>
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
  },
  created() {
    console.log(this.$route.params);
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
    transition: transform .3s;
    z-index: 999999;
  }
  
  .share i {
    font-size: 1.7em;
  }

  .share:hover {
    transform: scale(1.2);
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
    transition: transform .5s, height .5s;
  }

  .hide {
    height: 0px;
    transform: translateY(50px);
  }
  
  .share-div a {
    z-index: 999;
    color: #fff;
    font-size: 1.6em;
    width: 100%;
    height: 25%;
    text-align: center;
    line-height: 50px;
    transition: transform .4s, background-color .4s;
  }

  .facebook {
    background-color: rgb(66, 103, 178);
  }
  .facebook:hover {
    background-color: rgba(66, 103, 178, .8);
    transform: scale(1.1);
  }

  .twitter {
    background-color: rgb(29, 161, 242);
  }
  .twitter:hover {
    background-color: rgba(29, 160, 242, .8);
    transform: scale(1.1);
  }

  .whatsapp {
    background-color: rgb(37, 211, 102);
  }
  .whatsapp:hover {
    background-color: rgb(37, 211, 102, .8);
    transform: scale(1.1);
  }

  .linkedin {
    background-color: rgb(0, 114, 177);
  }
  .linkedin:hover {
    background-color: rgb(0, 114, 177, .8);
    transform: scale(1.1);
  }

</style>