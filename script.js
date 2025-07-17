const container = document.querySelector(".container");
const screen = document.querySelector(".screen");
const number = document.querySelector(".number");
const operate = document.querySelector(".operate");
const buttons = document.querySelectorAll("button");

//screen respond to button press
const one = document.querySelector("#one");
const add = document.querySelector("#add");
const equal = document.querySelector("#equal");

buttons.forEach(button =>
    {
        button.addEventListener("click", ()=>
        {
            screen.textContent += button.textContent;
        });
    });


