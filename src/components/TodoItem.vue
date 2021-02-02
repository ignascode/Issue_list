<template>
  <div class="item jc-between ai-center">
      <span><i class="fas fa-hand-point-right"></i> <input  @input="updateText" v-bind:value="contentText"/></span>
      <div class="navigate middle">
           
          <i class="fas fa-check-circle"  v-if="todoState=='ongoing'" @click="moveTodo(); updateTask();"></i>
          <i class="fas fa-trash"  v-if="todoState=='ongoing'" @click="moveTodo1"></i>
          <i class="fas fa-trash"  v-if="todoState=='done'" @click="moveTodo2"></i>         
          <i class="fas fa-check-circle" v-if="todoState=='trashed'" @click="moveTodo3"></i>
          <i class="fas fa-share"  v-if="todoState=='done'"  @click="moveTodo4"></i>
          <i class="fas fa-share"  v-if="todoState=='trashed'" @click="moveTodo5"></i>        
       
        
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:'TodoItem',
    props:[
        'content-text',
        'todo-state',
        'index'
    ],
    data(){
        return {
            
        }
    },
    methods:{
        updateTask: function(e, contentText){
            e.preventDefault();
            contentText.title = e.target.innerText;
            e.target.blur();
          },

        ...mapActions([
            'updateItemText',
            'moveTodoItem',
            'moveTodoItem1',
            'moveTodoItem2',
            'moveTodoItem3',
            'moveTodoItem4',
            'moveTodoItem5'
        ]),
        updateText(e) {
            console.log('updateText123', this.index, e.target.value)
            this.updateItemText({index: this.index, message: e.target.value});
        },
        moveTodo(){
            this.moveTodoItem(this.index);
        },
        moveTodo1(){
            this.moveTodoItem1(this.index);
        },
        moveTodo2(){
            this.moveTodoItem2(this.index);
        },
        moveTodo3(){
            this.moveTodoItem3(this.index);
        },
        moveTodo4(){
            this.moveTodoItem4(this.index);
        },
        moveTodo5(){
            this.moveTodoItem5(this.index);
        }
    }
}
</script>

<style scoped>

.item {
    width: 99%;
    padding: 10px;
    background-color: white;
    box-shadow: 5px 5px 10px 1px rgba(0,0,0,.2);
    border-radius: 3px;
    color: black;
    text-align: start;
    margin-block: 15px;
}

.item p {
    font-family: 'Poppins' , sans-serif;
    font-size: 18px;
}

.item p i {
    color: #7699e3;
    font-size: 20px;
}

.navigate {
    width: 45px;
    margin-left: 20px;
    font-size: 35px;
    position: relative;
}

.navigate .far {
    cursor: pointer;
}

.navigate i:hover + .description {
    display: block;
    display: flex;
}

.description {
    width: 90px;
    height: 30px;
    position: absolute;
    top: -30px;
    background-color: #141414;
    font-size: 15px;
    color: white;
    border-radius: 6px;
    letter-spacing: 1px;
    display: none;
    cursor: default;
}

.description:hover {
    display: block;
    display: flex;
}

</style>