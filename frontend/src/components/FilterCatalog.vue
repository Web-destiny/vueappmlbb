<template>
  <div class="filter-catalog-box col-6 col-lg-3">
    <div class="filter-content">
      <h3>Фильтры</h3>

      <!-- Фильтр по цене -->
      <div>
        <label for="priceRange">Цена: </label>
        <vue-slider v-model="priceRange"
                    :min="0" :max="10000"
                    @change="updateFilters"
                    id="priceRange">

        </vue-slider>
        <p>Диапазон цен: {{ priceRange[0] }} - {{ priceRange[1] }}</p>
      </div>

      <!-- Фильтр по количеству затяжек -->
      <div>
        <label for="puffRange">Затяжки: </label>
        <vue-slider v-model="puffRange"
                    :min="0" :max="15000"
                    @change="updateFilters"
                    id="puffRange">

        </vue-slider>
        <p>Диапазон затяжек: {{ puffRange[0] }} - {{ puffRange[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: "FilterCatalog",
  components: {
    VueSlider,
  },
  data() {
    return {
      priceRange: [0, 10000],
      puffRange: [0, 15000],
    };
  },
  methods: {
    updateFilters() {
      // Передаем значения фильтров родительскому компоненту
      this.$emit('update-filters', {
        minPrice: this.priceRange[0],
        maxPrice: this.priceRange[1],
        minPuff: this.puffRange[0],
        maxPuff: this.puffRange[1],
      });
    },
  },
};
</script>

<style scoped>
/* Ваш стиль для компонента фильтров */
</style>
