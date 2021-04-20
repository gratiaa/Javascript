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

/**
 * @description Compare dino's weight from human's
 * @param {Human} human - human object
 * @returns {string} comparison result
 */
Dino.prototype.compareWeight = function (human) {
  if (!this.weight || !human.weight) {
    throw new Error('weights are both needed to compare');
  }

  if (this.weight > human.weight) {
    return 'It is heavier than you. Do not bother with him.';
  } else if (this.weight < human.weight) {
    return 'It is lighter than you.. Maybe you can tame it.';
  }

  return 'It has the same weight as you! Not afraid anymore!';
};

/**
 * @description Compare dino's height from human's
 * @param {Human} human - human object
 * @returns {string} comparison result
 */
Dino.prototype.compareHeight = function (human) {
  if (!this.height || !human.height) {
    throw new Error('heights are both needed to compare');
  }

  if (this.height > human.height) {
    return 'It is taller than you. Think twice before wrestling with it.';
  } else if (this.height < human.height) {
    return 'It is smaller. Not afraid anymore!';
  }

  return 'It has the same height as you! You guys see everything on the same level.';
};

/**
 * @description Compare dino's diet from human's
 * @param {Human} human - human object
 * @returns {string} comparison result
 */
Dino.prototype.compareDiet = function (human) {
  if (!this.diet || !human.diet) {
    throw new Error('diets are both needed to compare');
  }

  if (this.diet !== human.diet) {
    return 'It has a different diet. Ask carefully before you guys go out for dinner together.';
  }

  return 'It has the same diet as you! Might be your good lunch buddy.';
};
