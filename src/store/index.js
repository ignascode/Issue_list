import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos:[],
    trashed:[],
    done:[],
  },
  getters:{

  },
  mutations: {
    addNewTodo(state, todo){
      state.todos.push(todo);
    },
    moveTodo(state,index){
      console.log('moving', state.todos[index])
      state.done.push(state.todos[index]);
      console.log('all dones', state.done)
      state.todos.splice(index,1);
    },
    moveTodo1(state,index){
      state.trashed.push(state.todos[index]);
      state.todos.splice(index,1);
    },
    moveTodo2(state,index){
      state.trashed.push(state.done[index]);
      state.done.splice(index,1);
    },
    moveTodo3(state,index){
      state.done.push(state.trashed[index]);
      state.trashed.splice(index,1);
    },
    moveTodo4(state,index){
      state.todos.push(state.done[index]);
      state.done.splice(index,1);
    },
    moveTodo5(state,index){
      state.todos.push(state.trashed[index]);
      state.trashed.splice(index,1);
    },
    updateText(state, data){
      console.log('update text received: ', data)
      state.todos[data.index] = data.message;
      console.log('set: ',state.todos[data.index])
    }
  },
  actions: {
    addTodoTask({ commit }, todo){
      commit('addNewTodo',todo);
    },
    moveTodoItem({ commit }, index){
      commit('moveTodo',index);
    }
    ,
    moveTodoItem1({ commit }, index){
      commit('moveTodo1',index);
    }
    ,
    moveTodoItem2({ commit }, index){
      commit('moveTodo2',index);
    },
    moveTodoItem3({ commit }, index){
      commit('moveTodo3',index);
    },
    moveTodoItem4({ commit }, index){
      commit('moveTodo4',index);
    },
    moveTodoItem5({ commit }, index){
      commit('moveTodo5',index);
    },
    updateItemText({ commit }, data) {
      console.log('adding action', data)
      commit('updateText', data);
    }
  }
})

export default store;