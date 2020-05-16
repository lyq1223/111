import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index.js'

Vue.use(Vuex)
// 单一状态树  单一?  树？
export default new Vuex.Store({
  state: {
    users: [
      // {
      //   "address": {
      //     "city": "Los Angeles",
      //     "state": 'California',
      //     "pincode": "123"
      //   },
      //   "tags": [
      //     "music",
      //     "blogs",
      //     "cricket"
      //   ],
      //   "name": "Tom Benzamin"
      // },
      // {
      //   "address": {
      //     "city": "赣州",
      //     "state": '江西',
      //     "pincode": "331000"
      //   },
      //   "tags": [
      //     "coding",
      //     "blogs"
      //   ],
      //   "name": "王志浩"
      // },
      // {
      //   "address": {
      //     "city": "九江",
      //     "state": '江西',
      //     "pincode": "331000"
      //   },
      //   "tags": [
      //     "coding",
      //     "swim"
      //   ],
      //   "name": "刘子民"
      // },
      //  {
      //   "address": {
      //     "city": "赣州",
      //     "state": '江西',
      //     "pincode": "331000"
      //   },
      //   "tags": [
      //     "coding",
      //     "games"
      //   ],
      //   "name": "衷从海"
      // }
    ]
  },
  mutations: {
    setUsers(state, payload) { // 写操作 唯一地方
      state.users = payload
    }
  },
  actions: { // 负责数据的请求 写入状态的第一步 但不能直接改，可以去提交一个mutation,z这里只是一个动作可以请求api,但不能直接修改状态
    // 负责跟api 通信的地方`
    fetchUsers(context) { //方法，传的也只是context上下文环境参数
      api 
        .fetchUsers((users)=> { //封装一个方法，传一个回调
          // console.log(users);
          // 写入state,   严格一些 就像开账单，写一个条子 按流程来
          context.commit('setUsers', users)
        })
    },
    queryTag(context,evt) { //evt会在change发生时拿到change对象
      const tag = evt.target.value;
      // console.log(evt);
      // console.log(tag);
      api  //在api中提供这个
        .fetchUsersByTag(tag, (users)=>{
          context.commit('setUsers',users) //修改
        })
    }
  },
  getters: {  // state computed 函数 数据需要进行处理时就加这个
    getUsers(state) { // vuex这个api 会给getter函数state这个形参  读操作 第二种方法获取状态树的数据
      // return state.users
      // 做一个变形
      // return state.users.map((user, index) => {
      //   user.id = user.address.pincode + index //邮箱地址+邮政编码+index
      //   return user //map之后要return一个新user
      // })
      return state.users
    }
  },
  modules: {
  }
})
