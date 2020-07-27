<template>
    <div>
        <h1>Edit card</h1>
        <form v-on:submit.prevent="onSubmit">
            <label> Title:
                <input type="text" v-model="title">
            </label>
            <label> Comment:
                <input type="text" v-model="comm">
            </label>
            <label> Body:
                <input type="text" v-model="body">
            </label>
            <label> URL:
                <input type="text" v-model="url">
            </label>
            <b-button variant="outline-primary" type="submit">Save</b-button>
        </form>
    </div>
</template>

<script>
  import CardsApi from "../CardsApi";
  import c from "../consts";
  import { get } from 'lodash';

  export default {
    data() {
      return {
        title: null,
        comm: null,
        body: null,
        url: null,
        cardId: -1,
        card: null,
      }
    },
    async created() {
      this.cardId = this.$route.params.id;
      console.log('!!-!!-!! this.cardId {200715190044}\n', this.cardId); // del+
      // ---
      const r = await CardsApi.cardGet(this.cardId);
      console.log('!!-!!-!! r {200715213153}\n', r); // del+
      if (r.errorMessage) {
        this.$toast.open({ ...c.other.toastOj, message: r.errorMessage, type: 'error' });
      } else {
        this.card = get(r, 'data');
        this.title = get(r, 'data.title');
        this.comm = get(r, 'data.comm');
        this.body = get(r, 'data.body');
        this.url = get(r, 'data.url');
      }
    },
    methods: {
      onSubmit() {
        const cardCurr = {
          id: this.card.id,
          title: this.title,
          comm: this.comm,
          body: this.body,
          url: this.url
        }
        CardsApi.cardUpdate(cardCurr)
          .then(r => {
            if (r.data) {
              this.$toast.open({ ...c.other.toastOj, message: 'updated' });
            } else {
              this.$toast.open({ ...c.other.toastOj, message: r.errorMessage, type: 'error' });
            }
          })
      }
    }
  }
</script>

<style scoped>
    form {
        display: block;
    }

    input {
        width: 400px;
    }

    label {
        display: block;
        margin: 10px;
    }
</style>
