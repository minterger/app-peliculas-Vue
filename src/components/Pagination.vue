<template>
  <div class="d-flex justify-content-center mt-4" v-if="pagination">
    <ul class="pagination pagination-sm" v-if="pagination.lastPage > 1">
      <li
        class="page-item"
        :class="[pagination.prevPage === null ? 'disabled' : '']"
      >
        <router-link
          class="page-link"
          title="Pagina Anterior"
          :to="{ query: { page: prevPage } }"
          @click="goPage(prevPage)"
          ><i class="bx bxs-left-arrow"></i
        ></router-link>
      </li>

      <li
        class="page-item"
        :class="{
          disabled: paginationNumber.isDisable,
          active: paginationNumber.isActive,
        }"
        v-for="paginationNumber in paginationNumbers"
        :key="paginationNumber.number"
      >
        <router-link
          class="page-link"
          :to="{ query: { page: paginationNumber.number } }"
          @click="goPage(paginationNumber.number)"
          >{{ paginationNumber.number }}</router-link
        >
      </li>
      <li
        class="page-item"
        :class="[pagination.nextPage === null ? 'disabled' : '']"
      >
        <router-link
          class="page-link"
          title="Pagina Siguiente"
          :to="{ query: { page: nextPage } }"
          @click="goPage(nextPage)"
          ><i class="bx bxs-right-arrow"></i
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({ getPosters: "todo/getPagePosters" }),
    goPage(page) {
      this.getPosters({ type: this.$route.path, query: page });
    },
  },
  computed: {
    ...mapGetters({ pagination: "todo/pagination" }),
    nextPage() {
      return parseInt(this.$route.query.page || 1) + 1;
    },
    prevPage() {
      return parseInt(this.$route.query.page || 1) - 1;
    },
    paginationNumbers() {
      const li = [];
      let i =
        this.pagination.page > 3 ? this.pagination.page - 2 : 1;

      if (i != 1) {
        li.push({ number: "...", isActive: false, isDisable: true });
      }
      for (; i <= this.pagination.page + 2; i++) {
        if (
          i == this.pagination.page &&
          i !== this.pagination.lastPage
        ) {
          li.push({ number: i, isActive: true, isDisable: false });
        } else if (i !== this.pagination.lastPage) {
          li.push({ number: i, isActive: false, isDisable: false });
        } else {
          if (i == this.pagination.page) {
            li.push({ number: i, isActive: true, isDisable: false });
            break;
          }
          li.push({ number: i, isActive: false, isDisable: false });
          break;
        }
      }
      if (this.pagination.page < this.pagination.lastPage - 2) {
        li.push({ number: "...", isActive: false, isDisable: true });
      }
      return li;
    },
  },
};
</script>