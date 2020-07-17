<template>
    <div class="card">
        <p class="cardTitle">{{card.title}}</p>
        <hr/>
        <p class="cardComm">{{card.comm}}</p>
        <p class="cardBody">{{card.body}}</p>
        <div v-if="card.url" v-html="mtUrl"></div>
        <p>id: {{card.id}}</p>
        <button v-on:click="$emit('card-remove', card.id)">Delete</button>
        <button v-on:click="$emit('card-edit', card.id)">Edit</button>
    </div>
</template>

<script>
  export default {
    name: "Card",
    props: ['card'],
    computed: {
      mtUrl() {
        return `<a href="${this.card.url}" target="_blank">${this.card.url}</a>`
      }
    }
  }
</script>

<style scoped>
    .card {
        display: block;
        border: solid 1px red;
        margin: 10px;
        background-color: beige;
    }

    .cardTitle {
        font-size: 130%;
        font-weight: bold;
    }

    .cardComm {
        font-size: 70%;
    }
</style>
