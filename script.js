const menuHamburguer = document.querySelector("#menu-hamburguer")

const navigationList = document.querySelector(".navigation-menu ul")

const navigationItem = document.querySelectorAll(".navigation-item")

menuHamburguer.addEventListener("click", ()=>{
    navigationList.classList.toggle("active")
})

navigationItem.forEach(element => {
    element.addEventListener("click", ()=>{
        element.classList.toggle("active")
    })
});