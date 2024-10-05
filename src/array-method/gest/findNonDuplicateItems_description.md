
# findNonDuplicateItems Function

## Description
The `findNonDuplicateItems` function is a generic TypeScript function that identifies and returns items from multiple arrays that are unique based on a specified property. It consolidates all arrays into one and filters out items that appear more than once, returning only the non-duplicate items.

### Function Signature
```typescript
function findNonDuplicateItems<T>(
    property: keyof T, // The property to check for uniqueness
    ...arrays: T[][]
): T[]
```

### Parameters
- `property`: A key of type `keyof T` that indicates the property of the objects to check for uniqueness.
- `...arrays`: A variable number of arrays of type `T` that will be combined and checked for unique items.

### Return Value
The function returns an array of objects of type `T` that are considered non-duplicates, meaning they appear only once across all the provided arrays based on the specified property.

## How the Function Works

1. **Combine Arrays**: 
   The function uses the `flat()` method to merge all input arrays into a single array, `combinedArray`, for easier processing.

2. **Create an Item Map**:
   A `Map` called `itemMap` is created to store the occurrences of each item based on the specified property. Each entry in this map has the following structure:
   - **Key**: The value of the specified property for each item.
   - **Value**: An object containing:
     - `item`: The original item.
     - `count`: The number of times this item has appeared.

3. **Populate the Item Map**:
   The function iterates through the `combinedArray` and populates the `itemMap`. For each item:
   - If the item with the given property value already exists in the map, its `count` is incremented.
   - If it doesn't exist, it is added to the map with an initial `count` of 1.

4. **Filter Non-Duplicates**:
   After populating the `itemMap`, the function filters the entries to keep only those where the `count` is 1 (i.e., unique items). It returns an array of these unique items.

### Example Usage
```typescript
const array1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const array2 = [
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" }
];

const result = findNonDuplicateItems("name", array1, array2);
console.log(result); 
// Output: [ { id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' } ]
```

## Export
The function is exported using:
```typescript
export default findNonDuplicateItems
```
