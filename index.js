let ages = [3,9,23,64,2,8,28,93];
    console.log(ages);

let filteredAges = ages.filter(element => element <0 || element > 7);
    console.log(filteredAges);

let firstElement = filteredAges[0];
let lastElement = filteredAges[Array.length -1];

let ageDifference = lastElement - firstElement;

console.log(ageDifference);

filteredAges.push(27);
console.log(filteredAges);

for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
}


let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;
    console.log(average);




const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    console.log(names);
let newSum = 0

for(let i = 0; i < names.length; i++) {
    newSum += names[i].length;
}
let namesAverage = newSum / names.length;
    console.log(namesAverage);


let result = '';

for(let i = 0; i < names.length; i++) {
    result += names[i] + ' ';
}
console.log(result);


let lastElementNames = names[names.length - 1];
console.log(lastElementNames);


let firstElementNames = names[0];
console.log(firstElementNames);



let nameLength = [];

for(let i = 0; i < names.length; i++) {

    let length = names[i].length;
    nameLength.push(length);
}
console.log(nameLength);

let total = 0
for(i = 0; i < names.length; i++) {
    total += names[i].length;
}
console.log(total);