# 📚 Lesson 7 — appendChild()

<div id="list"></div>

const list = document.querySelector("#list");
const h2 = document.createElement("h2");
h2.textContent = "Featured Products";
list.appendChild(h2);

Ans:
<div id="list">
    <h2>Featured Products</h2>
</div>