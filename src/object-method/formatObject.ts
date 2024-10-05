type FormattableObject = { [key: string]: any };

export const formatKeys = (obj: FormattableObject): FormattableObject => {
    const formattedObj: FormattableObject = {};
  
    for (const key in obj) {
      let formattedKey = key;
  
      if (key === key.toUpperCase()) {
        // For UPPERCASE_KEY: 'thirdValue' -> 'Uppercase key'
        formattedKey = key
          .toLowerCase()
          .replace(/_/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase());
      } else if (key.includes('_')) {
        // For snake_case_key: 'value' -> 'Snake case key'
        formattedKey = key
          .replace(/_/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase());
      } else {
        // For camelCaseKey: 'anotherValue' -> 'Camel case key'
        formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .trim()
          .replace(/\b\w/g, char => char.toUpperCase());
      }
  
      formattedObj[formattedKey] = obj[key];
    }
  
    return formattedObj;
  };
  
  // Function to format keys and remove specific keys
  export const formatKeysWithRemoveKeys = (
    obj: FormattableObject,
    keysToRemove: string[]
  ): FormattableObject => {
    const formattedObj: FormattableObject = {};
  
    for (const key in obj) {
      // Skip keys that need to be removed
      if (keysToRemove.includes(key)) {
        continue;
      }
  
      let formattedKey = key;
  
      if (key === key.toUpperCase()) {
        // Handle UPPERCASE_KEY: 'UPPERCASE_KEY' -> 'Uppercase Key'
        formattedKey = key
          .toLowerCase()
          .replace(/_/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase());
      } else if (key.includes('_')) {
        // Handle snake_case_key: 'snake_case_key' -> 'Snake Case Key'
        formattedKey = key
          .replace(/_/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase());
      } else {
        // Handle camelCaseKey: 'camelCaseKey' -> 'Camel Case Key'
        formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .trim()
          .replace(/\b\w/g, char => char.toUpperCase());
      }
  
      formattedObj[formattedKey] = obj[key];
    }
  
    return formattedObj;
  };
  