#### For Find Non Duplicate value from an Combine or single array

```js
type Course = {
  [key: string]: any, // A generic type to support dynamic properties
};

// Example usage with dynamic property:

const studentCourse1 = [
  { xitemcode: "C101", name: "Math" },
  { xitemcode: "C102", name: "English" },
];

const studentCourse2 = [
  { xitemcode: "C103", name: "Science" },
  { xitemcode: "C101", name: "Math" },
];

const studentCourse3 = [
  { xitemcode: "C104", name: "History" },
  { xitemcode: "C105", name: "Art" },
];

// Get non-duplicate courses based on 'xitemcode'
const uniqueCoursesByXitemcode = findNonDuplicateItems(
  "xitemcode",
  studentCourse1,
  studentCourse2,
  studentCourse3
);
console.log("Unique courses by 'xitemcode':", uniqueCoursesByXitemcode);

// If you want to find non-duplicate items based on a different property, for example, 'name'
const uniqueCoursesByName = findNonDuplicateItems(
  "name",
  studentCourse1,
  studentCourse2,
  studentCourse3
);
console.log("Unique courses by 'name':", uniqueCoursesByName);
```
