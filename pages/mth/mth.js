const app = getApp();

Page({
    data: {
        title: '',
        name: 'hello',
        items: [1, 2, 3, 4],
        view: 'alibaba',
        array:[
            {
                message:'foo'
            },
            {
                message:'bar'
            }
        ],
        list:['1', '2', '3', '4'],
    },
    customData: {
        hi: 'alibaba'
    },
    onLoad() {
        console.log('onLoad');
        this.setData({
            title: 'Taobao--' + app.appInfo,
            noDefined:'该值没有定义 直接setData里面设置'
        })
    },
    onBtnClicked(e) {
        console.log('onBtnClicked --' + e);
        this.setData({
            name: 'AliBaba',
        },() => { // 接受传递回调函数
            console.log(this) // this 当前页面实例
            this.setData({ name: this.data.name + ', ' + 'welcome!'})
          });
    },
    bringToFront(e){
        console.log(e)
        const { value } = e.target.dataset;
        const list = this.data.list.concat();
        const index = list.indexOf(value);
        if (index !== -1) {
          list.splice(index, 1);
          list.unshift(value);
          console.log(list.length)
          this.setData({ list });
        }
    },
    testMethod(data) {
        console.log("父组件传递到子组件的方法"+data);
    },
    customMethod(){
        console.log("父组件的customMethod")
    }
});