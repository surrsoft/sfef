<template>
    <div class="overflow-auto">
        <b-pagination
                :value="pPagPageCurr"
                @input="pagPageCurrNewHandle"
                :total-rows="rows"
                :per-page="pPagPageElemsCount"
                aria-controls="my-table"
                align="center"
        ></b-pagination>
    </div>
</template>

<script>
  export default {
    name: 'Paginate',
    props: [
      'pPagPageElemsCount',
      'pPagPageCurr',
      'pPagTotalCount'
    ],
    computed: {
      rows() {
        return this.pPagTotalCount;
      },
    },
    methods: {
      pagPageCurrNewHandle(pageNum) {
        console.log('!!-!!-!! pageNum {200714183913}\n', pageNum); // del+
        this.$emit('pag-page-change', pageNum);
      }
    }
  }
</script>
