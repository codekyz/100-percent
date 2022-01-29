<template>
  <article>
    <section v-for="todoitem in this.todoItems" v-bind:key="todoitem.item">
      <div class="content">
        {{ todoitem.item }}
        <div class="control">
          <input type="text" value="56" />
          <p>&#10006;</p>
        </div>
      </div>
      <div class="progress_grey">
        <div class="progress_color">56%</div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  computed: {
    todoItems() {
      return this.$store.getters.storedTodoItem;
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #333;
  margin: 16px;
}

.content {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.control {
  display: flex;
  align-items: center;
  margin-left: auto;
}

input {
  width: 3rem;
  padding: 0.5rem;
  margin-right: 8px;
}

.progress_grey {
  background-color: #eee;
  width: 100%;
}

.progress_color {
  background-color: #333;
  width: 56%;
  color: #eee;
  text-align: center;
}
</style>