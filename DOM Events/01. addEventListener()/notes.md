# What is an Event?

An event is simply something that happens on a webpage.

Examples:

🖱️ User clicks a button
⌨️ User types in an input
🖱️ User moves the mouse
📄 Page loads

JavaScript can listen for these events.

Syntax
element.addEventListener("event", callbackFunction);

Example

HTML
<button id="buy-btn">Add to Cart</button>

JavaScript
const button = document.querySelector("#buy-btn");

button.addEventListener("click", () => {
    console.log("Product Added!");
});


What happens?

User Clicks Button
        │
        ▼
"click" event happens
        │
        ▼
addEventListener notices it
        │
        ▼
Runs the callback function
        │
        ▼
Console: Product Added!