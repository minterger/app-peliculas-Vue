<template>
  <vueper-slides
    class="no-shadow"
    :touchable="false"
    :visible-slides="4"
    :arrows-outside="true"
    slide-multiple
    :gap="2"
    :slide-ratio="1 / 7"
    :dragging-distance="200"
    :breakpoints="optionBreakPoint"
  >
    <vueper-slide
      v-for="poster in posterLast"
      :key="poster.i"
      :title="poster.title"
      :image="poster.poster"
      @click.prevent="goToLink(poster.poster_link)"
      :link="poster.poster_link"
    />
  </vueper-slides>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  data() {
    return {
      optionBreakPoint: {
        1200: {
          arrowsOutside: false
        },
        992: {
          arrowsOutside: false,
          visibleSlides: 3,
          slideMultiple: 3,
          slideRatio: 1 / 4
        },
        576: {
          arrowsOutside: false,
          visibleSlides: 2,
          slideMultiple: 2,
          slideRatio: 1 / 3
        }
      }
    }
  },
  components: {
    VueperSlides, VueperSlide
  },
  methods: {
    ...mapActions({getLastUploaded: 'todo/getLastUploaded'}),
    ...mapMutations({
      updateInfo: 'todo/updateInfo',
      updateReproductores: 'todo/updateReproductores'
    }),
    goToLink(link) {
      this.$router.push(link)
      this.updateInfo()
      this.updateReproductores()
    }
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
