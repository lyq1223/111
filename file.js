// 文件拷贝
// 一个地方读文件，一个地方写文件，中间的管道pipe
const fs = require('fs');
fs.readFile('./readme.md', (err, info)=> {
    fs.writeFile('./readme-copy.md', info, (err, info) => { //读出来的内容写进去要有一个data参数，这里就是info
        if(!err) {
            console.log('copy sucess');
        }
    })
})
// 读文件是吧文件读到内存中国，大文件就很不好弄，就有流的概念 小部分小部分处理文件