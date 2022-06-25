// Carousel
  
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause:true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0:{
        items: 2,
        nav: false
      },
      600:{
        items: 2,
        nav: false
      },
      // 1000:{
      //   items: 3,
      //   nav: false
      // }
    }
  })