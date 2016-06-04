'use strict'

// Create a class called Animal that has a constructor that takes a species argument and assigns it to the species property of the object.
class Animal {
  constructor(species){
    this.species = species;
  }

// Define a method called eat() that console logs "Nom Nom Nom."
  eat () {
    console.log("Nom nom nom.");
  }

// Define a method called speak () that console logs "<Animal.species> makes a sound."
  speak () {
  //  var message = this.species + " makes a sound.";
  //  console.log(message);
    console.log(`${this.species} makes a sound.`);  //string interpolation
  }
}


// Design a subclass that extends Animal called Dog. In the dog, constructor accept a name argument and set it to a name property on the object.

class Dog extends Animal {
  constructor (name) {
    super ('dog');  //this is equivalent to typing ' this.species = dog '
    this.name = name;
  }

// Override speak() for the dog class so that it says "<Dog Name> says hello!"
  speak () {
    var message = this.name + " says hello!";
    console.log(message);
  }
}

// Bonus: Create a separate kind of subclass for Dog broken into Working breeds and Companion breeds. Give each subclass a specific property and set it to "herding" or 'guarding' for the working breeds and 'being a pal' for the Companion breeds.
// Further subclass into specific breeds (i.e. Chihuahua and St. Bernard) with a property and logic in the constructors to limit the weight properties for an adult of the breed.
class Working extends Dog {
  constructor (breed) {
    super ("working");
    this.breed = 'working';
    this.job = 'Herding or guarding.'
    this.weight = 0;
  }
}

class Companion extends Dog {
  constructor (breed) {
    super ("companion");
    this.breed = 'companion';
    this.job = 'Being a pal.';
    this.weight = 0;
  }
}


var koala = new Animal ('koala');
var penguin = new Animal ('penguin');
var berkley = new Dog ('Berkley');
var fido = new Dog ('Fido');
var working = new BreedType ('Labrador');
var companion = new BreedType ('Pug');
