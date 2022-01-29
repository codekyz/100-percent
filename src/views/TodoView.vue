<template>
  <div>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoInput from "../components/TodoInput.vue";
import TodoList from "../components/TodoList.vue";

export default {
  name: "Todo",
  components: {
    TodoInput,
    TodoList,
  },
};
</script>

<style>
</style>