<template>
  <div class="about">
    <h1>This is an All page</h1>
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
</template>
