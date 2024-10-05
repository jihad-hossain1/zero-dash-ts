
# countDuplicatesAndUniqueByKey Function

## Description
The `countDuplicatesAndUniqueByKey` function is a generic TypeScript function designed to process an array of objects, identifying both duplicate and unique entries based on a specified key. The function returns an object containing two arrays: one for duplicate entries and one for unique values.

### Function Signature
```typescript
type CountDuplicatesResult<T> = {
  duplicates: (T & { count: number })[]; // Original object with a count property
  uniqueValues: T[]; // Original object as is
};

function countDuplicatesAndUniqueByKey<T>(arr: T[], key: keyof T): CountDuplicatesResult<T>
```

### Parameters
- `arr`: An array of objects of type `T` that need to be processed.
- `key`: A key of type `keyof T` representing the property based on which duplicates and unique values will be identified.

### Return Value
The function returns an object of type `CountDuplicatesResult<T>`:
- `duplicates`: An array of objects that are considered duplicates. Each object retains its original structure and includes an additional `count` property indicating how many times the value appeared in the input array.
- `uniqueValues`: An array of objects that are considered unique. Each object retains its original structure.

## How the Function Works

1. **Calculate Counts**: 
   The function starts by iterating through the input array `arr` and counting the occurrences of each value for the specified `key`. The `counts` object stores these counts, with the value (converted to a string) as the key and the count as the value.

2. **Separate Duplicates and Unique Values**:
   - **Duplicates**: If a value appears more than once in the input array, the function adds the original object, along with a `count` property, to the `duplicates` array. A `Set` named `seenDuplicates` ensures each duplicate value is only added once.
   - **Unique Values**: If a value appears only once in the input array, the function adds the original object to the `uniqueValues` array. A `Set` named `seenUniqueValues` ensures each unique value is only added once.

3. **Return the Result**:
   The function returns an object containing both the `duplicates` and `uniqueValues` arrays.

### Example Usage
```typescript
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Charlie" },
  { id: 5, name: "Bob" }
];

const result = countDuplicatesAndUniqueByKey(data, "name");
console.log(result.duplicates); 
// Output: [ { name: 'Alice', id: 1, count: 2 }, { name: 'Bob', id: 2, count: 2 } ]
console.log(result.uniqueValues); 
// Output: [ { name: 'Charlie', id: 4 } ]
```

## Export
The function is exported using:
```typescript
export { countDuplicatesAndUniqueByKey }
```
