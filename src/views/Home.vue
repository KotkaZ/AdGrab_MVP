<template>
  <div class="home p-mt-6">
    <img class="logo" alt="AdGrab logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to AdGrab" />
    <router-link to="/demo">DEMO</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="css">
  .logo {
    border-radius: 50px;
    max-width: 100px;
  }
</style>
