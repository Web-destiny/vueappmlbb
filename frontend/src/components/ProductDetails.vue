<!-- views/ProductDetails.vue -->

<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <div class="image">
      <img :src="product.image_url">
    </div>
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
.image {
  width: auto;
  min-height: 205px;
  line-height: 205px;
  margin: 0 -10px 0;
  text-align: center;
  position: relative;
}

.image img{
  margin: 0 auto;
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  min-height: 300px;
  max-height: 300px;
}
</style>
