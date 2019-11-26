import { foo, array, month, bar, baz as Quux } from "./util.js";
import * as other from "./other.js";
import { user } from "./user.js";
import MyCompany from "./Company.js";
/*import Company from "./Company.js";*/
import { Employee } from "./Company.js";



console.log(foo());

for(let value of array) {

  console.log(value);
}

console.log(month);

console.log(bar());


console.log(Quux());

console.log(other.foofoo(), other.barbar());


let user1 = new user('John');
console.log(`Bonjour ${user1.name}`);


let company = new MyCompany("Agence Tous Risques");
let agent = new Employee("Mr Tea");

console.log(agent);
