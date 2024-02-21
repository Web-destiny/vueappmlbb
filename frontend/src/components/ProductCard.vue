<!-- ProductCard.vue -->

<template>
  <div class="col-6 col-lg-3">
    <div class="product-card">
      <router-link :to="{ name: 'product-details', params: { productId: product.id } }">
        <div class="image">
          <img :src="product.image_url" alt="Product Image">
        </div>
      </router-link>

      <div class="h5">
        <span>{{ product.name }}</span>
      </div>
      <p>{{ product.description }}</p>
      <p>Количество затяжек: {{ product.puffCount }}</p>
      <p>Цена: {{ formattedPrice(product.price) }} руб.</p>
      <!-- Дополнительные элементы карточки товара, если необходимо -->
      <button
          @click="addToCart"
          type="button"
          class="btn btn-success"
          :disabled="addingToCart"
      >
        {{ buttonText }}
      </button>
      <input v-model="quantity" type="number" min="1" class="form-control" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object, // Принимаем продукт как пропс
  },
  data(){
    return{
      addingToCart: false,
      quantity: 1,
    }
  },
  methods: {
    addToCart() {
      this.addingToCart = true;
      this.$store.dispatch('addToCartAsync', { product: this.product, quantity: this.quantity });
      setTimeout(() => {
        this.addingToCart = false;
      }, 2000);
    },
  },
  computed: {
    buttonText() {
      return this.addingToCart ? 'Добавлено в корзину' : 'Добавить в корзину';
    },
    formattedPrice() {
      return (price) => `${Math.round(price)}`;
    },
  },
};
</script>

<style scoped>
/* Стили для карточки товара */
.product-card {
  background: #FFF;
  border: 1px solid #dfdede;
  border-radius: 5px;
  padding: 10px 10px;
  overflow: hidden;
  position: relative;
  box-sizing: initial;
  min-height: 100%;
}

.product-card .image {
  width: auto;
  min-height: 205px;
  line-height: 205px;
  margin: 0 -10px 0;
  text-align: center;
  position: relative;
}
.product-card .image img {
  margin: 0 auto;
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  min-height: 300px;
  max-height: 300px;
}

.product-card .h5 {
  font-size: 14px;
  color: #000;
  line-height: 14px;
  font-weight: 600;
  height: 58px;
  text-align: center;
  margin: 8px 0;
  overflow: hidden;
}
.product-card .h5 span {
  margin: auto;
}

</style>
