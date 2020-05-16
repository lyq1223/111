// const _users = [ 
//   {
//     "address": {
//       "city": "Los Angeles",
//       "state": 'California',
//       "pincode": "123"
//     },
//     "tags": [
//       "music",
//       "blogs",
//       "cricket"
//     ],
//     "name": "Tom Benzamin"
//   },
//   {
//     "address": {
//       "city": "赣州",
//       "state": '江西',
//       "pincode": "331000"
//     },
//     "tags": [
//       "coding",
//       "blogs"
//     ],
//     "name": "明天"
//   },
//   {
//     "address": {
//       "city": "九江",
//       "state": '江西',
//       "pincode": "331000"
//     },
//     "tags": [
//       "coding",
//       "swim"
//     ],
//     "name": "襄阳"
//   },
//     {
//     "address": {
//       "city": "赣州",
//       "state": '江西',
//       "pincode": "331000"
//     },
//     "tags": [
//       "coding",
//       "games"
//     ],
//     "name": "颜如玉"
//   }
// ]
//真数据已经有了，就不需要假数据了
export default {
  fetchUsers(cb) {
    // setTimeout(() => {
    //   cb(_users);
    // }, 1000)
    //获取数据库中的数据，从node-user的app.js
    fetch('/api/users') //转发到/users:3000下
    .then(data => data.json()) //没有用axios,降低难度，fetch后将二进制流json化    
    .then(data =>{
      console.log(data, '----api跨域');
      cb(data)
    })
    .catch(err =>{
      cb(err)
    })
  },
  fetchUsersByTag(tag, cb) {  //cb:callback回调函数
    fetch(`/api/users/tag/${tag}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      cb(data)
    })
  }
}