## `removeObjectProperties` Function

The `removeObjectProperties` function is a utility that allows you to remove specific properties from an object. This function creates a shallow copy of the original object and removes the specified properties, returning a new object without mutating the original.

Parameters
obj: T: The object from which you want to remove properties.
keys: K[]: An array of keys representing the properties to remove from the object.
Returns
Omit<T, K>: A new object without the specified keys.
Description
This function accepts an object and an array of keys. It creates a new shallow copy of the original object and removes the properties that correspond to the keys in the array. The returned object will have the same structure as the original, minus the specified keys.

Use Case Example
Imagine you have an object representing a user, and you need to remove sensitive data like passwords or email addresses before sending it elsewhere. Here's how you can use removeObjectProperties:

### Function Signature

```ts
const user = {
  id: 123,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  password: "secret123",
  role: "admin",
};

// Remove the email and password from the user object
const sanitizedUser = removeObjectProperties(user, ["email", "password"]);

console.log(sanitizedUser);
// Output:
// {
//   id: 123,
//   name: "Jane Doe",
//   role: "admin",
// }
```
