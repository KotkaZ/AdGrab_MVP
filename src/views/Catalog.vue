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
          <div class="p-col">
            <Dropdown
              v-model="sortKey"
              :options="sortOptions"
              optionLabel="label"
              placeholder="Sort"
              @change="onSortChange($event)"
            />
          </div>

          <div class="p-col">
            <Listbox v-model="selectedGroupedFilter"  :multiple="true"  :options="filerOption" optionLabel="label" style="width:15rem" optionGroupLabel="label" optionGroupChildren="items" listStyle="max-height:250px">
                <template #optiongroup="slotProps">
                    <div class="p-d-flex p-ai-center country-item">
                        <div>{{slotProps.option.label}}</div>
                    </div>
                </template>
            </Listbox>
          </div>

                    <div class="p-col">
        <Listbox v-model="selectedSizes" :multipe="true" :options="sizes" optionLabel="name" style="width:15rem" />
          </div>

        </div>
      </template>

      <template #grid="slotProps">
        <div class="p-col-12 p-md-4">
          <div class="product-grid-item card">
            <div class="product-grid-item-top">
              <div>
                <i class="pi pi-tag product-category-icon"></i>
                <span class="product-category">{{
                  slotProps.data.advertiser
                }}</span>
              </div>
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
import Listbox from 'primevue/listbox';
import Nav from '../components/Nav';
import { data as catalogData } from '../assets/catalog_data';

export default {
  components: { DataView, Dropdown, Button, Nav, Listbox },
  setup() {
    const items = ref(catalogData);
    const layout = ref('grid');
    const sortKey = ref();
    const sortOrder = ref();
    const selectedGroupedCity = ref();
    const sortField = ref();
    const sortOptions = ref([
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ]);
    const sizes = ref([
      { name: '1/1', code: 'NY' },
      { name: '1/2', code: 'RM' },
      { name: '1/4', code: 'LDN' },
      { name: '1/8', code: 'IST' },
      { name: 'etc...', code: 'PRS' }
    ]);
    const filerOption = ref([
      {
        label: 'Postimees',
        code: 'DE',
        items: [
          { label: 'Cover page', value: 'Berlin' },
          { label: 'Page 3', value: 'Frankfurt' },
          { label: 'Text page', value: 'Hamburg' },
          { label: 'Free placement', value: 'Munich' },
          { label: 'Free time*', value: 'Munich' }
        ]
      },
      {
        label: 'Äripäev',
        code: 'US',
        items: [{ label: 'Free placement', value: 'Munich' }]
      }
    ]);
    const onSortChange = event => {
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
    };

    return {
      items,
      layout,
      sortKey,
      selectedGroupedCity,
      sizes,
      sortOrder,
      filerOption,
      sortField,
      sortOptions,
      onSortChange
    };
  }
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
