<template>
  <div class="wrapper">
    <nav class="navbar navbar-light" style="">
      <router-link to="/">Главная</router-link>
      <router-link to="/catalog">Каталог</router-link>
      <router-link to="/blog">Блог</router-link>
      <router-link to="/gallery">Галерея</router-link>
      <router-link to="/about">О нас</router-link>
      <router-link to="/cart"  class="bi bi-cart"></router-link>

    </nav>
    <header>
      <!-- здесь верстка для хедера -->
    </header>
    <aside>
      <!-- здесь верстка для сайдбара -->
    </aside>
    <main class="main container">
      <router-view/>
      <slot />
    </main>
    <footer class="footer">

    </footer>
  </div>
</template>

<script>
export default {
  name: "default-theme",
};
</script>

<style scoped>
html,body{
  height: 100%;
  box-sizing: border-box;
}

.wrapper{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.navbar{
  background-color: #181a2d;
  justify-content: flex-start;
  column-gap: 20px;
  padding: 20px 30px;
}

.footer {
  background-color: #191a2d;
  height: 200px;
}

.main{
  flex: 1 1 auto;
  padding: 20px 0;
}


</style>
