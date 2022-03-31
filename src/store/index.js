import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
  },
  state: {
    treatment: '',
  },
  getters: {
    formOfTreatment: state => {
      return state.treatment;
    },
  },
  mutations: {
    setTreatment (state, payload) {
      state.treatment = payload.treatment;
    },
  },
  actions: {
    setTreatment (context, payload) {
      context.commit('setTreatment', payload)
    },
  },
  strict: process.env.NODE_ENV !== 'production'
})
