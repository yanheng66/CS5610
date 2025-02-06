// const radiusP = document.querySelector('#radius');
// const resultP = document.querySelector('#result');

// function getNumber() {
//     let num = prompt("Enter the radius of the circle: ")
//     radiusP.textContent += num;
//     return num;
// }

// function calculateArea() {
//     const input = getNumber();
//     if (isNaN(input)) {
//         alert("Please enter a number.");
//         return;
//     }
//     return Math.PI * Math.pow(input, 2).toFixed(2);
// }

// const result = calculateArea();
// resultP.textContent += result;


let shoppingItems = ["bread", "cheese", "green pepper"];
const shoppingList = document.querySelector(".shopping");

function populateShoppingList(items, element) {
    items.forEach(item => {
        console.log(item);
        let li = document.createElement("li");
        li.textContent = item;
        element.appendChild(li);
    });
}
