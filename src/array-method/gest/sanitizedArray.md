# Utility Functions

This repository contains utility functions for working with arrays of objects in TypeScript. This README provides documentation on how to use the `toStringArray` and `toObjectArray` functions.

## Functions

### 1. `toStringArray<T>(objectsArray: T[], property: keyof T): string[]`

The `toStringArray` function takes an array of objects and a specific property name, and returns an array of string values corresponding to that property. Non-string values are filtered out.

#### Parameters:
- `objectsArray`: An array of objects of type `T`.
- `property`: The property name (key) of type `keyof T` to extract string values from each object.

#### Returns:
- An array of strings representing the values of the specified property in each object. Empty or non-string values are excluded from the result.

#### Example Usage:

```typescript
import { toStringArray } from './path/to/your/module';

const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, age: 30 }, // age is not a string
];

const names = toStringArray(data, 'name');
console.log(names); // Output: ['Alice', 'Bob']

```


### Explanation
- **Function Descriptions**: Each function is described with its purpose, parameters, return types, and any exceptions thrown.
- **Example Usage**: Each function includes an example of how to use it, demonstrating typical scenarios.
- **Conclusion**: A brief section summarizing the utility of the functions.
- **License**: A placeholder for a license section that you can modify as needed. 

Make sure to adjust the paths in the example usage to match your project's structure.



