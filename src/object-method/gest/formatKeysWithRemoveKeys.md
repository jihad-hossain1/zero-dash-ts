# Utility Functions

This repository contains utility functions for working with objects in TypeScript. This README provides documentation on how to use the `formatKeysWithRemoveKeys` function.

## Functions

### 1. `formatKeysWithRemoveKeys(obj: FormattableObject, keysToRemove: string[]): FormattableObject`

The `formatKeysWithRemoveKeys` function formats the keys of an object into a more readable format while allowing you to specify keys to be removed from the result.

#### Parameters:
- `obj`: A `FormattableObject` containing the keys to format.
- `keysToRemove`: An array of strings representing the keys that should be excluded from the formatted output.

#### Returns:
- A new object with formatted keys, excluding any keys specified in the `keysToRemove` array.

#### Example Usage:

```typescript
import { formatKeysWithRemoveKeys } from 'zero-dash-ts';

const inputObj = {
  FIRST_NAME: 'John',
  last_name: 'Doe',
  emailAddress: 'john.doe@example.com',
  age: 30,
};

const keysToRemove = ['age'];
const formattedObj = formatKeysWithRemoveKeys(inputObj, keysToRemove);

console.log(formattedObj);
// Output: { 'First Name': 'John', 'Last Name': 'Doe', 'Email Address': 'john.doe@example.com' }
