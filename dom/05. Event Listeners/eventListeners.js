const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    btn3.textContent = "Added!";
});


// ============== Shopify Real Example =======================

const addToCartBtn = document.querySelector("#add-to-cart-btn")

addToCartBtn.addEventListener("click", ()=>{
    addToCartBtn.textContent = "Added to cart";
    addToCartBtn.classList.add("bg-green-600")
})