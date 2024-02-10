<template>
  <div class="filter-catalog-box col-6 col-lg-3 mt-5">
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
      <!-- Кнопка сброса фильтров -->
      <button @click="resetFilters"
              type="button"
              class="btn btn-primary filter-reset-btn">
        Сбросить фильтры
      </button>
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
    resetFilters() {
      // Установка значений фильтров в их начальные значения
      this.priceRange = [0, 10000];
      this.puffRange = [0, 15000];

      // Передача сброшенных значений фильтров родительскому компоненту
      this.$emit('reset-filters', {
        minPrice: null,
        maxPrice: null,
        minPuff: null,
        maxPuff: null,
      });
    },
  },
};
</script>

<style scoped>
.filter-content {
  padding: 20px 29px;
  border: 1px solid #9E9E9E;
  border-radius: 6px;
}
</style>
