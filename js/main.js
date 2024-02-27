

"use strict";

window.addEventListener('load', windowLoad);

function windowLoad() {
   document.addEventListener('click', documentActions);
}


function documentActions(e) {
   const targetElement = e.target

   //Burger

   if (targetElement.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
   }

 

   //Animation-scrol

   if (targetElement.closest('[data-goto]')) {

      const goTo = targetElement.closest('[data-goto]').dataset.goto;
      const goToElement = document.querySelector(goTo);
      const headerHeight = document.querySelector('.header').offsetHeight;

      if (goToElement) {
         window.scrollTo({
            top: goToElement.offsetTop - (headerHeight + 15),
            behavior: "smooth"
         });
      }
      e.preventDefault();

   }

}

function animationBlocks(){

 //Анімація шапки


   function animationHeader () {
      const header = document.querySelector('header');


    if (window.pageYOffset){
      header.classList.add('header__color');
  
  
    }else{
      header.classList.remove('header__color');
  
  
    }
   }
  
   window.addEventListener('scroll', animationHeader);
 //Анімація Доставка та оплата

 function animationDelivery() {
   function animationDeliveryImages(){
      const deliveryDecorImg = document.querySelector('.delivery-decor__img');
      //const deliveryDecorOneAnm = document.querySelector('.delivery-decor__img_anm');

    
      
      if(window.pageYOffset > 3800){
         deliveryDecorImg.classList.add('delivery-decor__img_anm');
        /* deliveryDecorOneAnm.style.cssText = `
         position:  relative;
         left: 1000px;
         transition: all 1s;

         `;*/

      }else{
         deliveryDecorImg.classList.remove('delivery-decor__img_anm')



      };

      



   };
 window.addEventListener('scroll', animationDeliveryImages);


 };
window.setTimeout(animationDelivery, 1000);


 window.addEventListener('scroll', animationHeader);


  

};

window.setTimeout(animationBlocks, 1000);





 


 