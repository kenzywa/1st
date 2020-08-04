<template>
    <div>
        <input  type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
        <div  v-if="$store.state.loading" class="lds-dual-ring"></div>
        <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <todo-item v-for="todo in todosFiltered" :key="todo.id" :todo="todo"  :checkAll="!anyRemaining" >
        </todo-item>
        </transition-group>

        <div class="extra-container">
            <todo-check-all></todo-check-all>
            <todo-items-remaining></todo-items-remaining>
        </div>

        <div class="extra-container">
            <todo-filtered></todo-filtered>

            <div>
                <transition name="fade">
                <todo-clear-completed></todo-clear-completed>
                </transition>
            </div>
        </div>
    </div>
</template>


<script>
    import TodoItem from "./TodoItem";
    import TodoItemsRemaining from "./TodoItemsRemaining";
    import TodoCheckAll from "./TodoCheckAll";
    import TodoFiltered from "./TodoFiltered";
    import TodoClearCompleted from "./TodoClearCompleted";


    export default {
        name: 'todo-list',
        components: {
            TodoItem,
            TodoItemsRemaining,
            TodoCheckAll,
            TodoFiltered,
            TodoClearCompleted,
        },
        data () {
            return {
                newTodo:'',
                idForTodo: 3,
            };
        },
        created() {
            this.$store.dispatch('retrieveTodos')
        },
        computed:{
            anyRemaining() {
                return this.$store.getters.anyRemaining
            },
            todosFiltered() {
               return this.$store.getters.todosFiltered
            }
        },
        methods: {
          addTodo() {
              if (this.newTodo.trim().length === 0) {
                  return;
              }

              this.$store.dispatch('addTodo',{
                  id: this.idForTodo,
                  title: this.newTodo,
              })

              this.newTodo = "";
              this.idForTodo++;
          },
        }
    };
</script>


<style lang="scss">

    @import '/animate.min.css';


   .todo-input {
       width: 100%;
       padding: 10px 18px;
       font-size: 18px;
       margin-bottom: 8px;

       &:focus {
        outline: 0;
        }
   }
   .todo-item {
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        animation-duration: 0.3s;
   }
   .remove-item {
       cursor: pointer;
       margin-left: 14px;
       &:hover {
           color: black;
       }
   }
   .todo-item-edit {
       font-size: 24px;
       color: #2c3e50;
       margin-left: 0;
       width: 100%;
       padding: 10px;
       border: 1px solid #ccc;
       font-family: 'Avenir', Helvatica, Arial, sans-serif;

       &:focus {
           outline: none;
       }
   }
   .completed {
       text-decoration: line-through;
       color: grey;
   }
   .extra-container {
       display: flex;
       align-items: center;
       justify-content: space-between;
       font-size: 16px;
       border-top: 1px solid lightgrey;
       padding-top: 14px;
       margin-bottom: 14px;

   }
   button {
       font-size: 14px;
       background-color: white;
       appearance: none;

       &:hover {
           background: lightgreen;
       }

       &:focus {
           outline: none;
       }
   }
   .active {
       background: lightgreen;
   }

   .fade-enter-active, .fade-leave-active {
       transition: opacity .2s;
   }
   .fade-enter, .fade-leave-to {
       opacity: 0;
   }
    .lds-dual-ring {
        display: block;
        width: 80px;
        height: 80px;
        margin: auto;
        margin-bottom: 16px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid grey;
        border-color: lightgreen transparent lightgreen transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>
