
const { employees, bonus } = require('./data.js');
const checkedEmployees = [];

const checkName = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                checkedEmployees.push(arr2[j]);   
            } 
        }
    }
    console.log(checkedEmployees);
};

// if(name === arr[i]) {
//     checkedEmployees.push(arr[i]);
//     console.log(checkedEmployees);
// } else {
//     console.log('not on list')
// }


module.exports = {
    checkName
};