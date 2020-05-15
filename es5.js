
// _id 私有属性的作法 _id 约定（编程风格, eslint）
// 真正实现一把 私有  _id  this._id = 'aaa'//魔鬼
// 面向对象private 外界不能访问，但是内部可以访问的 
var UUID = require('uuid');
// Wallet 类 es5
var Wallet = (function() {
  // 闭合空间 外面怎么都访问不到（函数内部再包着一个函数就是闭包）
  //私有属性放这
  var id,createTime,balance, balanceLastModifiedTime; 

  //得用闭包 创建类，闭包升级学习
  return function() { //闭包
    // 返回新的对象 构造函数的使用
    // this 实例 默认this, 所以不需要再写return this;
    // 1. 闭包 构造函数可以一直引用的私有变量
    // 2. 构造方法 return  返回public 的属性或方法

    id = UUID.v1().replace(/-/g, ""); //不用再写this._id
    createTime = + new Date();
    balance = 0;
    balanceLastModifiedTime = +new Date();
    //私有方法 
    // public 才可以让外界使用这个对象上的方法和属性 
    // 私有方法
    // 封闭了检查的实现， 外界不需要了解
    // 封装 -》 私有  用类的人，不需要了解细节
    // 私有？ 让用的人少范错

    function checkAmount(amount) {//check修改的金钱是否合格，没不要暴露给外界的，私有方法
      if (isNaN(amount)) { //意思一下的
        return false
      }
      return true;
    }

    // 所以不需要再写return this;，直接return{}
    return { //public 
      desc: '钱包',
      getId: function() { //提供访问id的方法，外界只能获取访问，不能修改
        return id; //不用写this.id
      },
      getCreateTime: function() {
        return createTime;
      },
      getBalanceLastModifiedTime: function() {
        return balanceLastModifiedTime;
      },
      getBalance: function() {
        return balance;
      },
      increaseBalance: function(amount) {
        if (!checkAmount(amount)) {
          throw new Error('发生错误');
        }
        balance += amount;
        balanceLastModifiedTime = +new Date();
      },
      decreateBalance: function(amount) {
        balance -= amount;
        balanceLastModifiedTime = +new Date();
      },
    }
  }
})()

var hyWallet = new Wallet(); //实例化
console.log(hyWallet.getId()); //用共有的方法获取的
hyWallet.increaseBalance(200);
hyWallet.decreateBalance(10);
console.log(hyWallet.getBalance());
// console.log(hyWallet.checkAmount());//hyWallet.checkAmount is not a function因为是私有的
console.log(hyWallet.desc);