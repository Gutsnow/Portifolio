var sol = document.getElementById("sun")
var head = document.getElementsByTagName("header")[0]
var sla = document.querySelector(".sl1")
var sla2 = document.querySelector(".sl2")
var sla3 = document.querySelector(".sl3")
var apresentacao_1 = document.querySelector(".apresentacao_1")
var apresentacao_2 = document.getElementsByClassName("apresentacao_2")[0]
var apresentacao_2_2 = document.getElementsByClassName("apresentacao_2")[1]
var nome = document.querySelector("#apresentacao_nome")
var sobre = document.getElementById("sob")
var projetos = document.getElementById("proj")





sol.addEventListener("click", () =>{
    sol.style.color="white"
    sla.setAttribute("data-contexto", "fase2")
    sla2.setAttribute("data-contexto", "fase2")
    sla3.setAttribute("data-contexto", "fase2")
    apresentacao_1.setAttribute("data-contexto", "fase2")
    apresentacao_2.setAttribute("data-contexto", "fase2")
    apresentacao_2_2.setAttribute("data-contexto", "fase2")
    nome.setAttribute("data-contexto", "fase2")
    sobre.setAttribute("data-contexto", "fase2")
    projetos.setAttribute("data-contexto", "fase2")

    var tela = document.body.style.backgroundColor
    head.style.backgroundColor="rgb(9, 19, 55)"
   
    if (tela === "white" || tela === "" )
    {
        document.body.style.backgroundColor="rgb(9, 19, 55)";
       head.style.backgroundColor="rgb(9, 19, 55)"
        
    }

    else
    {   
        sol.style.color="black"
        head.style.backgroundColor="white"
        document.body.style.backgroundColor="white"
        sla.setAttribute("data-contexto", "fase1")
        sla2.setAttribute("data-contexto", "fase1")
        sla3.setAttribute("data-contexto", "fase1")
        apresentacao_1.setAttribute("data-contexto", "fase1")
    apresentacao_2.setAttribute("data-contexto", "fase1")
    apresentacao_2_2.setAttribute("data-contexto", "fase1")
    nome.setAttribute("data-contexto", "fase1")
    sobre.setAttribute("data-contexto", "fase1")
    projetos.setAttribute("data-contexto", "fase1")
    }
})

var home = document.getElementsByClassName("tags_header")[0]
var sobre_mim = document.getElementsByClassName("tags_header")[1]

home.addEventListener("click", () => {
    window.scrollTo({top:0, behavior: "smooth"})
})

sobre_mim.addEventListener("click", () => {
    document.getElementById("caixa_sobre_pai").scrollIntoView({top:0, behavior: "smooth"})
})
