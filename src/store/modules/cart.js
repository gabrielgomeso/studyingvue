const state = () => ({
  items: [],
});

const getters = {
  getCurrentShoppingCart: state => {
    return state.items;
  }
};

const mutations = {
  updateShoppingCart(state, payload) {
    state.items.push(payload.shoppingCartContent);
  }
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