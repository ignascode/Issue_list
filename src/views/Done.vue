<template>
  <div class="done middle">
      <div class="content-container">
          <h1 class="title"><i class="fas fa-check-square"></i> Done Issues</h1>
          <div class="todos">
              <TodoItem
                v-for="(item, index) in done"
                v-bind:key="index"
                v-bind:content-text="item"
                v-bind:index="index"
                todo-state="done"
              />
          </div>
      </div>
  </div>
</template>

<script>
import TodoItem from './../components/TodoItem'
import { mapState } from 'vuex'

export default {
    name:'Done',
    components:{
        TodoItem,
    },
    computed:{
        ...mapState([
            'done'
        ])
    }
}
</script>

<style scoped>

.done {
    width: 100%;
    height: calc(100vh - 75px - 45px);
}

.content-container {
  width: 900px;
  padding: 25px;
  border-radius: 10px;
  background-color: #343a40;
  text-align: center;
  font-family: 'Mulish' , sans-serif;
  box-shadow: 5px 5px 10px 1px rgba(0,0,0,.2);
  color: white;
}

.title {
    margin-bottom: 25px;
}

.todos {
    width: 100%;
    height: auto;
    overflow-y: auto;
}

.todos::-webkit-scrollbar {
  width: 10px;
}

.todos::-webkit-scrollbar-track {
  background: #f1f1f1; 
}

.todos::-webkit-scrollbar-thumb {
  background: #7699e3; 
}

.todos::-webkit-scrollbar-thumb:hover {
  background: #6583c4; 
}

</style>