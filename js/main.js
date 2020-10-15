$(function() {
  /*            адаптив фона на JQuery
================================ */

  function ibg() {
    $.each($(".ibg"), function(index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' +
            $(this)
              .find("img")
              .attr("src") +
            '")'
        );
      }
    });
  }

  ibg();

  /*            адаптив фона чистый JS
   ====================================
   function ibg() {
      let ibg = document.querySelectorAll(".ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector("img")) {
            ibg[i].style.backgroundImage =
            "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
         }
      }
   }

   ibg();
   */

   /*      бургер      
   ====================== */
   $('.icon-menu').click(function(event) {
      $('.icon-menu,.menu__body').toggleClass('active');
      $("body").toggleClass("lock");
   });

   /*     slider      
   ===================== */
   $('.slider__body').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
	});

	// ================================================================================
	 
	$('a[href=""]').click (function(e) {
		return false;
	});
});
