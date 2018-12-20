
Component({
    data: {
        counter: 0,
        a: 100,
        b: 100,
    },
    props: {
        testMethod: (data) => {
            console.log("子组件--" + data);
        },
        customMethod: () => console.log('子组件--customMethod'),
        extra: "default extra",
    },
    didUpdate(prevProps, prevData) {
        console.log('didUpdate')
    },
    didMount() {
        console.log('didMount')
        let a = this.props.data.a;
        console.log(`this.data.a = ${this.props.data.a}`)
        let b = this.props.data.b;
        console.log(`this.data.b = ${this.props.data.b}`)
        this.setData({
            a: a,
            b: b,
        })
    },
    didUnmount() {
        console.log('didUnmount')
    },
    methods: {
        plusOne(evt) {
            const counter = this.data.counter + 1;
            this.setData({ counter });
            // axml 中的事件只能由methods中的方法响应
            this.props.testMethod(counter);
        }
    }
})