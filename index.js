// const multiply = (a, b=4) => a*b;
// console.log(multiply(6));

// const people = ["Paul", "John", "Unique"]
// const printOut = ["Huxn", ...people, "Nanle"]
// console.log(printOut);


// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// let cloneArrArr2 = [...arr, ...arr2]

// const user = {
//     name: "Jen",
//     age: 22
// };
// let cloneUser = {...user}

// console.log(cloneArrArr2);
// console.log(cloneUser);


// user = (...userData) => console.log(userData);
// user("Huxn", "Paul", "Justin")
 
// const [a, ...b] = ["One", "two", "three", true, 12, ["one"]];
// console.log(b);

// const colors = ["red", "green", "blue", "yellow", "orange"];
// const [one, two, three, ...four] = colors;

// console.log(one);
// console.log(two);
// console.log(three)

// const obj1 = {x:1, y:2};
// const obj2 = {z:3};
// console.log({...obj1, ...obj2});



// let people =["huxn", "alex", "john"];
// const allpeps = ["kumar", ...people, "Paul"];
// console.log(allpeps);

// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// const arr3 = [...arr, ...arr2];
// console.log(arr3);

// const colors = ["red", "green", "blue", "yellow", "orange"];
// const [color1, color2, color3] = colors;
// console.log(color1, color2, color3);
// console.log(color2);
// console.log(color3);

// const person = {
//     name: "John Doe",
//     age: 30,
//     gender: "male",
//     country: "USA",
// };

// const { name, age, country} = person;
// console.log(name, age, country);

//  const password = 8;
//  const passwordChecker = ps =>
//      ps >= 8? "Strong password":"Password is not strong";
//  console.log(passwordChecker(password))

// let list = ["one", "two", 'three', "four"];

// for(let dex in list){
//     console.log(`${dex}: ${list[dex]}`);
// }

// const objects = {a: 1, b: 2, c: 3};
// for (let object in objects){
//     console.log(`${object}: ${objects[object]}`)
// };

//  const array1 = ["a", "b", "c"];
//  for (const element of array1) {
//     console.log(element)
//  }

// const words = ["hello", "birds", "table", "football",];

// const capwords = words.forEach((word, index, arr) => {
//     arr[index] = word[0].toUpperCase() + word.substring(1);
// })

// console.log(words)

// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8,];
// let sum = 0;

// let adder = number => sum += number;

// arrNum.forEach(adder);
// console.log(sum)

// let numbers = [1,2,3,4,5]
// let double = numbers.map(num => num * 2)
// console.log(double)

// let randomNumbers = [2,35,556,23,6,7,2,8,6,];

// let multiply = randomNumbers.map(num => num * 10)
// console.log(multiply)

// const computers = [
//     { ram: 4, hdd: 100 },
//     { ram: 8, hdd: 200},
//     { ram: 16, hdd: 300},
//     { ram: 32, hdd: 400},

// ];
// console.log(computers.filter((com) => com.ram < 16));

// const ages = [32, 33 , 16, 40, 18];
// console.log(ages.filter(age => age > 17));

const words = [
    "spray", 
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

// const result = (word) => word.length > 6;

console.log(words.filter(word => word.length > 6));