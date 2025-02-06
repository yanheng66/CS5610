const prices = {
    original: 2.5,
    mango: 3.0,
    strawberry: 3.5,
    small: 1.0,
    medium: 1.5,
    large: 2.0,
    boba: 0.5,
    jelly: 0.75,
    pudding: 1.0
};

// Function to get selected toppings (multiple checkboxes)
function getSelectedToppings() {
    let selectedToppings = [];
    let toppingCheckboxes = document.getElementsByName("topping");

    for (let checkbox of toppingCheckboxes) {
        if (checkbox.checked) {
            selectedToppings.push(checkbox.value);
        }
    }

    return selectedToppings;
}

// Function to calculate final price
function calculateFinalPrice(flavor, size, toppings) {
    let basePrice = prices[flavor];  // Get the price of the selected flavor
    let toppingsTotal = toppings.reduce((sum, topping) => sum + prices[topping], 0);  // Sum up toppings prices
    let finalPrice = prices[size] * (basePrice + toppingsTotal);  // Apply size multiplier
    return finalPrice.toFixed(2);  // Round to 2 decimal places
}

// Function to display order summary
function displayOrderSummary(order) {
    let toppingText = order.toppings.length > 0 ? order.toppings.join(", ") : "none";
    console.log(`You have ordered a ${order.size} ${order.flavor} with these toppings: ${toppingText}`);
    console.log(`Total Price: $${order.finalPrice}`);
}

// Function to place order
function placeOrder(flavor, size, toppings) {
    let finalPrice = calculateFinalPrice(flavor, size, toppings);

    let order = {
        flavor: flavor,
        size: size,
        toppings: toppings,
        finalPrice: finalPrice
    };

    displayOrderSummary(order);
}

// Function to handle form submission
function submitOrder() {
    let flavor = document.getElementById("flavor").value;
    let size = document.getElementById("size").value;
    let toppings = getSelectedToppings();  // Get selected toppings (can be empty)

    placeOrder(flavor, size, toppings);
}

console.log("=== Test Case 1 ===");
placeOrder("original", "medium", ["boba", "jelly"]);
// Expected output: "You have ordered a medium original with these toppings: boba, jelly"
// Expected total price: 1.5 * (2.5 + 0.5 + 0.75) = $6.56

console.log("\n=== Test Case 2 ===");
placeOrder("strawberry", "large", ["pudding"]);
// Expected output: "You have ordered a large strawberry with these toppings: pudding"
// Expected total price: 2.0 * (3.5 + 1.0) = $9.00

console.log("\n=== Test Case 3 ===");
placeOrder("mango", "small", []);
// Expected output: "You have ordered a small mango with these toppings: none"
// Expected total price: 1.0 * 3.0 = $3.00