<template>
  <div class="mt-3">
    <div class="text-center">
      <router-link
        class="btn btn-primary mb-3 mx-1"
        v-for="item in navegacion"
        :key="item"
        :to="item.href"
        @click="updateRep(item.href)"
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
                @click="changeRep(n)"
                aria-current="true"
                :href="[`#opc${n}`]"
                >Opcion {{ n }}</a
              >
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="ratio ratio-16x9">
            <iframe :src="opReproductores[active]" allowfullscreen></iframe>
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
  methods: {
    ...mapActions({
      updateReproductores: "todo/updateReproductores",
    }),
    changeRep(n) {
      this.active = n - 1;
    },
    updateRep(info) {
      if (info.match(/\/\w{5}\/((\w+\-)+)?(\w+)\//g)) {
        this.updateReproductores({ info });
      }
    },
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