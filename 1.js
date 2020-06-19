var search = function(nums, target) {
     // 关键点，因为数组是升序的，所以通过mid判断哪边是有序的很重要
     if(!nums || nums.length ===0) return -1;
     let start = 0;
     let end = nums.length - 1;
     let mid;
     while(start <= end) {
         // 通过不断变动的mid来判断
         mid = Math.ceil(nums.length / 2);
         if (nums[start] === target) return start;
         if (nums[end] === target) return end;
         if (nums[mid] === target) return mid;
         if (nums[start] < nums[mid]) {
             // 左边是有序的
             if (target > nums[start] && target < nums[mid]) {
                 end = mid - 1;
             } else {
                 start = mid + 1;
             }
         } else {
             // 右边是有序的
             if (target >nums[mid] && target < nums[end]) {
                 start = mid + 1;
             } else {
                 end = mid - 1;
             }
         }
     }
     return -1

    //  超出时间限制？？
    // 用了这个
    var low = 0;
    var high = nums.length - 1;
    while(low < high){
        var mid = (low+high)>>1; //除二了 神奇
        if( target < nums[0] && target > nums[mid]){
            low = mid+1;
        }
        else if(nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
            low = mid+1;
        }
        else{
            high = mid;
        }
    }
    return low == high && nums[low] == target ? low : -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));