<template>
  <div id="app">
    <div class="container">
      <div class="left_fixed_content">
        <div class="my-account">
          <img
            class="account-icon"
            src="@/assets/my-icon.png"
            alt="seif icon"
          />
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
            <router-link :to="leftFixedButton.page" class="left_button">
              <div class="left_button_title">
                <div
                  class="left_button_title_image"
                  :class="leftFixedButton.class"
                >
                  <img
                    :src="leftFixedButton.image"
                    :alt="leftFixedButton.alt"
                  />
                </div>
                <p>{{ leftFixedButton.label }}</p>
              </div>
              <svg
                class="next-page-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="13.481"
                height="23.281"
                viewBox="0 0 13.481 23.281"
              >
                <g transform="translate(-1856 -1330)">
                  <path
                    class="cls-1"
                    d="M10.481,11.641a1.5,1.5,0,0,1-1.043-.422L-1.043,1.078a1.5,1.5,0,0,1-.035-2.121,1.5,1.5,0,0,1,2.121-.035L11.524,9.063a1.5,1.5,0,0,1-1.043,2.578Z"
                    transform="translate(1857.5 1331.5)"
                  />
                  <path
                    class="cls-1"
                    d="M0,11.641a1.5,1.5,0,0,1-1.078-.457,1.5,1.5,0,0,1,.035-2.121L9.438-1.078a1.5,1.5,0,0,1,2.121.035,1.5,1.5,0,0,1-.035,2.121L1.043,11.219A1.5,1.5,0,0,1,0,11.641Z"
                    transform="translate(1857.5 1341.64)"
                  />
                </g>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
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
        page: "/all",
      },
      {
        label: "To do",
        class: "to-do",
        image: require("@/assets/todo-image.svg"),
        alt: "To do",
        page: "/todo",
      },
      {
        label: "Inprogress",
        class: "in-progress",
        image: require("@/assets/inprogress-img.svg"),
        alt: "Inprogress",
        page: "/",
      },
      {
        label: "Waiting",
        class: "waiting",
        image: require("@/assets/waiting-img.svg"),
        alt: "Waiting",
        page: "/",
      },
      {
        label: "Done",
        class: "done",
        image: require("@/assets/done-img.svg"),
        alt: "Done",
        page: "/",
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
  background-color: #fff5ee;
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
  padding: 8px 0px 18px 0;
  font-weight: 700;
}

.unfinishedTodoCount .unfinished-rate span {
  font-size: 60px;
  margin-right: 4px;
  font-weight: bold;
}

.left_buttons {
  margin-top: 8px;
}

.left_buttons a {
  text-decoration: none;
}

.left_button {
  text-align: start;
  border: none;
  display: flex;
  justify-content: space-between;
  background-color: #fff5ee;
  border-radius: 12px;
  padding: 16px 32px;
}

.left_button .next-page-arrow {
  margin-top: 8px;
}

.left_button .next-page-arrow path {
  fill: #757575;
}

/* タスクのタイトルと画像 */
.left_button_title {
  display: flex;
}

.left_button_title p {
  font-weight: bold;
  font-size: 28px;
  margin: auto 0;
  color: #757575;
}

.left_button_title_image {
  display: inline-block;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  text-align: center;
  vertical-align: middle;
  margin-right: 12px;
}

/* タスクごとに色変更 */
.all-task {
  background-color: #fa9a00;
}
.all-task img {
  width: 23px;
  height: 15px;
  margin-top: 12px;
}

.to-do {
  background-color: #fabe00;
}
.to-do img {
  width: 37px;
  height: 37px;
}

.in-progress {
  background-color: #bf6dea;
}
.in-progress img {
  width: 37px;
  height: 38px;
}

.waiting {
  background-color: #43bc39;
}
.waiting img {
  width: 36px;
  height: 38px;
}

.done {
  background-color: #e34747;
}
.done img {
  width: 34px;
  height: 40px;
}

/* ---------ここからホバーアニメーション----------- */
.left_button:hover {
  background-color: #333130;
}

.left_button:hover .left_button_title p {
  color: #fff;
}

.left_button:hover .next-page-arrow path {
  fill: #fff;
}
</style>

