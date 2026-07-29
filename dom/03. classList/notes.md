## 📚 classList
This is one of the most-used DOM APIs in Shopify.

Why do we use it?
- add
- remove
- toggle CSS classes dynamically.



# Add class

<button id="btn">Add to Cart</button>
const btn = document.querySelector("#btn");
btn.classList.add("bg-red-500");



# Remove class

<button id="btn" class="bg-red-500">Add to Cart</button>
const btn = document.querySelector("#btn");
btn.classList.remove("bg-red-500");



# Toggle a clas

If the class exists → remove it.
If it doesn't exist → add it.


<button class="filter-btn">All</button>
<button class="filter-btn">Shoes</button>
<button class="filter-btn">Bags</button>

Q: When the user clicks Shoes, you want to highlight it.

button.classList.add("active");

When they click Bags, you remove the active class from the previous button and add it to the new one.
This is exactly how category filters, variant pickers, and image galleries work in Shopify.



======================================================================================================

# Real shopify them example

- toggle() works like a switch.

<button id="theme">Dark Mode</button>
const theme = document.querySelector("#theme");

theme.classList.toggle("dark");
theme.classList.toggle("dark");

Result Step by step:
First toggle("dark") → class is added.
Second toggle("dark") → class is removed.