const checkPizza = document.querySelector("#lovep");
const submitPizza = document.querySelector("#submitPizza");
let pizzaLove = document.querySelector("#pizzaloving").value;

submitPizza.addEventListener("click", () => {
    if(checkPizza.checked){
        sure = window.prompt("ARE YOU SURE?");
    }
    else{
        kill = alert("Your life is now shortened");
    }
});