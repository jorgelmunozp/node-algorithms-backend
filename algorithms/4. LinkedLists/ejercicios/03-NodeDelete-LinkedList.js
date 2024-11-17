// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem
/*
DELETE A NODE FROM A LINKED LIST

Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.

Function Description 

deleteNode has the following parameters:
- SinglyLinkedListNode pointer llist: a reference to the head node in the list
- int position: the position of the node to remove

Returns
SinglyLinkedListNode pointer: a reference to the head of the modified list

Sample Input
8
20
6
2
19
7
4
15
9
3

Sample Output
20 6 2 7 4 15 9
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

// Complete the 'deleteNode' function below.

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