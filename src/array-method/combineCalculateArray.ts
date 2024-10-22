type Item = {
    [key: string]: any; // Allow any keys
};

type CombinedItem = {
    _item: Item; // Original object from arrayOne
    _total: number; // Total amount for this identifier
};

function combineAndCalculate<T extends Item, U extends Item>(
    arrayOne: T[],
    arrayTwo: U[],
    keyOne: keyof T,
    keyTwo: keyof U,
    amountKeyOne: keyof T,
    amountKeyTwo: keyof U
): { _items: CombinedItem[]; _total: number } {
    // Create a set to hold unique identifiers from arrayOne
    const validIdentifiers = new Set(arrayOne.map(item => item[keyOne]));

    // Create a map to hold combined amounts for matching identifiers
    const amountMap: Record<string, number> = {};

    // Process arrayTwo, but only for identifiers that exist in arrayOne
    for (const item of arrayTwo) {
        const amount = item[amountKeyTwo] || 0; // Get the amount using the dynamic key
        if (amount > 0) { // Sanitize condition
            const key: any = item[keyTwo];
            if (validIdentifiers.has(key)) { // Check if key exists in arrayOne
                amountMap[key] = (amountMap[key] || 0) + amount;
            }
        }
    }

    // Process arrayOne to get amounts and prepare the combined array
    const combinedArray: CombinedItem[] = arrayOne.map(item => {
        const amount = item[amountKeyOne] || 0; // Get the amount using the dynamic key
        const key = item[keyOne];
        const totalAmount = (amountMap[key] || 0) + amount; // Combine original amount and any from arrayTwo
        
        return {
            _item: item, // Keep the original item
           _total: totalAmount,    // Total amount for this identifier
        };
    }).filter(item => item._total > 0); // Only include items with a total amount greater than 0

    // Calculate the total amount across all combined items
    const totalAmount = combinedArray.reduce((total, item) => total + item._total, 0);

    return {
         _items: combinedArray,
        _total: totalAmount
    };
}

// Example usage:
const arrayOne: Item[] = [
    { inv: "INV1", total: 100, xamount: 2000 }, // Using 'totalAmount' instead of 'amount'
    { inv: "INV2", total: 100, xamount: 2000 },
];

const arrayTwo: Item[] = [
    { voucer: "INV1", amount: 100 }, // Using 'amount'
    { voucer: "INV1", amount: 100 },
    { voucer: "INV1", amount: 100 },
    { voucer: "INV2", amount: 100 },
    { voucer: "INV2", amount: 100 },
    { voucer: "INV2", amount: 100 },
    { voucer: "INV3", amount: 100 },
];

// Call the utility function with specific keys
const result = combineAndCalculate(
    arrayOne,
    arrayTwo,
    "inv",       // Key from arrayOne
    "voucer",    // Key from arrayTwo
    "total", // Amount field from arrayOne
    "amount"     // Amount field from arrayTwo
);

console.log(result._items); // Combined array with original objects and aggregated amounts
console.log(result._total);    // Total amount for existing identifiers
