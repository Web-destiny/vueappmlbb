<template>
  <div class="cart">
    <div class="cart-title">Ваша корзина</div>
    <ul class="products-list">
      <li v-for="item in cartItems"
          :key="item.id"
          class="product-item col-6 col-lg-3"
      >
        <div class="product-item-content">
          <div class="product-item__text">{{ item.name }} - <strong>{{ formattedPrice(item.price) }} руб.</strong></div>
          <div class="product-item__image">
            <img :src="item.image_url" alt="Product Image">
          </div>
          <div>Количество: {{ item.quantity }}</div>
        </div>
        <button
            @click="removeFromCart(item.id)"
            class="btn btn-primary"
        >
          Удалить из корзины
        </button>
      </li>
    </ul>
    <p
        v-if="cartItems.length === 0"
    >
      Корзина пуста
    </p>
    <button
        @click="clearCart"
        class="btn btn-success btn-clear-cart"
    >
      Очистить корзину
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    // Вычисляемое свойство для форматирования цены
    formattedPrice() {
      return (price) => `${Math.round(price)}`;
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

.products-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  grid-gap: 10px;
  margin-top: 20px;
  padding-left: 0;
}

.product-item {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #ecf1ff;
  padding-left: 20px;
}

.product-item-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.product-item .product-item__image {
  width: auto;
  max-height: 60px;
  text-align: center;
  position: relative;
}
.product-item .product-item__image img {
  margin: 0 auto;
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  min-height: 60px;
  max-height: 60px;
  padding: 5px 0px;
}

.cart-title {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
}

.btn-clear-cart {
  margin-top: 20px;
}

</style>
