<template>
<div class="container">
  <a href="/" class="page-back">
    <img src="@/assets/back.png" alt="page back button">
  </a>
  <div class="todo-container">
    <div class="tasks">
      <div class="task">
        <div class="task-title">
          <div class="title-image task-list">
            <img src="@/assets/waiting-img.svg" alt="waiting-image">
          </div>
          <p>Done</p>
        </div>
        <div class="task-lists">
          <div class="task-lists-list donetasks" v-for="(donetask, i) in donetasks" :key="i">
            <label>
              <input class="checkbox-input" type="checkbox" />
              <p class="checkbox-parts">{{ donetask.label }}</p>
            </label>
            <button @click="deleteList(i)">
              <img class="trash" src="@/assets/trash.svg" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { doneTasks } from '../data/donetasks.js'

export default {
  data: () => ({
    lists: JSON.parse(window.localStorage.getItem("lists")) || [],
    body: "",
    donetasks: doneTasks,
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
  background-color: #e34747;
}
.task-list img {
  width: 30px;
  height: 30px;
}

.task-title p {
  margin: auto 0;
  font-weight: bold;
  font-size: 24px;
  color: #757575;
}

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

.task-lists-list label {
  width: 100%;
  display: flex;
}

.task-lists-list .to-memo {
  width: 10px;
  height: 10px;
  margin: auto 4px;
}
.task-lists-list .trash {
  width: 15px;
  height: 15px;
  margin: auto 0px;
  opacity: 1;
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

.checkbox-input {
  display: none;
}
.checkbox-parts {
  padding-left: 24px;
  position: relative;
}
.checkbox-parts::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -10px;
  left: 0;
  width: 15px;
  height: 15px;
  background-color: white;
  border: 1px solid #e34747;
  border-radius: 50%;
}
.checkbox-input:checked + .checkbox-parts::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -15px;
  left: 5px;
  width: 7px;
  height: 14px;
  transform: rotate(40deg);
  border-bottom: 3px solid #e34747;
  border-right: 3px solid #e34747;
}

.donetasks button {
  border: none;
  background-color: #FFF5EE;
}


</style>
