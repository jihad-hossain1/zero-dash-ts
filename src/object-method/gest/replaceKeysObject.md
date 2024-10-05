## ```replaceKeysObject``` function - Replace keys of an object

Replace keys of an object.

```typescript
import { replaceKeysObject } from 'zero-dash-ts';

const originalObject = {
    id: 1,
    name: 'Alice',
    age: 25,
};

const newObject = replaceKeysObject(originalObject, {
    id: '_id',
    name: '_name',
    age: '_age',
});

console.log(newObject); // Output: { _id: 1, _name: 'Alice', _age: 25 }

```
--- note ---

This function is used to replace keys of an object.

