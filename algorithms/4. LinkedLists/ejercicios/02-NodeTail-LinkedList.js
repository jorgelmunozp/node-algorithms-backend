// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem
/*
You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

Function Description
insertNodeAtTail has the following parameters:
- SinglyLinkedListNode pointer head: a reference to the head of a list
- int data: the data value for the node to insert

Returns
SinglyLinkedListNode pointer: reference to the head of the modified linked list

Input Format
The first line contains an integer n, the number of elements in the linked list.
The next n lines contain an integer each, the value that needs to be inserted at tail.

Sample Input
STDIN Function ----- -------- 5 size of linked list n = 5 141 linked list data values 141..474 302 164 530 474

Sample Output
141
302
164
530
474

Explanation
First the linked list is NULL. After inserting 141, the list is 141 -> NULL.
After inserting 302, the list is 141 -> 302 -> NULL.
After inserting 164, the list is 141 -> 302 -> 164 -> NULL.
After inserting 530, the list is 141 -> 302 -> 164 -> 530 -> NULL. After inserting 474, the list is 141 -> 302 -> 164 -> 530 -> 474 -> NULL, which is the final list.
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
function insertNodeAtTail(head, data) {
    if( head === null ) {
        head = new SinglyLinkedListNode(data, null)
    } else {
        let current = head
    
        while ( current.next !== null ) { current = current.next }
        
        current.next = new SinglyLinkedListNode(data,null)
    }

    return head
}

function main(input) {
    input = input.split("\n")

    const llistCount = parseInt( input[0] )

    let llist = new SinglyLinkedList();

    for (let i = 1; i <= llistCount; i++) {
        const llistItem = input[i];
    	const llist_head = insertNodeAtTail(llist.head, llistItem);
      	llist.head = llist_head;
    }

    printSinglyLinkedList(llist.head,"\n");

}

main(`5
141
302
164
530
474`) 

module.exports = main;