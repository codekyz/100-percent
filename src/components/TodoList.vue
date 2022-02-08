<template>
  <article class="wrraper">
    
    <section
      class="todo-card"
      v-for="(todoitem, index) in this.todoItems"
      v-bind:key="todoitem.item"
    >
      <div class="content">
        {{ todoitem.item }}
        <div class="control">
          {{ todoitem.percent }}%
          <p 
            class="todo-btn"
            @click="(editItem = todoitem) && (isActive = !isActive)"
          >
          &#9998;
          </p>
          <p 
            class="todo-btn"
            @click="removeTodo(todoitem, index)"  
          >
          &#10006;
          </p>
        </div>
      </div>
      <div class="progress-grey">
        <div 
          :class="{ 'progress-color': todoitem.percent !== 0 }" 
          :style="{ width: todoitem.percent + '%' }">
          {{ todoitem.percent }}%
        </div>
      </div>
      <edit 
        v-if="todoitem.item === editItem.item"
        :class="{ 'display-none': isActive }"
        v-bind:="editItem"
      />
    </section>
  </article>
</template>

<script>
import Edit from './Edit.vue';
import { ref } from 'vue';

export default {
  setup() {
    const isActive = ref(true);
    const editItem = ref({});

    return {
      isActive,
      editItem,
    }
  },
  computed: {
    todoItems() {
      return this.$store.getters.storedTodoItem;
    },
  },
  methods: {
    removeTodo(todoItem, index) {
      this.$store.commit("removeOneItem", { todoItem, index });
    },
  },
  components: {
    Edit,
  }
};
</script>

<style scoped>
.wrraper {
  display: flex;
  flex-direction: column;
}

.todo-card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: #ddd 0 3px 3px;
  margin: 16px;
}

.content {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 1rem;
}

.control {
  display: flex;
  align-items: center;
  margin-left: auto;
  font-weight: 800;
}

.todo-btn {
  margin-left: 16px;
  cursor: pointer;
}

.progress-grey {
  background-color: #eee;
  width: 100%;
}

.progress-color {
  background-color: #333;
  color: #eee;
  text-align: center;
}

.display-none {
  display: none;
}

</style>