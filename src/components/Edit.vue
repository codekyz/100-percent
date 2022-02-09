<template>
  <section
      class="todo-update"
    >
      <div class="inputs">
        <p>
          {{ this.newItems.newItem }}
        </p>
        <input type="text" 
          v-model="this.newItems.newPercent"
          class="todo-input"
        >
        <button 
          class="todo-update-btn"
          @click="updateItem(this.item, this.percent)"
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
        updateItem(item, percent) {
          const newItems = this.newItems;
          // 둘다 값이 있을때
          if ((newItems.newItem !== '') && (newItems.newPercent !== '')) {
            this.$store.commit("updateOneItem", { item, newItems });
          } 
          else if (newItems.newPercent !== '') {
            newItems.newItem = item;
            this.$store.commit("updateOneItem", { item, newItems });
          }
          // 둘다 값이 없을때
          else {
            newItems.newItem = item;
            newItems.newPercent = percent;
            alert('변경사항이 없습니다.');
          }
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
  width: 80%;
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