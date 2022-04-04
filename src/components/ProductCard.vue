<template>
  <div class="product-card">
    <h3 class="product-card--title">
      {{ productName }}
    </h3>

    <span class="product-card--id">#{{ productId }}</span>

    <p class="product-card--value">{{ productValue }}</p>

    <button @click="addProductToCart()">Adicionar ao carrinho</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    productName: String,
    productId: Number,
    productValue: Number,
  },
  computed: {
    ...mapGetters('cart', [
      'getCurrentShoppingCart',
    ])
  },
  methods: {
    checkIfProductIsInCart() {
      const filteredCart = this.getCurrentShoppingCart.filter(item => item.id == this.productId);

      if (filteredCart.length > 0) {
        return this.getCurrentShoppingCart.indexOf({ id: filteredCart.id });
      } else {
        return false;
      }
    },
    addProductToCart() {
      console.log(this.checkIfProductIsInCart());
      this.$store.dispatch('cart/setItemToCart', { product: { id: this.productId, name: this.productName, quantity: 1 }, value: this.productValue });
    },
  },
  
}
</script>

<style lang="scss" scoped>

</style>