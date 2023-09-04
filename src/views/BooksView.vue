<script setup lang="ts">
import BookComponent from '../components/BookComponent.vue';
import { books } from '../data/books';
</script>

<template>
  <main>
    <h2>Books</h2>

    <div class="books-container">
      <BookComponent
        v-for="(book, idx) in books"
        v-bind:key="idx"
        :book="book"
      />
    </div>
  </main>
</template>

<style lang="scss">
.books-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, auto); // TODO: change responsive
}
</style>
