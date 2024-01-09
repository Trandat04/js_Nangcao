// Value is stored in the stack

const name= 'Dat';
const age= 19;

// Reference is stored in the heap
const person={
    name: 'Brad',
    age: '22',
};

let newName= name;
newName= 'TCDat';

let newPerson= person;
newPerson.name= 'Bradley';

console.log(name, newName);
console.log(person, newPerson);