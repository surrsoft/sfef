<template>
    <div class="card">
        <div class="cardTitle">{{card.title}}</div>
        <div v-if="card.comm" class="cardComm">{{card.comm}}</div>
        <div class="cardBody">{{card.body}}</div>
        <div v-if="card.url" v-html="mtUrl"></div>
        <div class="idn">id: {{card.id}}</div>
        <SteBtnCloseB
                v-on:card-edit-2="cardEditHandle"
                v-on:card-delete-2="cardDeleteHandle"
                v-bind:card="card"
        />

    </div>
</template>

<script>
  import SteBtnCloseB from './SteBtnCloseB';
  import * as Utils from "../utils/Utils";

  export default {
    name: "Card",
    props: ['card'],
    computed: {
      mtUrl() {
        return `<a class="card-link" href="${this.card.url}" target="_blank">${this.card.url}</a>`
      }
    },
    components: {
      SteBtnCloseB,
    },
    methods: {
      cardEditHandle(){
        console.log(`!!-!!-!! -> cardEditHandle() {200719195541}:${Date.now()}`); // del+
        Utils.cardEditTo(this, this.card.id);
      },
      cardDeleteHandle(){
        console.log(`!!-!!-!! -> :::::::::::::: cardDeleteHandle() {200809000013}:${Date.now()}`) // del+
        this.$emit('card-remove', this.card.id);
      }
    }
  }
</script>

<style scoped>
    .card {
        display: block;
        border: solid 1px lightgray;
        border-radius: 10px;
        margin: 20px;
        padding: 10px 10px 15px 10px;
        background-color: white;
    }

    .cardTitle {
        font-size: 130%;
        font-weight: bold;
    }

    .cardComm, .idn {
        font-size: 70%;
    }

    .btnx {
        border-radius: 6px;
        margin: 0 5px 0 5px;
    }

    .btnx-blk {
        /*background-color: beige;*/
        margin-top: 20px;
        /*float: right;*/
    }
</style>
