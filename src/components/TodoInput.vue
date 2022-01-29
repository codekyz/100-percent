<template>
  <section>
    <input type="text" v-model="newTodoItem" placeholder="할일을 적어주세요" />
    <button @click="addTodo">추가</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
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
section {
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
}

input {
  width: 80%;
  padding: 16px;
  border: none;
  background-color: #eee;
}

button {
  width: 20%;
  padding: 16px;
  border: none;
  background-color: #333;
  color: #eee;
  cursor: pointer;
}
</style>