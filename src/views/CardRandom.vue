<template>
    <div>
        <button @click="go">Update</button>
        <Card v-if="cardCount" v-bind:card="card"/>
        <p v-else>No cards</p>
    </div>
</template>

<script>
  import Card from '../components/Card';
  import CardsApi from "../CardsApi";
  import c from "../consts";
  import { TNumber } from 'xrsu';

  export default {
    data() {
      return {
        card: {
          title: null,
          comm: null,
          body: null,
          url: null
        },
        cardCount: 0,
      }
    },
    created() {
      this.go();
    },
    methods: {
      async go() {
        const countOj = await CardsApi.cardsAllCountGet();
        console.log('!!-!!-!! countOj {200717205734}\n', countOj); // del+
        if (!countOj.errorMessage) {
          const count = countOj.count;
          this.cardCount = count;
          if (count > 0) {
            const random = TNumber.random(count - 1);
            // ---
            const r = await CardsApi.cardByNumberGet(random);
            console.log('!!-!!-!! r {200717205743}\n', r); // del+
            if (!r.errorMessage) {
              this.card = r.data[0];
            } else {
              this.$toast.open({ ...c.other.toastOj, message: r.errorMessage, type: 'error' });
            }
          }
        } else {
          this.$toast.open({ ...c.other.toastOj, message: countOj.errorMessage, type: 'error' });
        }
      }
    },
    components: {
      Card
    }
  }
</script>

<style scoped>

</style>
