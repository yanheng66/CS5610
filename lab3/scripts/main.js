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

function isValidSelection() {
    const flavor = document.getElementById("flavorSelect").value;
    const size = document.getElementById("sizeSelect").value;
    if (!flavor || !size) {
        alert("Please choose both flavor and size before placing your order!");
        return false;
    }
    return true;
}

function calculateFinalPrice(flavor, size, toppings) {
    let basePrice = prices[flavor] || 0;
    let toppingTotal = 0;
    for (let t of toppings) {
        toppingTotal += prices[t] || 0;
    }
    let multiplier = prices[size] || 1;
    let finalPrice = multiplier * (basePrice + toppingTotal);
    return finalPrice.toFixed(2);
}

function getSelectedToppings() {
    const toppingCheckboxes = document.getElementsByName("topping");
    const selectedToppings = [];
    for (let checkbox of toppingCheckboxes) {
        if (checkbox.checked) {
            selectedToppings.push(checkbox.value);
        }
    }
    return selectedToppings;
}

function displayOrderSummary(order) {
    const toppingsText = order.toppings.length
        ? order.toppings.join(", ")
        : "no toppings";
    const summary = `You ordered a ${order.size} ${order.flavor} with ${toppingsText}. Total Price: $${order.finalPrice}`;
    document.getElementById("summaryText").textContent = summary;
}

function placeOrder() {
    if (!isValidSelection()) {
        return;
    }
    const flavor = document.getElementById("flavorSelect").value;
    const size = document.getElementById("sizeSelect").value;
    const toppings = getSelectedToppings();
    const finalPrice = calculateFinalPrice(flavor, size, toppings);

    const order = {
        flavor: flavor,
        size: size,
        toppings: toppings,
        finalPrice: finalPrice
    };

    displayOrderSummary(order);
}

document.addEventListener("DOMContentLoaded", function () {
    const orderButton = document.getElementById("orderButton");
    orderButton.addEventListener("click", placeOrder);
});