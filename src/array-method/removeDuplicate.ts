
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

export default removeDuplicates;
