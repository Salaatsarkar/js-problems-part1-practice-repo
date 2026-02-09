// ### Task-4: 
// Write a function to find the longest word in a given string.
// sample-input: 
// I am learning Programming to become a programmer
// sample-output: Programming

function findLongWord(str)
{
    let splitString = str.split(" ");
    let longWord = splitString[0];
    for(const word of splitString)
    {
        if(word.length > longWord.length)
        {
            longWord = word;
        }

    }
    return longWord;

}
const output = findLongWord("I am learning Programming to become a programmer");
console.log(output);