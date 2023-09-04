<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <div class="content">
    <RouterView />
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>
  </div>

  <footer></footer>
</template>

<style lang="scss" scoped>
// tablet
@media screen and (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
}

// mobile
@media screen and (max-width: $breakpoint-mobile) {
}
</style>
