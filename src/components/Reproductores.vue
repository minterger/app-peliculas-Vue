<template>
  <div class="mt-3">
    
    <!-- Vista de la tarjeta de reproductores -->
    <div v-if="opReproductores.length">
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-pills card-header-pills">
            <li class="nav-item" v-for="n in opReproductores.length" :key="n">
              <a
                class="nav-link"
                :class="[n === active + 1 ? 'active' : '']"
                aria-current="true"
                :href="[`#opc${n}`]"
                >Opcion {{ n }}</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="ratio ratio-16x9">
            <iframe :title="['Reproductor de Video ' + (active + 1)]" :src="opReproductores[active]" allowfullscreen>
              <p>Tu Navegador No Soporta iframes</p>
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- vista de opciones para capitulos -->
    <div v-if="navegacion" class="d-grid d-sm-block mx-auto col-sm-12 col-8 text-center mt-3">
      <router-link
        class="btn btn-primary mt-1 mx-1"
        v-for="item in navegacion"
        :key="item"
        :to="item.href"
      >
        {{ item.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    ...mapGetters({
      reproductores: "todo/reproductores",
    }),
    opReproductores() {
      return this.reproductores.reproductores
        ? this.reproductores.reproductores
        : [];
    },
    navegacion() {
      return this.reproductores.navegacion
        ? this.reproductores.navegacion
        : [];
    },
  },
  watch: {
    '$route.hash'() {
      this.active = parseInt(this.$route.hash.replace("#opc", "")) - 1 || 0

    },
    '$route.path'() {
      const info = this.$route.path
      if (this.$route.params.name) {
        if (this.$route.name == 'Pelicula') {
          this.getReproductores({type: '/pelicula/rep', info: this.$route.params.name})
        } else if (info.match(/\/\w{5}\/((\w+\-)+)?(\w+)\//g)) {
          this.updateReproductores({ info });
        }
      }
    }
  },
  methods: {
    ...mapActions({
      updateReproductores: "todo/updateReproductores",
      getReproductores: 'todo/getReproductores'
    })
  },
  mounted() {
    if (this.$route.hash) {
      this.active = this.$route.hash.replace("#opc", "") - 1;
    }
  },
};
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .ratio {
    transform: scale(1.05);
  }
}
</style>