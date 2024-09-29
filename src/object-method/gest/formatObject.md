# formatKeys

## Overview
The `formatKeys` function is a utility designed to format the keys of an object into a more human-readable format. It transforms various naming conventions (UPPERCASE, snake_case, camelCase) into a standardized format where the words are capitalized and separated by spaces. This is particularly useful for generating user-friendly labels for keys in objects, such as when displaying data in a UI.

## Function Signature
```js
const input = {
  THIRD_VALUE: 123,
  snake_case_key: 'value',
  camelCaseKey: 'anotherValue'
};

const output = formatKeys(input);
console.log(output);
/*
Output:
{
  'Third Value': 123,
  'Snake Case Key': 'value',
  'Camel Case Key': 'another Value'
}
*/
```