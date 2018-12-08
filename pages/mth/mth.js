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
        ]
    },
    onLoad() {
        this.setData({
            title: 'Taobao--' + app.appInfo
        })
    },
    onBtnClicked(e) {
        console.log('onBtnClicked --' + e);
        this.setData({
            title: 'AliBaba',
        });
    }
});