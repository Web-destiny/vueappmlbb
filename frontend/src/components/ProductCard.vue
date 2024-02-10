<!-- ProductCard.vue -->

<template>
  <div class="product-card">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.puffCount }}</p>
    <p>{{ product.price }}</p>
    <!-- Дополнительные элементы карточки товара, если необходимо -->
  </div>
</template>

<script>
export default {
  props: {
    product: Object, // Принимаем продукт как пропс
  },
};
</script>

<style scoped>
/* Стили для карточки товара */
.product-card {
  /* Ваши стили */
}
</style>
