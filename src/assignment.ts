import { clearScreenDown } from "readline";

class Animal {
   makeSound():void{
      console.log("some generic sound");
   }  
}
class Dog extends Animal {
   makeSound(): void {
      console.log("Bow Bow")
   }
}

class Cat extends Animal {
   makeSound(): void {
      console.log("meow meow");
      
   }
}

const dog = new Dog()
const cat = new Cat()
dog.makeSound()
cat.makeSound()