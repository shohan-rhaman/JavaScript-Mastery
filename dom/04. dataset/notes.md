# dataset (Very Important for Shopify)

Why is dataset important?
Because Shopify themes constantly use data attributes

<button data-id="101" data-price="120">
    Add to Cart
</button>

JavaScript can read these values.

const button = document.querySelector("button");

console.log(button.dataset.id);
console.log(button.dataset.price);

Output:
- 101
- 120

Notice:
- data-id → dataset.id
- data-price → dataset.price


==========================================================================================

# Real shopify case

<button class="add-cart"
        data-variant-id="4578123"
        data-price="120">
    Add to Cart
</button>