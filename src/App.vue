<template>
  <div id="app" class="container">
    <navbar></navbar>
    <!--<todo-list> </todo-list> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import TodoList from "./components/TodoList";
  import Navbar from "./components/Navbar";

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Navbar,
      TodoList,

    }
  }
</script>

<style>

  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    font-size: 24px;
  }



  #app {
    font-family: 'Avenir', Helvatica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 120px;
  }
</style>
