var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event){
      // alert();
      // フォームが空だったら処理を終了する。
      if(this.newItem == '') return;
      var todo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function(index){
      // alert(index);
      // index番目の、1つの要素を削除
      this.todos.splice(index, 1)
    }
  }
})