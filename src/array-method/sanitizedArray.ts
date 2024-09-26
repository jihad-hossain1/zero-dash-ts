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





export default toStringArray