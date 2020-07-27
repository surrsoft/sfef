<template>
    <div>
        <h1>Create new card</h1>
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
            <label> Url:
                <input type="text" v-model="url">
            </label>
            <b-button variant="outline-primary" type="submit">Save</b-button>
        </form>
    </div>
</template>

<script>
  import { trim } from 'lodash';
  import CardsApi from '../CardsApi';
  import c from '../consts';

  export default {
    props: ['isEdit', 'card'],
    data() {
      return {
        title: null,
        comm: null,
        body: null,
        url: null,
        cardId: -1
      }
    },
    created() {
      console.log('!!-!!-!! this.$route.params {200715113230}\n', this.$route.params); // del+
      this.cardId = this.$route.params.id;
    },
    methods: {
      onSubmit() {
        console.log('submit', this.title) // del
        const card = {
          title: trim(this.title),
          comm: trim(this.comm),
          body: trim(this.body),
          url: trim(this.url),
        }
        CardsApi.cardCreate(card)
          .then(r => {
            console.log('!!-!!-!! r {200713190435}\n', r); // del+
            if (r.data) {
              this.$toast.open({ ...c.other.toastOj, message: 'created' });
            } else {
              this.$toast.open({ ...c.other.toastOj, message: r.errorMessage, type: 'error' });
            }
          })
      },
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
