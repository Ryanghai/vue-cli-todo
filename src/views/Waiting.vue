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
            <p>Waiting</p>
          </div>
          <div class="task-lists">
            <div class="task-lists-list waitingtask" v-for="(waitingtask, i) in waitingtasks" :key="i">
              <label>
                <input class="checkbox-input" type="checkbox" />
                <p class="checkbox-parts">{{ waitingtask.label }}</p>
              </label>
              <router-link to="/sp-waiting-memo" class="pc-hide">
                <img class="to-memo" src="@/assets/to-memo.svg" alt="">
              </router-link>
              <router-link to="#" class="pc-show">
                <img class="to-memo" src="@/assets/to-memo.svg" alt="">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="tasks-memo">
        <div class="task-memo sp-show">
          <div class="memo-title">
            <div class="title-image task-list">
              <img src="@/assets/todo-image.svg" alt="todo-image">
            </div>
            <p>ここにタスクの内容</p>
          </div>
          <div class="todo-memo">
            <textarea class="todo-memo-area"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { waitingTasks } from '../data/waitingtasks.js'

export default {
  data: () => ({
    lists: JSON.parse(window.localStorage.getItem("lists")) || [],
    body: "",
    waitingtasks: waitingTasks,
  }),
}
</script>


<style scoped>
.todo-container {
  background-color: #333130;
  height: 100vh;
  width: 100%;
  display: inline-block;
}

.sp-show, .pc-show {
  display: none;
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
  font-weight: bold;
  font-size: 24px;
  color: #757575;
}

.add-task-container {
  background-color: #FFF5EE;
  position: absolute;
  bottom: 0;
  height: 80px;
  max-width: 311px;
  width: 90%;
  box-shadow: 0 -8px 10px -3px #dedede;
  
}

.add-task {
  position: relative;
  margin: 16px 4px 16px;
  height: 50px;
  max-width: 301px;
  border: 1px solid #43bc39;
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
  color: #43bc39;
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
  border: 1px solid #43bc39;
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
  border-bottom: 3px solid #43bc39;
  border-right: 3px solid #43bc39;
}

@media screen and (min-width: 960px) {
  .todo-container {
    display: flex;
    justify-content: center;
  }

  .pc-hide {
    display: none;
  }

  .sp-show, .pc-show {
    display: block;
  }

  .task {
    margin: 0 auto ;
  }

  /* textarea */
  .todo-memo {
    margin-top: 59px;
  }

  .tasks {
    width: 36%;
    justify-content: center;
  }

  .tasks-memo {
    padding-top: 44px;
    padding-bottom: 20px;
    overflow: scroll;
    width: 60%;
  }

  .task-memo {
    background-color: #FFF5EE;
    margin: 0 auto;
    height: calc(100vh - 64px);
    border-radius: 12px;
    overflow-x: scroll;
  }

  .todo-memo-area {
    background-color: #FFF5EE;
    width: 100%;
    height: calc(100vh - 103px);
    outline: none;
    border: 0px;
    padding: 10px 10px;
    box-sizing: border-box;
    font-size: 17px;
    color: #2c3e50;
  }

  .memo-title {
    background-color: #FFF5EE;
    display: flex;
    justify-content: center;
    padding: 14px 0 12px 0;
    border-bottom: 1px solid #B5B5B5;
    border-radius: 12px 12px 0 0 ;
    position: fixed;
    width: 60%;
    z-index: 10;
  }

  .memo-title p {
    margin: auto 0;
    font-size: 16px;
    color: #757575;
  }
}
</style>
