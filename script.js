const menuHamburguer = document.querySelector("#menu-hamburguer")

const navigationList = document.querySelector(".navigation-menu ul")

const navigationItem = document.querySelectorAll(".navigation-item")

const sections = document.querySelectorAll("section")

//Menu Hamburguer
menuHamburguer.addEventListener("click", ()=>{
    navigationList.classList.toggle("active")
})


//Navigation Menu Border
navigationItem.forEach((element) => { 
    element.addEventListener("click", ()=>{
        event.preventDefault()
        navigationItem.forEach(element => {
            element.classList.remove("active")
        });
        element.classList.add("active")
    })
})


//Scroll to Section
    function scroll(menuIndex, sectionIndex){
        navigationItem[menuIndex].addEventListener("click", ()=>{
            sections[sectionIndex].scrollIntoView({
                behavior: "smooth"
            })
        })
    }
    scroll(0, 0)
    scroll(1, 1)
    scroll(2, 2)
    scroll(3, 3)


//Obersrver
const observer = new IntersectionObserver((entries) =>{ //entries é o array que recebe os elementos "olhados" pelo observer
    entries.forEach(entry => { //entry representa cada objeto do entries
        if(entry.isIntersecting){ //isIntersecting é um boolean para dizer se o objeto esta sendo visto na tela
            navigationItem.forEach(element => {
                element.classList.remove("active") 
                //retirando os active antigos para entrar os novos
                
            });

            const index = [...sections].indexOf(entry.target)
            //estraindo o indice da secao que está no campo de visão
            //indexOf estrai o indice e entry.target seleciona o elemento que esta no campo de visão

            navigationItem[index].classList.add("active")
        }
        
       
    });
     threshold: 0.5
})

sections.forEach(sections => observer.observe(sections));