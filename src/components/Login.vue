<template>
  <div class="container mt-5">
    <h1 class="text-center">Login into your account</h1>
    <b-form @submit.prevent="ingresar" @reset="onReset">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Enter password" key=""></b-form-input>
      </b-form-group>
      <b-button class="mr-2" type="submit" variant="primary">Ingresar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ingresar(){
      if(this.form.email && this.form.password && this.form.password.length >= 6){
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(resp => {
            this.$router.push('/home');
            console.log(resp.user.email);
          })
          .catch(error => {
            if (error.code == "auth/wrong-password") {
              this.errores(error);
            } else if(error.code == "auth/invalid-email") {
              this.errores(error);
            } else if(error.code == "auth/user-disabled"){
              this.errores(error);
            } else {
              this.errores(error);
              this.$router.push('/register');
            }
          })
      } else {
        console.log("No se puede conectar");
      }
    },
    errores(error){
      this.$notify.error({
        title: 'Error',
        message: `${error.message}`
      })
    },
    onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
  },

}
</script>


<style scoped lang="scss">

</style>
