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


