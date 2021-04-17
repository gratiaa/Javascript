export function compareWeight(dinoWeight, humanWeight) {
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
export function compareHeight(dinoHeight, humanHeight) {
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
export function compareDiet(dinoDiet, humanDiet) {
  if (!dinoDiet || !humanDiet) {
    throw new Error('diets are both needed to compare');
  }

  if (dinoDiet !== humanDiet) {
    return 'has a different diet';
  }

  return 'has the same diet';
}
