let toggle = document.querySelector(".toggler");
let content = document.querySelector("body");

let color = "light";

toggle.addEventListener("click", () =>{
    if(color === "light"){
        content.style.backgroundColor = "#2f2f2f";
        color = "dark"; 
    }
    else{
        content.style.backgroundColor = "white";
        color = "light"; 
    }
})