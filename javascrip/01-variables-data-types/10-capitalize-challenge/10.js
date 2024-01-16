// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;

// Solution 1:
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solution 2:
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[2].toUpperCase()}${myString.slice(1)}`; //slice là xóa chuỗi //toUpperCase là thêm ký tự đc lấy từ chuỗi

console.log(myNewString);