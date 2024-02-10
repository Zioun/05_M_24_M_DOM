let cardArea = document.querySelector("#cardArea");
cardArea.style.backgroundColor="lightGray";
cardArea.style.padding = "20px";

let cards = document.querySelectorAll("#card");
for(let card of cards){
    card.style.color = "white";
    card.style.backgroundColor = "blue";
    card.style.padding = "15px";
    card.style.marginBottom = "15px";
}

let titleEdit = document.getElementById("titleEdit");
console.log(titleEdit.classList.add('cStyle'))


// appent 

let appendText = document.createElement("h3");
appendText.innerText = "Card Info 2024"
console.log(appendText);

let parentd = document.getElementById("cardArea");
parentd.appendChild(appendText)
console.log(parentd)


