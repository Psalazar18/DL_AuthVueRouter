<template>
  <div>
    <div class=" mt-3 text-center">
      <router-link to="/">Login</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

</style>
