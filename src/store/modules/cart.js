const state = () => ({
  items: [],
  totalValue: 0,
});

const getters = {
  getCurrentShoppingCart: state => {
    return state.items;
  },
  cartTotalValue: state => {
    return state.totalValue;
  }
};

const mutations = {
  updateShoppingCart(state, payload) {
    state.items.push(payload.product);
    state.totalValue = state.totalValue + payload.value;
  },
};

const actions = {
  setItemToCart ({ commit }, payload) {
    commit('updateShoppingCart', payload)
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}