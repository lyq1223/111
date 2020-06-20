var jump = function(nums) {
    // 贪心算法，反向查找出发位置
    let step = 0;
    let position = nums.length - 1;
    while(position) {
        for(let i = 0; i < position; i++) {
            if((i + nums[i]) >= position) {
                position = i;
                step++;
                break;
            }
        }
    }
    return step;
};
console.log(jump([2,3,1,1,4]));