<template>
  <div class="main">
    <todo-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue';
export default defineComponent({
  name: 'Main',
  components: {
    TodoList,
  },
});
</script>
