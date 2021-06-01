<template>
  <div class="home p-mt-6 p-grid p-nogutter p-jc-center">
    <div class="p-col-12">
      <img class="logo" alt="AdGrab logo" src="../assets/logo.png" />
    </div>
    <div>
      <HelloWorld msg="Welcome to AdGrab" />
      <HelloWorld side-msg="AdGrab is a startup offering easy advertisement solutions." />
      <Button label="DEMO" icon="pi pi-check" iconPos="right" class="p-button-lg" v-on:click="$router.push('demo')"/>
    </div>
    <div class="p-col-12 p-m-6 p-grid p-jc-around p-ai-center">
      <Card class="roundedCard p-shadow-6 p-col-2">
        <template #header>
          <img src="../assets/card1.jpeg" style="height: 15rem" />
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus felis, id maximus dui
            feugiat eget. Sed lacus libero, finibus sed elit nec, tempus viverra risus. Vivamus lacus mi, accumsan quis
            ornare ut, euismod sit amet metus. Cras a turpis metus. Praesent in lobortis massa, non malesuada tellus.
            Aliquam nec vulputate massa. Donec dignissim rutrum metus. Curabitur a felis vel est ultricies faucibus.
            Vivamus feugiat egestas tempor. Vivamus in odio vitae eros elementum sagittis. Aenean vel imperdiet dolor.
            Donec auctor sed elit a tempus.
          </p>
        </template>
      </Card>
      <Card class="roundedCard p-shadow-6 p-col-2">
        <template #header>
          <img src="../assets/card2.jpeg" style="height: 15rem" />
        </template>
        <template #content>
          <p>p-jc-center
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus felis, id maximus dui
            feugiat eget. Sed lacus libero, finibus sed elit nec, tempus viverra risus. Vivamus lacus mi, accumsan quis
            ornare ut, euismod sit amet metus. Cras a turpis metus. Praesent in lobortis massa, non malesuada tellus.
            Aliquam nec vulputate massa. Donec dignissim rutrum metus. Curabitur a felis vel est ultricies faucibus.
            Vivamus feugiat egestas tempor. Vivamus in odio vitae eros elementum sagittis. Aenean vel imperdiet dolor.
            Donec auctor sed elit a tempus.
          </p>
        </template>
      </Card>
      <Card class="roundedCard p-shadow-6 p-col-2">
        <template #header>
          <img src="../assets/card3.jpeg" style="height: 15rem" />
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus felis, id maximus dui
            feugiat eget. Sed lacus libero, finibus sed elit nec, tempus viverra risus. Vivamus lacus mi, accumsan quis
            ornare ut, euismod sit amet metus. Cras a turpis metus. Praesent in lobortis massa, non malesuada tellus.
            Aliquam nec vulputate massa. Donec dignissim rutrum metus. Curabitur a felis vel est ultricies faucibus.
            Vivamus feugiat egestas tempor. Vivamus in odio vitae eros elementum sagittis. Aenean vel imperdiet dolor.
            Donec auctor sed elit a tempus.
          </p>
        </template>
      </Card>
      <Card class="roundedCard p-shadow-6 p-col-2">
        <template #header>
          <img src="../assets/card4.jpeg" style="height: 15rem" />
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus felis, id maximus dui
            feugiat eget. Sed lacus libero, finibus sed elit nec, tempus viverra risus. Vivamus lacus mi, accumsan quis
            ornare ut, euismod sit amet metus. Cras a turpis metus. Praesent in lobortis massa, non malesuada tellus.
            Aliquam nec vulputate massa. Donec dignissim rutrum metus. Curabitur a felis vel est ultricies faucibus.
            Vivamus feugiat egestas tempor. Vivamus in odio vitae eros elementum sagittis. Aenean vel imperdiet dolor.
            Donec auctor sed elit a tempus.
          </p>
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
    border-radius: 50%;
    max-width: 7vw;
  }
  .roundedCard {
    border-radius: 3%;
  }
</style>
