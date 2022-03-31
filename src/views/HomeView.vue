<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingCart from '@/components/ShoppingCart.vue'

export default {
  name: 'HomeView',
  components: {
    ShoppingCart
  }
}
</script>
