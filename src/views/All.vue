<template>
  <div class="container">
    <a href="/" class="page-back">
      <img src="@/assets/back.png" alt="page back button">
    </a>
    <div class="all-task-container">
      <div class="tasks">
        <div class="task">
          <div class="task-title">
            <div class="title-image task-list">
              <img src="@/assets/todo-image.svg" alt="todo-image">
            </div>
            <p>To do</p>
          </div>
          <div class="task-lists">
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
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
            <div class="title-image inprogress">
              <img src="@/assets/inprogress-img.svg" alt="todo-image">
            </div>
            <p>Inprogress</p>
          </div>
          <div class="task-lists">
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>一行だとこんな</p>
            </div>
            <div class="task-lists-list">
              <input type="checkbox">
              <p>二行の時はこんな感じ二行の時はこんな感じ二行の時はこんな感じ</p>
            </div>
          </div>
        </div>
        <div class="task">
          <div class="task-title">
            <div class="title-image waiting">
              <img src="@/assets/waiting-img.svg" alt="todo-image">
            </div>
            <p>Waiting</p>
          </div>
        </div>
        <div class="task">
          <div class="task-title">
            <div class="title-image done">
              <img src="@/assets/done-img.svg" alt="todo-image">
            </div>
            <p>Done</p>
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
/* 背景 */
.all-task-container {
  background-color: #333130;
  height: 100vh;
  width: 1350px;
}

/* 戻るbtn */
.page-back {
  text-align: left;
}
.page-back img {
  position: fixed;
  left: 16px;
  top: 12px;
}

/* タスクの大枠 */
.tasks {
  display: flex;
  padding-top: 44px;
  overflow: scroll;
  width: 100%;
}

.task {
  background-color: #FFF5EE;
  width: 311px;
  margin-left: 16px;
  height: calc(100vh - 44px);
  border-radius: 12px 12px 0 0;
  overflow-x: scroll;
}

.task:first-child {
  margin-left: 32px;
}

.task-title {
  background-color: #FFF5EE;
  display: flex;
  justify-content: center;
  padding: 14px 0 12px 0;
  border-bottom: 2px solid #B5B5B5;
  border-radius: 12px 12px 0 0 ;
  position: absolute;
  width: 311px;
}

.title-image {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

/* タスクの中身 */
.task-lists-list {
  display: flex;
  margin: 12px 6px 0;
  padding: 14px 8px;
  border: 1px solid #B5B5B5;
  border-radius: 12px;
}

.task-lists-list:first-child {
  margin-top: 72px;
}

.task-lists-list input[type="checkbox" i] {
  margin: auto 0;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.task-lists-list p {
  text-align: left;
  font-size: 14px;
  width: 90%;
  max-width: 260px;
}

/* それぞれのタイトルの色、画像変更 */
.task-list {
  background-color: #fabe00;
}
.task-list img {
  width: 30px;
  height: 30px;
}

.inprogress {
  background-color: #bf6dea;
}
.inprogress img {
  width: 32px;
  height: 30px;
}

.waiting {
  background-color: #43bc39;
}
.waiting img {
  width: 32px;
  height: 32px;
}

.done {
  background-color: #e34747;
}
.done img {
  width: 32px;
  height: 32px;
}

.task-title p {
  margin: auto 0;
  font-weight: bold;
  font-size: 24px;
  color: #757575;
}

/* タスク追加 */
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
  background-color: #FFF5EE;
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
