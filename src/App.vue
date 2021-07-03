<template>
  <div id="app">
    <h1>{{ today() }} My Todos</h1>
    <div class="add_task">
      <input
        type="text"
        v-model="body"
        @keydown.enter="addList"
        placeholder="New Task"
      />
      <input type="submit" value="+" :disabled="body === ''" @click="addList" />
    </div>
    <p>残タスク数：{{ finishedRate }}/{{ unfinishedTodoCount }}個</p>
    <p>終了率：{{ finishedRate }}%</p>
    <div class="tasks">
      <ul>
        <li v-for="(list, i) in lists" v-bind:key="i">
          <div class="text">
            <input type="checkbox" v-model="list.done" />
            <span :class="list.done ? 'finished' : ''">
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
    body: "",
  }),
  methods: {
    addList: function() {
      if (this.body === "") return;
      this.lists.push({ body: this.body, done: false });
      this.body = "";
    },
    deleteList: function(i) {
      this.lists.splice(i, 1);
    },
    today() {
      const today = new Date();
      const date = today.getMonth() + 1 + "/" + today.getDate();
      return date;
    },
  },
  computed: {
    // 終了していないタスクの数を返す
    unfinishedTodoCount() {
      return this.lists.filter(list => !list.done).length;
    },
    // 終了しているタスクの割合を返す
    finishedRate() {
      if (!this.lists.length) return 0;

      const finishedTodoCount = this.lists.filter(list => list.done).length;
      return Math.round((finishedTodoCount / this.lists.length) * 100);
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap");

body {
  margin: 0 !important;
}

#app {
  background-color: #fff5eb;
  margin: 0;
  padding: 0;
  height: 100vh;
  text-align: center;
}

#app h1 {
  color: #b2b8a3;
  text-align: center;
  font-family: "Roboto", sans-serif;
  margin-top: 0;
  padding-top: 40px;
}

input[type="text" i] {
  height: 20px;
  padding: 4px;
  border: 1px solid #b2b8a3;
}

input[type="submit" i] {
  margin-left: 8px;
  padding: 1px 4px;
  border-width: 0px;
  background-color: #b2b8a3;
  cursor: auto;
}

.tasks {
  max-width: 300px;
  width: 100%;
  margin: 40px auto;
  background-color: white;
}

.tasks ul {
  padding: 0;
  margin: 0 8px;
  list-style-type: none;
}

.tasks li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
}

.tasks li:first-child {
  padding-top: 12px;
}

button {
  opacity: 0;
  border-radius: 50%;
  border: 1px solid pink;
}

.tasks li:hover button {
  opacity: 1;
}

.finished {
  opacity: 0.5;
  text-decoration-line: line-through;
}
</style>
