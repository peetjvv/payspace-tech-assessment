<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>Payspace Frontend Developer Technical Assessment</h1>

    <nav class="nav">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/books">Books</RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer>
    <span>
      Peet Janse van Vuuren -
      <a target="_blank" href="https://www.github.com/peetjvv">GitHub</a> -
      <a target="_blank" href="https://www.linkedin.com/in/peetjvv">LinkedIn</a>
    </span>
  </footer>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: left;

  nav {
    display: flex;
    align-items: space-between;

    a {
      &.router-link-active,
      &.router-link-exact-active {
        // TODO: use anchorlink colour variable
        // var(--bs-nav-link-color)
        color: lighten(rgb(186, 186, 250), 10%);
      }
    }
  }
}

header,
footer {
  padding: 1rem 2rem;

  background-color: darken(#2a3c4e, 5%); // TODO: use body background variable
}

main {
  flex-grow: 1;
  overflow-y: auto;

  padding: 1rem 2rem;
}

// tablet
@media screen and (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
}

// mobile
@media screen and (max-width: $breakpoint-mobile) {
}
</style>
