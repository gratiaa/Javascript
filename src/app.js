const {compareDiet, compareHeight, compareWeight} = window.utils;
function Animal({diet, weight, height}) {
  this.diet = diet;
  this.weight = weight;
  this.height = height;
}

function Dino({species, weight, height, diet, where, when, fact}) {
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

function Human({diet, weight, height, name}) {
  Animal.call(this, {
    diet,
    weight,
    height,
  });

  this.name = name;
}

Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Object.create(Animal.prototype);

// On button click, prepare and display infographic
const dinoCompareForm = document.getElementById('dinoCompare');
dinoCompareForm.onsubmit = (e) => {
  e.preventDefault();

  // Create Dino Objects
  const dinoDataScript = document.getElementById('dinoData');
  const {Dinos: dinoDataArray} = JSON.parse(dinoDataScript.textContent);
  const dinos = dinoDataArray.map((data) => new Dino(data));

  // Create Human Object
  // Use IIFE to get human data from form
  const human = (function () {
    let data = {};
    const formData = new FormData(dinoCompareForm);

    for (let [key, value] of formData) {
      data[key] = value;
    }

    const {diet, feet, inches, name, weight} = data;

    return new Human({
      diet,
      weight: parseInt(weight || 0, 10),
      height: parseInt(feet || 0, 10) * 12 + parseInt(inches || 0, 10),
      name,
    });
  })();

  // Generate Tiles for each Dino in Array
  const tiles = dinos.map(({diet, weight, height, species, fact}) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'grid-item';

    // Each Dino title must include at least the species, an image and a fact.
    // The dino fact displayed should be chosen at random from at least 6 options
    // (including your 3 methods).
    const titleEl = document.createElement('h3');
    titleEl.innerText = species;

    const imgEl = document.createElement('img');
    imgEl.src = `images/${species
      .trim()
      .split(' ')
      .join('')
      .toLowerCase()}.png`;
    imgEl.alt = `image of ${species}`;

    const textEl = document.createElement('p');

    textEl.innerHTML = `${fact}<br />Compare from ${
      human.name
    }: ${compareWeight(weight, human.weight)}, ${compareHeight(
      height,
      human.height
    )}, ${compareDiet(diet, human.diet)}`;

    itemEl.append(titleEl, imgEl, textEl);

    return itemEl;
  });

  const humanTile = (function () {
    const {name} = human;

    const itemEl = document.createElement('div');
    itemEl.className = 'grid-item';

    const titleEl = document.createElement('h3');
    titleEl.innerText = name;

    const imgEl = document.createElement('img');
    imgEl.src = 'images/me.png';
    imgEl.alt = `image of ${name}`;

    itemEl.append(titleEl, imgEl);

    return itemEl;
  })();

  let shuffledTiles = [...tiles.sort(() => Math.random() - 0.5)];
  // Put human tile in the middle of the array
  shuffledTiles = [
    ...shuffledTiles.slice(0, shuffledTiles.length / 2),
    humanTile,
    ...shuffledTiles.slice(shuffledTiles.length / 2),
  ];

  // Add tiles to DOM
  const gridEl = document.getElementById('grid');
  gridEl.append(...shuffledTiles);

  // Remove form from screen
  dinoCompareForm.remove();
};
