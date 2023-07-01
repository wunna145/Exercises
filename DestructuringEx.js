//Object Destructuring 1
/*
Answers -
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846
*/

//Object Destructuring 2
/*
Answers -
console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
*/

//Object Destructuring 3
/*
Answers-
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple

getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green

getUserData({}) // Your name is undefined and you like green
*/

//Array Destructuring 1
/*
Answers -
console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi
*/

//Array Destructuring 2
/*
Answers -
console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
*/

//Array Destructuring 3
/*
Answers - 
console.log(numbers) // [10,30,20]
*/

//ES2015 Object Destructuring
const obj = {
    numbers : {
        a:1,
        b:2
    }
}
const {a,b} = obj.numbers;

//ES2015 One-Line Array Swap with Destructuring
const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults()
const raceResults = ([first,second,third, ...rest]) => ({first,second,third, rest})