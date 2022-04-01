<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form
      class="form"
      @submit.prevent="sendForm"
    > 
      <div class="input-block">
        <label for="treatment">How you want to be treated?</label>
        <input type="text" v-model="formOfTreatment" name="treatment" id="treatment">
      </div>

      <div class="input-block">
        <label for="treatment">Tell us your name:</label>
        <input type="text" v-model="username" name="name" id="name">
      </div>

      <div class="input-block">
        <label for="shopItem">What do you want to buy?</label>
        <input type="text" v-model="shopItem" name="shopItem" id="shopItem">
      </div>

      <button type="submit">Enviar</button>
    </form>
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
      this.$store.dispatch('cart/setItemToCart', { shoppingCartContent: this.shopItem });
      this.$router.push('checkout')
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
    username: {
      get () {
        return this.$store.state.name
      },
      set (value) {
        this.$store.dispatch('setName', { name: value })
      }
    },
  },
}


</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 40em;

  .input-block {
    padding: 15px;
  }
}

</style>