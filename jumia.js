var imgslider=["mes images/ipartie3/SN_W31_712x384_COOLING_V2.jpeg.jpg","mes images/ipartie3/SN_W33_TOJ_SLIDER.jpg","mes images/ipartie3/SN_W27_KDO_SOIR_712x384.gif","mes images/ipartie3/SN_W33_BRAND_FESTIVAL_712x384.jpg","mes images/ipartie3/SN_W33_DSK_SFV_UN_712x384_TEL.jpeg","https://sn.jumia.is/cms/000000_2022/W31/ADS/ORAIMO/SN_Week30_ADS_Oraimo_Jumia-Ads-online_Onsite-SX.jpg"]
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

// let right=document.getElementsByClassName("suivant"); 
// let left=document.getElementsByClassName("précédent");

const btnLeft =document.querySelector('.suivant');
const btnRight =document.querySelector('.précédent');

btnLeft.disabled=true;

function slideSuivantprecedent(){

    let img_slider1=document.querySelectorAll('.active');
    let img_slider2=document.querySelectorAll('.desactive');
    console.log(img_slider2)

    for (let i = 0; i < img_slider1.length; i++) {
        const slider1 = img_slider1[i];
        const slider2 = img_slider2[i];
        if(slider1.style.display =="block"){
            slider1.style.display="none"
            slider2.style.display="block"

btnRight.disabled=true;
btnLeft.disabled=false;



        }
        else{
            slider1.style.display="block"
            slider2.style.display="none"

            btnRight.disabled=false;
            btnLeft.disabled=true;
        }    
    }
    

} 




