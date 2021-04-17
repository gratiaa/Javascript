/**
 * @description Represents an animal
 * @constructor
 * @param {Object} animal - Animal information.
 * @param {string} animal.diet - The diet of animal
 * @param {number} animal.weight - The weight of animal
 * @param {number} animal.height - The height of animal
 */
function Animal({diet, weight, height}) {
  this.diet = diet;
  this.weight = weight;
  this.height = height;
}

/**
 * @description Represents a human
 * @constructor
 * @param {Object} human - human information.
 * @param {string} human.diet - The diet of human
 * @param {number} human.weight - The weight of human
 * @param {number} human.height - The height of human
 * @param {string} human.name - The name of human
 */
export function Human({diet, weight, height, name}) {
  Animal.call(this, {
    diet,
    weight,
    height,
  });

  this.name = name;
}

Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Object.create(Animal.prototype);

/**
 * @description Represents a dino
 * @constructor
 * @param {Object} dino - dino information.
 * @param {string} dino.diet - The diet of dino
 * @param {number} dino.weight - The weight of dino
 * @param {number} dino.height - The height of dino
 * @param {string} dino.where - Where it existed
 * @param {string} dino.when - When it existed
 * @param {string} dino.fact - The fact about dino
 */
export function Dino({species, weight, height, diet, where, when, fact}) {
  Animal.call(this, {
    diet,
    weight,
    height,
  });

  this.species = species;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

Dino.prototype = Object.create(Animal.prototype);
Dino.prototype.constructor = Dino;
