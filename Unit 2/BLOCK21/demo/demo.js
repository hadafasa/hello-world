class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Pet {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
        bark() {
            console.log("bow wow");
        }    
}

class Cat extends Pet {
    constructor(name, age,fur) {
        super(name, age);
        this.fur = fur;
    }
}

const pet1 = new Pet("Spot", 3);
const pet2 = new Dog("Rover", 2, "Labrador");
const pet3 = new Cat("Nutmeg", 10, "brown");
console.log(pet2.bark());
// console.log(pet1.bark());