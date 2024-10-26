// photoSwiper 照片輪播
var swiper = new Swiper(".photoSwiper", {
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true
  },
  breakpoints: { 
    375: {  
      slidesPerView: 1,
      spaceBetween: 0
    },
    767: {  
      slidesPerView: 2,
      spaceBetween: 30
    },
  }
});

// cardSwiper 卡片輪播
var swiper = new Swiper(".cardSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true
  },
  breakpoints: { 
    375: {  
      slidesPerView: 1,
      spaceBetween: 20
    },
    767: {  
      slidesPerView: 2,
      spaceBetween: 60
    },
    1440: {  
      slidesPerView: 3,
      spaceBetween: 60
    },
  }
});

// goTop 
window.addEventListener("scroll", function() {
  const button = document.getElementById("goTop");
  if (window.scrollY > 200) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});