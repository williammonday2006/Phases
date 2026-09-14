const storeInfo = {
    name: prompt("Enter the store name:"),
    taxRate: Number(prompt("Enter the tax rate (%):")),
    tableFee: Number(prompt("Enter the table/service fee:"))
};

console.log(
    `Welcome to ${storeInfo.name}! Standard table fee: $${storeInfo.tableFee.toFixed(2)}`
);