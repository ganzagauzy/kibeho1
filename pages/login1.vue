<template>
  <v-container>
    <h1>login</h1>

    <UserAuthForm/>
  </v-container>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
export default {
  components: {
    UserAuthForm
  },


}
</script>

<style>
h1 {
  padding-top: 400px;
}
</style>
