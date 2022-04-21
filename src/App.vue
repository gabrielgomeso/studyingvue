<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
    <the-banner></the-banner>
    <the-body></the-body>
    <subscription-form></subscription-form>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheBanner from './components/TheBanner.vue';
import TheBody from './components/TheBody.vue';
import TheFooter from './components/TheFooter.vue';
import SubscriptionForm from './components/SubscriptionForm.vue';


export default {
  components: {
    TheHeader,
    TheBanner,
    TheBody,
    SubscriptionForm,
    TheFooter,
  },
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
