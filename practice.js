// Creating the name variables
let firstName = "David";
let lastName = "Tucker";
 
// Logging name to the console
console.log(`Hello, uncle ${firstName} ${lastName}`);


// math operators
console.log(14 * 12)  //  Multiplication

let person = {}; // empty object
let kevin = {name:"Kevin Long", age: 53};
let nina = {
  name:"Nina", 
  age: 43
};
console.log(nina["age"]); //VERBOSE - WORDY
console.log(nina.age); //CONCISE - dot notation
console.log(kevin["name"]); //VERBOSE - WORDY
console.log(kevin.name); //CONCISE - simple dot notation

function add_two(a, b){
  return a + b;

}
console.log(add_two(100, 10));
