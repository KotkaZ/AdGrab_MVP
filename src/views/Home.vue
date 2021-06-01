<template>
  <div class="home p-mt-6 p-grid p-nogutter p-jc-center">
    <div class="p-col-12">
      <img class="logo" alt="AdGrab logo" src="../assets/logo.png" />
    </div>
    <div>
      <Card style="width:25rem" class="card">
        <template #header>
          <HelloWorld msg="Welcome to AdGrab" />
        </template>
        <template #content>
          <HelloWorld side-msg="AdGrab is a startup offering easy advertisement solutions." />
          <Button label="DEMO" icon="pi pi-check" iconPos="right" class="p-button-lg" v-on:click="$router.push('demo')"/>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Button from 'primevue/button';
import Card from 'primevue/card';

export default {
  name: "Home",
  components: {
    HelloWorld,
    Button,
    Card
  },
};

</script>
<style lang="css">
  .logo {
    border-radius: 50px;
    max-width: 100px;
  }
</style>
