const container = document.querySelector("#container");

const p = document.createElement("p");

p.textContent = "Hello";

container.appendChild(p);


// ====================== Shopify Example ============================ //
const products = {
    name: "Nike Air Max"
};

const productsList = document.querySelector("#product-list")

const div = document.createElement("div");

div.textContent = products.name;

productsList.appendChild(div)

