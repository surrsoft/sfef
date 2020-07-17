<template>
    <div>
        <Checkb v-model="evue" v-on:change="checkHandle"/>
        <Cmpa att="4"/>
        <h1>Home page</h1>
        <router-link to="/cards/1">Cards</router-link>
        <br />
        <router-link to="/cardRandom">Card Random</router-link>
    </div>
</template>

<script>
  import Checkb from '../components/Checkb';
  import Cmpa from '../components/Cmpa';

  export default {
    data() {
      return {
        evue: true
      }
    },
    components: {
      Checkb,
      Cmpa
    },
    methods: {
      checkHandle() {
        console.log('!!-!!-!! this.evue {200715083830}\n', this.evue); // del+
      }
    }
  }
</script>
