var lengthOfLongestSubstring = function(s) {
    let arr = [], max = 0;
    for(let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i]); //没有就返回-1，有就返回下标
        if(index !== -1) {
            //把前面的删掉，便于重新计算长度
            // 删掉重复的及前面的
            arr.splice(0, index+1);
        }
        // 把没重复的，也就是当前遍历的下标为i的字符串存进去
        arr.push(s.charAt(i));
        max = Math.max(max, arr.length);
    }
    return max;
};
console.log(lengthOfLongestSubstring('asasas'));