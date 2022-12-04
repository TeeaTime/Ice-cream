import * as flsFunctions from "./modules/functions.js"

flsFunctions.isWebP()



// import Swiper, { Navigation, Pagination } from 'swiper';



const swiper = new Swiper('.swiper', {
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2000,
    },
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev'
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  
    
