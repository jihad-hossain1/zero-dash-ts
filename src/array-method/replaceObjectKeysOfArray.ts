
/**
 * @param arr - 
 * @param KeyMap - 
 * @returns sanitized array array
*/


type KeyMapping = { [key: string]: string };

function replaceKeysInArray<T extends object>(arr: T[], keyMap: KeyMapping): T[] {
  return arr.map(obj => 
    Object.keys(obj).reduce((acc, key) => {
      const newKey = keyMap[key] || key; // Use mapped key or keep original if no mapping
      (acc as any)[newKey] = obj[key as keyof T]; // Assign the value to the new key
      return acc;
    }, {} as T)
  );
}

export {replaceKeysInArray}

// const arrayOfObjects = [
//     { firstName: "John", lastName: "Doe", age: 30 },
//     { firstName: "Jane", lastName: "Smith", age: 25 }
//   ];
  
//   const keyMap = {
//     firstName: "first_name",
//     lastName: "last_name"
//   };
  
//   const updatedArray = replaceKeysInArray(arrayOfObjects, keyMap);
  
//   console.log(updatedArray);
  // Output: [
  //   { first_name: 'John', last_name: 'Doe', age: 30 },
  //   { first_name: 'Jane', last_name: 'Smith', age: 25 }
  // ]
  

