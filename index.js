// 钱包
//uuid库 npm i uuid,可以生成一个独一无二的id
const UUID = require('uuid');
//类的定义
class Wallet{
    constructor(){
        // js对private支持不太友好所以我们都是使用编程的约定，私有的就加一个下划线，表示是不可改的
        this._id=UUID.v1().replace(/-/g,"");//使用uuid返回用户id它是唯一的，加密生成的，是我们在后端开发中关于id生成的技能项
        // vi是UUID的一方法，返回uuid的第一个版本的函数的调用，还有v4的，但比较短，可能会出现重复
        //然后我们要把id之间的横杠去掉,用正则表达式，正则出来全局中所有的横杠，以空格代替横杠
        // console.log(this.id);
        this._createTime = +new Date(); //加一个+号变成微妙数便于存储，便于计算，在mysql中时间都是以long int存储
        // console.log(this._createTime);
        this._balance = 0 //金额 
        this._balanceLastModifiedTime = +new Date();//上次金额修改时间

    }
    //可读不可写，私有
    getId(){
        return this._id
    }
    getBalance(){
        return this._balance;
    }
    getCreateTime(){ //不可以修改
        return this._createTime;
    }
    getBalanceLastModifiedTime(){ //可以
        return this._balanceLastModifiedTime;
    }
    //参数就是要加的数量
    increaseBalance(increasedAmount){
        //先去check一下increaseAmount是不是一个正确的钱数
        //封装
        if (increasedAmount < 0) {
            throw new Error('错误的金额')
          } 
        this._balance += increasedAmount;
        this._balanceLastModifiedTime = + new Date();
    }
     //花钱
    decreaseBalance(decreasedAmount) {
        if (decreasedAmount > this._balance) { //可以花
        throw new Error('没有足够的钱');
        }
        this._balance -= decreasedAmount;
    }
    
}
//钱包类
//钱就是一串数字 区块链 （比特币就是区块链的一种实现） 一串不可改变的数字
//区块链是好比是一个账本，一个不可改变（改写）的账本
// 1.每个人的钱包，要有一个不可变的id
// 钱是一串数字，是可以改变的，钱为什么属于你？用钱包id
const jayWallet = new Wallet();//实例化运行一下
//类的使用
// jayWallet._id='aaa';//此时这里的id可以被随意修改，这是不可以的，怎么解决？private
// console.log(jayWallet.id);//id象征什么？，来到readme.md
console.log(jayWallet.getId());
// jayWallet._balance='aaa';直接这样改是不可以的
// 收到红包
jayWallet.increaseBalance(20);
// console.log(jayWallet.getBalance(), jayWallet.getBalanceLastModifiedTime());
jayWallet.decreaseBalance(10);
console.log(jayWallet.getBalance());

jayWallet._id = 'aaa';
console.log(jayWallet.getId());