const menuHamburguer = document.querySelector("#menu-hamburguer")

const navigationList = document.querySelector(".navigation-menu ul")

menuHamburguer.addEventListener("click", ()=>{
    navigationList.classList.toggle("active")
})