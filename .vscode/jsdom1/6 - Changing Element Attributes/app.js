

let image=document.getElementById("image");
let input=document.getElementById("input");
let button=document.getElementById("submit");

button.addEventListener("click", () => {
    image.src =input.value;
})

