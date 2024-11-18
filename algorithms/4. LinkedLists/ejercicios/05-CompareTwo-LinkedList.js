// https://www.hackerrank.com/challenges/compare-two-linked-lists/problem
/*
COMPARE TWO LINKED LIST

You’re given the pointer to the head nodes of two linked lists. 
Compare the data in the nodes of the linked lists to check if they are equal. 
If all data attributes are equal and the lists are the same length, return 1. 
Otherwise, return 0.

Function Description

compare_lists has the following parameters:
- SinglyLinkedListNode llist1: a reference to the head of a list
- SinglyLinkedListNode llist2: a reference to the head of a list

Returns
int: return 1 if the lists are equal, or 0 otherwise

Input Format
The first line contains an integer t, the number of test cases.

Each of the test cases has the following format:
The first line contains an integer n, the number of nodes in the first linked list.
Each of the next n lines contains an integer, each a value for a data attribute.
The next line contains an integer m, the number of nodes in the second linked list.
Each of the next m lines contains an integer, each a value for a data attribute.

Sample Input
2
2
1
2
1
1
2
1
2
2
1
2

Sample Output
0
1

Explanation
There are t=2 test cases, each with a pair of linked lists.
In the first case, linked lists are: 1 -> 2 -> NULL and 1 -> NULL
In the second case, linked lists are: 1 -> 2 -> NULL and 1 -> 2 -> NULL
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

// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
    let count1 = 0
    let count2 = 0
    let current1 = llist1
    let current2 = llist2
    let equals = true

    while( current1.next !== null || current2.next !== null ) {
       if( current1.data !== current2.data ) { equals = false; break; }
       if( current1.next !== null ){ current1 = current1.next; count1++ }
       if( current2.next !== null ){ current2 = current2.next; count2++ }       
    }

    if( count1 === count2 && equals === true ) { return 1 }
    else { return 0 }
}

function main(input) {
    input = input.split("\n")

    let i = 0;
    const testCases = parseInt( input[i] )
    i++

    for(let j=0; j<testCases; j++) {
        const llistCount1 = parseInt( input[i] )
        i++

        let llist1 = new SinglyLinkedList();
        for (let k = i; k < llistCount1 + i; k++) {
            const llistItem = input[k];
            llist1.insertNode(llistItem);
        }
        i = i + llistCount1
        
        const llistCount2 = parseInt( input[i] )
        i++

        let llist2 = new SinglyLinkedList();
    
        for (let l = i; l < llistCount2 + i; l++) {
            const llistItem = input[l];
            llist2.insertNode(llistItem);
        }
        i++
    
        let result = CompareLists(llist1.head, llist2.head);
    
        console.log( result )
    }

}

main(`2
2
1
2
1
1
2
1
2
2
1
2`) 

module.exports = main;