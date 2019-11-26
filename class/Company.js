import {user} from "./user.js";

export default class Company{  // cette classe sera importée par défaut, uniquement cette classe
    constructor(name){
    this.name = name;
  }
}


export class Employee extends user {  // cette classe sera importée par défaut, uniquement cette classe
    constructor(name){
    super(name);
  }
}
