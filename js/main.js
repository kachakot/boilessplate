$(function(){
    $('.carousel').slick({
      centerMode: true,
      slidesToShow: 13,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 9
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 6
          }
        }
      ]
    });
});
