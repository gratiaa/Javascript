/**
 * @description Compare dino weight from human's
 * @constructor
 * @param {number} dinoWeight - dino weight
 * @param {number} humanWeight - human weight
 * @returns {string} comparison result
 */
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

/**
 * @description Compare dino height from human's
 * @constructor
 * @param {number} dinoHeight - dino height
 * @param {number} humanHeight - human height
 * @returns {string} comparison result
 */
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

/**
 * @description Compare dino diet from human's
 * @constructor
 * @param {number} dinoDiet - dino diet
 * @param {number} humanDiet - human height
 * @returns {string} comparison result
 */
export function compareDiet(dinoDiet, humanDiet) {
  if (!dinoDiet || !humanDiet) {
    throw new Error('diets are both needed to compare');
  }

  if (dinoDiet !== humanDiet) {
    return 'has a different diet';
  }

  return 'has the same diet';
}
