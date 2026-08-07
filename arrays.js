// First array of data

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];


// Calling an array from list

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits[4]);
// console.log(fruits[0]);
// console.log(fruits[3]);


// changing item in array

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// fruits[2] = "watermelon";
// console.log(fruits[2]);


// Finding length of an array

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.length);

//  addding an item to the end and front of an array list

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// fruits.push("grape");
// fruits.unshift("lemon");
// console.log(fruits);


// removing the first and last item

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// fruits.pop();
// fruits.shift();
// console.log(fruits);


// To check if an item is included in ana array

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.includes("banana"));

// to check the index of an item

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.indexOf("banana"));

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.join(", "));

//putting array in order
// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.sort());

//reverse array
// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// console.log(fruits.reverse());


//  To change the list of an array at once - Map

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map( n => n * 2);
// console.log(doubledNumbers);

// const names = ["Temi", "Samson", "Ife", "Fiyin"];
// const shoutNames = names.map(names => names.toUpperCase());
// console.log(shoutNames);


// const users = [
//     {id: 101, name: "samson"},
//     {id: 102, name: "Fiyin"},
//     {id: 103, name: "Temi"}
// ];

// const userIds = users.map(user => user.id);
// const userNames = users.map(user => user.name);
// console.log(userIds);
// console.log(userNames);


// To filter an array - Filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evens = numbers.filter(n => n % 2 === 0);
// const odds = numbers.filter(n => n % 2 !== 0);
// console.log(evens);
// console.log(odds);


// const users =  [
//     {id: 101, name: "Samson", active: true},
//     {id: 102, name: "fiyin",active: false},
//     {id: 103, name: "Temi",active: true}
// ];

// const activeUsers = users.filter(user => user.active);
// console.log(activeUsers);

// const fruits = ["Papaya", "Pear", "Avocado", "Pawpaw", "Orange"];
// const searchResult = fruits.filter(fruits => fruits.includes("P"));
// console.log(searchResult);


// To reduce the list of an array - reduce

const numbers = [10, 20, 30, 40];
const total = numbers.reduce((sum,numbers) => {
    return sum + numbers;
}, 0);

console.log(total);


const fruits = ["Banana", "Apple", "Banana", "Orange", "Banana", "Apple"];
const fruitCount = fruits.reduce ((counts,fruits) => {
    counts[fruits] = (counts[fruits] || 0) +1;
    return counts;
}, {});
console.log(fruitCount);