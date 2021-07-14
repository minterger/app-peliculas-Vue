<template>
  <div class="mt-3">
    <div class="text-center">
      <router-link
        class="btn btn-primary mb-3 mx-1"
        v-for="item in navegacion"
        :key="item"
        :to="item.href"
      >
        {{ item.text }}
      </router-link>
    </div>
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
                >Opcion {{ n }}</a
              >
            </li>
          </ul>
        </div>
        <!-- <div class="card-body" :id="$route.hash.replace('#', '')"> -->
        <div class="card-body">
          <div class="ratio ratio-16x9">
            <iframe :title="['Reproductor de Video ' + (active + 1)]" :src="opReproductores[active]" allowfullscreen>
              <p>Tu Navegador No Soporta iframes</p>
            </iframe>
          </div>
        </div>
      </div>
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
      if (info.match(/\/\w{5}\/((\w+\-)+)?(\w+)\//g)) {
        this.updateReproductores({ info });
      }
    }
  },
  methods: {
    ...mapActions({
      updateReproductores: "todo/updateReproductores",
    })
  },
  created() {
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