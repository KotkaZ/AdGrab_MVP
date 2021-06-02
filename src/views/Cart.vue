<template>
    <Nav/>
  <div class="p-grid p-mt-6 p-jc-center">
      <div class="p-col-8">
        <Steps :model="items" :readonly="true" />
      </div>
      <div class="p-col-8 p-grid" v-for="i in cart_items" :key="i.name">
        <h2 class="p-col-6 p-m-0">{{ i.name }}</h2>
        <h2 class="p-col-6  p-m-0">{{ i.advertiser }}</h2>
        <p class="p-col-6  p-m-0">{{ i.description }}</p>
        <p class="p-col-6  p-m-0">{{ i.price }}</p>
      </div>
      <div class="p-col-8 p-grid p-jc-end">
        <h1>Total sum: 3900 €</h1>
      </div>
      <div class="p-col-8 p-grid p-jc-end">
        <Button class="" icon="pi pi-shopping-cart" @click="$router.push('home')" label="Proceed to checkout"/>
      </div>
  </div>
</template>

<script>
import Steps from 'primevue/steps';
import Button from 'primevue/button';
import Nav from '@/components/Nav';

export default {
  components: {
    Steps,
    Button,
    Nav
  },
  data() {
    return {
      items: [
        {
          label: 'Overview',
          to: '/steps'
        },
        {
          label: 'Payment',
          to: '/steps/seat'
        },
        {
          label: 'Confirmation',
          to: '/steps/payment'
        }
      ],
      cart_items: [
        {
          name: 'Cover of Postimees',
          advertiser: 'Postimees',
          description: '289x289 (1/1)',
          price: 2800
        },
        {
          name: 'Cover of Postimees',
          advertiser: 'Postimees',
          description: '289x93 (1/4)',
          price: 1100
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
