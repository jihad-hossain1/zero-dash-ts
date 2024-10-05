
function removeDuplicates<T>(
  property: keyof T, // The property to check for uniqueness
  ...arrays: T[][]
): T[] {
  // Combine all arrays into a single array
  const combinedArray = arrays.flat();

  // Use a Map to track occurrences of each unique property value
  const propertyCountMap = new Map<any, number>();

  // First pass: count occurrences of each unique property value
  for (const item of combinedArray) {
    const key = item[property];
    propertyCountMap.set(key, (propertyCountMap.get(key) || 0) + 1);
  }

  // Second pass: filter items based on their occurrence count
  return combinedArray.filter(item => propertyCountMap.get(item[property]) === 1);
}

function removeDuplicatesCompare<T>(
  property: keyof T, // The property to check for uniqueness
  availableItem: T[],
  compareItem: T[]
): T[] {
  // Create a Set of the unique property values from compareItem
  const compareItemSet = new Set(compareItem.map(item => item[property]));

  // Filter the availableItem array to only include items whose property value is not in compareItemSet
  return availableItem.filter(item => !compareItemSet.has(item[property]));
}


export  {removeDuplicates, removeDuplicatesCompare};
