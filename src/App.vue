<template>
  <div id="app">
    <h1>{{updateTime}}MyTodoApp</h1>
    <div>
      <label for="title">タイトル:</label>
      <input type="text" v-model="title" placeholder="タイトル">
    </div>
    <div>
      <label for="body">内容:</label>
      <textarea v-model="body" placeholder="内容"></textarea>
      <!-- v-model lists in list にデータを反映？ -->
    </div>
    <div>
      <input type="submit" value="追加" @click="addList">
    </div>
    <ul v-for="(list,i) in lists" v-bind:key="i">
      <li>id: {{i}}, title: {{ list.title }}<button @click="deleteList(i)">削除</button> </li>
    </ul>
    <!-- <pre>
      {{$data}}
    </pre> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    lists: [
    //  ここに入力した内容が入る
    ],
    title: '',
    body: ''
  }),
  methods: {
    addList: function(){
      if(this.title === '' || this.body === '') return
      this.lists.push({title: this.title, body: this.body})
      this.title = ''
      this.body = ''
    },
    deleteList: function(i){
      this.lists.splice(i,1)
    }
  }
};
</script>

<style>
  #app h1{
    text-align: center;
  }
</style>
