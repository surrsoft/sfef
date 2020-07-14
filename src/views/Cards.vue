<template>
    <div>
        <h2>Cards</h2>
        <div>
            <button v-on:click="addClickHandle">New card</button>
        </div>
        <div v-if="loading" class="loading">Загрузка ...</div>
        <div v-if="error" class="errorMsg">{{error}}</div>
        <CardList
                v-if="cards"
                v-bind:pCards="cards"
                v-bind:pPagPageElemsCount="pagPageElemsCount"
                v-bind:pPagPageCurr="pagPageCurr"
                v-bind:pPagTotalCount="pagTotalCount"
                v-on:card-remove="cardRemoveHandle"
                v-on:pag-page-change="pagPageChangeHandle"
        />
    </div>
</template>

<script>
  import CardList from '../components/CardList'
  import CardsApi from '../CardsApi'
  import c from '../consts';

  export default {
    name: 'App',
    data() {
      return {
        loading: false,
        error: null,
        cards: null,
        pagPageElemsCount: 3,
        pagPageCurr: 1,
        pagTotalCount: 0
      }
    },
    created() {
      this.cards = this.cardsGet();
    },
    methods: {
      cardsGet() {
        this.cards = null
        this.error = null
        this.loading = true
        // ---
        CardsApi.cardsDiapGet(this.pagPageCurr, this.pagPageElemsCount)
          .then(r => {
            console.log('!!-!!-!! r {200714190030}\n', r); // del+
            this.loading = false
            if (!r.errorMessage) {
              this.cards = r.data;
              this.pagTotalCount = r.resultCode;
            } else {
              this.$toast.open(Object.assign(c.other.toastOj, { message: r.errorMessage, type: 'error' }));
            }
          })
      },
      addClickHandle() {
        console.log('add clicked')
        this.$router.push('/cardadd')
      },
      cardRemoveHandle(id) {
        console.log('!!-!!-!! id {200714101858}\n', id); // del+
        CardsApi.cardDelete(id)
          .then(r => {
            console.log('!!-!!-!! r {200714102341}\n', r); // del+
            const toastOj = {
              duration: 3000,
              position: 'top-right'
            }
            if (!r.errorMessage) {
              this.$toast.open(Object.assign(toastOj, { message: 'deleted' }));
              // ---
              this.cards = this.cards.filter(card => card.id !== id)
            } else {
              this.$toast.open(Object.assign(toastOj, { message: r.errorMessage, type: 'error' }));
            }
          })
      },
      pagPageChangeHandle(pageNum) {
        console.log(`!!-!!-!! -> pagPageChangeHandle() {200714211058}:${Date.now()}`); // del+
        console.log('!!-!!-!! pageNum {200714211107}\n', pageNum); // del+
        this.pagPageCurr = pageNum;
        this.cardsGet();
      }
    },
    components: {
      CardList
    }
  }
</script>
