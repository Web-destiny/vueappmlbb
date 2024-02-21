// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        cart: [], // пример начального состояния (ваш стейт здесь)
    },
    mutations: {
        addToCart(state, { product, quantity }) {
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                state.cart.push({ ...product, quantity });
            }
        },
        // removeFromCart(state, productId) {
        //     state.cart = state.cart.filter(item => item.id !== productId);
        // },

        //  альтернатива как удалять только один из повторябщихся товаров

        removeFromCart(state, productId) {
            const index = state.cart.findIndex(item => item.id === productId);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        },

        clearCart(state) {
            state.cart = [];
        },
    },
    actions: {
        addToCartAsync({ commit }, { product, quantity }) {
            commit('addToCart', { product, quantity });
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
