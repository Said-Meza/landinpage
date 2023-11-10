const boton = document.getElementById("boton");
const menu = document.getElementById("header__nav__links");
let contador = 0 ;


boton.addEventListener("click",()=>{
    
if (contador == 0 ) 
{
    menu.className = ("header__nav__links show")  
    contador = 1;
}
else
{
    menu.classList.remove("noshow");
    menu.className = ("header__nav__links noshow");
    contador = 0;
}

})



