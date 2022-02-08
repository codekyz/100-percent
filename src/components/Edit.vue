<template>
  <section
      class="todo-update"
    >
      <div class="inputs">
        <input type="text" 
          v-model="newItems.newItem"
          class="todo-input"
          :placeholder=item
        >
        <input type="text" 
          v-model="newItems.newPercent"
          class="todo-input"
          :placeholder=percent
        >
        <button 
          class="todo-update-btn"
          @click="updateItem(this.item)"
        >
          수정
        </button>
      </div>
    </section>
</template>

<script>
import { reactive } from 'vue';
export default {
    props:{
        item: String, 
        percent: Number,
    },
    setup() {
      const newItems = reactive({
          newItem: '',
          newPercent: '',
      });

      return {
          newItems,
      };
    },
    methods: {
        updateItem(item) {
            const newItems = this.newItems;
            this.$store.commit("updateOneItem", { item, newItems });
        }
    }
}
</script>

<style scoped>

.todo-update {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: #ddd 0 3px 3px;
  margin: 30px 5px 5px 5px;
}

.inputs {
    width: 100%;
    display: flex;
    justify-content: center;
}

.todo-input {
  width: 40%;
  margin: 10px;
  padding: 10px;
  border: none;
  background-color: #eee;
}

.todo-update-btn {
  width: 20%;
  margin: 10px;
  padding: 10px;
  border: none;
  background-color: #333;
  color: #eee;
  cursor: pointer;
}


@media screen and (max-width: 800px) {
  .inputs {
    display: flex;
    flex-direction: column;
  }
  .todo-input {
    width: auto;
    margin: 5px;
    padding: 10px;
    border: none;
    background-color: #eee;
  }
  .todo-update-btn {
    width: auto;
    margin: 5px;
  }
}
</style>