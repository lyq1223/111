# 如何使用面向对象规则设计代码
- uuid npm v1方法
返回了一个代表用户的唯一码，是字符串类的
钱包 订单 商品id，有关unique id的地方都可以用到uuid
- 区块链
钱在区块链里就是一个不会被篡改的串 去中心化
钱一定会有一个uuid对应
下面的
jayWallet.id='aaa';//此时这里的id可以被随意修改，这是不可以的
怎么解决？private
- 私有属性不可改
js对private支持不太友好所以我们都是使用编程的约定，私有的就加一个下划线，表示是不可改的
_id
私有的属性，对它提交一个get方法来访问
console.log(jayWallet.getId());
- 设计一下balance的修改
进钱出钱
balance是可以改的，但是他又是一个私有属性，怎么做？变化一下
不直接修改balance
js 使用_attribute这种做法只是一种约定，如何真正的私有？闭包创建私有类es5.js