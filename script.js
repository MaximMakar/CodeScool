const burgerToogle=document.getElementById('burger');
const body=document.querySelector("body");
const menuItems=document.querySelectorAll(".main_menu_item")
const eduProgs=document.querySelectorAll(".product_card")
const menuContainer=document.querySelector("nav");

function ToogleBurger() {
    burgerToogle.classList.toggle('active');
    body.classList.toggle("modal-open");
    menuContainer.classList.toggle('active');
}
/*
function ToogleCard() {
 if (this.classList.contains("front")){
    this.classList.remove('front');
    this.classList.add('back');
 }
 else{
    this.classList.remove('back');
    this.classList.add('front');
 }
}
*/
burgerToogle.addEventListener('click',ToogleBurger);
menuItems.forEach(item =>item.addEventListener('click',ToogleBurger));
eduProgs.forEach(card =>card.addEventListener('click',ToogleCard));