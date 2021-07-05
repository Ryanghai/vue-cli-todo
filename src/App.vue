<template>
  <div id="app">
    <div class="container">
      <div class="left_fixed_content">
        <div class="left_fixed_buttons">
          <div
            class="left_button"
            v-for="(leftFixedButton, i) in leftFixedButtons"
            :key="i"
          >
            <button>
              <img
                :class="leftFixedButton.class"
                :src="leftFixedButton.image"
                :alt="leftFixedButton.alt"
              />
              <span>{{ leftFixedButton.label }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="add_task">
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
    </div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    lists: JSON.parse(window.localStorage.getItem("lists")) || [],
    body: "",
    leftFixedButtons: [
      {
        label: "All tasks",
        class: "all-task",
        image: require("@/assets/lists-image.svg"),
        alt: "All tasks",
      },
      {
        label: "To do",
        class: "to-do",
        image: require("@/assets/todo-image.svg"),
        alt: "To do",
      },
      {
        label: "Inprogress",
        class: "in-progress",
        image: require("@/assets/inprogress-img.svg"),
        alt: "Inprogress",
      },
      {
        label: "Waiting",
        class: "waiting",
        image: require("@/assets/waiting-img.svg"),
        alt: "Waiting",
      },
      {
        label: "Done",
        class: "done",
        image: require("@/assets/done-img.svg"),
        alt: "Done",
      },
    ],
  }),
  methods: {
    addList: function() {
      if (this.body === "") return;
      this.lists.push({ body: this.body, done: false });
      window.localStorage.setItem("lists", JSON.stringify(this.lists));
      this.body = "";
    },
    deleteList: function(i) {
      this.lists.splice(i, 1);
      window.localStorage.setItem("lists", JSON.stringify(this.lists));
    },
  },
  computed: {
    // 終了していないタスクの数を返す
    unfinishedTodoCount() {
      return this.lists.filter((list) => !list.done).length;
    },
    // 終了しているタスクの割合を返す
    finishedRate() {
      if (!this.lists.length) return 0;

      const finishedTodoCount = this.lists.filter((list) => list.done).length;
      return Math.round((finishedTodoCount / this.lists.length) * 100);
    },
  },
};
</script>

<style scoped>
/* body {
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
}

.tasks li:hover button {
  opacity: 1;
}

.finished {
  opacity: 0.5;
  text-decoration-line: line-through;
} */
</style>
