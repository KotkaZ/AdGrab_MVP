<template>
  <Nav/>
  <div class="card">
    <DataView
      :value="items"
      :layout="layout"
      :sortOrder="sortOrder"
      :sortField="sortField"
    >
      <template #header>
        <div class="p-grid p-nogutter">
          <div class="p-col-6" style="text-align: left">
            <Dropdown
              v-model="sortKey"
              :options="sortOptions"
              optionLabel="label"
              placeholder="Sort"
              @change="onSortChange($event)"
            />
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="p-col-12 p-md-4">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
              <div>
                <i class="pi pi-tag product-category-icon" aria:haspopup="true" aria-controls="overlay_panel"></i>
                <span class="product-category">{{
                  slotProps.data.advertiser
                }}</span>
              </div>
              <i class="pi pi-info-circle p-jc-end"  @click="toggle"></i>
        <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 150px" :breakpoints="{'400px': '75vw'}">
            <DataTable :value="infoData" :rows="5" >
                <Column field="name" header="Name" sortable style="width: 50%"></Column>
            </DataTable>
        </OverlayPanel>
            </div>

            <div class="product-grid-item-content">
              <img
                :src="
                  slotProps.data.image ||
                  'https://glenella.com/wp-content/uploads/2020/05/the-mountains-of-North-Georgia-min.jpg'
                "
                :alt="slotProps.data.name"
                width="100"
              />
              <div class="product-name">{{ slotProps.data.name }}</div>
              <div class="product-description">
                {{ slotProps.data.description }}
              </div>
            </div>

            <div class="product-grid-item-bottom">
              <span class="product-price">{{ slotProps.data.price }}€</span>
              <Button icon="pi pi-shopping-cart"></Button>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script>
import { ref } from 'vue';
import DataView from 'primevue/dataview';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Nav from '../components/Nav'
import OverlayPanel from 'primevue/overlaypanel';
import { data as catalogData } from '../assets/catalog_data';
import { infoData } from '../assets/catalog_data'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  components: { DataView, Dropdown, Button, Nav, OverlayPanel, DataTable, Column},
  setup() {
    const items = ref(catalogData);
    const layout = ref('grid');
    const sortKey = ref();
    const sortOrder = ref();
    const sortField = ref();
    const sortOptions = ref([
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
      { label: 'Size Small to Big', value: 'size' },
      { label: 'Size Big to Small', value: '!size' },
      { label: 'Advertiser A to Z', value: 'advertiser' },
      { label: 'Advertiser Z to A', value: '!advertiser' },
    ]);
    const onSortChange = (event) => {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf('!') === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
      } else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
      }
    }

    return {
      items,
      layout,
      sortKey,
      sortOrder,
      sortField,
      sortOptions,
      onSortChange,
      infoData
    };
  },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
            console.log(this.infoData)
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}
.p-dropdown {
  width: 14rem;
  font-weight: normal;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.product-description {
  margin: 0 0 1rem 0;
}

.product-category-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.product-category {
  font-weight: 600;
  vertical-align: middle;
}

::v-deep(.product-list-item) {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;

  img {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
  }

  .product-list-detail {
    flex: 1 1 0;
  }

  .p-rating {
    margin: 0 0 0.5rem 0;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    align-self: flex-end;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
  }

  .p-button {
    margin-bottom: 0.5rem;
  }
}

::v-deep(.product-grid-item) {
  margin: 0.5rem;
  border: 1px solid #dee2e6;

  .product-grid-item-top,
  .product-grid-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
  }

  .product-grid-item-content {
    text-align: center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 576px) {
  .product-list-item {
    flex-direction: column;
    align-items: center;

    img {
      margin: 2rem 0;
    }

    .product-list-detail {
      text-align: center;
    }

    .product-price {
      align-self: center;
    }

    .product-list-action {
      display: flex;
      flex-direction: column;
    }

    .product-list-action {
      margin-top: 2rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
}
</style>
