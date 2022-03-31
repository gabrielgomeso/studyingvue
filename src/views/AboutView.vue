<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form
      @submit.prevent="sendForm"
    > 
      <label for="treatment">How you want to be treated?</label>
      <input type="text" v-model="formOfTreatment" name="treatment" id="treatment">

      <label for="shopItem">What do you want to buy?</label>
      <input type="text" v-model="shopItem" name="shopItem" id="shopItem">

      <button type="submit">Enviar</button>
    </form>

    <p>You want to be treat as a {{ formOfTreatment }} </p>
    <shopping-cart></shopping-cart>
    <router-link to="/about/dragons">Dragons</router-link> |
    <router-link to="/about/goblins">Goblins</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart.vue';
import { mapGetters } from 'vuex';

export default {
  components: { ShoppingCart },
  data() {
    return {
      shopItem: '',
    };
  },
  methods: {
    sendForm() {
      this.$store.dispatch('setTreatment', { treatment: this.treatment });
      this.$store.dispatch('cart/setItemToCart', { shoppingCartContent: this.shopItem });
    },
  },
  computed: {
    ...mapGetters([
      'cart/getCurrentShoppingCart'
    ]),
    formOfTreatment: {
      get () {
        return this.$store.state.treatment
      },
      set (value) {
        this.$store.dispatch('setTreatment', { treatment: value })
      }
    },
  },
}


</script>