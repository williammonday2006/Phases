# Phase 1
I used storeInfo object to group the restrant name, tax rate, and table fee together. This makes the code easier to orgonize as its all in one place. If i used different variables i would have to keep track of storeName taxRate and tableFee individually.
# Phase 2
When a property is assined to an object that did not already have that property, JavaScript creates the property automatically. Objects do not need every possible property to be defined.
For example, I could create an object with just a name and then later add a price:

const item = {
    name: "Burger"
};

item.price = 10;

The object would then contain both name and price.

# Phase 3
I used a for...of loop to go through each object stored in reciptitems array, The variable item represents the current object during each iteration of the loop. To access the price i used item.price then added that value to subtotal while also displaying its name.
# Phase 4
Using .pop() removed the final object from the receiptItems array. The item was no longer part of the array after the operation. I then recalculated the subtotal by looping through the updated array. Because the canceled item had been removed, its price was no longer included in the calculation.