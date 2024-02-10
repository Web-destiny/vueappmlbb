<template>
  <div class="cart">
    <h2>Корзина</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.price }} руб.
        <button @click="removeFromCart(item.id)">Удалить из корзины</button>
      </li>
    </ul>
    <p v-if="cartItems.length === 0">Корзина пуста</p>
    <button @click="clearCart">Очистить корзину</button>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch('removeFromCartAsync', productId);
    },
    clearCart() {
      this.$store.dispatch('clearCartAsync');
    },
  },
};
</script>

<style scoped>
/* Стили для компонента корзины */
</style>
