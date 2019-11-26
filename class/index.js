import { foo, array, month, bar, baz as Quux } from "./util.js";

console.log(foo());

for(let value of array) {

  console.log(value);
}

console.log(month);

console.log(bar());


console.log(Quux());
