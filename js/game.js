let clicou = false;
let score = 0;
let vidas = 3


let body = document.querySelector("body")

let img = document.createElement("img")
img.src = "./mosca2.png"
img.style.position = "absolute"


function alteraTamanhoMosca(){
   let numeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2
   img.style.transform = `scale(${numeroAleatorio})`
}

function geraPosicao(){
    let y = Math.random() * (window.innerHeight  * 0.5)
    let x = Math.random() * (window.innerWidth * 0.8)

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}

img.addEventListener("click",function(){
    clicou = true
})

setInterval(function(){
    alteraTamanhoMosca()
    geraPosicao()
   

    if(!clicou){
        
        vidas--

        if(vidas == 2){
            let gorro3 = document.getElementById("gorro-3")
            gorro3.src = "../gorro_vazio.png"
        }
        else if(vidas == 1){
            let gorro2 = document.getElementById("gorro-2")
            gorro2.src = "../gorro_vazio.png"
        }
        else if(vidas == 0){
            let gorro1 = document.getElementById("gorro-1")
            gorro1.src = "../gorro_vazio.png"
        
            alert("Game Over")
        }
        clicou = false
    }
    console.log(vidas)

}, 2000)

body.appendChild(img)