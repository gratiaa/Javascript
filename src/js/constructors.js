function Animal({diet, weight, height}) {
  this.diet = diet;
  this.weight = weight;
  this.height = height;
}
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
