<template>
  <div class="all-task-container">
    <div class="tasks">
      <div class="task">
        <div class="task-title">
          <div class="title-image">
            <img src="@/assets/todo-image.svg" alt="todo-image">
          </div>
          <p>To do</p>
        </div>
        <div class="add-task-container">
          <div class="add-task">
            <input type="submit" value="+" :disabled="body === ''" @click="addList" />
            <input
              type="text"
              v-model="body"
              @keydown.enter="addList"
              placeholder="タスクを入れる"
            />
          </div>
        </div>
      </div>
      <div class="task">
        <div class="task-title">
          <div class="title-image">
            <img src="@/assets/todo-image.svg" alt="todo-image">
          </div>
          <p>To do</p>
        </div>
        <div class="add-task-container">
          <div class="add-task">
            <input type="submit" value="+" :disabled="body === ''" @click="addList" />
            <input
              type="text"
              v-model="body"
              @keydown.enter="addList"
              placeholder="タスクを入れる"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="tasks">
      <ul>
        <li v-for="(list, i) in lists" v-bind:key="i">
          <div class="text">
            <input type="checkbox" v-model="list.done" />
            <span :class="list.done ? 'finished' : ''">
              {{ list.body }}
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="add_task">
      <input
        type="text"
        v-model="body"
        @keydown.enter="addList"
        placeholder="New Task"
      />
      <input type="submit" value="+" :disabled="body === ''" @click="addList" />
    </div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    lists: JSON.parse(window.localStorage.getItem("lists")) || [],
    body: "",
  }),
  methods: {
    addList: function() {
      if (this.body === "") return;
      this.lists.push({ body: this.body, done: false });
      window.localStorage.setItem("lists", JSON.stringify(this.lists));
      this.body = "";
    },
  },
  computed: {
    // 終了していないタスクの数を返す
    unfinishedTodoCount() {
      return (
        this.lists.filter((list) => !list.done).length +
        this.lists.filter((list) => list.done).length
      );
    },
    finishedTodoCount() {
      return this.lists.filter((list) => list.done).length;
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
.all-task-container {
  background-color: #333130;
  height: 100vh;
  width: 400%;
}

.tasks {
  display: flex;
  padding-top: 44px;
  overflow: scroll;
  width: 400%;
}

.task {
  background-color: #FFF5EE;
  width: 311px;
  margin-left: 32px;
  height: calc(100vh - 44px);
  border-radius: 12px 12px 0 0;
  overflow-x: scroll;
}

.task-title {
  display: flex;
  justify-content: center;
  padding: 14px 0 12px 0;
  border-bottom: 2px solid #B5B5B5;
}

.title-image {
  background-color: #FABE00;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.title-image img {
  width: 29px;
  height: 29px;
}

.task-title p {
  margin: auto 0;
  font-weight: bold;
  font-size: 24px;
  color: #757575;
}

.add-task-container {
  background-color: #FFF5EE;
  position: absolute;
  bottom: 0;
  height: 80px;
  width: 311px;
  box-shadow: #B5B5B5;
  box-shadow: 0 -8px 10px -3px #dedede;
  
}

.add-task {
  position: relative;
  margin: 16px 4px 16px;
  height: 50px;
  width: 301px;
  border: 1px solid #FABE00;
  border-radius: 12px;
}

.input[type="submit" i]:disabled {
  color: #757575;
}

input[type="submit" i] {
  position: absolute;
  left: 8px;
  border: none;
  background-color: none;
  color: #FABE00;
  font-size: 40px;
  cursor: pointer;
}

input[type="text" i] {
  position: absolute;
  right: 8px;
  margin-top: 14px;
  width: calc(100% - 50px);
  border: none;
  background-color: #FFF5EE;
  font-size: 14px;
  height: 20px;
}

</style>
