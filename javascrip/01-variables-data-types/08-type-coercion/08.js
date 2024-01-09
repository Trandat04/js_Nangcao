let x;

// Coerced to a string
// x = 5 + '5';
// console.log( x);
// x = 5 + Number('5');
// console.log( x);
// null is coerced to 0 as it is a `falsy` value
// x = 5 + null;
// console.log( x);
// x = Number(null);

// x = Number(true);
// x = Number(false);

// true is coerced to a 1
// x = 5 + true;
// console.log( x);
// false is coerced to 0 (falsy)
// x = 5 + false;
// console.log( x);
// Undefined is coerced to 0 (falsy)
x = 5 + undefined;
// console.log( x);
console.log(x, typeof x);