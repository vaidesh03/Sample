const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const yearUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    return retirement;
}

console.log(yearUntilRetirement(1991, 'Vaibhav Deshmukh'));
console.log(yearUntilRetirement(1980, 'Laxman Deshmukh'));