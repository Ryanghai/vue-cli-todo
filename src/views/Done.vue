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
            <img src="@/assets/todo-image.svg" alt="todo-image">
          </div>
          <p>done</p>
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

</style>
