const name = "piyush"
const repoCount = 50

// console.log (name + repoCount + " value");

console.log(`Hello my name is ${name} and repo count is ${repoCount}`); //(string interpullation)

const gameName = new String('piyush-mis-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('h'));
// console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "     piyush     "
console.log(newStringOne);
console.log(newStringOne.trim);          // https://262.ecma-international.org/#sec-string.prototype.trim


const url = "https://piyush.com/piyush%20mishra"

console.log(url.replace('%20', '-'));

console.log(url.includes('piyush'));



console.log(gameName.split('-'));







