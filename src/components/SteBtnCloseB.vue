<template>
    <div class="cont1">
        <b-button
                variant="link"
                size="sm"
                v-on:click="$emit('card-edit-2')"
        >
            <b-icon icon="pencil" aria-hidden="true"></b-icon>
        </b-button>

        <b-button
                variant="link"
                size="sm"
                v-b-modal="'modal-'+card.id"
        >
            <b-icon icon="x-circle" aria-hidden="true"></b-icon>
        </b-button>

        <b-modal
                id="'modal-'+card.id"
                title="Deleting"
                v-on:ok=""
        >Are you sure?
        </b-modal>
    </div>
</template>

<script>
  export default {
    props: ['card'],
    methods: {
      okHandle() {
        console.log(`!!-!!-!! -> okHandle() {200720145612}:${Date.now()}`); // del+
        this.$emit('card-delete-2');
      }
    }
  }
</script>

<style scoped>
    .cont1 {
        position: absolute;
        top: 10px;
        right: 8px;
    }
</style>
