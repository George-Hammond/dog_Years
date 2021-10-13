//Declare myAge as a variable that will not change.
const myAge= 26;

//Declare earlyYears as a variable that will change.
let earlyYears= 2;
earlyYears*=10.5;

//Subtract 2 from myAge and assign to laterYears 
laterYears=myAge-2;

//Multiply 4 by the variable laterYears and assign the result to the variable.
laterYears*=4;
console.log(earlyYears);
console.log(laterYears);

// Add earlyYears and laterYears and assign to myAgeInDogYears
let myAgeInDogYears= earlyYears+laterYears;

//call the .toLowerCase() method on a string(author's name) and assign to the variable myName.
let myName= 'George Hammond'.toLowerCase();

//Display name and age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years`);
