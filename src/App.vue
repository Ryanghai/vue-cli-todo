<template>
  <div id="app">
    <h1>{{ today() }} My Todos</h1>
    <div class="add_task">
      <input type="text" v-model="body" placeholder="New Task" />
      <input type="submit" value="+" @click="addList" />
    </div>
    <div class="tasks">
      <ul>
        <li v-for="(list, i) in lists" v-bind:key="i">
          <div class="text">
            <input type="checkbox" v-model="lists.done"/>
            <span :class="lists.done ? 'finished' : ''">
              {{ list.body }}
            </span>
          </div>
          <button @click="deleteList(i)">×</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    lists: [],
    // title: "",
    body: "",
  }),
  methods: {
    addList: function() {
      if ( this.body === "") return;
      this.lists.push({ body: this.body, done: false });
      // this.title = "";
      this.body = "";
    },
    deleteList: function(i) {
      this.lists.splice(i, 1);
    },
    today() {
      const today = new Date();
      const date = (today.getMonth() + 1) + "/" + today.getDate();
      return date;
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');

body {
  margin: 0;
}

#app {
  background-color: #FFF5EB;
  margin: 0;
  padding: 0;
  height: 100vh;
  text-align: center;
}

#app h1 {
  color: #B2B8A3;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  margin-top: 0;
  padding-top: 40px;
}

input[type="text" i] {
  height: 20px;
  padding: 4px;
  border: 1px solid #B2B8A3;
}

input[type="submit" i] {
  margin-left: 8px;
  padding: 1px 4px;
  border-width: 0px;
  background-color: #B2B8A3;
  cursor: pointer;
}

.tasks {
  max-width: 300px;
  width: 100%;
  margin: 40px auto;
  background-color: white;
}

.tasks ul {
  padding: 0;
  margin: 0 40px;
  list-style-type: none;
}

li button {
  opacity: 0;
}

.tasks li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
}

.tasks li:first-child {
  padding-top: 12px;
}

.tasks li:hover {
  button {
    opacity: 1;
  }
}

.finished {
  opacity: 0.5;
  text-decoration-line: line-through;
}
</style>
