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
    onLoad() {
        console.log('onLoad');
        this.setData({
            title: 'Taobao--' + app.appInfo
        })
    },
    onBtnClicked(e) {
        console.log('onBtnClicked --' + e);
        this.setData({
            title: 'AliBaba',
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
    }
});