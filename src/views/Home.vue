<template>
  <div class="home p-mt-6">
    <img class="logo" alt="AdGrab logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to AdGrab" />
    <HelloWorld side-msg="AdGrab is a startup offering easy advertisement solutions." />
    <Button label="DEMO" icon="pi pi-check" iconPos="right" class="p-button-lg" v-on:click="$router.push('demo')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Button from 'primevue/button';

export default {
  name: "Home",
  components: {
    HelloWorld,
    Button
  },
};

</script>
<style lang="css">
  .logo {
    border-radius: 50px;
    max-width: 100px;
  }
</style>
