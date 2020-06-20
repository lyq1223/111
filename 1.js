var trap = function(height) {
    let countsum = 0;     
    height.forEach((item, index) => {
        let left = 0, right = 0;
        for(var i = 0; i <= index; i++) {  //0->0,1->0,1,2->0,1,2,3->...->0,1,...,8
            // console.log(i);
            left = Math.max(height[i], left)
            // console.log(left,'======')
        }
        for (var i = index; i < height.length; i++) { //0->1->2->...->8
            // console.log(i);
            right = Math.max(height[i], right)
            // console.log(right,'======')
        }
        // console.log(left,right);// 每轮的加起来
        countsum +=Math.min(left, right) -item
    });
    
    // return left;
    return countsum
};
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// console.log(trap([1,0,1]));
console.log(trap([2, 0, 2, 3, 2, 2, 2, 1, 2]));


