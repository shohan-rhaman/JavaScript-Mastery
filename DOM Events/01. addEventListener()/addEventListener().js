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