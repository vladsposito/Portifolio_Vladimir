const menuHamburguer = document.querySelector("#menu-hamburguer")

const navigationList = document.querySelector(".navigation-menu ul")

const navigationItem = document.querySelectorAll(".navigation-item")

//Menu Hamburguer
menuHamburguer.addEventListener("click", ()=>{
    navigationList.classList.toggle("active")
})

//Navigation Menu Border
navigationItem.forEach(element => {
    element.addEventListener("click", ()=>{
        navigationItem.forEach(element => {
            element.classList.remove("active")
        });
        element.classList.add("active")
    })
});