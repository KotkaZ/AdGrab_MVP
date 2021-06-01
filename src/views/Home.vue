<template>
  <div id="home">
    <div class="slide p-grid p-m-0" id="slide-1">
      <div class="p-col-10 p-md-5 p-offset-1">
        <div id="info">
          <h1 id="firm" class="p-pt-4">AdGrab</h1>
          <h2 id="slogan">
            Build your own advertisement campaign with confidence
          </h2>
          <Button
            class="p-button-lg p-button-rounded p-mt-3"
            label="Get started"
          />
        </div>
      </div>
      <div class="p-col-10 p-md-5 p-m-0 p-p-0 p-grid">
        <img
          src="../assets/landing.png"
          class="p-m-auto"
          alt="Landing page"
          width="460"
        />
      </div>
    </div>
    <div class="slide" id="slide-2">Slide</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Button from 'primevue/button';
// import Card from 'primevue/card';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Button,
    // Card,
  },
};
</script>
<style lang="scss">
.slide {
  font-family: Montserrat, sans-serif;
}

#firm {
  font-size: 3.5rem;
}

#slide-1 {
  height: 90vh;

  #info {
    text-align: left;
    padding: 0 4rem;
  }
}

#slide-2 {
  background-color: #22283a;
  height: 100vh;
}
</style>
