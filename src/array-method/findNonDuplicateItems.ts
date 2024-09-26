

function findNonDuplicateItems<T>(
    property: keyof T, // The property to check for uniqueness
    ...arrays: T[][]
): T[] {
    // Combine all arrays into a single array
    const combinedArray = arrays.flat();

    // Create a map to store item occurrences and their respective objects
    const itemMap = new Map<any, { item: T, count: number }>();

    // Iterate through the combined array to populate the itemMap
    combinedArray.forEach((item) => {
        const key = item[property];
        const entry = itemMap.get(key);
        if (entry) {
            // Increment the count if the item already exists
            entry.count += 1;
        } else {
            // Add the item with a count of 1 if it doesn't exist
            itemMap.set(key, { item, count: 1 });
        }
    });

    // Filter and return only the items that have a count of 1
    return Array.from(itemMap.values())
        .filter(entry => entry.count === 1)
        .map(entry => entry.item);
}

export default findNonDuplicateItems 
