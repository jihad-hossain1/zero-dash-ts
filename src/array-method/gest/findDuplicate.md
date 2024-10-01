This function ```countDuplicatesAndUniqueByKey``` is designed to take an array of objects (arr) and a specific key (key), and then determine which objects have duplicate values based on that key. The function returns an object containing two arrays: one for duplicates (with a count property indicating how many times each duplicate appears) and one for unique values.

```typescript

import { countDuplicatesAndUniqueByKey } from "zero-dash-ts";

const arr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Alice' },
];


const result = countDuplicatesAndUniqueByKey(data, "name");
console.log(result);

// output

// {
//   duplicates: [{ id: 1, name: 'Alice', count: 2 }],
//   uniqueValues: [{ id: 2, name: 'Bob' }]
// }


```