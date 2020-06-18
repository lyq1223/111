var longestCommonPrefix = function(strs) {
    if(!strs || strs.length === 0) return ''
    let res = '';
    let index = 0;
    for(const c of strs[0]) {
        for(let i = 1; i < strs.length; i++ ) {
            if(index >= strs[i].length || strs[i][index] !== c ) {
                return res
            }            
        }
        res += c;
        index++
    }
    return res;
};
console.log(longestCommonPrefix(["flower","flow","flight"]));
