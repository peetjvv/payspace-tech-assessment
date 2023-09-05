<script setup lang="ts">
import { type Book } from '../data/books';

defineProps<{
  book: Book;
}>();
</script>

<template>
  <div class="book">
    <img :alt="`${book.title} front cover`" v-bind:src="book.imgSrc" />
    <!-- TODO: fix image not found -->
    <b class="title">{{ book.title }} ({{ book.year }})</b>
    <span class="author">{{ book.author }}</span>
  </div>
</template>

<style lang="scss" scoped>
.book {
  display: flex;
  flex-direction: column;

  min-width: 20vw;
  width: 100%;
  max-width: 50vw;

  padding: 0.25rem 0.5rem;
  border: 1px solid white;

  img {
    height: 200px;
    object-fit: cover;

    font-size: small; // alt text
  }

  .title {
  }

  .author {
  }
}
</style>
