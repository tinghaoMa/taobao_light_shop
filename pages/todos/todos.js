const app = getApp();

Page({
  data: {
    user: {}
  },
  onLoad() {
    app.getUserInfo().then(user =>
      this.setData({
        user,
        todos: app.todos
      })
    );
  },
  onShow() {
    console.log('onShow');
    this.setData({ todos: app.todos });
  },
  onTodoChanged(e) {
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1
    }));
    this.setData({ todos: app.todos });
  },
  addTodo() {
    my.navigateTo({ url: 'pages/add-todo/add-todo' });
  }
});
