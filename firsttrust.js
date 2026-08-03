// FirstTrust Bank Loan Checker

const minAge = 21;
const minIncome = 100000;
const minCreditScore = 600;
const employmentStatus = "employed";

// Task 1: Fails age rule
 let age1 = 20, income1 = 150000, creditScore1 = 620, employment1 = "employed";

 if (age1 < minAge) {
    console.log("Task 1: Loan denied. Applicant must be at least 21 years old.");
 } else if (income1 <= minIncome) {
    console.log("Task 1: Loan denied. Monthly income must be over 100,000.");
 } else if (creditScore1 < minCreditScore) {
    console.log("Task 1: Loan denied. Credit score must be at least 600.");
 } else if (employment1 !== employmentStatus) {
    console.log("Task 1: Loan denied. Applicant must be employed or self employed.");
 } else {
    console.log("Task 1: Congrats! Your loan has been approved.");
}


// Rask 2: Fails income rule
let age2 = 27, income2 = 10000, creditScore2 = 620, employment2 = "employed";

 if (age2 < minAge) {
    console.log("Task 2: Loan denied. Applicant must be at least 21 years old.");
 } else if (income2 <= minIncome) {
    console.log("Task 2: Loan denied. Monthly income must be over 100,000.");
 } else if (creditScore2 < minCreditScore) {
    console.log("Task 2: Loan denied. Credit score must be at least 600.");
 } else if (employment2 !== employmentStatus) {
    console.log("Task 2: Loan denied. Applicant must be employed or self employed.");
 } else {
    console.log("Task 2: Congrats! Your loan has been approved.");
 }


// Task 3: Fails credit score rule
let age3 = 27, income3 = 150000, creditScore3 = 500, employment3 = "employed";

if (age3 < minAge) {
    console.log("Task 3: Loan denied. Applicant must be at least 21 years old.");
 } else if (income3 <= minIncome) {
    console.log("Task 3: Loan denied. Monthly income must be over 100,000.");
 } else if (creditScore3 < minCreditScore) {
    console.log("Task 3: Loan denied. Credit score must be at least 600.");
 } else if (employment3 !== employmentStatus) {
    console.log("Task 3: Loan denied. Applicant must be employed or self employed.");
 } else {
    console.log("Task 3: Congrats! Your loan has been approved.");
 }


 // Task 4: Fails employment rule
let age4 = 27, income4 = 150000, creditScore4 = 600, employment4 = "Not employed";

if (age4 < minAge) {
    console.log("Task 4: Loan denied. Applicant must be at least 21 years old.");
 } else if (income4 <= minIncome) {
    console.log("Task 4: Loan denied. Monthly income must be over 100,000.");
 } else if (creditScore4 < minCreditScore) {
    console.log("Task 4: Loan denied. Credit score must be at least 600.");
 } else if (employment4 !== employmentStatus) {
    console.log("Task 4: Loan denied. Applicant must be employed or self employed.");
 } else {
    console.log("Task 4: Congrats! Your loan has been approved.");
 }


//  Task 5: Fail every rule(Profile mismatch)
let age5 = 20, income5 = 10000, creditScore5 = 500, employment5 = "Not employed";
let ageFail = age5 < minAge;
let incomeFail = income5 <= minIncome;
let creditScoreFail = creditScore5 < minCreditScore;
let employmentFail = employment5 !== employmentStatus;

if (ageFail && incomeFail && creditScoreFail && employmentFail) {
    console.log("Task 5: Loan denied . Profile mismatch.");
} else if (ageFails) {
    console.log("Task 5: Applicant must be at least 21 years old.");
} else if (incomeFail) {
    console.log("Task 5: Loan denied. Monthly income must be over 100,000.");
} else if (creditScoreFail) {
    console.log("Task 5: Loan denied. Credit score must be at least 600.");
} else if (employmentFail) {
    console.log("Task 5: Loan denied. Applicant must be employed or self employed.");
} else {
    console.log("Case 5: Congrats! You've been admitted.");
}


 // Task 6: Passes every rule
let age6 = 27, income6 = 150000, creditScore6 = 600, employment6 = "employed";

if (age6 < minAge) {
    console.log("Task 6: Loan denied. Applicant must be at least 21 years old.");
 } else if (income6 <= minIncome) {
    console.log("Task 6: Loan denied. Monthly income must be over 100,000.");
 } else if (creditScore6 < minCreditScore) {
    console.log("Task 6: Loan denied. Credit score must be at least 600.");
 } else if (employment6 !== employmentStatus) {
    console.log("Task 6: Loan denied. Applicant must be employed or self employed.");
 } else {
    console.log("Task 6: Congrats! Your loan has been approved.");
 }