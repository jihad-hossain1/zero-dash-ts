## Function: `removeProperties<T>`

### Description:

The `removeProperties` function is a utility that removes specific properties from an object (or array of objects) by recursively traversing its structure. It creates a shallow copy of the object to ensure the original remains unaffected and removes the specified keys from the copy. This function supports deep objects, meaning it will also remove the keys from any nested objects or arrays.

### Parameters:

- `obj: T` - The object from which to remove properties. It can be any object or array.
- `keys: string[]` - An array of keys representing the properties to be removed from the object.

### Returns:

- `T` - A new object with the specified keys removed. The original object is not modified.

### Behavior:

1. The function creates a shallow copy of the provided object. If the object is an array, it uses `[...]` (spread syntax) to make the copy; if it's an object, it uses `{...}`.
2. It iterates over the properties of the new object:
   - If the property is itself an object or array, the function recursively applies `removeProperties` to that value.
   - If the property key matches any of the keys in the `keys` array, it deletes that property from the new object.
3. Once all properties are processed, it returns the modified copy of the object.

### Example:

```typescript
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
    details: {
      postalCode: 10001,
      street: "5th Avenue",
    },
  },
  friends: [
    { name: "Jane", age: 25 },
    { name: "Mike", age: 28 },
  ],
};

const result = removeProperties(person, ["age", "postalCode"]);
console.log(result);
```
