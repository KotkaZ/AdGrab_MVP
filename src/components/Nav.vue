<template>
  <div class="Nav">
        <Toolbar>
            <template #left>
                <img class="logo" alt="AdGrab logo" src="../assets/logo.png" />
                
            </template>

            <template #right>
                <Button icon="pi pi-shopping-cart" class="p-button-text p-mr-2" @click="this.$router.push('/cart')" />
                <Button class="p-button-text" type="button" icon="pi pi-bars" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"/>
                <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
            </template>
        </Toolbar>
    </div>
</template>

<script>
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
export default {
  components: { Toolbar, Button, Menu },
  data() {
    return {
      items: [
        {
          label: 'Active Campaigns',
          icon: 'pi pi-flag'
        },
        {
          label: 'Settings',
          icon: 'pi pi-cog'
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          to: '/'
        }
      ]
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    save() {
      this.$toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Data Saved',
        life: 3000
      });
    }
  }
};
</script>

<style>
.logo {
  width: 40pt;
}
</style>
