const age = 19;
const jambScore = 21;
const stateOfOrigin = 'agos';
const stateOfResidence ='lagos';
if(age >= 16 && jambScore >= 210 && (stateOfOrigin === 'lagos' || stateOfResidence === 'lagos')) {
    console.log(`congrats: you've been admitted`);
} else if(age < 16) {
    console.log('admission denied: you must be at least 16 years');
} else if(jambScore < 210) {
    console.log('admission denied: minimum jamb score is 210');
} else if(stateOfOrigin !== 'lagos' || stateOfResidence !== 'lagos') {
    console.log('admission denied: state of origin or state of residence must be lagos state');
} else {
    console.log('admission denied: student profile mismatch')
}