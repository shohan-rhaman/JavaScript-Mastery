const button4 = document.createElement("button");

button4.textContent = "Buy Now!"
console.log(button4) // Output: <button>Buy Now</button>


// =================== Real Shopify Example ========================= //

const product = {
    name: "Nike",
    price: 120
};

// Imagine Shopify gives us products.
const card = document.createElement("div")
card.textContent = product.name;