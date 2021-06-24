<template>
  <div class="d-flex justify-content-center mt-4" v-if="posters.pagination">
    <ul class="pagination pagination-sm" v-if="posters.pagination.lastPage > 1">
      <li class="page-item" :class="[posters.pagination.prevPage === null ? 'disabled' : '']">
        <a class="page-link" @click.prevent="prevPage" href="#"><i class='bx bxs-left-arrow'></i></a>
      </li>

      <li class="page-item"
      :class="{'disabled': paginationNumber.isDisable, 'active': paginationNumber.isActive}"
      v-for="paginationNumber in paginationNumbers"
      :key="paginationNumber.number" >
        <a class="page-link" href="#" @click.prevent="goPage(paginationNumber.number)">{{paginationNumber.number}}</a>
      </li>
      <li class="page-item" :class="[posters.pagination.nextPage === null ? 'disabled' : '']">
        <a class="page-link" @click.prevent="nextPage" href="#"><i class='bx bxs-right-arrow'></i></a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions({'searchPoster': 'todo/searchPoster'}),
    nextPage() {
      const searchQ = this.$route.query.s || ''
      const currentPage = this.$route.query.page || 1
      const pageQ = parseInt(currentPage)+1
      this.$router.push({query: { s: searchQ, page: pageQ }})
      this.searchPoster({type: this.$route.path, searchQ, pageQ})
    },
    prevPage() {
      const searchQ = this.$route.query.s || ''
      const currentPage = this.$route.query.page || 1
      const pageQ = parseInt(currentPage)-1
      this.$router.push({query: { s: searchQ, page: pageQ }})
      this.searchPoster({type: this.$route.path, searchQ, pageQ})

    },
    goPage(pageQ) {
      const searchQ = this.$route.query.s || ''
      this.$router.push({query: { s: searchQ, page: pageQ}})
      this.searchPoster({type: this.$route.path, searchQ, pageQ})
    }
  },
  computed: {
    ...mapGetters({'posters': 'todo/posters'}),
    paginationNumbers() {
      const li = []
      let i = this.posters.pagination.page > 3 ? this.posters.pagination.page - 2 : 1;

      if (i != 1) {
          li.push({number: '...', isActive: false, isDisable: true})
      }
      for (; i <= (this.posters.pagination.page + 2); i++) {
          if (i == this.posters.pagination.page && i !== this.posters.pagination.lastPage) {
              li.push({number: i, isActive: true, isDisable: false})
          } else if (i !== this.posters.pagination.lastPage) {
              li.push({number: i, isActive: false, isDisable: false})
          } else {
              if (i == this.posters.pagination.page) {
                  li.push({number: i, isActive: true, isDisable: false})
                  break
              }
              li.push({number: i, isActive: false, isDisable: false})
              break
          }
      }
      if (this.posters.pagination.page < this.posters.pagination.lastPage -2) {
          li.push({number: '...', isActive: false, isDisable: true})
      }
      return li
    }
  },
}
</script>