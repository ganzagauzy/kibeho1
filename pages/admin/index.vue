<template>
    <div class="admin-home-page">

    </div>
</template>

<script>
    export default {
        name: "index",
      layout:'admin/adminPanel',
      middleware:'auth',
      head() {
        return {
          title: "Admin",
          meta: [
            {
              hid: "description",
              name: "description",
              content: "admin page for kibeho",
            },
          ],
        }
      },
    }
</script>

<style scoped>

</style>
