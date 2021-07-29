<template>
  <vueper-slides
    class="no-shadow"
    :visible-slides="4"
    :arrows-outside="true"
    slide-multiple
    :gap="2"
    :slide-ratio="1 / 7"
    :dragging-distance="200"
    :breakpoints="{ 1200: { arrowsOutside: false }, 992: { arrowsOutside: false, visibleSlides: 3, slideMultiple: 3, slideRatio: 1 / 4 }, 576: { arrowsOutside: false, visibleSlides: 2, slideMultiple: 2, slideRatio: 1 / 3 } }">
    <vueper-slide 
      v-for="poster in posterLast" 
      :key="poster.i"
      :title="poster.title" 
      :image="poster.poster"
      @click.prevent="$router.push(poster.poster_link)"
      :link="poster.poster_link"
    />
  </vueper-slides>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  components: {
    VueperSlides, VueperSlide
  },
  methods: {
    ...mapActions({getLastUploaded: 'todo/getLastUploaded'})
  },
  computed: {
    ...mapGetters({posterLast: 'todo/posterLastUploaded'})
  },
  created() {
    this.getLastUploaded()
  }
}
</script>

<style>
.vueperslide {
  text-decoration: none;
}

.vueperslide__title {
  color: #fff;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 7px 10px;
}
</style>
