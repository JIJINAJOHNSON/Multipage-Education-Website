//alert();

// change navbar styles on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        // change icon

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})


//var swiper = new Swiper(".container.testimonials-container.mySwiper", {
    //slidesPerView: 2,
    //spaceBetween: 160,
    //pagination: {
      //el: ".swiper-pagination",
      //clickable: true,
    //},
    // when window width is  >=600px
    //breakpoints:{
        //600:{
            //slidesPerView: 2
       // }
    //}
 // });

 var swiper = new Swiper(".mySwiper",{
    loop:true,
    autoplay:{
        display:2500,
        disableOnInteraction:false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        640:{
            slidesPerView:2,
            spaceBetween:20,
        },
        768:{
            slidesPerView:3,
            spaceBetween:40,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:50,
        }
    }
})

// show/ hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=>{
    menu.style.display ="flex";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display ="none";
})

// close nav menu
const closeNav=()=>{
    menu.style.display ="none";
    closeBtn.style.display ="none";
    menuBtn.style.display ="inline-block";
}
closeBtn.addEventListener('click',closeNav)