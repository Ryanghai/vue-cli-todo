<template>
  <div class="todo-container">
    <div class="tasks">
      <div class="task">
        <div class="task-title">
          <div class="title-image task-list">
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
  </div>
</template>

<style scoped>
.todo-container {
  background-color: #333130;
  height: 100vh;
  width: 100%;
}

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
  display: flex;
  justify-content: center;
  padding: 14px 0 12px 0;
  border-bottom: 2px solid #B5B5B5;
}

.title-image {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.task-list {
  background-color: #fabe00;
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
