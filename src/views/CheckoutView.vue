<template>
  <div class="checkout">
    <h1>{{ formOfTreatment + " " + name + "'s" }} Checkout Page</h1>
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingCart from '@/components/ShoppingCart.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'CheckoutView',
  components: {
    ShoppingCart
  },
    computed: {
    ...mapGetters([
      'formOfTreatment',
      'name',
    ]),
  },
}
</script>
