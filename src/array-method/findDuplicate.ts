type CountDuplicatesResult<T> = {
    duplicates: { value: T[keyof T]; count: number }[];
    uniqueValues: { value: T[keyof T] }[];
  };
  
  function countDuplicatesAndUniqueByKey<T>(arr: T[], key: keyof T): CountDuplicatesResult<T> {
    const counts: { [key: string]: { value: T[keyof T], count: number } } = {};
    const duplicates: { value: T[keyof T]; count: number }[] = [];
    const uniqueValues: { value: T[keyof T] }[] = [];
  
    // Calculate counts for each value
    for (const item of arr) {
      const keyValue = item[key];
      if (keyValue != null) {
        const value = String(keyValue);
        if (!counts[value]) {
          counts[value] = { value: keyValue, count: 0 };
        }
        counts[value].count += 1;
      }
    }
  
    // Separate duplicates and unique values based on counts
    for (const countObj of Object.values(counts)) {
      if (countObj.count > 1) {
        duplicates.push(countObj); // Add as duplicate
      } else {
        uniqueValues.push({ value: countObj.value }); // Add as unique value
      }
    }
  
    return { duplicates, uniqueValues };
  }
  
  export {countDuplicatesAndUniqueByKey}
  // Example usage
//   const data = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Alice" },
//     { id: 4, name: "Charlie" },
//     { id: 5, name: "Bob" }
//   ];
  
//   const result = countDuplicatesAndUniqueByKey(data, "name");
//   console.log(result.duplicates); 
//   // Output: [ { value: 'Alice', count: 2 }, { value: 'Bob', count: 2 } ]
//   console.log(result.uniqueValues); 
//   // Output: [ { value: 'Charlie' } ]
  
  