const age = 19;
const jambScore = 271;
const stateOfOrigin = 'lagos';
const stateOfResidence ='lagos';
if(age >= 16 && jambScore >=210 && (stateOfOrigin === 'lagos' || stateOfResidence === 'lagos')) {
    console.log(`congrats: you've been admitted`)
} else {
    console.log('admission denied: student proile mismatch')
}