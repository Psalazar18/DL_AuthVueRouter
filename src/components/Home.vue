<template>
  <div class="container mt-5 text-center">
      <h1 class="mb-5">Bienvenido... </h1>
      <b-button @click="volver" type="button" variant="warning">Volver al login</b-button>
  </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        volver(){
            this.$router.push( 'login' );
        }
    },
}
</script>

<style>

</style>