<template>
  <div class="d-flex justify-content-center mt-4" v-if="posters.pagination">
    <ul class="pagination pagination-sm" v-if="posters.pagination.lastPage > 1">
      <li
        class="page-item"
        :class="[posters.pagination.prevPage === null ? 'disabled' : '']"
      >
        <router-link
          class="page-link"
          title="Pagina Anterior"
          @click="goPage(prevPage)"
          :to="{ query: { s: searchQ, page: prevPage } }"
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
          @click="goPage(paginationNumber.number)"
          :to="{ query: { s: searchQ, page: paginationNumber.number } }"
          >{{ paginationNumber.number }}</router-link
        >
      </li>
      <li
        class="page-item"
        :class="[posters.pagination.nextPage === null ? 'disabled' : '']"
      >
        <router-link
          class="page-link"
          title="Pagina Siguiente"
          @click="goPage(nextPage)"
          :to="{ query: { s: searchQ, page: nextPage } }"
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
    ...mapActions({ searchPoster: "todo/searchPagePoster" }),
    goPage(pageQ) {
      this.searchPoster({
        type: this.$route.path,
        searchQ: this.searchQ,
        pageQ,
      });
    },
  },
  computed: {
    ...mapGetters({ posters: "todo/posters" }),
    searchQ() {
      return this.$route.query.s || "";
    },
    nextPage() {
      return parseInt(this.$route.query.page || 1) + 1;
    },
    prevPage() {
      return parseInt(this.$route.query.page || 1) - 1;
    },
    paginationNumbers() {
      const li = [];
      let i =
        this.posters.pagination.page > 3 ? this.posters.pagination.page - 2 : 1;

      if (i != 1) {
        li.push({ number: "...", isActive: false, isDisable: true });
      }
      for (; i <= this.posters.pagination.page + 2; i++) {
        if (
          i == this.posters.pagination.page &&
          i !== this.posters.pagination.lastPage
        ) {
          li.push({ number: i, isActive: true, isDisable: false });
        } else if (i !== this.posters.pagination.lastPage) {
          li.push({ number: i, isActive: false, isDisable: false });
        } else {
          if (i == this.posters.pagination.page) {
            li.push({ number: i, isActive: true, isDisable: false });
            break;
          }
          li.push({ number: i, isActive: false, isDisable: false });
          break;
        }
      }
      if (this.posters.pagination.page < this.posters.pagination.lastPage - 2) {
        li.push({ number: "...", isActive: false, isDisable: true });
      }
      return li;
    },
  },
};
</script>