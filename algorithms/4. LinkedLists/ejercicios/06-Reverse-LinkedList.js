// https://www.hackerrank.com/challenges/reverse-a-linked-list/problem
/*
REVERSE A LINKED LIST

Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed. 
The head pointer given may be null meaning that the initial list is empty.

Function Description

reverse has the following parameter:
- SinglyLinkedListNode pointer head: a reference to the head of a list

Returns
SinglyLinkedListNode pointer: a reference to the head of the reversed list

Input Format

The first line contains an integer t, the number of test cases.

Each test case has the following format:
The first line contains an integer n, the number of elements in the linked list.
Each of the next n lines contains an integer, the data values of the elements in the linked list.

Sample Input
1
5
1
2
3
4
5

Sample Output
5 4 3 2 1 
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

// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(llist) {
    // Write your code here
    let current = llist
    let previous = null
    let next
    
    while( current != null ) {
        next = current.next
        current.next = previous
        previous = current 
        current = next
    }
    
    return previous

}

function main(input) {
    input = input.split("\n")

    const testCases = parseInt( input[0] )
    const llistCount = parseInt( input[1] )

    let llist = new SinglyLinkedList();

    for (let i = 2; i <= llistCount + 1; i++) {
        const llistItem = input[i];
        llist.insertNode(llistItem);
    }

    const llist_head = reverse(llist.head);

    printSinglyLinkedList(llist_head," ");

}

main(`1
5
1
2
3
4
5`) 

module.exports = main;