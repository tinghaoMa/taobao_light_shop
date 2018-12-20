const app = getApp();
export default {

    methods: {
        plusOne() {
            console.log('响应click事件');
            this.changeData({
                temTitle: '我被改变了'
            });
        },

        changeData(data = {}) {
            console.log(this);
            this.setData({
                ...data
            })
        }
    },
    data: {
        temTitle: '点击我更改标题的值',
        temText: '我是标题'
    }
}