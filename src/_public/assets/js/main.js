$(window).on('resize', function() {

    if ($(window).width() <=767) {
        $(".c-point__list").slick({
        
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          });
          $(".c-col__bottom").slideUp();
$(".c-col__button").click(function (e) {
    $(this).prev().slideToggle(); 
    $(this).children().toggleClass("is-active");
});
    }

})

$(".c-point__itembutton").click(function(){
  let itemLayer = $(this).closest(".c-point__item");
 itemLayer.find(".c-point__itemlayer").toggleClass("is-active");
})

$(".c-headersp__toggle").click(function() {
  $(".c-headersp__bg").toggleClass("is-active");
  $(".c-headersp__close").toggleClass("is-active");
  if ($(".c-headersp__bg").hasClass("is-active")) {
    $("body").addClass("overflow");
} else {
    $("body").removeClass("overflow");
}
})
//on scroll
$(window).scroll(function () {
  var docScroll = $(document).scrollTop();
  var sectionArray = [1, 2, 3, 4, 5, 6];

    $.each(sectionArray, function (index, value) {

        $(document).scroll(function () {
            var offsetSection = $('#' + 'section_' + value).offset().top;
            var offsetbottom = $('#section_6').offset().top + $('#section_6').outerHeight(true);
            var docbottom = window.scrollY + window.innerHeight;
            var docScroll1 = docScroll + 10;
            console.log(docScroll1,offsetSection);
            // 

            if (docScroll1 >= offsetSection) {
              $('.c-header__menuitem a').removeClass('is-active');
              $('.c-header__menuitem a').eq(index).addClass('is-active');
            }
            
            if (docbottom >= offsetbottom) {
              $('.c-header__menuitem a').removeClass('is-active');
              $('.c-header__menuitem a').eq("5").addClass('is-active');
            }
        });
    });

  //   if (docScroll > 10) {
  //     $('.p-leaf').chil
  // }

}).scroll();

