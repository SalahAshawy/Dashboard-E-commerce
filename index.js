const sideMenue =document.querySelector("aside");
const menuBtn =document.querySelector("#menu-btn");
const closeBtn =document.querySelector("#close-btn");
const themeToggler =document.querySelector(".theme-toggler");
const add =document.querySelector(".add-product");

menuBtn.addEventListener('click',()=>{
    sideMenue.style.display='block';
})
closeBtn.addEventListener('click',()=>{
   sideMenue.style.display='none';
})
//change the theme
 themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');    
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');      

 })
//  add.addEventListener('click',()=>{

//    document.querySelector('.sss').style.display='block';
// })