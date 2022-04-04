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
    products: [
      {
        id: 1,
        name: 'Apple',
        value: 10  
      },
      {
        id: 2,
        name: 'Orange',
        value: 15
      },
      {
        id: 3,
        name: 'Banana',
        value: 20
      },
      {
        id: 4,
        name: 'Broken Sword',
        value: 50
      },
    ],
  },
  getters: {
    formOfTreatment: state => {
      return state.treatment;
    },
    name: state => {
      return state.name;
    },
    products: state => {
      return state.products;
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
