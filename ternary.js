// let age = 13;
// if (age >= 18) {
//     console.log(`You ar an adult`);
// } else {
//     console.log (`You are a minor`);
// }

// let age = 13;
// let message = age >= 18 ? `You are an adult` : `You are a minor`;

// console.log(message);

// const passMark = 50;
// let score = 45;
// let message = score >= passMark ? `You passed` : `You failed`;
// console.log(message);

// if (score >= passMark){
//     console.log(`You passed`);
// } else {
//     console.log(`You failed`);
// }


// FirstTrust Bank Loan Checker

const minAge = 21;
const minIncome = 100000;
const minCreditScore = 600;

// Task 1: Fails age rule
 let age1 = 20, income1 = 150000, creditScore1 = 620;

 let result = age1 < minAge ? `Task 1: Loan denied. Applicant must be at least 21 years old.` : income1 <= minIncome ? `Task 1: Loan denied. Monthly income must be over 100,000.` : creditScore1 < minCreditScore ? `Task 1: Loan denied. Credit score must be at least 600.` : `Task 1: Congrats! Your loan has been approved.`;

 console.log(result)