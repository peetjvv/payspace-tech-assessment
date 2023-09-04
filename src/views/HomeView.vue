<script setup lang="ts">
import CounterComponent from '../components/CounterComponent.vue';
import { reverseString } from '../utils/strings';

const strings = [
  'First string',
  'Second, slightly longer, string ending with!',
];
</script>

<template>
  <main>
    <h2>Home page</h2>

    <h3>Part 1</h3>
    <p>Play around on this page</p>

    <br />

    <h3>Part 2</h3>
    <p>Navigate to the <RouterLink to="/books">Books</RouterLink> page</p>

    <br />

    <h3>Part 3</h3>
    <p>Play with the counter below</p>
    <CounterComponent />

    <br />

    <h3>Part 4</h3>
    <p>Reversing a string</p>
    <div class="row">
      <div class="col">
        <h4>Input</h4>
        <ul class="list-group">
          <li
            v-for="(str, idx) in strings"
            v-bind:key="idx"
            class="list-group-item"
          >
            {{ str }}
          </li>
        </ul>
      </div>
      <div class="col">
        <h4>Output</h4>
        <ul class="list-group">
          <li
            v-for="(str, idx) in strings"
            v-bind:key="idx"
            class="list-group-item"
          >
            {{ reverseString(str) }}
          </li>
        </ul>
      </div>
    </div>
    <a
      target="_blank"
      href="https://github.com/peetjvv/payspace-tech-assessment/blob/master/src/utils/strings.ts"
    >
      String reverse source code
    </a>

    <h3>Part 5</h3>
    <p>Code review</p>
    <code class="d-flex flex-column">
      <span>1&nbsp;{{ `<ul class="item-list">` }}</span>
      <span>2&nbsp;&nbsp;&nbsp;{{ `<% items.forEach((item) => { %>` }}</span>
      <span>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ `<li><%= item.name %></li>` }}</span>
      <span>4&nbsp;&nbsp;&nbsp;{{ `<% }); %>` }}</span>
      <span>5&nbsp;{{ `</ul>` }}</span>
    </code>
    <ul>
      <li><b>Line 2</b>: <code class="d-inline-flex">Arrays.forEach()</code> only loops over the <code class="d-inline-flex">items</code> array, but does not return any values. Use <code class="d-inline-flex">Arrays.map()</code> instead.</li>
    </ul>
  </main>
</template>
