// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem
/*
Given a pointer to the head of a linked list, insert a new node before the head. 
The next value in the new node should point to head 
and the data value should be replaced with a given value. 
Return a reference to the new head of the list. 
The head pointer given may be null meaning that the initial list is empty.

Function Description

insertNodeAtHead has the following parameter(s):
- SinglyLinkedListNode llist: a reference to the head of a list
- data: the value to insert in the data field of the new node

Input Format
The first line contains an integer , the number of elements to be inserted at the head of the list.
The next  lines contain an integer each, the elements to be inserted, one per function call.

Sample Input
5
383
484
392
975
321

Sample Output
321
975
392
484
383

Explanation
Intially the list in NULL. After inserting 383, the list is 383 -> NULL.
After inserting 484, the list is 484 -> 383 -> NULL.
After inserting 392, the list is 392 -> 484 -> 383 -> NULL.
After inserting 975, the list is 975 -> 392 -> 484 -> 383 -> NULL.
After inserting 321, the list is 321 -> 975 -> 392 -> 484 -> 383 -> NULL.
*/

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }
};

function printSinglyLinkedList(node,sep) {
    let response = ""
    while (node != null) {
        response = response + String(node.data)
        node = node.next;

        if (node != null) {
            response = response + sep
        }
    }

    console.log( response );
}

// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    let node = new SinglyLinkedListNode(data,null);
    node.next = head
    head = node
    
    return head
}

function main(input) {
    input = input.split("\n")

    const llistCount = parseInt( input[0] )

    let llist = new SinglyLinkedList();

    for (let i = 1; i <= llistCount; i++) {
        const llistItem = input[i];
    	const llist_head = insertNodeAtHead(llist.head, llistItem);
      	llist.head = llist_head;
    }

    printSinglyLinkedList(llist.head,"\n");

}

main(`5
383
484
392
975
321`) 

module.exports = main;