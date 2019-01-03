import emptyBox from '../empty-box/empty-box';
import header from '../header/header';

const app = getApp();

Page({
    data: {
        ...emptyBox.data,
        ...header.data,
        title: '',
        name: 'hello',
        items: [1, 2, 3, 4],
        view: 'alibaba',
        array: [
            {
                message: 'foo'
            },
            {
                message: 'bar'
            }
        ],
        list: ['1', '2', '3', '4'],
        obj1: {
            a: 111,
            b: 2222
        },
        condation: true,
        length: 10,
        item: {
            index: 0,
            msg: 'this is a template',
            time: '2016-09-15'
        },

    },

    ...emptyBox.methods,
    ...header.methods,
    customData: {
        hi: 'alibaba'
    },
    onLoad() {
        console.log('onLoad');
        this.setData({
            title: 'Taobao--' + app.appInfo,
            noDefined: '该值没有定义 直接setData里面设置'
        })


        let p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success1')
            }, 1000)
        })

        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success2')
            }, 3500)
        })

        Promise.all([p1, p2]).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)  // 打开的是 'failed'
        })

    },
    onShow() {

    },
    onBtnClicked(e) {
        console.log('onBtnClicked --' + e);
        this.setData({
            name: 'AliBaba',
        }, () => { // 接受传递回调函数
            console.log(this) // this 当前页面实例
            this.setData({ name: this.data.name + ', ' + 'welcome!' })
        });


    },
    bringToFront(e) {
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
        console.log("父组件传递到子组件的方法" + data);
    },
    customMethod() {
        console.log("父组件的customMethod")
    },
    tapName(event) {
        const { hi } = event.target.dataset;
        console.log(hi);
        const { hello } = event.currentTarget.dataset;
        console.log(hello);
        console.log('event.target = ' + event.target.id);
        console.log('event.currentTarget = ' + event.currentTarget.id);
    },
    handleTap1(event) {
        console.log('handleTap1')
    },
    handleTap2(event) {
        console.log('handleTap2')
    },
    handleTap3(event) {
        console.log('handleTap3')
        console.log(`event.type = ${event.type}`)
        console.log(`event.timeStamp = ${event.timeStamp}`)
        console.log('event.target = ' + event.target.id);
        console.log('event.currentTarget = ' + event.currentTarget.id);
        const { hi, hello } = event.target.dataset
        console.log(hi, hello)
        event.stopPropagation();
    },
    onFocus() {
        console.log("focus");
    },
    onInput(event) {
        const { value } = event.detail;
        console.log(value);
    },
    onBlur() {
        console.log("blur");
    },

    onScrollToUpper(handle) {
        console.log('onScrollToUpper')
        console.log(handle);
    },

    onScrollToLower(handle) {
        console.log('onScrollToLower')
        console.log(handle)
    },
    onScroll(handle) {
        console.log('onScroll')
        console.log(handle)
    }
});