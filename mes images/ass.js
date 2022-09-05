/* const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


 function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    console.log(count);
    
}  */

var imgslider=document.getElementsByClassName("active");
var temps=3000;
var i=0;
function monslider(){
    document.slider.src=imgslider[i];
    if (i<imgslider.length -1){
        i++;
    }else{
        i=0;
    }
    setTimeout("monslider()" ,temps); 
}
window.onload=monslider;