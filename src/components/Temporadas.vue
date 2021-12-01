<template>
  <div class="my-3">
    <div class="card text-center" v-if="temporadas.seasons">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item" v-for="n in temporadas.seasons" :key="n">
            <a
              class="nav-link"
              :class="[n === active + 1 ? 'active' : '']"
              aria-current="true"
              :href="[`#temp${n}`]"
              >Temporada {{ n }}</a
            >
          </li>
        </ul>
      </div>
      <!-- <div class="card-body" :id="$route.hash.replace('#', '')"> -->
      <div class="card-body">
        <div class=" d-grid gap-2" v-if="temporadas">
          <router-link
            class="btn btn-info"
            v-for="capitulo in capitulos"
            :key="capitulo"
            :to="capitulo.href"
            >{{ capitulo.title }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      active: 0,
    };
  },
  watch: {
    "$route.hash"() {
      this.active = this.$route.hash
        ? parseInt(this.$route.hash.replace("#temp", "")) - 1
        : 0;
    },
  },
  computed: {
    ...mapGetters({
      temporadas: "todo/temporadas",
    }),
    capitulos() {
      if (this.temporadas.chapters) {
        return this.temporadas.chapters[this.active];
      }
      return [];
    },
  },
  mounted() {
    if (this.$route.hash) {
      this.active = this.$route.hash.replace("#temp", "") - 1;
    }
  },
};
</script>

<style scoped>
.nav-tabs::-webkit-scrollbar {
  width: 12px;
  height: 12px;
  background-color: #202630;
}
.nav-tabs::-webkit-scrollbar-corner {
  background-color: #202630;
}
.nav-tabs::-webkit-scrollbar-thumb {
  background-color: #5d616a;
  border-radius: 50px;
  border: 3px solid #202630;
}
.nav-tabs::-webkit-scrollbar-thumb:hover {
  background-color: #4e535e;
}
.nav-tabs::-webkit-scrollbar-thumb:active {
  background-color: #435ac0;
}

.nav-tabs {
  display: flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
}

.nav-item {
  white-space: nowrap;
  overflow: none;
}
</style>
