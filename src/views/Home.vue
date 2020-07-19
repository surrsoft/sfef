<template>
    <div>
        <h1>Home page</h1>
        <router-link to="/cards/1">Cards</router-link>
        <br />
        <router-link to="/cardRandom">Card Random</router-link>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        evue: true
      }
    },
    components: {
    },
    methods: {
      checkHandle() {
        console.log('!!-!!-!! this.evue {200715083830}\n', this.evue); // del+
      }
    }
  }
</script>
