function Dino({
    species,
    weight,
    height,
    diet,
    where,
    when,
    fact
}) {
    this.species = species
    this.weight = weight
    this.height = height
    this.diet = diet
    this.where = where
    this.when = when
    this.fact = fact
}

// On button click, prepare and display infographic
dinoCompare.onsubmit = e => {
    e.preventDefault()

    // Create Dino Objects
    const dinoDataScript = document.getElementById('dinoData')
    const { Dinos: dinoDataArray } = JSON.parse(dinoDataScript.textContent)
    const dinos = dinoDataArray.map(data => new Dino(data))

    console.log('dinos created: ', dinos)

    // Create Human Object
    const human = {}

    // Use IIFE to get human data from form
    

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen
}
