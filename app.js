var input = document.querySelector("#input");
var increaseFont = document.querySelector("#increase");
var decreaseFont = document.querySelector("#decrease");
var font = 16;

function increaseHandler(){
    font  = font + 2
    input.style.fontSize = font+"px";
}

function decreaseHandler(){
    font = font - 2;
    input.style.fontSize = font+"px";
}

increaseFont.addEventListener("click", increaseHandler);
decreaseFont.addEventListener("click", decreaseHandler);