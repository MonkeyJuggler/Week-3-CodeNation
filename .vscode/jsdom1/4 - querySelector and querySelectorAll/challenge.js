// const { listen } = require("express/lib/application");

// document.getElementsByClassName("not-orange");

// for (let i = 0; i<list.length; i ++) {
//     list[i].style.color = "orange";
// }

const listItems = document.querySelectorAll("li");

const colours = [  "red", "yellow", "goldenrod", "lightgreen", "blue", "purple"]

for (let i = 0; i < listItems.length; i++ ) {
    listItems[i].style.color = colours[i];
}

console.log(listItems);



// for (number n = 0; n <= 10; x++) {
//     if (n === 0) {
//         console.log(n + "is even");
//     }

//     else if (n % 2 ===0) {
//         console.log(x + "is even")
//     }

// else {
//     console.log(n + "is odd");
//     }
// }