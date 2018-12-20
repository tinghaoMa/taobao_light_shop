const app = getApp();
import Person, { name, test } from './Person'
import Student from './Student';

Page({
    data: {
        animationInfo: {},
        color: 'white',
    },
    onLoad() {
        console.log(this.data.color);

        // console.log(1)

        // setTimeout(function () {
        //     console.log(2)
        // }, 0)

        // console.log(3)


        // setTimeout(function () {
        //     console.log('定时器开始啦')
        // });

        // new Promise(function (resolve) {
        //     console.log('马上执行for循环啦');
        //     for (var i = 0; i < 10000; i++) {
        //         i == 99 && resolve();
        //     }
        // }).then(function () {
        //     console.log('执行then函数啦')
        // });

        // console.log('代码执行结束');

        // const result = this.testAsync();
        // result.then(data => {
        //     console.log(data);
        // })
        // console.log(result);

        // this.test();

        // this.async1()
        // console.log('script start')
        // let { foo: baz } = { foo: "aaa", bar: "bbb" };
        // console.log(baz);

        // const map = new Map();
        // map.set('first', 'hello');
        // map.set('second', 'world');

        // for (let [key, value] of map) {
        //     console.log(key + " is " + value);
        // }

        // var { x: y = 3 } = {};
        // console.log(y);//对象没有x，输出默认值
        // var { x: y = 3 } = { x: 5 };
        // console.log(y);//对象有x，输出对于值
        // function Point(x = 0, y = 0) {
        //     this.x = x;
        //     this.y = y;
        // }
        // const p = new Point(20, 20);
        // console.log(p);

        // let f = (valuex`

        // this.test1.apply(null, [1, 2, 3]);

        // const a1 = [1, 2, 3];
        // const a2 = a1;
        // a2[0] = 2;
        // console.log(a1)

        // console.log('深拷贝')
        // const a3 = [1, 2, 3];
        // const a4 = a3.concat();
        // a4[0] = 2;
        // console.log(a3)

        // const a5 = [1, 2, 3];
        // const a6 = [...a5];
        // a6[0] = 2;
        // console.log(a5)


        // const arr1 = ['a', 'b'];
        // const arr2 = ['c'];
        // const arr3 = ['d', 'e'];
        // console.log([...arr1, ...arr2, ...arr3]);

        // console.log([1, 2, -3, 4, 5].find(x => x < 3))
        // console.log([3, 2, -3, 4, 5].findIndex(x => x < 3))

        // for (let index of [1, 2, 3, 4, 5].keys()) {
        //     console.log(index)
        // }

        // for (let [index, elem] of ['a', 'b'].entries()) {
        //     console.log(`index =${index} elem=${elem}`);
        // }


        // [1, 2, 3].forEach((value, index) => {
        //     console.log(value, index)
        // })

        // const o = {
        //     name: 'zs',
        //     method: function () {
        //         console.log('method-----' + this.name);
        //     }
        // }
        // o.method();

        // let p = new Person('zzs', 18);
        // console.log(Object.keys(p));

        // const s = new Set([10, 1, 2, 3]);
        // [1, 2, 3, 3, 4, 5, 6, 7, 8].forEach(x => s.add(x));

        // for (let item of s.values()) {
        //     console.log(item);
        // }

        let p = new Person('mth', 1111)
        p.age = 11;
        console.log(p);
        Person.say();
        Person.bar();

        p.baz()

        let stu = new Student();
        console.log(stu);

        console.log(name);
        test();
    },
    test1(x, y, z) {
        console.log(x, y, z)
    },
    async test() {
        const v1 = await this.getSomething();
        console.log('v1----' + v1)
        const v2 = await this.testAsync();
        console.log('v2 =' + v2)
    },
    getSomething() {
        setTimeout(() => {

        }, 1000);
        return "data";
    },
    async testAsync() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('hello');
            }, 3000);
        })
    },
    async async1() {
        console.log('async1 start')
        await this.async2()
        console.log('async1 end')
    },
    async async2() {
        console.log('async2')
    },

    hello() {
        console.log('hello')
        this.setData({
            color: this.data.color === 'white' ? 'red' : 'white',
        })
    },
    onShow() {
        const animation = my.createAnimation({
            transformOrigin: "top right",
            duration: 3000,
            timeFunction: "ease",
            delay: 100,
        });
        animation.rotate(60).scale(3, 3).translate(35).step();
        this.setData({
            animationInfo: animation.export(),
        });

    }
})