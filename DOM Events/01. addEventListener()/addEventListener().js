/* const Button = document.querySelector("#buy-btn")

Button.addEventListener("click", ()=>{
    console.log("button clicked");
})


const btn = document.querySelector("#btn")

btn.addEventListener("click", ()=>{
    console.log("Button Clicked!")
}) */



// ================== Change the UI on Click ======================== //

const status = document.querySelector("#status");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    status.textContent = "In Stock";
});



// ====================== Shopify Example ============================== //
// When the button is clicked: Mini Shopify should become Nike Store

const storeName = document.querySelector("#title");
const changeBtn = document.querySelector("#change")


/* changeBtn.addEventListener("click", ()=>{
    storeName.textContent = "Nike Store"
}) */

changeBtn.addEventListener("click", (event)=>{
    console.log(event.target.textContent)
})


// ===================== Challange ==================================== //
const buyBtn = document.querySelector(".buy-btn")

buyBtn.addEventListener("click", (event)=>{
    event.target.textContent = "added"
    
})