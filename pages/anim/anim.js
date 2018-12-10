const app = getApp();

Page({
    data: {
        color: 'white',
    },
    onLoad() {
        console.log(this.data.color)
    },
    hello() {
        console.log('hello')
        this.setData({
            color: this.data.color === 'white' ? 'red' : 'white',
        })
    }
})