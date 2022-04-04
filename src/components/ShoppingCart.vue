<template>
  <div class="shopping-cart">
    <h4>My Shopping Cart</h4>
    <ul>
      <li v-for="(item, index) in getCurrentShoppingCart" :key="item">
        {{ index + 1 }} - {{ item.name }} - Quantity: {{ item.quantity }} - ID: {{ item.id }}
      </li>
    </ul>

    <p>{{ cartTotalValue }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('cart', [
      'getCurrentShoppingCart',
      'cartTotalValue',
    ])
  }
}
</script>