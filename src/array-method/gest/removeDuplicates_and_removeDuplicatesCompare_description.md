
# removeDuplicates and removeDuplicatesCompare Functions

## Description
The `removeDuplicates` and `removeDuplicatesCompare` functions are generic TypeScript functions designed to filter arrays based on unique property values. These functions help manage duplicate entries effectively in data structures.

### Function Signatures

#### 1. removeDuplicates

```typescript
function removeDuplicates<T>(
  property: keyof T, // The property to check for uniqueness
  ...arrays: T[][]
): T[]
```

**Parameters:**
- `property`: A key of type `keyof T` that indicates the property of the objects to check for uniqueness.
- `...arrays`: A variable number of arrays of type `T` that will be combined and checked for unique items.

**Return Value:**
The function returns an array of objects of type `T` that are considered unique, meaning they appear only once across all the provided arrays based on the specified property.

**How It Works:**
1. **Combine Arrays:** The function uses the `flat()` method to merge all input arrays into a single array called `combinedArray`.
2. **Count Occurrences:** It initializes a `Map` to track the number of occurrences of each unique property value found in `combinedArray`. It iterates through the array, updating the count in `propertyCountMap`.
3. **Filter Unique Items:** Finally, it filters `combinedArray` to return only the items whose property value appears exactly once.

#### Example Usage of removeDuplicates
```typescript
const array1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" }
];

const uniqueItems = removeDuplicates("name", array1);
console.log(uniqueItems); 
// Output: [ { id: 2, name: 'Bob' } ]
```

#### 2. removeDuplicatesCompare

```typescript
function removeDuplicatesCompare<T>(
  property: keyof T, // The property to check for uniqueness
  availableItem: T[],
  compareItem: T[]
): T[]
```

**Parameters:**
- `property`: A key of type `keyof T` that indicates the property of the objects to check for uniqueness.
- `availableItem`: An array of objects of type `T` that will be filtered.
- `compareItem`: An array of objects of type `T` whose property values will be compared against `availableItem`.

**Return Value:**
The function returns an array of objects of type `T` from `availableItem` whose property value does not exist in the `compareItem` array.

**How It Works:**
1. **Create a Set:** The function creates a `Set` from the `compareItem` array to store unique property values for quick lookup.
2. **Filter Available Items:** It then filters the `availableItem` array to include only those items whose property value is not present in the `compareItemSet`.

#### Example Usage of removeDuplicatesCompare
```typescript
const availableItems = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const compareItems = [
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" }
];

const uniqueAvailableItems = removeDuplicatesCompare("name", availableItems, compareItems);
console.log(uniqueAvailableItems); 
// Output: [ { id: 1, name: 'Alice' } ]
```

## Exports
The functions are exported using:
```typescript
export { removeDuplicates, removeDuplicatesCompare };
```
