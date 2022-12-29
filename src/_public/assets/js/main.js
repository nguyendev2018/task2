$(window).on('resize', function() {
})
$(".c-col__button").click(function (e) {
  $(this).parent().children('.c-col__bottom').slideToggle();
    $(this).children().toggleClass("is-active");
});
$(".c-point__itembutton").click(function(){
  let itemLayer = $(this).closest(".c-point__item");
  $(".c-point__itemlayer").removeClass("is-active");
 itemLayer.find(".c-point__itemlayer").toggleClass("is-active");
})

$(".c-headersp__toggle").click(function() {
  $(".c-headersp__bg").toggleClass("is-active");
  $(".c-headersp__close").toggleClass("is-active");
  if ($(".c-headersp__bg").hasClass("is-active")) {
    $("body").addClass("u-overflow");
} else {
    $("body").removeClass("u-overflow");
}
})

//ANCHOR scroll menu
$(window).scroll(function () {
  // let docScroll = $(document).scrollTop();
  // let sectionArray = [1, 2, 3, 4, 5, 6];

  //   $.each(sectionArray, function (index, value) {

  //       $(document).scroll(function () {
  //           let offsetSection = $('#' + 'section_' + value).offset().top;
  //           let offsetbottom = $('#section_6').offset().top + $('#section_6').outerHeight(true);
  //           let docbottom = window.scrollY + window.innerHeight;
  //           let docScroll1 = docScroll + 10;

  //           if (docScroll1 >= offsetSection) {
  //             $('.c-header__menuitem a').removeClass('is-active');
  //             $('.c-header__menuitem a').eq(index).addClass('is-active');
  //           }
            
  //           if (docbottom >= offsetbottom) {
  //             $('.c-header__menuitem a').removeClass('is-active');
  //             $('.c-header__menuitem a').eq("5").addClass('is-active');
  //           }
  //       });
  //   });
    // animation leaf
  //   if (docScroll > 10) {
  //     $('.c-header__animation').addClass('is-scroll');
  //   $(".p-leaf__top").addClass("is-scroll");
  //   $(".p-leaf__right").addClass("is-scroll");
  // }
  // else{
  //   $('.c-header__animation').removeClass('is-scroll');
  //   $(".p-leaf__top").removeClass("is-scroll");
  //   $(".p-leaf__right").removeClass("is-scroll");
  // }
 
}).scroll();


$(".c-point__list").slick({
        
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay : true,
  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

document.addEventListener("scroll", (e) => {
  let navLinks = document.querySelectorAll(".c-header__menuitem");
  
  let scroll_pos = window.scrollY;
  let sections = document.querySelectorAll(".p-scroll");
  sections.forEach(function (section, index) {
    if (scroll_pos  >= section.offsetTop) {
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("is-activelink");
      });
      navLinks[index].classList.add("is-activelink");
    }
  });
});
