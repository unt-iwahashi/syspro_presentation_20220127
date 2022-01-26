window.addEventListener('load', function () {
  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger);

  const sideTxt = document.querySelectorAll('.bl_side_heading');
  gsap.to(sideTxt, {
    x: 120,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.js-sideTxt-trigger',
      start: 'bottom top',
    },
  });
});

(function ($) {
  $.scrollify({ 
    section: '.bl_area',
    setHeights: false,
    interstitialSection: '#footer'
  });

  $('.slick').slick({
    infinite: false,
  });
})(jQuery);
