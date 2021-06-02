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
            v-on:click="$router.push('catalog')"
          />
        </div>
      </div>
      <div class="p-col-10 p-md-5 p-m-0 p-p-0 p-grid">
        <img
          src="../assets/landing.png"
          class="p-m-auto"
          alt="Landing page image; &copy; LandingStock.com"
          width="460"
        />
      </div>
    </div>
    <div class="slide" id="slide-2" ref="slide2">
      <div class="p-grid p-m-0 p-py-6">
        <div class="p-col-5">
          <img
            src="../assets/landing2.png"
            class="p-m-auto"
            alt="Landing page image 2; &copy; LandingStock.com"
            width="460"
          />
        </div>
        <div class="p-col-5 p-offset-1" id="pitch">
          <p>
            In today's age advertising is really important but finding the
            perfect spot or combination of places to advertise on can get
            cumbersome quite quickly.
          </p>
          <p>This is where AdGrab can help.</p>
          <p>
            AdGrab provides you powerful yet simple tools for managing
            advertising campaigns no matter the platform you wish to advertise
            on.
          </p>
          <p>Start using AdGrab today!</p>
        </div>
      </div>
    </div>
    <div class="slide p-m-0 p-p-4" id="slide-3">
      <p>&copy; AdGrab {{ new Date().getFullYear() }}</p>
    </div>
    <transition name="fade">
      <div id="scroller" v-if="!scrolled" @click="scrollToSlide2">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Button from 'primevue/button';
import { onMounted, ref } from 'vue';
// import Card from 'primevue/card';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Button,
    // Card,
  },
  setup() {
    const scrolled = ref(false);
    const slide2 = ref(undefined);

    const onScroll = () => (scrolled.value = window.scrollY >= 10);

    onMounted(() => {
      window.addEventListener('scroll', onScroll);
    });

    const scrollToSlide2 = () => {
      // TODO: Implement smooth scrolling
      window.scrollTo(0, slide2.value.offsetTop);
    };

    return { scrolled, slide2, scrollToSlide2 };
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
  min-height: 90vh;

  #info {
    text-align: left;
    padding: 0 4rem;
  }
}

#slide-2 {
  background-color: #22283a;
  // height: 100vh;
  color: white;

  #pitch {
    text-align: left;
    font-size: 1.25rem;
  }
}

#scroller {
  color: white;
  position: fixed;
  width: 3rem;
  height: 3rem;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: pulse 1s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
