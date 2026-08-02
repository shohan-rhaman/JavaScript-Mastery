## 📚 Lesson 6 — createElement()
This is where DOM starts becoming powerful.


## 🎯 Goal
Learn how to create HTML elements using JavaScript.


# Why do we need it?

Normally, HTML is written manually.

<div class="card">
    Nike Shoes
</div>

But what if your products come from an API or Shopify? You don't know in advance how many products there are. JavaScript creates them dynamically.


# Syntax
document.createElement("tagName");.

Example 1

const heading = document.createElement("h1");
console.log(heading);

Output:
<h1></h1>