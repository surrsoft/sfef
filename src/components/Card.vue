<template>
    <div class="card">
        <div class="cardTitle">{{card.title}}</div>
        <div v-if="card.comm" class="cardComm">{{card.comm}}</div>
        <div class="cardBody">{{card.body}}</div>
        <div v-if="card.url" v-html="mtUrl"></div>
        <div class="idn">id: {{card.id}}</div>
        <div class="btnx-blk">
            <b-button
                    class="btnx btnx__delete"
                    v-on:click="$emit('card-remove', card.id)"
                    variant="outline-primary"
                    size="sm"
            >Delete
            </b-button>
            <b-button
                    class="btnx"
                    v-on:click="$emit('card-edit', card.id)"
                    variant="outline-primary"
                    size="sm"
            >Edit
            </b-button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Card",
    props: ['card'],
    computed: {
      mtUrl() {
        return `<a class="card-link" href="${this.card.url}" target="_blank">${this.card.url}</a>`
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
        margin: 0px 5px 0px 5px;
    }

    .btnx-blk {
        /*background-color: beige;*/
        margin-top: 20px;
        /*float: right;*/
    }
</style>
