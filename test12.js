// concat and spread syntax

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const response = arr1.concat(arr2,arr3);
console.log(response);

const response2 = [...arr1, ...arr2, ...arr3];
console.log(response2);
