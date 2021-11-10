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
  import errorHandler from "@/helpers/errors.handler.js"
  export default {
    name: "login",
    layout: 'admin/adminPanel',
    head() {
      return {
        title: "Login",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "",
          },
        ],
      }
    },
    data() {
      return {
        user: {
          email: 'ganzantambuko@gmail.com',
          password: 'aaaaaaaa'
        },
        logging :false,
        error: {}
      }
    },
    methods: {
      async login() {
        this.$nuxt.$loading.start()
        this.logging = true
          this.$auth.loginWith('local', {
            data: this.user,
          }).then(res => {
            this.$router.push('/admin/events1')
            this.logging =false
            this.$bvToast.toast('You Logged in Successfully', {
              title: `Logged In!`,
              variant: 'success',
              solid: true
            })
            this.$nuxt.$loading.finish()
          }).catch(({ response: error }) => {
            this.logging =false
            this.error = error
            this.$nuxt.$loading.finish()
          })
      }
    }
  }
</script>

<style scoped>
  .body {
    background: #0a5a97;
  }

  .main-content {
    width: 38%;
    border-radius: 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .4);
    margin: 5em auto;
    display: flex;
  }
  .bg-success1 {
    background-color: #0a5a97;
  }

  .company__info {
    background-color: #0a5a97;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
  }

  .fa-android {
    font-size: 3em;
  }

  @media screen and (max-width: 640px) {
    .main-content {
      width: 90%;
    }

    .company__info {
      display: none;
    }

    /* .login_form {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    } */
  }

  @media screen and (min-width: 642px) and (max-width: 800px) {
    .main-content {
      width: 70%;
    }
  }

  .row > h2 {
    color: #0a5a97;
  }

  /* .login_form {
    background-color: #fff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
  } */

  form {
    padding: 0 2em;
  }

  .form__input {
    width: 100%;
    border: 0px solid transparent;
    border-radius: 0;
    border-bottom: 1px solid #aaa;
    padding: 11px 10px;
    outline: none;
    margin: 1.5em auto;
    transition: all .5s ease;
  }

  .form__input:focus {
    border-bottom-color: #008080;
    box-shadow: 0 0 5px rgba(0, 80, 80, .4);
    border-radius: 4px;
  }

  .btn {
    transition: all .5s ease;
    width: 70%;
    border-radius: 30px;
    color: #144061;
    font-weight: 600;
    background-color: #fff;
    border: 1px solid #0a5a97;
    margin-top: 1.5em;
    margin-bottom: 1em;
  }

  .btn:hover, .btn:focus {
    background-color: #0a5a97;
    color: #fff;
  }
</style>
