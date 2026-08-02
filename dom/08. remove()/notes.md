# 📚 Lesson 8 — remove()

# 🎯 Goal
Learn how to remove an HTML element from the page.

# Syntax
element.remove();

Example 1

HTML: 
<p id="message">
    Product Added to Cart
</p>

JavaScript:
const message = document.querySelector("#message");

message.remove();
Result
<!-- Nothing -->

The <p> element is completely removed from the webpage.