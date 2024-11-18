// https://www.hackerrank.com/challenges/balanced-brackets/problem
/*
BALANCED BRACKETS

A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is balanced if the following conditions are met:
- It contains no unmatched brackets.
- The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

Given n strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

Function Description

isBalanced has the following parameter(s):
- string s: a string of brackets

Returns
string: either YES or NO

Sample Input
STDIN           Function
-----           --------
3               n = 3
{[()]}          first s = '{[()]}'
{[(])}          second s = '{[(])}'
{{[[(())]]}}    third s ='{{[[(())]]}}'

Sample Output
YES
NO
YES

Explanation
1. The string {[()]} meets both criteria for being a balanced string.
2. The string {[(])} is not balanced because the brackets enclosed by the matched pair { and } are not balanced: [(]).
3. The string {{[[(())]]}} meets both criteria for being a balanced string.
*/

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here
    const openBrackets = [ '(', '{', '[' ]
    const closeBrackets = [ ')', '}', ']' ]
    
    let string = s.split('')
    let isBalanced = true
    let previous = string[0]
    
    if ( s.length%2 !== 0 ) { return 'NO' }
    if ( closeBrackets.includes( previous ) ) { return 'NO' } 

    for ( let i=1; i<s.length; i++) {
        previous = string[i-1]
      
        if ( openBrackets.includes(string[i]) && i<s.length - 1 ) { continue } 
        else if ( openBrackets.includes(string[i]) && i === s.length - 1 ) { isBalanced = false } 
        else {
            let open = ''
            switch ( string[i] ) {
                case ')': ; open = '('; break;
                case '}': ; open = '{';  break;
                case ']': ; open = '[';  break;
            }
            
            if ( previous !== open ) {
                if( !closeBrackets.includes( previous ) ) { isBalanced = false }
            }
        }
    }
    
    if ( isBalanced ) { return 'YES' } else { return 'NO' }
}

function main(input) {
    input = input.split("\n")

    const t = parseInt( input[0] )

    for (let tItr = 1; tItr <= t; tItr++) {
        const s = input[tItr];

        const result = isBalanced(s);

        console.log( result )
    }
}


main(
`3
{[()]}
{[(])}
{{[[(())]]}}`
) 
    
module.exports = main;