import { createStore } from 'vuex';

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}

export default createStore({
    state: {
        todoItems: storage.fetch(),

    },
    getters: {
        storedTodoItem(state) {
            return state.todoItems;
        }

    },
    mutations: {
        addOneItem(state, payload) {
            const obj = { percent: 0, item: payload };
            localStorage.setItem(payload, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        updateOneItem(state, payload) {
            localStorage.removeItem(payload.item);
            state.todoItems.splice(payload.index, 1);
            const obj = { percent: payload.newItems.newPercent, item: payload.newItems.newItem };
            localStorage.setItem(payload.newItems.newItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        }

    },
    actions: {

    },
});