let x;

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];

// // Nesting berries inside of fruits
// fruits.push(berries);

// // Now we can access 'blueberry' with the following
// x = fruits[3][1];

// // spread operator (...) - Concatenate with
// x = [...fruits, ...berries];

// flat() - Flatten an array
// const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
// x=arr.flat(); 
// console.log({arr});
// console.log({arr, x});


// Creating an object
const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

const { name, age, hobbies }= person ;

console.log(name,age);