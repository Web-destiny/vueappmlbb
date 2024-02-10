<template>
  <div class="container-fluid catalog">
    <form class="d-flex">
      <input class="form-control me-2 search-products-input"
             type="search"
             placeholder="Искать по названию.."
             aria-label="Search"
             v-model="searchInput"
      >
    </form>
    <FilterCatalog></FilterCatalog>

    <!-- Используем ProductCard для каждого продукта в массиве products -->
    <div class="product-cards-box product-list row">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>



    <!-- Кнопка или форма для добавления нового продукта -->
    <!--      <button @click="addProduct">Добавить продукт</button>-->
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
import FilterCatalog from "../components/FilterCatalog";

export default {
  components: {
    ProductCard,
    FilterCatalog// Регистрируем компонент ProductCard
  },
  data() {
    return {
      products: [], // массив для хранения продуктов
      searchInput: '',
      newProduct: { name: '', price: 0, description: '', category: '', image_url: '' }, // новый продукт
    };
  },
  mounted() {
    // При монтировании компонента загружаем данные о продуктах
    this.loadProducts();
  },
  methods: {
    // Метод для загрузки продуктов
    loadProducts() {
      fetch('http://localhost:3000/catalog')
          .then(response => response.json())
          .then(data => {
            // Проверяем, является ли data массивом
            if (Array.isArray(data)) {
              this.products = data;
            } else {
              this.products = []; // Присваиваем пустой массив, если data не является массивом
            }
          })
          .catch(error => {
            console.error(error);
          });
    },
  },
  computed: {

    filteredProducts() {

      return this.products.filter(product => {

        const isPriceInRange = (!this.minPrice || product.price >= this.minPrice) &&
            (!this.maxPrice || product.price <= this.maxPrice);
        const isPuffInRange = (!this.minPuff || product.puffCount >= this.minPuff) &&
            (!this.maxPuff || product.puffCount <= this.maxPuff);
        const isNameMatch = !this.searchInput ||
            product.name.toLowerCase().includes(this.searchInput.toLowerCase());

        return isPriceInRange && isPuffInRange && isNameMatch;

      });
    }
  },

};
</script>

<style scoped>
.catalog {
  margin-top: 20px;
  margin-bottom: 20px;
}
.product-cards-box{
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 15px;
}

.product-list {
  margin-left: -10px;
  margin-right: -20px;
}

</style>
