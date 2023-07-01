/*
Quick Questions

#1
{1,2,3,4}

#2
'ref'

#3
0: {Array(3) => true}
1: {Array(3) => false}
*/

//hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount
const isVowel = char => 'aeiou'.includes(char);
const vowelCount = str => {
    const vowelMap = new Map();
    for(let char of str){
        let lower = char.toLowerCase();
        if(isVowel(lower)){
            if(vowelMap.has(lower)){
                vowelMap.set(lower, vowelMap.get(lower)+1)
            }else{
                vowelMap.set(lower, 1);
            }
        }
    }
    return vowelMap;
}