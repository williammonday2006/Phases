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