var an = [2,2,2,3,4,5];


// Map 
const double = input => 2*input;
const doubleeach = b => b.map(double);
const square = input => input*input;
const squareeach = p => p.map(square);
console.log(squareeach( doubleeach(an)));

// reduce
const eqn = (ans,temp) => ans+temp;
console.log(an.reduce(eqn,10));

// filter
const res = an.filter(a => a>=3);
console.log(res);