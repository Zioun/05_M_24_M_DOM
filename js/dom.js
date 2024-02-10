// ! 1.get element by tagname;
const liCollection = document.getElementsByTagName("li");
for(const li of liCollection){
    // console.log(li.innerText);
}
// ! 2.get element by id;
const h1Tag = document.getElementById("title");
// console.log(h1Tag.innerText)
// ! 3.get element by classname; (for of)
const sp = document.getElementsByClassName("sp");
for(let item of sp){
    // console.log(item.innerText);
}
// ! 4. query selector;
const qury = document.querySelector('#title');
// console.log(qury.innerText);
// ! 5. query selectorAll; (forEach)
const quryAll = document.querySelectorAll('#title');
for(let item of quryAll){
    // console.log(item.innerText)
}


// TODO style js

const stl = document.getElementById("title");
stl.style.backgroundColor='red';
