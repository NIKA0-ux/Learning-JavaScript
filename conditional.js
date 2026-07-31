// const h = 26;

// if(h >= 18) {
//     console.log('adult');
// }


// const age = 8;
// if(h >= 18) {
//     console.log('adult');
// } else {
//     console.log('minor')
// }

// const balance = 7000;
// if(balance >= 5000) {
//     console.log('is not broke');
// } else {
//     console.log('broke');
// }

// const score = 100;
// if(score >= 70); {
//     console.log('A')
// } else if(score >= 60); {
//     console.log('B');
// } else if(score >= 50); {
//     console.log('C');
// } else {
//     console.log('fail');
// }


let score = process.argv[2];


if(score >= 70) {
    console.log('A');
} else if(score >= 60) {
    console.log('B');
} else if(score >= 50) {
    console.log('C')
} else {
    console.log('fail');
}