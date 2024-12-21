'use strict';
// function logger() {
//     console.log(`My name is Elsadig`)
// }
// // calling / running or invoking fucntions
// logger();
// logger();
// logger();


function fruitProcessor(apples, oranegs) {
    console.log(apples, oranegs);
    const juice = `Juice with ${apples} apples and ${oranegs} oranges.`
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
Highlight
test1 = AbstractRange