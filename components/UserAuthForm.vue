<template>
    <div class="container-fluid">
    <div class="row main-content bg-success1 text-center">
      <div class="col-md-0 text-center company__info">
        <div class="company__logo">
          <p class="mb-0 mx-auto" style="height: 0em;width: 150px">
            <span style="background-size: contain;display: block; background-repeat: no-repeat;"
                   class="h-100 w-100"></span>
          </p>
        </div>
        <h4 class="company_title d-none">Kibeho</h4>
      </div>
      <div class="col-md-24 col-xs-12 col-sm-12 login_form ">
        <div class="container-fluid">
          <div class="row mx-0">
            <h2 class="mx-auto pt-2">Log In</h2>
          </div>
          <div class="row mx-0">
            <form class="form-group mx-auto w-100" @submit.prevent="login">
              <div class="row mx-0">
                <input type="email"  id="username" class="form__input mb-0" placeholder="Email"
                       v-model="user.email">
              </div>
              <div class="row mx-0 mt-0">
                <input type="password" id="password" class="form__input" placeholder="Password"
                       v-model="user.password">
              </div>
              <div class="errors text-danger fa-13" v-if="error && error.status">{{ error.status == 400 ? "Invalid email or password" : "Please check you internet" }}</div>
              <div class="row mx-0" :class="{'pointer-events':logging}">
                <input type="submit" value="Submit" class="btn mx-auto">
              </div>
            </form>
          </div>
          <div class="row d-none">
            <p>Don't have an account? <a href="#">Register Here</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
