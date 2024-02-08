<template>
  <div class="layout">
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/catalog">Каталог</router-link>
      <router-link to="/blog">Блог</router-link>
      <router-link to="/gallery">Галерея</router-link>
      <router-link to="/about">О нас</router-link>

    </nav>
    <router-view/>
    <header>
      <!-- здесь верстка для хедера -->
    </header>
    <aside>
      <!-- здесь верстка для сайдбара -->
    </aside>
    <main>
      <!-- здесь слот для вставки контента для каждой страницы -->
      <slot />
    </main>
    <footer>
      <!-- здесь верстка для футера -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "default-layout",
};
</script>

<style scoped>
/* здесь стили для layout компонента */
</style>
