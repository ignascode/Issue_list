<template>
  <div class="home middle">
    <div class="content-container">
      <h1 class="title"><i class="fas fa-clipboard-list"></i> Press below to find issues</h1>
      <div class="input-container jc-center">
       
        <b-button variant="outline-primary"><router-link to="/issues/open">
                           Open Issues
                        </router-link>
                        </b-button>
          
      </div>
     
    </div>
  
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'Home',
  data(){
    return {
      task:'',
      messageText:''
    }
  },
  methods:{
    ...mapActions([
      'addTodoTask'
    ]),
    addTodo(){
      this.giveMessage("Issue is added!");
      this.addTodoTask(this.task);
      this.task="";
    },
    giveMessage(text,ms=1500){
      this.messageText=text;
      setTimeout(() => {
        this.messageText="";
      }, ms);
    }
  }
}
</script>

<style scoped>

.home {
  width: 100%;
  height: calc(100vh - 75px - 45px);
      background: linear-gradient(270deg, #5d6cbb, #b0b8e1, #e0e1e4);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 33s ease infinite;
    -moz-animation: AnimationName 33s ease infinite;
    animation: AnimationName 33s ease infinite;


@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
  
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
  margin-bottom: 15px;
}

.input-container {
  width: 100%;
  padding-block: 10px;
  margin-bottom: 25px;
}

.input-container input {
  font-size: 25px;
  margin-right: 10px;
  padding: 5px;
  width: 350px;
  border-radius: 3px;
  border: 2px solid rgb(218, 218, 218);
  font-family: 'Poppins' , sans-serif;
}

.input-container input::placeholder {
  color: rgb(172, 172, 172);
}

/* .input-container button {
  width: 100px;
  height: 55px;
  border-radius: 3px;
  background-color: #7699e3;
  color: white;
  cursor: pointer;
  font-family: 'Poppins' , sans-serif;
  font-size: 20px;
  transition: all .2s ease;
} */

.input-container button:hover {
  background-color: #343a40;
  transform: scale(1.1) perspective(2px);
  text-decoration: none;
  
}

.message {
  width: 100%;
  height: 40px;
  text-align: center;
  font-family: 'Poppins' , sans-serif;
  font-size: 20px;

}

</style>