package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}
	if l1.Val >= l2.Val {
		l2.Next = mergeTwoLists(l1, l2.Next)
		return l2
	} else {
		l1.Next = mergeTwoLists(l1.Next, l2)
		return l1
	}
}

func main() {
	// ???
	a1 := new(ListNode)
	a1.Val = 1
	a2 := new(ListNode)
	a2.Val = 2
	a3 := new(ListNode)
	a3.Val = 3
	b1 := new(ListNode)
	b1.Val = 1
	b2 := new(ListNode)
	b2.Val = 3
	b3 := new(ListNode)
	b3.Val = 4
	a1.Next = *(&a2)
	a2.Next = *(&a3)
	b1.Next = *(&b2)
	b2.Next = *(&b3)
	fmt.Println(mergeTwoLists(a1, b1))
	// mergeTwoLists(a1, b2)

}
