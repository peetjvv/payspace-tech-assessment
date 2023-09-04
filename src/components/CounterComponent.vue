<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="counter">
    <button type="button" class="btn btn-danger" @click="count--">-</button>
    <span :class="`current-value ${count < 0 ? 'negative' : 'positive'}`">{{
      count
    }}</span>
    <button type="button" class="btn btn-success" @click="count++">+</button>
  </div>
</template>

<style lang="scss" scoped>
.current-value {
  display: inline-block;
  min-width: 2rem;
  text-align: center;

  padding: 0.25rem;

  &.negative {
    color: red;
  }

  &.positive {
    color: limegreen;
  }
}
</style>
