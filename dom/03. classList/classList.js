// Add class
const btn = document.querySelector("#btn")
btn.classList.add("bg-red-500")


// Remove class
const btn1 = document.querySelector("#btn-1")
btn1.classList.remove("bg-red-500")


// Toggle a class
const button = document.querySelectorAll(".filter-btn");

button.forEach(btn =>{
    btn.classList.add("active")
})
