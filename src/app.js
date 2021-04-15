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

  console.log('dinos created: ', dinos);

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

  console.log('human created: ', human);

  // Create Dino Compare Method 1
  // NOTE: Weight in JSON file is in lbs, height in inches.
  function compareWeight(dinoWeight, humanWeight) {
    if (!dinoWeight || !humanWeight) {
      throw new Error('weights are both needed to compare');
    }

    if (dinoWeight > humanWeight) {
      return 'heavier';
    } else if (dinoWeight < humanWeight) {
      return 'lighter';
    }

    return 'has the same weight';
  }

  // Create Dino Compare Method 2
  // NOTE: Weight in JSON file is in lbs, height in inches.
  function compareHeight(dinoHeight, humanHeight) {
    if (!dinoHeight || !humanHeight) {
      throw new Error('heights are both needed to compare');
    }

    if (dinoHeight > humanHeight) {
      return 'taller';
    } else if (dinoHeight < humanHeight) {
      return 'smaller';
    }

    return 'has the same height';
  }

  // Create Dino Compare Method 3
  // NOTE: Weight in JSON file is in lbs, height in inches.
  function compareDiet(dinoDiet, humanDiet) {
    if (!dinoDiet || !humanDiet) {
      throw new Error('diets are both needed to compare');
    }

    if (dinoDiet !== humanDiet) {
      return 'has a different diet';
    }

    return 'has the same diet';
  }

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

  tiles.push(humanTile);

  // Add tiles to DOM
  const gridEl = document.getElementById('grid');
  gridEl.append(...tiles.sort(() => Math.random() - 0.5));

  // Remove form from screen
  dinoCompareForm.style.display = 'none';
};
