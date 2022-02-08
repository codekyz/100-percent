<template>
  <section class="add-todo">
    <input
      class="todo-input"
      type="text"
      v-model="newTodoItem"
      placeholder="할일을 적어주세요"
    />
    <button class="todo-add-btn" @click="addTodo">추가</button>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const newTodoItem = ref('');

    return {
      newTodoItem,
    };
  },

  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        this.$store.commit("addOneItem", this.newTodoItem);
        this.clearInput();
      } else {
        console.log("입력하세요");
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
.add-todo {
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.todo-input {
  width: 80%;
  padding: 16px;
  border: none;
  background-color: #eee;
}

.todo-add-btn {
  width: 20%;
  padding: 16px;
  border: none;
  background-color: #333;
  color: #eee;
  cursor: pointer;
}
</style>