<template>
    <div class="card">
        <p class="cardTitle">{{card.title}}</p>
        <hr/>
        <p class="cardComm">{{card.comm}}</p>
        <p>{{card.body}}</p>
        <p>id: {{card.id}}</p>
        <button
                v-on:click="$emit('card-remove', card.id)"
        >Delete
        </button>
    </div>
</template>

<script>
  export default {
    name: "Card",
    props: ['card']
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
