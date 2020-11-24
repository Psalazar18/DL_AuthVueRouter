<template>
  <div class="container mt-5 text-center">
      <h1 class="mb-5">Bienvenido... </h1>
      <b-button @click="volver" type="button" variant="warning">Volver al login y deslogueo</b-button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Home',
    methods: {
        volver(){
            firebase.auth().signOut().then(() => {
                this.$router.push('/login');
            }).catch((error) => {
                console.error(error);
            });            
        }
    },
}
</script>

<style>

</style>