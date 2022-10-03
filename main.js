        let searchfrom =document.querySelector('.search-form');

        document.querySelector('#search-btn').onclick = () =>{
            searchfrom.classList.toggle('active');
            nav.classList.remove('active');
            loginform.classList.remove('active');
            shoppingcart.classList.remove('active');
          
        
        }

        let shoppingcart =document.querySelector('.shopping-cart');

        document.querySelector('#cart-btn').onclick = () =>{
            shoppingcart.classList.toggle('active');
            nav.classList.remove('active');
            loginform.classList.remove('active');
            searchfrom.classList.remove('active');
        }

        let loginform =document.querySelector('.login-form');

        document.querySelector('#login-btn').onclick = () =>{
            loginform.classList.toggle('active');
            nav.classList.remove('active');
            shoppingcart.classList.remove('active');
            searchfrom.classList.remove('active');
        };

        let nav =document.querySelector('.nav');

        document.querySelector('#menu-btn').onclick =()=>{
            nav.classList.toggle('active');
            loginform.classList.remove('active');
            shoppingcart.classList.remove('active');
            searchfrom.classList.remove('active');
        }

window.onscroll = ()=>{
    nav.classList.remove('active');
    loginform.classList.remove('active');
    shoppingcart.classList.remove('active');
    searchfrom.classList.remove('active');
}



// var swiper = new Swiper(".prduct-slider", {
//     loop:true,
//     spaceBetween: 20,
//     autoplay: {
//         delay:7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides:true,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1020: {
//         slidesPerView: 3,
//       },
//     },
// });
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
