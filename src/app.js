import {Human, Dino} from './js/constructors.js';

const BIRD_SPECIES = 'Pigeon';

// On button click, prepare and display infographic
const dinoCompareForm = document.getElementById('dinoCompare');

const dinoCompareSubmitHandler = (e) => {
  e.preventDefault();

  // Create Dino Objects
  const dinoDataScript = document.getElementById('dinoData');
  const {Dinos: dinoDataArray} = JSON.parse(dinoDataScript.textContent);
  const dinos = dinoDataArray.map((data) => new Dino(data));

  // Create Human Object
  // Use IIFE to get human data from form
  const human = (function createHumanFromInput() {
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
  const tiles = dinos.map((dino) => {
    const {species, fact} = dino;

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
    const descriptions = [
      dino.compareWeight(human),
      dino.compareHeight(human),
      dino.compareDiet(human),
      dino.getFact(),
      dino.getWhen(),
      dino.getWhere(),
    ];

    textEl.innerHTML =
      species === BIRD_SPECIES
        ? fact
        : descriptions.sort(() => Math.random() - 0.5)[0];

    itemEl.append(titleEl, imgEl, textEl);

    return itemEl;
  });

  const humanTile = (function createHumanTile() {
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

dinoCompareForm.addEventListener('submit', dinoCompareSubmitHandler);
