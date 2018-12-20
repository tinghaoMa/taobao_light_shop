const app = getApp();
export default {
    methods: {
        clickHeader() {
            console.log('click header')
            this.data.count += 1;
            this.setData({
                count: this.data.count,
            })
        }
    },
    data: {
        header: 'include 点击累加和----',
        count: 0,
    }
}