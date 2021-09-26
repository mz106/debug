
const { employees, bonus } = require('./data.js');
const { checkName } = require('./helper');
const payDay = true;

//checks if name is on the list of people at the company and greets them.

const sayHello = (par, arr1, arr2) => {
    if(payDay) {
        checkName(arr1, arr2);
    } else {
        console.log(`It's not payday`);
    }
}

sayHello(payDay, bonus, employees);