<template>
  <div id="get-started" class="h-screen p-p-3 p-m-0">
    <div class="p-grid p-m-0 p-p-4 p-jc-center p-ai-center h-full">
      <div class="p-col-3">
        <Card>
          <template #content>
            <router-link to="/demo" class="link">Telereklaam</router-link>
          </template>
        </Card>
      </div>
      <div class="p-col-4">
        <Card>
          <template #content>
            <router-link to="/demo" class="link">Trükimeedia</router-link>
          </template>
        </Card>
      </div>
      <div class="p-col-3">
        <Card>
          <template #content>
            <router-link to="/demo" class="link"> Veebireklaam </router-link>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "primevue/card";

export default {
  components: {
    Card,
  },
  setup() {},
};
</script>

<style scoped>
.h-screen {
  height: 100vh;
}

.h-full {
  height: 100%;
}

.link {
  text-decoration: none;
  color: var(--primary-color);
}

#get-started {
  background-color: #e6e6e6;
}
</style>
