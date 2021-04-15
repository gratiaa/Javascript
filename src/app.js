function Animal({
    diet,
    weight,
    height
}) {
    this.diet = diet
    this.weight = weight
    this.height = height
}

function Dino({
    species,
    weight,
    height,
    diet,
    where,
    when,
    fact
}) {
    Animal.call(this, {
        diet,
        weight,
        height
    });

    this.species = species
    this.where = where
    this.when = when
    this.fact = fact
}

Dino.prototype = Object.create(Animal.prototype)
Dino.prototype.constructor = Dino

function Human({
    diet,
    weight,
    height,
    name,
}) {
    Animal.call(this, {
        diet,
        weight,
        height
    })

    this.name = name
}

Human.prototype = Object.create(Animal.prototype)
Human.prototype.constructor = Object.create(Animal.prototype)

// On button click, prepare and display infographic
const dinoCompareForm = document.getElementById('dinoCompare')
dinoCompareForm.onsubmit = e => {
    e.preventDefault()

    // Create Dino Objects
    const dinoDataScript = document.getElementById('dinoData')
    const { Dinos: dinoDataArray } = JSON.parse(dinoDataScript.textContent)
    const dinos = dinoDataArray.map(data => new Dino(data))

    console.log('dinos created: ', dinos)

    // Create Human Object
    // Use IIFE to get human data from form
    const human = (function() {
        let data = {}
        const formData = new FormData(dinoCompareForm)

        console.log(formData.entries())

        for (let [key, value] of formData) {
            data[key] = value
        }

        const { diet, feet, inches, name, weight } = data

        return new Human({
            diet,
            weight: parseInt(weight || 0, 10),
            height: parseInt(feet || 0, 10) * 12 + parseInt(inches || 0, 10),
            name,
        })
    }())

    console.log('human created: ', human)

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
