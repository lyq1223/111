class Car{
    // es6构建
    constructor(number,name){
        this.name=name;
        this.number=number;
    }
}
// 父类到子类的继承
class Kuaiche extends Car{
    constructor(number,name){
        // 执行父类的构造函数
        super(number,name);
        this.price=1;
    }
}
class Zhuanche extends Car{
    constructor(number,name){
        super(number,name);
        this.price=2;
    }
}
// 统筹每个对象间的关系
class Trip{
    constructor(car,length){
        this.car=car;
        this.length=length;
    }
    start(){
        console.log(`行程开始了，名称${this.car.name},车牌号:${this.car.number}`);
    }
    end(){
        console.log(`行程结束，价钱是:${this.car.price*this.length}元`);
    }
}
// 实例子类
let car=new Kuaiche('京A88888','宝马X6');
let trip=new Trip(car,10);
trip.start();
trip.end();