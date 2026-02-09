// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 
// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// <br/>
// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function findNumbers(array , findNumber)
{
     let dupArray=[];
    for(const num of array)
    {
        if(num === findNumber)
        {
            dupArray.push(num);
        }
    }
    const length = dupArray.length;
    return length;
}
const array = [5,6,11,6,98,5,5];
const output = findNumbers(array , 5);
console.log(output);