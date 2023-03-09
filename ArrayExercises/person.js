class Person {
    constructor(name, age, interests) {
    this.name= name;
    this.age= age;
    this.interests = interests;
    }
    greeting() {
      console.log(`Hi, my name is ${this.name}.`);
    }
    bio() {
      console.log(`My name is ${this.name}, I'm ${this.age} years old, and my interests are ${this.interests.join(',')}.`);
    }
  }

 const Sam = new Person('Sam Raja', 25, ['coding','research','development']);
 console.log(Sam.name);
 Sam.greeting();
 Sam.bio();
 
 /*const program = new Person('JavaScript', 25, ['coding','research','development']);
 console.log(program.name);
 program.greeting();
 */