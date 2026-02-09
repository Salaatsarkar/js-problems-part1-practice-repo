// ### Task-3: 
// Write a function to count the number of vowels in a string.

function countVowels(str)
{
    let count = 0;
    for(let word of str)
    {
        if(word === "a"|| word ==="e" || word ==="i" || word ==="o"|| word ==="u")
        {
            count ++;
        }
    }
    return count;
}
const totalVowel = countVowels("azaan babu salaat sona ule baba");
console.log(totalVowel);