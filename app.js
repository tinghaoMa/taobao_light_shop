
App({
  todos: [
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning 淘宝小程序', completed: false }
  ],
  appInfo:'我是从app.js文件来的',
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
  },

  onLaunch(options) {
    console.log('onLaunch')
  },
  onShow(options) {
    console.log('onShow')
  },
  onHide() {
    console.log('onHide')
  },
  onError() {
    console.log('onError')
  },

});
