<!-- views/ProductDetails.vue -->

<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.extended_description }}</p>
    <!-- Другие детали продукта -->
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
};
</script>

<style scoped>
/* Стили для страницы расширенной карточки товара */
</style>
