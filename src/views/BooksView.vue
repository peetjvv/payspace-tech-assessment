<script setup lang="ts">
import { computed, ref } from 'vue';
import BookComponent from '../components/BookComponent.vue';
import { books, type Book } from '../data/books';
import { normaliseString } from '../utils/strings';

const searchTerm = ref<string>();
const normalisedSearchTerm = computed(() =>
  searchTerm.value !== undefined ? normaliseString(searchTerm.value) : ''
);

const filteredBooks = computed(() =>
  !normalisedSearchTerm.value
    ? books
    : books.filter(
        book =>
          normaliseString(book.title).includes(normalisedSearchTerm.value) ||
          normaliseString(book.author).includes(normalisedSearchTerm.value)
      )
);

type SortByOption = keyof Pick<Book, 'title' | 'author'>;
type SortByDirection = 'ASC' | 'DESC';
type SelectOption<TValue> = { value: TValue; text: string };

const sortBy = ref<SortByOption>('title');
const sortDirection = ref<SortByDirection>('ASC');

const sortByOptions: SelectOption<SortByOption>[] = [
  { value: 'title', text: 'Title' },
  { value: 'author', text: 'Author' },
];
const sortDirectionOptions: SelectOption<SortByDirection>[] = [
  { value: 'ASC', text: 'Ascending' },
  { value: 'DESC', text: 'Descending' },
];

const sortedFilteredBooks = computed(() =>
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  filteredBooks.value.sort(
    (a, b) =>
      (a[sortBy.value] < b[sortBy.value] ? -1 : 1) *
      (sortDirection.value === 'ASC' ? 1 : -1)
  )
);
</script>

<template>
  <main>
    <h2>Books</h2>

    <div class="filters-container">
      <label>
        Search books
        <input
          type="search"
          placeholder="Enter book title or author name"
          v-model="searchTerm"
        />
      </label>
    </div>

    <div class="sort-container">
      <label>
        Sort by
        <select v-model="sortBy">
          <option
            v-for="(sortByOption, idx) in sortByOptions"
            v-bind:key="idx"
            :value="sortByOption.value"
          >
            {{ sortByOption.text }}
          </option>
        </select>
      </label>

      <label>
        Direction
        <select v-model="sortDirection">
          <option
            v-for="(sortDirectionOption, idx) in sortDirectionOptions"
            v-bind:key="idx"
            :value="sortDirectionOption.value"
          >
            {{ sortDirectionOption.text }}
          </option>
        </select>
      </label>
    </div>

    <div class="books-container">
      <BookComponent
        v-for="(book, idx) in sortedFilteredBooks"
        v-bind:key="idx"
        :book="book"
      />
    </div>
  </main>
</template>

<style lang="scss">
.filters-container,
.sort-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  > * {
    flex-basis: 300px;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  label {
    display: flex;
    flex-direction: column;

    input,
    select {
      margin-bottom: 0.5rem;
    }
  }
}

.books-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 20%);
}

// tablet
@media screen and (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {
  .books-container {
    grid-template-columns: repeat(auto-fit, 30%);
  }
}

// mobile
@media screen and (max-width: $breakpoint-mobile) {
  .filters-container,
  .sort-container {
    flex-direction: column;

    > * {
      flex-basis: unset;

      &:not(:last-child) {
        margin-right: unset;
      }
    }
  }

  .books-container {
    grid-template-columns: repeat(auto-fit, 40%);
  }
}

// narrow-mobile
@media screen and (max-width: $breakpoint-mobile-narrow) {
  .books-container {
    grid-template-columns: repeat(auto-fit, 90%);
  }
}
</style>
