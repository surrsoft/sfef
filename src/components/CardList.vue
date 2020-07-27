<template>
    <div>
        <Paginate
                v-bind:pPagPageElemsCount="pPagPageElemsCount"
                v-bind:pPagPageCurr="pPagPageCurr"
                v-bind:pPagTotalCount="pPagTotalCount"
                v-on:pag-page-change="pagPageChangeHandle"
        />
        <div v-for="card in pCards">
            <Card
                    v-bind:card="card"
                    v-on:card-remove="cardRemoveHandle0"
                    v-on:card-edit="cardEditHandle"
            />
        </div>
    </div>
</template>

<script>
  import Card from './Card'
  import Paginate from './Paginate';
  import * as Utils from "../utils/Utils";

  export default {
    name: "CardList",
    props: [
      'pCards',
      'pPagPageElemsCount',
      'pPagPageCurr',
      'pPagTotalCount'
    ],
    components: {
      Card,
      Paginate
    },
    methods: {
      cardRemoveHandle0(id) {
        this.$emit('card-remove', id)
      },
      pagPageChangeHandle(pageNum) {
        this.$emit('pag-page-change', pageNum);
      },
      cardEditHandle(id) {
        Utils.cardEditTo(this, id);
      }
    }
  }
</script>

<style scoped>

</style>
