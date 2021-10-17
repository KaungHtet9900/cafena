let navbar = $(".navbar");
let menuBtn = $("#menu-btn");

menuBtn.on("click",()=> {
   navbar.toggleClass("active");
   cartItemContainer.removeClass("active");
   searchForm.removeClass("active");
});

let cartItemContainer = $(".cart-item-container");
let cartBtn = $("#cart-btn");

cartBtn.on("click",()=> {
   cartItemContainer.toggleClass("active");
   navbar.removeClass("active");
   searchForm.removeClass("active");
});

let searchForm = $(".search-form");
let searchBtn = $("#search-btn");

searchBtn.on("click",()=> {
   searchForm.toggleClass("active");
   navbar.removeClass("active");
   cartItemContainer.removeClass("active");
});

let closeCartBtn = $("#close-cart-btn");

closeCartBtn.on("click",()=> {
   cartItemContainer.removeClass("active");
});

$(window).on("scroll",()=> {
   navbar.removeClass("active");
   cartItemContainer.removeClass("active");
   searchForm.removeClass("active");
});

$(".scroll-to-top").on("click",()=> {
   
});

$(window).on("load",()=> {
   $(".loader-container").fadeOut(500);
});

$(".scroll-to-top").on("click",()=> {
   $(location.href="#home");
});

$("#menu-btn").on("click",()=> {
   let result = $(".navbar").hasClass("active");

   if (result) {
      $("#menu-btn").html(`<i class="fas fa-times"></i>`)
   }
   else{
      $("#menu-btn").html(`<i class="fas fa-bars"></i>`)
   }
});

$("#search-btn").on("click",()=> {
   let result = $(".search-form").hasClass("active");

   if (result) {
      $("#search-btn").html(`<i class="fas fa-times"></i>`)
   }
   else{
      $("#search-btn").html(`<i class="fas fa-search"></i>`)
   }
});

wow = new WOW(
    {
       boxClass:     'wow',      // default
       animateClass: 'animate__animated', // default
       offset:       0,          // default
       mobile:       true,       // default
       live:         true        // default
    }
)
wow.init();

let scrollToTop = document.querySelector(".scroll-to-top");

let scrollToTopControler1 = new Waypoint({
   element: document.getElementById('about'),
   handler: function(direction) {
     if(direction == "down")
     {
         scrollToTop.style.display = "flex";
         scrollToTop.classList.remove("animate__fadeOut");
         scrollToTop.classList.add("animate__fadeIn");
     }
     else
     {
      scrollToTop.style.display = "none";
      scrollToTop.classList.remove("animate__fadeIn");
      scrollToTop.classList.add("animate__fadeOut");
     }
   },
   offset: '25%'
 });