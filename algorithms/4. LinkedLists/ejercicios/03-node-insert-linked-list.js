// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem
/*
INSERT A NODE AT A SPECIFIC POSITION IN A LINKED LIST

Given the pointer to the head node of a linked list and an integer to insert at a certain position, create a new node with the given integer as its data attribute, insert this node at the desired position and return the head node.

A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The head pointer given may be null meaning that the initial list is empty.

Function Description 

insertNodeAtPosition has the following parameters:
- head: a SinglyLinkedListNode pointer to the head of the list
- data: an integer value to insert as data in your new node
- position: an integer position to insert the new node, zero based indexing

Returns
SinglyLinkedListNode pointer: a reference to the head of the revised list

Sample Input
3
16
13
7
1
2

Sample Output
16 13 1 7
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

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
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

// Complete the insertNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    let index = 1
    let current = llist
    
    while( current.next !== null ) {
        if( index === position) {
            let node = new SinglyLinkedListNode(data,null)
            node.next = current.next
            current.next = node
        } 
        else { current = current.next }
        index++
    }
    
    return llist
}

function main(input) {
    input = input.split("\n")

    const llistCount = parseInt( input[0] )

    let llist = new SinglyLinkedList();

    for (let i = 1; i <= llistCount; i++) {
        const llistItem = input[i];
    	// const llist_head = insertNodeAtPosition(llist.head, data, position);
      	// llist.head = llist_head;
        llist.insertNode(llistItem);
    }

    const data = parseInt( input[input.length - 2] )
    const position = parseInt( input[input.length - 1] )

    let llist_head = insertNodeAtPosition(llist.head, data, position)

    printSinglyLinkedList(llist_head," ");

}

main(`3
16
13
7
1
2`) 

module.exports = main;