/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // // Write your code here
    let array = Array(n).fill(0)
    let biggestSum = queries[0][2]
    
    const queriesLength = queries.length

    for(let i=0; i<queriesLength; i++) {
        array[ queries[i][0]-1 ] = array[ queries[i][0]-1 ] + queries[i][2]
        array[ queries[i][1] ] = array[ queries[i][1] ] - queries[i][2]
    }
    
    let arrayRes = []
    arrayRes[0] = array[0]
    for(let j = 1; j < array.length; j++) {
            arrayRes[j] = arrayRes[j-1] + array[j]
            if ( arrayRes[j] > biggestSum ) { biggestSum = arrayRes[j] }
    }       
    
    return biggestSum
}

function main(input) {
    input = input.split("\n").map((x) => {return x.trim()})

    const n = parseInt( input[0].split(" ")[0] );
    const m = parseInt( input[0].split(" ")[1] );

    let queries = Array(m);

    for (let i = 1; i <= m; i++) {
        queries[i-1] = input[i].split(" ").map((x) => {return parseInt(x)});
    }

    return arrayManipulation(n, queries);

}

console.log( 
main(`5 3 
1 2 100 
2 5 100 
3 4 100`) 
)

module.exports = main;