(function ($) {
  "use strict";
  function gsap_enable_bg_move() {
    const ht_elm = gsap.utils.toArray(".tm-enable-bg-move-effect");
    if (ht_elm.length == 0) return;
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {
        ht_elm.forEach((box, i) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: box,
              start: "top 80%",
              end: "+=700px",
              scrub: 1,
            },
            defaults: {
              ease: "none",
            },
          });
          tl.fromTo(
            box,
            {
              clipPath: "inset(0% 7%)",
            },
            {
              clipPath: "inset(0% 0%)",
              duration: 3,
            }
          );
        });
      },
    });
  }

  jQuery(window).on("load", function () {
    gsap_enable_bg_move();
  });
})(jQuery);
