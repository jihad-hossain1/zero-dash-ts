/**
 * Sanitizes an array of objects by extracting the specified property values and returning them as an array of strings.
 * 
 * @param objectsArray - The array of objects to be sanitized.
 * @param property - The property key to extract values from each object.
 * @returns An array of strings extracted from the specified property.
 */


function toStringArray<T>(
  objectsArray: T[], 
  property: keyof T
): string[] {
  return objectsArray
    .map((obj) => {
      // Check if the property exists and is a string
      const value = obj[property];
      return typeof value === 'string' ? value : '';
    })
    .filter(Boolean); // Remove any empty or falsy values
}


function toObjectArray<T extends object, K extends keyof T>(
  objectsArray: T[], 
  properties: K[]
): Partial<T>[] {
  if (!Array.isArray(objectsArray)) {
    throw new TypeError('First argument must be an array of objects.');
  }

  if (!Array.isArray(properties)) {
    throw new TypeError('Second argument must be an array of valid property names.');
  }

  // Validate that all items in the objectsArray are indeed objects
  for (const obj of objectsArray) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Each item in objectsArray must be a non-null object.');
    }
  }

  // Iterate through each object in the array
  return objectsArray.map(obj => {
    const newObj: Partial<T> = {};
    properties.forEach(prop => {
      if (prop in obj) {
        newObj[prop] = obj[prop];
      }
    });
    return newObj;
  });
}




export  { toStringArray, toObjectArray }