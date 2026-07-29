## What is the DOM?

<body>
    <h1>Mini Shopify Store</h1>
    <button>Add to Cart</button>
    <p>$120</p>
</body>

When the browser loads this page, it doesn't just see text. It builds a DOM Tree.

Document
│
└── body
    │
    ├── h1
    ├── button
    └── p

Think of the DOM as JavaScript's map of our HTML. JavaScript cannot work directly with HTML files. It works with the DOM.


# What is document?

Whenever we write: document. we're referring to the entire webpage.
Like this:

document
        │
        ▼
Entire HTML Page


# So what does querySelector() do?

It asks the document: "Find me the first element that matches this CSS selector."

Syntax: document.querySelector("selector");


# Example 1 — Select by Tag

h1>Mini Shopify Store</h1>

const heading = document.querySelector("h1");
console.log(heading);

Output: <h1>Mini Shopify Store</h1>


# Example 2 — Select by ID

<h1 id="title">
    Mini Shopify Store
</h1>
const title = document.querySelector("#title");



# Example 3 — Select by Class

<button class="buy-btn">
    Buy Now
</button>

const button = document.querySelector(".buy-btn");



# Why is it called querySelector?

Break the name apart. Query means "Ask" Selector means "CSS Selector"

literally means: "Ask the document for an element using a CSS selector."


# Real shopify Example

<button class="buy-btn">
    Buy Now
</button>

const button = document.quearySelector(".buy-btn")

- Now JavaScript knows exactly which button you're referring to.

Then we can do: 
button.textContent = "Sold Out";


# Only objects have these properties and methods
heading.textContent
heading.innerHTML
heading.classList
heading.style



==========================================================================================

# querySelector() + textContent

# Reading Text

<h1 id="title">Mini Shopify Store</h1>
const title = document.querySelector("#title");
console.log(title.textContent)

Output: Mini Shopify Store


# Changing Text

const title = document.querySelector("#title");
title.textContent = "Nike Store";

Output: <h1 id="title">Nike Store</h1>



=======================================================================================

# Real Shopify Example

<p id="price">$120</p>
const price = document.querySelector("#price");
price.textContent = "$99";

Output: $99



# Another Example

<button id="buyBtn">
    Buy Now
</button>

const button = document.querySelector("#buyBtn");
button.textContent = "Sold Out";

Output: <button>Sold Out</button>



# Important Rule

textContent
✅ Reads text
✅ Changes text




================================================================================

# if there are multiple buttons then how we select

<button>Buy</button>
<button>Wishlist</button>
<button>Add to Cart</button>

const button = document.querySelector("button");

Output: It returns only the first button;


# Get all buttons

const buttons = document.querySelectorAll("button");

Output: return all buttons


# if there are multiple elements avaiable then how we select:

<h1 id="store-title">Mini Shopify</h1>
<button id="buy-btn">Buy</button>
<p class="price">$120</p>

const title = document.querySelector("#store-title");
const button = document.querySelector("#buy-btn");
const price = document.querySelector(".price");