type CountDuplicatesResult<T> = {
    duplicates: (T & { count: number })[]; // Original object with a count property
    uniqueValues: T[]; // Original object as is
  };
  
  function countDuplicatesAndUniqueByKey<T>(arr: T[], key: keyof T): CountDuplicatesResult<T> {
    const counts: { [key: string]: number } = {};
    const duplicates: (T & { count: number })[] = [];
    const uniqueValues: T[] = [];
  
    // Calculate counts for each value
    for (const item of arr) {
      const keyValue = item[key];
      if (keyValue != null) {
        const value = String(keyValue);
        counts[value] = (counts[value] || 0) + 1;
      }
    }
  
    // Separate duplicates and unique values based on counts
    const seenDuplicates = new Set<string>();
    const seenUniqueValues = new Set<string>();
  
    for (const item of arr) {
      const keyValue = item[key];
      if (keyValue != null) {
        const value = String(keyValue);
        if (counts[value] > 1) {
          if (!seenDuplicates.has(value)) {
            duplicates.push({ ...item, count: counts[value] }); // Add the full object with count
            seenDuplicates.add(value);
          }
        } else {
          if (!seenUniqueValues.has(value)) {
            uniqueValues.push(item); // Add the full object as unique value
            seenUniqueValues.add(value);
          }
        }
      }
    }
  
    return { duplicates, uniqueValues };
  }
  
  export {countDuplicatesAndUniqueByKey}

