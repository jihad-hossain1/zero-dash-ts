## ```replaceObjectKeysOfArray``` Function are used to replace keys in an array of objects.

```js

import {replaceObjectKeysOfArray} from 'zero-dash-ts';

const originalArray = [
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { e: 5, f: 6 },
];

const newArray =  replaceObjectKeysOfArray(originalArray, {
    a: '_a',
    b: '_b',
    c: '_c',
    d: '_d',
    e: '_e',
    f: '_f',
});

console.log(newArray); // [{ _a: 1, _b: 2 }, { _c: 3, _d: 4 }, { _e: 5, _f: 6 }];

```

