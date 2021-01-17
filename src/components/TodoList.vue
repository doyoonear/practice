<template>
  <div class="todo">
    <h1>TODO LIST</h1>
    <list :todos="todos" @check="onCheck" />
    <div>
      <input class="todo__input" v-model="inputVal" @keypress.enter.stop="onSubmit" />
      <button class="todo__submit" @click="onSubmit">입력</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import List from '@/components/List.vue';

interface StateType {
  todos: {
    [key: number]: string;
  };
  inputVal: string;
}

type GenericObject = {
  [key: string]: {
    [key: string]: string | boolean;
  };
};

export default defineComponent({
  name: 'TodoList',
  props: {
    msg: String,
  },
  components: {
    List,
  },
  setup() {
    const state = reactive<StateType>({
      todos: {},
      inputVal: '',
    });

    const setTodo = (): void => {
      const newKey: string = (Object.keys(state.todos).length + 1).toString();
      console.log(newKey);
      const newTodo: GenericObject = {};
      newTodo[newKey] = { value: state.inputVal, done: false };

      const allToDos = {
        ...state.todos,
        ...newTodo,
      };

      localStorage.setItem('todos', JSON.stringify(allToDos));
    };

    const getTodo = (key?: string): object => {
      const storage: string | null = localStorage.getItem('todos');
      if (storage !== null) {
        const todoList = JSON.parse(storage);
        state.todos = todoList;
        return state.todos;
      }
      return state.todos;
    };

    const checkTodo = (key: string): void => {
      const storage: string | null = localStorage.getItem('todos');
      if (storage !== null && key) {
        const todoList = JSON.parse(storage);
        todoList[key]['done'] = !todoList[key]['done'];
        localStorage.setItem('todos', JSON.stringify(todoList));
        state.todos = todoList;
      }
    };

    onMounted(getTodo);

    const onSubmit = (): void => {
      setTodo();
      getTodo();
      state.inputVal = '';
    };

    const onCheck = (id: string): void => {
      checkTodo(id);
    };

    return {
      ...toRefs(state),
      setTodo,
      getTodo,
      onSubmit,
      onCheck,
    };
  },
});
</script>

<style scoped lang="scss">
.todo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;

  &__input {
    width: 15rem;
    height: 2rem;
  }

  &__submit {
    margin-left: 0.5rem;
    border: 0.2rem solid rgb(33, 209, 133);
    width: 4rem;
    height: 2rem;
    background-color: white;
  }
}
</style>
