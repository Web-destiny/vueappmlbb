// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        cart: [], // пример начального состояния (ваш стейт здесь)
    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product);
        },
        removeFromCart(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
    actions: {
        addToCartAsync({ commit }, product) {
            // Здесь может быть асинхронный код (например, API вызов)
            commit('addToCart', product);
        },
        removeFromCartAsync({commit}, productId) {
            commit('removeFromCart', productId)
        },
        clearCartAsync({commit}, state) {
            commit('clearCart', state)
        }
    },
    getters: {
        // ваши геттеры
    },
});
