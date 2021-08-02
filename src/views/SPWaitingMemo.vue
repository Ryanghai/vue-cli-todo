<template>
<div class="container">
  <router-link to="/inprogress" class="page-back">
    <img src="@/assets/back.png" alt="page back button">
  </router-link>
  <div class="todo-container">
    <div class="tasks">
      <div class="task">
        <div class="task-title">
          <div class="title-image task-list">
            <img src="@/assets/waiting-img.svg" alt="todo-image">
          </div>
          <p>ここにタスクの内容</p>
        </div>
        <div class="todo-memo">
          <textarea class="todo-mamo-area"></textarea>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { inprogressTasks } from '../data/inprogresstasks.js'

export default {
  data: () => ({
    body: "",
    inprogresstasks: inprogressTasks,
  }),
}
</script>


<style scoped>
.todo-container {
  background-color: #333130;
  height: 100vh;
  width: 100%;
}

.page-back {
  text-align: left;
}
.page-back img {
  position: fixed;
  left: 16px;
  top: 12px;
}

.tasks {
  display: flex;
  padding-top: 44px;
  overflow: scroll;
  width: 100%;
}

.task {
  background-color: #FFF5EE;
  max-width: 311px;
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 44px);
  border-radius: 12px 12px 0 0;
  overflow-x: scroll;
}

.task-title {
  background-color: #FFF5EE;
  display: flex;
  justify-content: center;
  padding: 14px 0 12px 0;
  border-bottom: 1px solid #B5B5B5;
  border-radius: 12px 12px 0 0 ;
  position: fixed;
  width: 311px;
  z-index: 10;
}
.title-image {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.task-list {
  background-color: #43bc39;
}
.task-list img {
  width: 30px;
  height: 30px;
}

.task-title p {
  margin: auto 0;
  font-size: 16px;
  color: #757575;
}

/* textarea */
.todo-memo {
  margin-top: 59px;
}

.todo-mamo-area {
  background-color: #FFF5EE;
  width: 100%;
  height: calc(100vh - 103px);
  outline: none;
  border: 0px;
  padding: 10px 10px;
  box-sizing: border-box;
}

</style>
