
App({
  todos: [
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning 淘宝小程序', completed: false }
  ],
  userInfo: null,
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) {
        resolve(this.userInfo);
      } else {
        // mock api
        this.userInfo = {
          nickName: 'TaobaoApp',
          avatar:
            'https://gw.alicdn.com/tfs/TB14FsZkyqAXuNjy1XdXXaYcVXa-238-276.png'
        };
        resolve(this.userInfo);
      }
    });
  }
});
