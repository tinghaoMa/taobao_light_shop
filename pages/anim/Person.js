export var name = "mth";
export {
    test,
};
export default class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return '(' + this._name + ', ' + this._age + ')';
    }

    static say() {
        console.log('person say')
    }

    static bar() {
        this.baz();
    }

    static baz() {
        console.log('baz hello');
    }

    baz() {
        console.log('world');
        eat.call(this, '111111')
    }
}

function eat(baz) {
    console.log('eat ' + baz);
}

function test() {
    console.log('test method')
}