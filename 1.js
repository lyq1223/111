function listNode(value){
    this.value = value;
    this.next = null;
}
const a1 = new listNode(1);
const a2 = new listNode(2);
const a3 = new listNode(4);
const b1 = new listNode(1);
const b2 = new listNode(3);
const b3 = new listNode(4);
a1.next = a2;
a2.next = a3;
b1.next = b2;
b2.next = b3;

//递归
var mergeTwoLists = function(l1, l2) {
    // console.log(l1);
    let res = new listNode();
    if(l1 === null) {
        return l2;
    }
    if(l2 === null) {
         return l1;
    }
    if(l1.value >= l2.value) {
        res = l2;
        res.next = mergeTwoLists(l1, l2.next);
    } else {
        res = l1;
        res.next = mergeTwoLists(l1.next, l2);
    }
    return res;
};
console.log(mergeTwoLists(a1,b1));
// console.log(a1);