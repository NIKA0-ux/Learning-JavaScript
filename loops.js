// FOR LOOP example

// for loop for counting

// for (let i = 0; i <=3; i++) {
//     console.log("Count is:", i);
// }

// for loop for coumting up

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// for loop for coumting down

// for (let i = 5; i >= 1; i--) {
//     console.log(i)
// }

// for looping through an array
// const fruits = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// const fruits = ["apple", "banana", "orange"];
// const newFruits = "Mango";
// fruits.push(newFruits);
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

//for skipping number
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) continue;
// console.log(i);
// }

// const fruits = ["apple", "banana", "orange"];
// const newFruits = "Mango";
// fruits.push(newFruits);
// for (let i = 0; i < fruits.length; i++) {
//     if (i === 1) continue;
//     console.log(fruits[i]);
// }

// for breaking loops

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) break;
//     console.log(i);
// }
    
// for custom steps

// for (let i = 0; i <= 20; i+= 5) {
//     console.log(i);
// }

// for simultaneously increasing and decreasing 2 variable

// for (let i = 0, j = 10; i < 5; i++, j--) {
//     console.log(`i is ${i}, j is ${j}`);
// }

// for nested loops - Multiplication grid

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i: ${i}, j: ${j}`)
//     }
// }

// Major Example: Find odd number

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//     console.log(i);
// }
// }

// Major Example: Find Even number

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//     console.log(i);
// }
// }


// WHILE LOOP

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let i = 5;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// X-table using While loop

// let i = 1;

// while (i <= 40) {
//     console.log(`5 x ${i} = ${5 * i}`);
//     i++;
// }

// let myPin = "1234";

// while (myPin !== "1234") {
//     console.log(`Enter corrct pin`);
// }

// loop for array

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// for (let i =0; i <= fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for loop

// const fruits = ["apple", "orange", "pineapple", "banana", "mango"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }



// DO WHILE LOOP

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while(i <= 5);

let i = 1;
do {
    if (i % 2 !== 0){
        console.log(i);
    }
    i++
}while (i <= 100);