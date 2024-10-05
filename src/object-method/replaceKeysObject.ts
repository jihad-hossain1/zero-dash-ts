type KeyMapping = { [key: string]: string };

function replaceObjectKeys<T extends object>(obj: T, keyMap: KeyMapping): T {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = keyMap[key] || key; // If there's a mapping, use it; otherwise, keep the original key
    (acc as any)[newKey] = obj[key as keyof T]; // Assign the value to the new key
    return acc;
  }, {} as T);
}


export { replaceObjectKeys };


// const originalObject = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
//   };
  
//   const keyMap = {
//     firstName: "first_name",
//     lastName: "last_name"
//   };
  
//   const updatedObject = replaceObjectKeys(originalObject, keyMap);
  
//   console.log(updatedObject);
  // Output: { first_name: 'John', last_name: 'Doe', age: 30 }
  