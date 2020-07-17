<template>
    <div>
        Cmpa-1 [{{this.att}}]
    </div>
</template>

<script>
  export default {
    props: ['att'],
    created() {
      console.log('!!-!!-!! this.att {200715093337}\n', this.att); // del+
      console.log('!!-!!-!! this.$props.att {200715090220}\n', this.$props.att); // del+
    }
  }
</script>

<style scoped>

</style>
