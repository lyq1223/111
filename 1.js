var myAtoi = function(str) {
   
    // parseInt(string, radix)   将一个字符串 string 转换为 radix 进制的整数， radix 为介于2-36之间的数。
    const result = parseInt(str, 10)
    //如果是字符串开头，parseInt会返回NaN 所以要先判断是否是NaN,是就返回0
    if(isNaN(result)) {
        return 0;
    } else if(result < Math.pow(-2,31)) {  //Math.pow可以求几次方:-2^31
        return Math.pow(-2,31);
    } else if(result > Math.pow(2, 31)-1) {
        return Math.pow(2, 31)-1;
    }
    return result;
};
console.log(myAtoi("4193 with words"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("words and 987"));