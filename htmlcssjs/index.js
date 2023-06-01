console.log("hi");
const some = document.querySelector(".hey");
some.style.cssText = "margin:2rem; background: white;";
some.setAttribute("style", "background:green;");
console.log(some.classList);
const somer = document.querySelector("ul");
console.log(somer.previousElementSibling);
some.setAttribute('id','idli');
some.textContent='glory to be'
const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    alert('potta');
}
);