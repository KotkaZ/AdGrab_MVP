<template>
  <div class="p-grid p-p-4">
    <div class="p-col-1"></div>
    <div class="p-col-3">
      <Card>
        <template #content> Telereklaam </template>
      </Card>
    </div>
    <div class="p-col-4">
      <Card>
        <template #content> Trükimeedia </template>
      </Card>
    </div>
    <div class="p-col-3">
      <Card>
        <template #content> Veebireklaam </template>
      </Card>
    </div>
    <div class="p-col-1"></div>
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
