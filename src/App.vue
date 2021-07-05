<template>
  <div id="app">
    <div class="container">
      <div class="left_fixed_content">
        <div class="my-account">
          <img class="account-icon" src="@/assets/my-icon.png" alt="seif icon">
          <span class="account-name">Riyana</span>
        </div>
        <div class="unfinishedTodoCount">
          <p class="unfinished-title">Finished</p>
          <!-- <p class="unfinished-rate"><span>{{ finishedRate }}</span>%</p> -->
          <p class="unfinished-rate"><span>77</span>%</p>
        </div>
        <div class="left_fixed_buttons">
          <div
            class="left_buttons"
            v-for="(leftFixedButton, i) in leftFixedButtons"
            :key="i"
          >
            <button class="left_button">
              <div class="left_button_title">
                <div class="left_button_title_image" :class="leftFixedButton.class">
                  <img
                    :src="leftFixedButton.image"
                    :alt="leftFixedButton.alt"
                  />
                </div>
                <span>{{ leftFixedButton.label }}</span>
              </div>
              
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


.container {
  background-color: #FFF5EE;
  width: 100%;
  height: 100vh;
}

.left_fixed_content {
  padding: 20px 32px 0px 32px;
}

.my-account {
  display: flex;
}

.my-account .account-icon {
  margin: auto 0;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 2px solid #333130;
}

.my-account .account-name {
  margin: auto 0 auto 18px;
  font-weight: bold;
  color: #757575;
}

.unfinishedTodoCount {
  background-color: #333130;
  color: #fff;
  text-align: center;
  margin: 20px 26px;
  border-radius: 12px;
}

.unfinishedTodoCount .unfinished-title {
  font-size: 28px;
  padding-top: 10px;
  font-weight: bold;
}

.unfinishedTodoCount .unfinished-rate {
  font-size: 40px;
  padding: 8px  0px 18px 0;
  font-weight: 700;
}

.unfinishedTodoCount .unfinished-rate span {
  font-size: 60px;
  margin-right: 4px;
  font-weight: bold;
}

.left_button {
  width: 100%;
  text-align: start;
  border: none;
  background-color: #FFF5EE;
}

.left_button_title_image {
  display: inline-block;
  background-color: pink;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  text-align: center;
  vertical-align: middle;
}

.all-task {
  background-color: #FA9A00;
}
.all-task img {
  width: 23px;
  height: 15px;
  margin-top: 12px;
}

.to-do {
  background-color: #FABE00;
}
.to-do img {
  width: 37px;
  height: 37px;
}

.in-progress {
  background-color: #BF6DEA;
}
.in-progress img {
  width: 37px;
  height: 38px;
}

.waiting {
  background-color: #43BC39;
}
.waiting img {
  width: 36px;
  height: 42px;
}

.done {
  background-color: #E34747;
}
.done img {
  width: 34px;
  height: 40px;
}


</style>
