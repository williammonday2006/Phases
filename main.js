const storeInfo = {
    name: prompt("Enter the store name:"),
    taxRate: Number(prompt("Enter the tax rate (%):")),
    tableFee: Number(prompt("Enter the table/service fee:"))
};

console.log(
    `Welcome to ${storeInfo.name}! Standard table fee: $${storeInfo.tableFee.toFixed(2)}`
);

const receiptItems = [];

let addItem = "Y";

while (addItem.toUpperCase() === "Y") {
    const itemName = prompt("Enter the item name:");
    const itemPrice = Number(prompt("Enter the item price:"));

    const item = {
        name: itemName,
        price: itemPrice
    };

    receiptItems.push(item);

    addItem = prompt("Would you like to enter another item? (Y to continue)");
}

console.log(`Total items: ${receiptItems.length}`);
console.log(receiptItems);

// Calculate the original subtotal
let subtotal = 0;

for (const item of receiptItems) {
    console.log(`${item.name} -- $${item.price.toFixed(2)}`);

    subtotal += item.price;
}

console.log(`Food subtotal: $${subtotal.toFixed(2)}`);

// Remove the last item
if (receiptItems.length > 0) {
    const removedItem = receiptItems.pop();

    console.log(`Removed item: ${removedItem.name}`);
}

// Recalculate the subtotal after removing the item
subtotal = 0;

for (const item of receiptItems) {
    subtotal += item.price;
}

// Add the table fee
const grossSubtotal = subtotal + storeInfo.tableFee;

// Calculate the tax
const taxAmount = grossSubtotal * (storeInfo.taxRate / 100);

// Calculate the grand total
const grandTotal = grossSubtotal + taxAmount;

// Print the final receipt
console.log("");
console.log("========== FINAL RECEIPT ==========");

console.log(`Store: ${storeInfo.name}`);

console.log("");

for (const item of receiptItems) {
    console.log(`${item.name} -- $${item.price.toFixed(2)}`);
}

console.log("");

console.log(`Table Fee: $${storeInfo.tableFee.toFixed(2)}`);
console.log(`Subtotal: $${grossSubtotal.toFixed(2)}`);
console.log(`Tax: $${taxAmount.toFixed(2)}`);
console.log(`Grand Total: $${grandTotal.toFixed(2)}`);

console.log("==================================");