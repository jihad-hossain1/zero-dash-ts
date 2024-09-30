


function removeObjectProperties<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const newObj = { ...obj }; // Create a copy of the object

  // Iterate over the keys array and delete each key from the object copy
  keys.forEach(key => {
    delete newObj[key];
  });

  return newObj; // Return the modified object without the specified keys
}

function removeDeepObjectKey<T extends Record<string, any>>(obj: T, keys: string[]): T {
  // Create a shallow copy of the object
  const newObj: T = Array.isArray(obj) ? [...obj] as any : { ...obj };

  for (const key in newObj) {
    if (newObj.hasOwnProperty(key)) {
      const value = newObj[key];

      // If the current property is an object or array, recurse
      if (typeof value === 'object' && value !== null) {
        newObj[key] = removeDeepObjectKey(value, keys);
      }

      // If the key is in the list, delete it
      if (keys.includes(key)) {
        delete newObj[key];
      }
    }
  }

  return newObj;
}



export { removeObjectProperties, removeDeepObjectKey };
