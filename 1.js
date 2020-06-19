// 添加右括号时，左括号数量必须大于右括号数量，并且右括号 < n
var generateParenthesis = function(n) {
    let res = [];
    const parent = function(cur, left, right) {
        if(cur.length === 2*n) {
            res.push(cur);
            return;
        }
        if(left < n) {
            parent(cur + '(',left+1, right);
        }
        if(right < left){
            parent(cur+')',left, right+1);
        }
    };
    parent('',0,0);
    return res;
};
console.log(generateParenthesis(3))