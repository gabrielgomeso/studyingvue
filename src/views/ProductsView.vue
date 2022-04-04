<template>
  <div class="products-view">
    <h1 class="products-view--title">
      Available Products
    </h1>

    <product-card
      v-for="product in products"
      :key="product.id"
      :product-name="product.name"
      :product-id="product.id"
      :product-value="product.value"
    >
    </product-card>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters([
      'products',
    ]),
  },
}

</script>

<style lang="scss" scoped>

</style>