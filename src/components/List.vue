<template>
  <ul>
    <li v-for="(item, index) in todos" class="list__row" :key="index">
      <p class="list__text">
        <span v-if="item.done" class="list__done"></span>
        {{ item.value }}
      </p>
      <button class="list__btn" :id="index" @click="onClick">check</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'List',
  props: {
    todos: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['check'],
  setup(props, { emit }) {
    const onClick = (event: Event) => {
      const target = event.target as HTMLElement;
      emit('check', target.id);
    };

    return {
      onClick,
    };
  },
});
</script>

<style lang="scss">
.list {
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 18rem;
    margin: 1rem 0;
  }

  &__text {
    position: relative;
  }

  &__done {
    position: absolute;
    width: 100%;
    top: 37%;
    height: 0.5rem;
    background-color: rgba(33, 209, 133, 0.5);
  }

  &__btn {
    width: 3rem;
    height: 2rem;
    border: none;
    background-color: rgb(33, 209, 133);
  }
}
</style>
