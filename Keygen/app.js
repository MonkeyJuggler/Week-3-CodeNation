
const keys = document.getElementById("1");
const even = document.getElementById("2");
const whic = document.getElementById("3");
const head = document.getElementById("heading")


document.addEventListener("keypress", (i) => {
    console.log(i);    
    keys.textContent = i.key;
    even.textContent = i.code;
    whic.textContent = i.keyCode;
    head.textContent = i.keyCode;

});