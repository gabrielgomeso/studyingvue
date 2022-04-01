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
    name: '',
  },
  getters: {
    formOfTreatment: state => {
      return state.treatment;
    },
    name: state => {
      return state.name;
    }
  },
  mutations: {
    setTreatment (state, payload) {
      state.treatment = payload.treatment;
    },
    mutateName (state, payload) {
      state.name = payload.name;
    }
  },
  actions: {
    setTreatment (context, payload) {
      context.commit('setTreatment', payload)
    },
    setName (context, payload) {
      context.commit('mutateName', payload);
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
