jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, { passive: false });
  },
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, { passive: false });
  },
};
jQuery.event.special.wheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("wheel", handle, { passive: true });
  },
};
jQuery.event.special.mousewheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("mousewheel", handle, { passive: true });
  },
};

var THEMEMASCOT = {};
(function ($) {
  "use strict";

  /* ---------------------------------------------------------------------- */
  /* -------------------------- Declare Variables ------------------------- */
  /* ---------------------------------------------------------------------- */
  var $document = $(document);
  var $document_body = $(document.body);
  var $window = $(window);
  var $html = $("html");
  var $body = $("body");
  var $wrapper = $("#wrapper");
  var $header = $("#header");
  var $header_navbar_scrolltofixed = $("body.tm-header-sticky");
  var $sections = $(".elementor-element.e-parent");
  var windowHeight = $window.height();
  var windowWidth = $window.width();
  var $wpAdminBar = $("#wpadminbar");

  var $gallery_isotope = $(".isotope-layout");

  THEMEMASCOT.isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return THEMEMASCOT.isMobile.Android() || THEMEMASCOT.isMobile.BlackBerry() || THEMEMASCOT.isMobile.iOS() || THEMEMASCOT.isMobile.Opera() || THEMEMASCOT.isMobile.Windows();
    },
  };

  function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function admin_bar_height() {
    var admin_bar_height = 0;
    if ($body.hasClass("admin-bar")) {
      admin_bar_height = $("#wpadminbar").height();
    }
    return admin_bar_height;
  }

  function tmMasonryItemsHeightResizer(size, container) {
    if (container.hasClass("masonry-tiles")) {
      var padding = parseInt(container.find(".isotope-item:not(.isotope-item-sizer)").css("padding-left")),
        masonry_default = container.find(".tm-masonry-default"),
        masonry_large_height = container.find(".tm-masonry-large-height"),
        masonry_large_wide = container.find(".tm-masonry-large-wide"),
        masonry_large_width_height = container.find(".tm-masonry-large-width-height");
      if ($window.width() > 680) {
        masonry_default.css("height", size - 2 * padding);
        masonry_large_height.css("height", Math.round(2 * size) - 2 * padding);
        masonry_large_width_height.css("height", Math.round(2 * size) - 2 * padding);
        masonry_large_wide.css("height", size - 2 * padding);
      } else {
        masonry_default.css("height", size);
        masonry_large_height.css("height", size);
        masonry_large_width_height.css("height", size);
        masonry_large_wide.css("height", Math.round(size / 2));
      }
    }
  }

  THEMEMASCOT.isRTL = {
    check: function () {
      if ($("html").attr("dir") === "rtl") {
        return true;
      } else {
        return false;
      }
    },
  };

  THEMEMASCOT.isLTR = {
    check: function () {
      if ($("html").attr("dir") !== "rtl") {
        return true;
      } else {
        return false;
      }
    },
  };

  THEMEMASCOT.urlParameter = {
    get: function (sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    },
  };

  THEMEMASCOT.hot = {
    init: function () {
      THEMEMASCOT.hot.TM_Mouse_Follow_Show_Floating_Info();
    },

    /* ---------------------------------------------------------------------- */
    /* -------------------------- On Mouse Over Show Info ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_Mouse_Follow_Show_Floating_Info: function () {
      //from marceau
      var $has_mouse_follow_floating_info = $(".tm-has-mouse-follow-floating-info");

      if ($has_mouse_follow_floating_info.length > 0) {
        $document_body.append('<div class="tm-mouse-follow-floating-info-holder"><div class="mouse-follow-floating-info-inner"><div class="floating-subtitle"></div><div class="floating-title"></div></div></div>');

        var $floating_info_holder = $(".tm-mouse-follow-floating-info-holder"),
          $floating_subtitle = $floating_info_holder.find(".floating-subtitle"),
          $floating_title = $floating_info_holder.find(".floating-title");

        $has_mouse_follow_floating_info.each(function () {
          $has_mouse_follow_floating_info.find(".tm-floating-info-item").each(function () {
            var $thisItem = $(this);

            //info element position
            $thisItem.on("mousemove", function (e) {
              if (e.clientX + 20 + $floating_info_holder.width() > windowWidth) {
                $floating_info_holder.addClass("floating-info-right");
              } else {
                $floating_info_holder.removeClass("floating-info-right");
              }

              $floating_info_holder.css({
                top: e.clientY + 20,
                left: e.clientX + 20,
              });
            });

            //show/hide info element
            $thisItem
              .on("mouseenter", function () {
                var $this_item_subtitle = $(this).find(".floating-subtitle"),
                  $this_item_title = $(this).find(".floating-title");

                if ($this_item_title.length) {
                  $floating_title.html($this_item_title.text());
                }

                if ($this_item_subtitle.length) {
                  $floating_subtitle.html($this_item_subtitle.text());
                }

                if (!$floating_info_holder.hasClass("floating-info-active")) {
                  $floating_info_holder.addClass("floating-info-active");
                }
              })
              .on("mouseleave", function () {
                if ($floating_info_holder.hasClass("floating-info-active")) {
                  $floating_info_holder.removeClass("floating-info-active");
                }
              });
          });
        });
      }

      //data cursor image
      var $data_cursor_image = jQuery(".tm-floating-cursor-image-item");
      if ($data_cursor_image.length > 0) {
        $document_body.append('<div class="tm-mouse-follow-floating-image-holder"><div class="mouse-follow-floating-image-inner"></div></div>');

        var $floating_info_holder = $(".tm-mouse-follow-floating-image-holder"),
          $floating_inner = $floating_info_holder.find(".mouse-follow-floating-image-inner");

        $data_cursor_image.each(function () {
          var $thisItem = $(this);

          //info element position
          $thisItem.on("mousemove", function (e) {
            if (e.clientX + 20 + $floating_info_holder.width() > windowWidth) {
              $floating_info_holder.addClass("floating-info-right");
            } else {
              $floating_info_holder.removeClass("floating-info-right");
            }

            $floating_info_holder.css({
              top: e.clientY + 20,
              left: e.clientX + 20,
            });
          });

          //show/hide info element
          $thisItem
            .on("mouseenter", function () {
              var $this_item_image = $(this).data("cursor-image");

              if ($this_item_image.length) {
                $floating_inner.html($this_item_image);
              }

              if (!$floating_info_holder.hasClass("floating-info-active")) {
                $floating_info_holder.addClass("floating-info-active");
              }
            })
            .on("mouseleave", function () {
              if ($floating_info_holder.hasClass("floating-info-active")) {
                $floating_info_holder.removeClass("floating-info-active");
              }
            });
        });
      }
    },
  };

  THEMEMASCOT.initialize = {
    init: function () {
      THEMEMASCOT.initialize.TM_appearSlideAnimation();
      THEMEMASCOT.initialize.TM_stretchBG_move();
      THEMEMASCOT.initialize.TM_bg_four_vertical_lines();
      THEMEMASCOT.initialize.TM_niceSelect();
      THEMEMASCOT.initialize.TM_parallaxScrollInit();
      THEMEMASCOT.initialize.TM_bootstrapNavTab();
      THEMEMASCOT.initialize.TM_tiltParallaxAnimation();
      THEMEMASCOT.initialize.TM_appearVariousItems();
      THEMEMASCOT.initialize.TM_paroller();
      THEMEMASCOT.initialize.TM_textillate();

      THEMEMASCOT.initialize.TM_toggleNavSearchIcon();
      THEMEMASCOT.initialize.TM_sliderRange();
      THEMEMASCOT.initialize.TM_platformDetect();
      THEMEMASCOT.initialize.TM_magnificPopup_lightbox();
      THEMEMASCOT.initialize.TM_LearnPress_Accordion();
      THEMEMASCOT.initialize.TM_equalHeightDivs();
      THEMEMASCOT.initialize.TM_wow();
      THEMEMASCOT.initialize.TM_MobileNavToggle();
      THEMEMASCOT.initialize.TM_SwiperSlider();
      THEMEMASCOT.initialize.TM_ParticleJS();
      THEMEMASCOT.initialize.BgImgAdd();
    },

    BgImgAdd: function () {
      $("[data-bg-image]").each(function () {
        let img = $(this).data("bg-image");
        $(this).css({
          backgroundImage: "url(" + img + ")",
        });
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- TM_ParticleJS  ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_ParticleJS: function () {
      if ($(".particle-js-animation").length) {
        const colors = ["#f1c40f", "#74b9ff", "#9b59b6", "#2ecc71", "#6c5ce7"];

        const numBalls = 30;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
          let ball = document.createElement("div");
          ball.classList.add("ball");
          ball.style.background = colors[Math.floor(Math.random() * colors.length)];
          ball.style.left = `${Math.floor(Math.random() * 100)}%`;
          ball.style.top = `${Math.floor(Math.random() * 100)}%`;
          ball.style.transform = `scale(${Math.random()})`;
          ball.style.width = `${Math.random() * 10}px`;
          ball.style.height = ball.style.width;
          balls.push(ball);

          $(".particle-js-animation").append(ball);
        }

        balls.forEach((el, i, ra) => {
          let to = {
            x: Math.random() * (i % 2 === 0 ? -10 : 11),
            y: Math.random() * 12,
          };

          let anim = el.animate([{ transform: "translate(0, 0)" }, { transform: `translate(${to.x}rem, ${to.y}rem)` }], {
            duration: (Math.random() + 1) * 2000,
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
          });
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- Swiper Slider  ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_SwiperSlider: function () {
      setTimeout(function () {
        $document_body.on("click", ".tm-swiper-carousel-arrow-wrap .tm-swiper-arrow-prev", function (e) {
          $(this).parents(".e-parent").find(".tm-swiper-button-wrap .tm-swiper-button-prev").trigger("click");
        }),
          $document_body.on("click", ".tm-swiper-carousel-arrow-wrap .tm-swiper-arrow-next", function (e) {
            $(this).parents(".e-parent").find(".tm-swiper-button-wrap .tm-swiper-button-next").trigger("click");
          });
      }, 300);

      var $swiper_container = $(".tm-swiper-container");
      if ($swiper_container.length > 0) {
        $swiper_container.each(function () {
          var this_item = $(this);
          var slides_per_group = this_item.attr("data-slides-per-group") ? this_item.attr("data-slides-per-group") : 1;
          var coverfloweffectData = this_item.attr("data-coverfloweffect") ? this_item.data("coverfloweffect") : "50,0,100,1,1,true";
          coverfloweffectData = coverfloweffectData.split(",");

          var autoplay_var = this_item.attr("data-autoplay") ? this_item.data("autoplay") : true;
          if (autoplay_var === true) {
            autoplay_var = {
              delay: this_item.attr("data-delay") ? this_item.data("delay") : 3000,
              reverseDirection: this_item.attr("data-reversedir") ? this_item.data("reversedir") : false,
              disableOnInteraction: this_item.attr("data-disableoninteraction") ? this_item.data("disableoninteraction") : false,
              pauseOnMouseEnter: this_item.attr("data-pauseonmouseenter") ? this_item.data("pauseonmouseenter") : true,

              stopOnLastSlide: false, // Stop autoplay at last slide (only if loop: false)
              waitForTransition: true, // Wait for transition to finish before next autoplay
            };
          }

          var swiper = new Swiper(this_item.find(".swiper-container-inner")[0], {
            effect: this_item.attr("data-effect") ? this_item.attr("data-effect") : "slide",
            allowTouchMove: this_item.attr("data-allowtouchmove") ? this_item.data("allowtouchmove") : true,
            slidesPerView: this_item.attr("data-items") ? this_item.attr("data-items") : 4,
            spaceBetween: this_item.attr("data-space") ? this_item.data("space") : 15,
            loop: this_item.attr("data-loop") ? this_item.data("loop") : false,
            centeredSlides: this_item.attr("data-centered") ? this_item.data("centered") : false,

            speed: this_item.attr("data-speed") ? this_item.data("speed") : 300,
            freeMode: this_item.attr("data-freemod") ? this_item.data("freemod") : false,
            autoplay: autoplay_var,
            coverflowEffect: {
              rotate: coverfloweffectData[0] ? coverfloweffectData[0] : 50,
              stretch: coverfloweffectData[1] ? coverfloweffectData[1] : 0,
              depth: coverfloweffectData[2] ? coverfloweffectData[2] : 100,
              modifier: coverfloweffectData[3] ? coverfloweffectData[3] : 1,
              scale: coverfloweffectData[4] ? coverfloweffectData[4] : 1,
              slideShadows: coverfloweffectData[5] ? coverfloweffectData[5] : true,
            },
            navigation: {
              nextEl: this_item.find(".tm-swiper-button-next")[0],
              prevEl: this_item.find(".tm-swiper-button-prev")[0],
            },
            pagination: {
              el: this_item.find(".swiper-pagination")[0],
              type: this_item.attr("data-pagination-type") ? this_item.attr("data-pagination-type") : "progressbar",
              clickable: true,
              renderCustom: function (swiper, current, total) {
                return current + " of " + total;
              },
            },
            breakpoints: {
              0: {
                slidesPerView: this_item.attr("data-xs-items") ? this_item.attr("data-xs-items") : 1,
              },
              576: {
                slidesPerView: this_item.attr("data-sm-items") ? this_item.attr("data-sm-items") : 1,
              },
              768: {
                slidesPerView: this_item.attr("data-md-items") ? this_item.attr("data-md-items") : 2,
              },
              992: {
                slidesPerView: this_item.attr("data-lg-items") ? this_item.attr("data-lg-items") : 3,
              },
              1200: {
                slidesPerView: this_item.attr("data-items") ? this_item.attr("data-items") : 4,
              },
              1400: {
                slidesPerView: this_item.attr("data-xxl-items") ? this_item.attr("data-xxl-items") : 4,
              },
            },
          });
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- Mobile Nav Toggle  ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_MobileNavToggle: function () {
      $("#tm-nav-mobile").on("click", function () {
        $(this).toggleClass("active");
        $(this).children(".tm-nav-mobile-button").toggleClass("active");
        $("body").toggleClass("body-overflow");
        $(".tm-header-menu").toggleClass("active");
      });

      $document_body.on("click", ".onepage-nav a", function (e) {
        if (typeof Lenis !== "undefined") {
          $html.addClass("tm-html-enable-localscroll");
        }
        $(".tm-header-menu").toggleClass("active");
        if (typeof Lenis !== "undefined") {
          $html.removeClass("tm-html-enable-localscroll");
        }
      });

      $(".tm-menu-close, .tm-header-menu-backdrop, #tm-header-mobile .tm-menu-primary a.is-one-page").on("click", function () {
        $(this).parents(".tm-header-main").find(".tm-header-menu").removeClass("active");
        $("#tm-nav-mobile").removeClass("active");
        $("#tm-nav-mobile").children(".tm-nav-mobile-button").toggleClass("active");
        $("body").toggleClass("body-overflow");
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- Wow initialize  ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_wow: function () {
      var wow = new WOW({
        mobile: false, // trigger animations on mobile devices (default is true)
      });
      wow.init();
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------ appear.js various items --------------------- */
    /* ---------------------------------------------------------------------- */
    //already used in section title
    TM_appearSlideAnimation: function () {
      var itemHolder = ".tm-onappear-slide-animation";
      var $itemHolder = $(itemHolder);
      if ($itemHolder.length > 0) {
        $itemHolder.appear();
        $document_body.on("appear", itemHolder, function () {
          var current_item = $(this);
          current_item.addClass("tm-item-appeared");
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* -------------------------- stretched bg ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_stretchBG_move: function () {
      var $tm_stretched_bg = $(".tm-stretched-bg");
      if ($tm_stretched_bg.length > 0) {
        $tm_stretched_bg.each(function () {
          var this_item = $(this);
          var target_id = "." + this_item.data("col-id");
          $(this_item).prependTo(target_id);
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- niceSelect  ---------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_bg_four_vertical_lines: function () {
      var $elementor_section = $(".elementor-element.tm-enable-four-vertical-line");
      if ($elementor_section.length > 0) {
        $elementor_section.children().append('<div class="tm-four-vertical-line"><div class="line line-1"></div><div class="line line-2"></div><div class="line line-3"></div><div class="line line-4"></div></div>');
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- niceSelect  ---------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_niceSelect: function () {
      if (!$body.hasClass("woocommerce-account")) {
        var $select = $("select");
        if ($select.length > 0) {
          $select.niceSelect();
        }
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- parallax  ----------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_parallaxScrollInit: function () {
      var $parallaxHolder = $(".tm-smooth-parallax-scroll");
      if ($parallaxHolder.length > 0) {
        ParallaxScroll.init();
      }
    },

    /* ---------------------------------------------------------------------- */
    /* -------------------------- TbootstrapNavTab  ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_bootstrapNavTab: function () {
      var $nav_tabs = $("ul.nav-tabs");
      $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
        e.target; // newly activated tab
        e.relatedTarget; // previous active tab
        var $new = $(e.target);
        var $pre = $(e.relatedTarget);
        $new.parent().addClass("active");
        $pre.parent().removeClass("active");
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- tilt  ----------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_tiltParallaxAnimation: function () {
      var $tilt_hover_effect = $(".tilt-hover-effect");
      if ($tilt_hover_effect.length > 0) {
        $tilt_hover_effect.tilt({});
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------ appear.js various items --------------------- */
    /* ---------------------------------------------------------------------- */
    TM_appearVariousItems: function () {
      var itemHolder = ".tm-item-appear-box, .tm-item-appear-clip-path, .tm-item-appear-clip-path-right, .tm-appear-block-holder";
      var $itemHolder = $(itemHolder);
      if ($itemHolder.length > 0) {
        $itemHolder.appear();
        var randomNum = getRandomValue(10, 400);
        $document_body.on("appear", itemHolder, function (e, $affected) {
          setTimeout(function () {
            $affected.addClass("tm-item-appeared");
          }, randomNum);
        });
      }

      //animate items on appear
      if (!$body.hasClass("tm-enable-element-animation-effect")) {
        return;
      }
      var animate_items = ".tm-animation";
      var $animate_items = $(animate_items);
      if ($animate_items.length > 0) {
        $animate_items.appear();
        $document_body.on("appear", animate_items, function () {
          var current_item = $(this);
          current_item.addClass("animate");
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* -------------------------- paroller.js Parallax ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_paroller: function () {
      var $tm_paroller_object = $(".tm-paroller-object");
      //initialize paroller.js and set options for elements with .paroller class
      if ($tm_paroller_object.length > 0) {
        $tm_paroller_object.each(function () {
          var this_item = $(this);
          this_item.paroller();
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------- textillate.js CSS3 text animations --------------- */
    /* ---------------------------------------------------------------------- */
    TM_textillate: function () {
      var $tm_textillate_animation = $(".tm-textillate-animation");
      if ($tm_textillate_animation.length > 0) {
        $tm_textillate_animation.appear();
        var randomNum = getRandomValue(10, 400);
        $document_body.on("appear", ".tm-textillate-animation", function () {
          var current_item = $(this);
          setTimeout(function () {
            if (!current_item.hasClass("appeared")) {
              current_item.textillate();
              current_item.addClass("appeared");
            }
          }, randomNum);
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- Lazy Load  ----------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_lazyImageLoad: function () {
      var $lazy_load_image = $(".lazy-load-image");

      if ($lazy_load_image.length > 0) {
        $lazy_load_image.Lazy({
          scrollDirection: "vertical",
          effect: "fadeIn",
          visibleOnly: true,
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------ portfolio-sticky-sidebar  ------------------- */
    /* ---------------------------------------------------------------------- */
    TM_stickySidebar: function () {
      var $portfolio_sticky_side_text = $(".portfolio-sticky-side-text");
      if ($portfolio_sticky_side_text.length > 0) {
        var width = $window.width();
        var stickySidebar = new StickySidebar(".portfolio-details-parent", {
          containerSelector: ".portfolio-sticky-side-text ",
          innerWrapperSelector: ".portfolio-details-inner",
          topSpacing: 150,
          bottomSpacing: 20,
          minWidth: 767,
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- stick_in_parent  ------------------------ */
    /* ---------------------------------------------------------------------- */
    TM_stickInParent: function () {
      var widget_sticky_sidebar = $(".tm-widget-sticky-sidebar-in-parent");
      if (widget_sticky_sidebar.length && windowWidth > 768) {
        widget_sticky_sidebar.each(function () {
          var widget = $(this),
            sidebar = widget.closest(".tm-sidebar-area"),
            parents = $(".tm-blog-sidebar-row");
          sidebar.stick_in_parent({
            parent: parents,
            sticky_class: "tm-sticky-sidebar",
            offset_top: 50,
            bottoming: true,
            inner_scrolling: true,
          });
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- stick_in_parent  ------------------------ */
    /* ---------------------------------------------------------------------- */
    TM_stickInParentShop: function () {
      var widget_sticky_sidebar = $(".tm-shop-single-text-sticky-in-parent");
      if (widget_sticky_sidebar.length && windowWidth > 768) {
        widget_sticky_sidebar.each(function () {
          var widget = $(this),
            sidebar = widget.closest(".tm-shop-single-sidebar-area"),
            parents = $(".product-details");
          sidebar.stick_in_parent({
            parent: parents,
            sticky_class: "tm-sticky-sidebar",
            offset_top: 50,
            bottoming: true,
            inner_scrolling: true,
          });
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------ Toggle Nav Search Icon  --------------------- */
    /* ---------------------------------------------------------------------- */
    TM_toggleNavSearchIcon: function () {
      $document_body.on("click", ".top-nav-search-btn", function (e) {
        e.preventDefault();
        $html.addClass("html-search-block-active");
        var target_id = $(this).data("target");
        $("#" + target_id)
          .addClass("active")
          .stop(true, true)
          .fadeIn(100)
          .find("input[type=text]")
          .focus();
        return false;
      });
      $document_body.on("click", ".close-search-btn", function (e) {
        e.preventDefault();
        $html.removeClass("html-search-block-active");
        var target_id = $(this).data("target");
        $("#" + target_id)
          .removeClass("active")
          .stop(true, true)
          .fadeOut(100);
        return false;
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- slider range  -------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_sliderRange: function () {
      var $slider_range = $(".slider-range");
      if ($slider_range.length > 0) {
        $slider_range.each(function () {
          var id = $(this).attr("id");
          var target_id = $(this).data("target");
          $("#" + target_id).slider({
            range: "max",
            min: 2001,
            max: 2016,
            value: 2010,
            slide: function (event, ui) {
              $("#" + id).val(ui.value);
            },
          });
          $("#" + id).val($("#" + target_id).slider("value"));
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------ Preloader  ---------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_preLoaderClickDisable: function () {
      var $preloader = $("#preloader");
      $preloader.children("#disable-preloader").on("click", function (e) {
        $preloader.fadeOut();
        return false;
      });
    },

    TM_preLoaderOnLoad: function () {
      var $preloader = $("#preloader");
      $preloader.find("#spinner").fadeOut("slow");
      if ($preloader.length > 0) {
        $("#preloader").fadeOut("slow");
        $("#preloader .layer .overlay2").animate(
          {
            left: "100%",
          },
          {
            step: function (now, fx) {
              $(this).css({ transform: "translate3d(0px, 0px, 0px)" });
            },
            duration: 800,
            easing: "linear",
            queue: false,
            complete: function () {
              $preloader.fadeOut("slow");
            },
          },
          "linear"
        );
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------- Platform detect  --------------------- */
    /* ---------------------------------------------------------------------- */
    TM_platformDetect: function () {
      if (THEMEMASCOT.isMobile.any()) {
        $html.addClass("mobile");
      } else {
        $html.addClass("no-mobile");
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- Magnific Popup ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_magnificPopup_lightbox: function () {
      //lightbox iframe
      var $mfpLightboxIframe = $('[data-lightbox="iframe"]');
      if ($mfpLightboxIframe.length > 0) {
        $mfpLightboxIframe.magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: true,
          fixedContentPos: false,
          callbacks: {
            open: function () {
              // Will fire when this exact popup is opened
              $html.addClass("html-magnific-popup-active");
            },
            close: function () {
              // Will fire when popup is closed
              $html.removeClass("html-magnific-popup-active");
            },
          },
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- Fit Vids ------------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_fitVids: function () {
      $body.fitVids();
    },

    TM_LearnPress_Accordion: function () {
      try {
        $(".js-call-accordion").each(function () {
          var wraper = $(this);

          if ($(wraper).hasClass("active-accordion")) {
            $(wraper).find(".section-content").show();
          } else {
            $(wraper).find(".section-content").hide();
          }

          $(wraper)
            .find(".js-toggle-accordion")
            .on("click", function () {
              $(wraper).toggleClass("active-accordion");
              $(wraper).find(".section-content").slideToggle();
            });
        });
      } catch (er) {}
    },

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- equalHeights ---------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_equalHeightDivs: function () {
      var $equal_height = $("[data-tm-equal-height-col]");
      if ($equal_height.length > 0) {
        $equal_height.each(function () {
          var $this = $(this);
          var target_div = $this.data("tm-equal-height-col") === undefined ? ".elementor-element .e-con-inner" : $this.data("tm-equal-height-col");
          var responsive = $this.data("tm-equal-height-responsive");
          if ($window.width() >= 1025) {
            $this.find(target_div).matchHeight();
          } else if ($window.width() >= 768 && $window.width() <= 1024) {
            if ($this.hasClass("tm-eqh-disable-on-tablet")) {
              $this.children(target_div).css("height", "auto");
              $this.find(target_div).matchHeight({ remove: true });
            } else {
              $this.find(target_div).matchHeight();
            }
          } else if ($window.width() < 768) {
            if ($this.hasClass("tm-eqh-disable-on-mobile")) {
              $this.children(target_div).css("height", "auto");
              $this.find(target_div).matchHeight({ remove: true });
            } else {
              $this.find(target_div).matchHeight();
            }
          }
        });
      }
    },
  };

  THEMEMASCOT.header = {
    init: function () {
      var t = setTimeout(function () {
        THEMEMASCOT.header.TM_wpadminbarInMobile();
        THEMEMASCOT.header.TM_verticalNavHeaderPadding();
        THEMEMASCOT.header.TM_Memuzord_Megamenu();
        //THEMEMASCOT.header.TM_TopNav_Dropdown_Position();
        THEMEMASCOT.header.TM_sidePanelReveal();
        THEMEMASCOT.header.TM_scroolToTopOnClick();
        THEMEMASCOT.header.TM_navbar_scrolltofixed_hide();
        THEMEMASCOT.header.TM_scrollToFixed();
        THEMEMASCOT.header.TM_HeaderTopElementorSticky();
        THEMEMASCOT.header.TM_topnavAnimate();
        THEMEMASCOT.header.TM_scrolltoTarget();
        THEMEMASCOT.header.TM_navLocalScorll();
        THEMEMASCOT.header.TM_menuCollapseOnClick();
        THEMEMASCOT.header.TM_topsearch_toggle();
      }, 0);
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------- HTML Margin Top ---------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_wpadminbarInMobile: function () {
      if ($window.width() < 600) {
        $("#wpadminbar").attr("style", "position: fixed");
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------- Side Push Panel ---------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_sidePanelReveal: function () {
      if ($(".side-panel-trigger").length > 0) {
        $body.addClass("has-side-panel side-panel-right");
      }
      $(".side-panel-trigger").on("click", function (e) {
        $body.toggleClass("side-panel-open");
        if (THEMEMASCOT.isMobile.any()) {
          $body.toggleClass("overflow-hidden");
        }
        return false;
      });

      $(".has-side-panel .side-panel-body-overlay").on("click", function (e) {
        $body.toggleClass("side-panel-open");
        return false;
      });

      if ($wpAdminBar.length > 0) {
        var wpAdminBar_height = $wpAdminBar.height();
        $(".side-panel-container").css("top", wpAdminBar_height);
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------- scroll-to-top  ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_scroolToTop: function () {
      if ($window.scrollTop() > 600) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    },

    TM_scroolToTopOnClick: function () {
      $document_body.on("click", ".scroll-to-top", function (e) {
        if (typeof Lenis !== "undefined") {
          $html.addClass("tm-html-enable-localscroll");
        }
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          0
        );
        if (typeof Lenis !== "undefined") {
          $html.removeClass("tm-html-enable-localscroll");
        }
        return false;
      });
    },

    /* ---------------------------------------------------------------------------- */
    /* --------------------------- One Page Nav close on click -------------------- */
    /* ---------------------------------------------------------------------------- */
    TM_menuCollapseOnClick: function () {
      $document.on("click", ".onepage-nav a", function (e) {
        if (/#/.test(this.href)) {
          if ($(this).find(".indicator").length == 0) {
            $(".showhide").trigger("click");
          }
        }
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ----------- Active Menu Item on Reaching Different Sections ---------- */
    /* ---------------------------------------------------------------------- */
    TM_activateMenuItemOnReach: function () {
      var $onepage_nav = $(".onepage-nav");
      if ($onepage_nav.length > 0) {
        var cur_pos = $window.scrollTop() + 2;
        var nav_height = $onepage_nav.outerHeight();
        $sections.each(function () {
          var top = $(this).offset().top - nav_height - 80,
            bottom = top + $(this).outerHeight();

          if (cur_pos >= top && cur_pos <= bottom) {
            $onepage_nav.find("a").parent().removeClass("current").removeClass("active");
            $sections.removeClass("current").removeClass("active");

            $onepage_nav
              .find('a[href="#' + $(this).attr("id") + '"]')
              .parent()
              .addClass("current")
              .addClass("active");
          }

          if (cur_pos <= nav_height && cur_pos >= 0) {
            $onepage_nav.find("a").parent().removeClass("current").removeClass("active");
            $onepage_nav.find('a[href="#header"]').parent().addClass("current").addClass("active");
          }
        });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------- on click scrool to target with smoothness -------- */
    /* ---------------------------------------------------------------------- */
    TM_scrolltoTarget: function () {
      //jQuery for page scrolling feature - requires jQuery Easing plugin
      $(".smooth-scroll-to-target, .fullscreen-onepage-nav a").on("click", function (e) {
        e.preventDefault();

        var $anchor = $(this);

        var $hearder_top = $(".header .header-nav");
        var hearder_top_offset = 0;
        if ($hearder_top[0]) {
          hearder_top_offset = $hearder_top.outerHeight(true);
        } else {
          hearder_top_offset = 0;
        }

        // if adminbar exist
        var wpAdminBar_height = 0;
        if ($wpAdminBar.length) {
          wpAdminBar_height = $wpAdminBar.height();
        }

        //for vertical nav, offset 0
        if ($body.hasClass("tm-vertical-nav")) {
          hearder_top_offset = 0;
        }

        var top = $($anchor.attr("href")).offset().top - hearder_top_offset - wpAdminBar_height;
        $("html, body").stop().animate(
          {
            scrollTop: top,
          },
          0,
          "easeInSine"
        );
      });
    },

    /* ---------------------------------------------------------------------- */
    /* -------------------------- Scroll navigation ------------------------- */
    /* ---------------------------------------------------------------------- */
    TM_navLocalScorll: function () {
      if (typeof Lenis !== "undefined") {
        //Lenis scroll
        let lenis;
        lenis = new Lenis({
          duration: 1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          smooth: true,
          smoothTouch: false,
        });
        const scrollFn = (time) => {
          lenis.raf(time);
          requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
        $document_body.on("click", 'a[href^="#"]', function (e) {
          const target = $(this.getAttribute("href"));
          if (target.length) {
            lenis.scrollTo(target[0], {
              duration: 1.2,
            });
          }
        });
      } else if ($body.hasClass("tm-enable-localscroll")) {
        //if lenis not inclued then localScroll will work
        $html.addClass("tm-html-enable-localscroll");
      }
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------- Hide Navbar on Scroll Down  ------------------ */
    /* ---------------------------------------------------------------------- */
    TM_navbar_scrolltofixed_hide: function () {
      if ($header_navbar_scrolltofixed.hasClass("tm-header-sticky-always")) {
        //always visible on scroll
        var $header_height = $header.height();
        var currentScrollPos = $window.scrollTop();
        if ($header_height + 100 > currentScrollPos) {
          $(".header-nav-sticky.tm-sticky-menu").css("top", "-100%");
        } else {
          $(".header-nav-sticky.tm-sticky-menu").css("top", admin_bar_height());
        }
      } else {
        //hide on scrool
        var $navbar_scrolltofixed = $header_navbar_scrolltofixed.find(".header-nav-sticky");
        if ($navbar_scrolltofixed.length > 0) {
          var prevScrollpos = $window.scrollTop();
          var $header_height = $header.height();
          var $navbar_height = $navbar_scrolltofixed.height();
          $window.on("scroll", function () {
            var currentScrollPos = $window.scrollTop();
            if ($header_height + 100 > currentScrollPos) {
              $navbar_scrolltofixed.css("top", "-100%");
            } else if (prevScrollpos > currentScrollPos) {
              $navbar_scrolltofixed.css("top", admin_bar_height());
            } else {
              if ($document.scrollTop() > $header_height) {
                $navbar_scrolltofixed.css("top", "-" + ($navbar_height + admin_bar_height()) + "px");
              } else {
              }
            }
            prevScrollpos = currentScrollPos;
          });
        }
      }
    },

    /* ---------------------------------------------------------------------------- */
    /* ------------------------------- scroll to fixed ---------------------------- */
    /* ---------------------------------------------------------------------------- */
    TM_scrollToFixed: function () {
      if (!$body.hasClass("elementor-editor-active")) {
        $(window).on("scroll", function () {
          if ($(".header-nav").length > 0) {
            var $scrolltofixed = $(".header-nav-sticky"),
              container_width = $header.width();
            if ($(window).scrollTop() > $header.find(".header-nav").offset().top + $header.find(".header-nav").outerHeight() + 20) {
              $scrolltofixed.addClass("tm-sticky-menu");

              //for box layout header sticky fixing
              if ($body.hasClass("tm-boxed-layout")) {
                $scrolltofixed.css("min-width", container_width);
              }
              THEMEMASCOT.header.TM_navbar_scrolltofixed_hide();
            } else {
              $scrolltofixed.removeClass("tm-sticky-menu");
            }
          }
        });
      }
      $(".scrolltofixed").scrollToFixed({
        marginTop: $header.find(".header-nav").outerHeight(true) + 10,
        limit: function () {
          var limit = $("#footer").offset().top - $(this).outerHeight(true);
          return limit;
        },
      });
      $(".sidebar-scrolltofixed").scrollToFixed({
        marginTop: $header.find(".header-nav").outerHeight() + 20,
        limit: function () {
          var limit = $("#footer").offset().top - $("#sidebar").outerHeight() - 20;
          return limit;
        },
      });
    },

    /* ---------------------------------------------------------------------------- */
    /* ------------------------------- Header Elementor Sticky ---------------------------- */
    /* ---------------------------------------------------------------------------- */
    TM_HeaderTopElementorSticky: function () {
      if (!$body.hasClass("elementor-editor-active")) {
        var $header_top_default = $("#elementor-header-top");
        var $header_top_sticky = $("#elementor-header-top-sticky");
        var $header_top_mobile_sticky = $("#elementor-header-top-mobile");
        var $header_top_mobile_sticky_height = $header_top_mobile_sticky.height();
        var $header_height = $header.height();

        if ($window.width() < 1024) {
          $header.css("height", $header_top_mobile_sticky_height);
          if ($body.hasClass("tm-header-sticky-mobile")) {
            //$header_top_mobile_sticky.css('top', admin_bar_height() + 'px');
          }
        } else {
          $header.css("height", "auto");
        }

        $window.on("scroll", function () {
          if ($header_top_sticky.length > 0) {
            if ($body.hasClass("tm-header-sticky-always")) {
              if ($(window).scrollTop() > $header_top_default.offset().top + $header_top_default.outerHeight() + 20) {
                $header_top_default.removeClass("visible");
                $header_top_sticky.addClass("visible");
                //admin bar top:
                if ($body.hasClass("admin-bar")) {
                  $header_top_sticky.css("padding-top", admin_bar_height() + "px");
                }
              } else {
                $header_top_default.addClass("visible");
                $header_top_sticky.removeClass("visible");
                $header_top_sticky.css("padding-top", "0");
              }
            } else if ($body.hasClass("tm-header-sticky")) {
              var prevScrollpos = $window.scrollTop();
              $window.on("scroll", function () {
                var currentScrollPos = $window.scrollTop();
                if ($header_height + 100 > currentScrollPos) {
                  $header_top_default.addClass("visible");
                  $header_top_sticky.removeClass("visible");
                  $header_top_sticky.css("padding-top", admin_bar_height() + "px");
                } else if (prevScrollpos > currentScrollPos) {
                  $header_top_default.removeClass("visible");
                  $header_top_sticky.addClass("visible");
                  $header_top_sticky.css("padding-top", admin_bar_height() + "px");
                } else {
                  if ($document.scrollTop() > $header_height) {
                    $header_top_default.addClass("visible");
                    $header_top_sticky.removeClass("visible");
                  } else {
                  }
                }
                prevScrollpos = currentScrollPos;
              });
            }
          }

          //for header mobile sticky
          if ($window.width() < 1024 && $header_top_mobile_sticky.length > 0) {
            if ($body.hasClass("tm-header-sticky-mobile-always")) {
              if ($(window).scrollTop() > $header_top_default.offset().top + $header_top_default.outerHeight()) {
                $header_top_mobile_sticky.addClass("visible");
                if ($body.hasClass("admin-bar")) {
                  $header_top_mobile_sticky.css("transform", "translateY(" + admin_bar_height() + "px)");
                  $header_top_mobile_sticky.find(".tm-header-menu").css("top", "0");
                } else {
                  $header_top_mobile_sticky.css("transform", "translateY(0)");
                }
              } else {
                $body.find("#wrapper").css("padding-top", 0);
                $header_top_mobile_sticky.removeClass("visible");
                if ($body.hasClass("admin-bar")) {
                  $header_top_mobile_sticky.css("transform", "translateY(" + admin_bar_height() + "px)");
                } else {
                  $header_top_mobile_sticky.css("transform", "translateY(0)");
                }
              }
            } else if ($body.hasClass("tm-header-sticky-mobile")) {
              var prevScrollposMobile = $window.scrollTop();
              if ($body.hasClass("admin-bar")) {
                $header_top_mobile_sticky.css("transform", "translateY(" + admin_bar_height() + "px)");
                $header_top_mobile_sticky.find(".tm-header-menu").css("top", "0");
              }
              $window.on("scroll", function () {
                var currentScrollPosMobile = $window.scrollTop();
                if ($header_height >= currentScrollPosMobile) {
                  if ($body.hasClass("admin-bar")) {
                    $header_top_mobile_sticky.css("transform", "translateY(" + admin_bar_height() + "px)");
                  } else {
                    $header_top_mobile_sticky.css("transform", "translateY(0)");
                  }
                  $header_top_mobile_sticky.removeClass("visible");
                } else if (prevScrollposMobile > currentScrollPosMobile) {
                  $header_top_mobile_sticky.addClass("visible");
                  $header_top_mobile_sticky.removeClass("scrolling-down");
                  //admin bar top:
                  if ($body.hasClass("admin-bar")) {
                    $header_top_mobile_sticky.css("transform", "translateY(" + admin_bar_height() + "px)");
                  } else {
                    $header_top_mobile_sticky.css("transform", "translateY(0)");
                  }
                } else {
                  if ($document.scrollTop() > $header_height) {
                    $header_top_mobile_sticky.removeClass("visible");
                    $header_top_mobile_sticky.addClass("scrolling-down");
                    $header_top_mobile_sticky.css("transform", "translateY(-100%)");
                  } else {
                  }
                }
                prevScrollposMobile = currentScrollPosMobile;
              });
            }
          }
        });
      }
    },

    /* ---------------------------------------------------------------------------- */
    /* ------------------------------- Vertical Nav ------------------------------- */
    /* ---------------------------------------------------------------------------- */
    TM_verticalNavHeaderPadding: function () {
      if ($body.hasClass("tm-vertical-nav")) {
        var $header_nav_wrapper = $("#header .header-nav-wrapper");
        var $header_nav_wrapper_menuzordmenu = $("#header .header-nav-wrapper .menuzord-menu");
        if ($header_nav_wrapper.css("position") === "fixed" && $window.width() <= 1024) {
          var header_nav_wrapper_menuzordmenu_height = 0;
          if ($($header_nav_wrapper_menuzordmenu).is(":visible")) {
            header_nav_wrapper_menuzordmenu_height = $header_nav_wrapper_menuzordmenu.height();
          }

          $body.css("padding-top", $header_nav_wrapper.height() - header_nav_wrapper_menuzordmenu_height - admin_bar_height());
        } else {
          $body.css("padding-top", 0);
        }
      }
    },

    /* ----------------------------------------------------------------------------- */
    /* --------------------------- Menuzord - Responsive Megamenu ------------------ */
    /* ----------------------------------------------------------------------------- */
    TM_menuzord: function () {
      var $menuzord_side_panel = $("#menuzord-side-panel");
      if ($menuzord_side_panel.length > 0) {
        $menuzord_side_panel.menuzord({
          align: "right",
          effect: "slide",
          animation: "none",
          indicatorFirstLevel: "",
          indicatorSecondLevel: "<i class='lnr-icon-chevron-right'></i>",
        });
      }

      var $menuzord_vertical_nav = $("#menuzord-verticalnav");
      if ($menuzord_vertical_nav.length > 0) {
        $menuzord_vertical_nav.menuzord({
          align: "right",
          effect: "slide",
          animation: "none",
          indicatorFirstLevel: "<i class='lnr-icon-dropdown'></i>",
          indicatorSecondLevel: "<i class='lnr-icon-chevron-right'></i>",
        });
      }

      //Main Top Primary Nav
      var $menuzord_top_main_nav = $(".menuzord-primary-nav");
      $menuzord_top_main_nav.each(function (i) {
        var $this = $(this);
        var $menuzord_top_main_nav_menuzord_menu = $this.find(".menuzord-menu");
        if ($this.length > 0 && $menuzord_top_main_nav_menuzord_menu.length) {
          var effect = $this.data("effect") === undefined ? "slide" : $this.data("effect");
          var animation = $this.data("animation") === undefined ? "none" : $this.data("animation");
          $this.menuzord({
            effect: effect,
            animation: animation,
            indicatorFirstLevel: "<i class='lnr-icon-dropdown'></i>",
            indicatorSecondLevel: "<i class='lnr-icon-chevron-right'></i>",
          });
        }
      });

      //Main Top Primary Nav
      var $menuzord_top_main_nav = $("#top-primary-nav");
      var $menuzord_top_main_nav_menuzord_menu = $menuzord_top_main_nav.find(".menuzord-menu");

      //Clone Top Primary Nav
      var $menuzord_top_main_nav_clone = $("#responsive-showhide-trigger");

      //If click on Top Primary Nav Show Hide => it will show clone mobile nav
      $menuzord_top_main_nav_clone.on("click", ".showhide", function (e) {
        $body.toggleClass("menuzord-menu-open");
        $(this).toggleClass("active");
        $menuzord_top_main_nav.find(".showhide").trigger("click");
      });

      //Main Top Primary Nav
      var $menuzord_top_main_nav_sticky = $("#top-primary-nav-sticky");
      var $menuzord_top_main_nav_sticky_menuzord_menu = $menuzord_top_main_nav_sticky.find(".menuzord-menu");

      //Clone Top Primary Nav
      var $menuzord_top_main_nav_sticky_clone = $("#top-primary-nav-sticky-clone");
      var $menuzord_top_main_nav_sticky_clone_menuzord_menu = $menuzord_top_main_nav_sticky_clone.find(".menuzord-menu");

      //If click on Top Primary Nav Show Hide => it will show clone mobile nav
      $menuzord_top_main_nav_sticky.on("click", ".showhide", function (e) {
        $body.toggleClass("menuzord-menu-open");
        $menuzord_top_main_nav_sticky_clone.find(".showhide").trigger("click");
      });
    },

    /* ----------------------------------------------------------------------------- */
    /* ------------------------- Menuzord -  Megamenu Dynamic Left ----------------- */
    /* ----------------------------------------------------------------------------- */
    TM_Memuzord_Megamenu: function () {
      if ($window.width() > 1000) {
        $("#elementor-header-top .menuzord-menu, #elementor-header-top-sticky .menuzord-menu")
          .children(".menu-item")
          .find(".megamenu")
          .each(function () {
            var $item = $(this);
            if ($item.length > 0) {
              var megamenu_width = $item.outerWidth();
              $item.css("left", 0);
              $item.css("right", "auto");

              var $container;
              if ($item.closest(".container").length) {
                var $container = $item.closest(".container");
              } else if ($item.closest(".container-fluid").length) {
                var $container = $item.closest(".container-fluid");
              } else if ($item.parents(".elementor-element.e-parent").children(".e-con-inner").length) {
                var $container = $item.parents(".elementor-element.e-parent").children(".e-con-inner");
              } else if ($item.parents(".elementor-element.e-parent").length) {
                var $container = $item.parents(".elementor-element.e-parent");
              } else if ($item.parents(".elementor-top-section").length) {
                var $container = $item.closest(".elementor-top-section");
              } else {
                var $container = $item.closest(".header-nav-container");
              }

              var $menuzord_primary_nav = $item.closest(".menuzord-primary-nav");

              var container_width = $container.width(),
                container_padding_left = parseInt($container.css("padding-left")),
                container_padding_right = parseInt($container.css("padding-right")),
                parent_width = $item.closest(".menuzord-menu").outerWidth();

              var megamenu_width = $item.outerWidth();
              var right = 0;

              if (megamenu_width > parent_width) {
                var left = -(megamenu_width - parent_width) * 0.5;
              } else {
                var left = 0;
              }

              var container_offset = $container.offset();
              var megamenu_parent_offset = $item.closest(".menu-item").offset();
              var menuzord_primary_nav_offset = $menuzord_primary_nav.offset();

              left = container_offset.left + container_padding_left - megamenu_parent_offset.left;

              if ($item.hasClass("megamenu-three-quarter-width")) {
                left += container_width * 0.25 * 0.5;
                if ($window.width() > 1440) {
                  container_width = container_width * 0.75;
                } else if ($window.width() > 1000) {
                  container_width = container_width * 0.9;
                }
                //left = $item.css('left');
              } else if ($item.hasClass("megamenu-half-width")) {
                if ($window.width() > 1440) {
                  container_width = container_width * 0.5;
                } else if ($window.width() > 1000) {
                  container_width = container_width * 0.75;
                }
              } else if ($item.hasClass("megamenu-quarter-width")) {
                if ($window.width() > 1440) {
                  container_width = container_width * 0.25;
                } else if ($window.width() > 1000) {
                  container_width = container_width * 0.5;
                }
                //right = megamenu_parent_offset+$item.closest('.menu-item').outerWidth();
              }

              if ($item.hasClass("megamenu-fullwidth-fullwindow")) {
                //do nothing
              } else if ($item.hasClass("megamenu-fullwidth")) {
                //do nothing
              } else if ($item.hasClass("megamenu-position-left")) {
                left = 0;
              } else if ($item.hasClass("megamenu-position-center")) {
                parent_width = $item.closest(".menu-item-has-children").outerWidth();
                left = -megamenu_width * 0.5;
              } else if ($item.hasClass("megamenu-position-right")) {
                left = "auto";
                right = 0;
              }

              $item.css("width", container_width);
              $item.css("left", left);
              $item.css("right", right);
            }
          });
      }
    },

    /* ---------------------------------------------------------------------- */
    /* --------------------------- Waypoint Top Nav Sticky ------------------ */
    /* ---------------------------------------------------------------------- */
    TM_topnavAnimate: function () {
      if ($window.scrollTop() > 50) {
        $(".navbar-sticky-animated").removeClass("animated-active");
      } else {
        $(".navbar-sticky-animated").addClass("animated-active");
      }

      if ($window.scrollTop() > 50) {
        $(".navbar-sticky-animated .header-nav-wrapper .container, .navbar-sticky-animated .header-nav-wrapper .container-fluid").removeClass("add-padding");
      } else {
        $(".navbar-sticky-animated .header-nav-wrapper .container, .navbar-sticky-animated .header-nav-wrapper .container-fluid").addClass("add-padding");
      }
    },

    /* ---------------------------------------------------------------------- */
    /* --------------------------- Top search toggle  ----------------------- */
    /* ---------------------------------------------------------------------- */
    TM_topsearch_toggle: function () {
      $document_body.on("click", "#top-search-toggle", function (e) {
        e.preventDefault();
        $(".search-form-wrapper.toggle").toggleClass("active");
        return false;
      });
    },
  };

  THEMEMASCOT.widget = {
    init: function () {
      var t = setTimeout(function () {
        THEMEMASCOT.widget.TM_shop_floating_cart();
        THEMEMASCOT.widget.TM_shopClickEvents();
        THEMEMASCOT.widget.TM_masonryIsotope();
        THEMEMASCOT.widget.TM_funfact();
        THEMEMASCOT.widget.TM_accordion_toggles();
      }, 0);
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------ Shop Plus Minus ----------------------- */
    /* ---------------------------------------------------------------------- */
    TM_shop_floating_cart: function () {
      $document_body.on("click", ".tm-floating-woocart-wrapper .woocart-close", function (e) {
        e.preventDefault();
        $(this).parents(".tm-floating-woocart-wrapper").removeClass("open");
      });
      $document_body.on("click", ".tm-floating-woocart-wrapper .floating-woocart-overlay", function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("open");
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------------ Shop Plus Minus ----------------------- */
    /* ---------------------------------------------------------------------- */
    TM_shopClickEvents: function () {
      $document_body.on("click", ".quantity .plus", function (e) {
        var currentVal = parseInt($(this).parent().children(".qty").val(), 10);
        if (isNaN(currentVal)) {
          $(this).parent().children(".qty").val(1);
        }
        if (!isNaN(currentVal)) {
          $(this)
            .parent()
            .children(".qty")
            .val(currentVal + 1);
        }
        $(".shop_table.cart").find('button[name="update_cart"]').removeAttr("disabled");
        return false;
      });

      $document_body.on("click", ".quantity .minus", function (e) {
        var currentVal = parseInt($(this).parent().children(".qty").val(), 10);
        if (!isNaN(currentVal) && currentVal > 0) {
          $(this)
            .parent()
            .children(".qty")
            .val(currentVal - 1);
        }
        $(".shop_table.cart").find('button[name="update_cart"]').removeAttr("disabled");
        return false;
      });
    },

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- Masonry Isotope ------------------------ */
    /* ---------------------------------------------------------------------- */
    TM_masonryIsotope: function () {
      //isotope firsttime loading
      if ($gallery_isotope.length > 0) {
        $gallery_isotope.each(function () {
          var $each_istope = $(this);
          $each_istope.addClass("isotope-rendered");
          $each_istope.imagesLoaded(function () {
            if ($each_istope.hasClass("masonry")) {
              var isotope_inner = $each_istope.children(".isotope-layout-inner"),
                size = $each_istope.find(".isotope-item-sizer").width();
              tmMasonryItemsHeightResizer(size, $each_istope);

              isotope_inner.isotope({
                isOriginLeft: THEMEMASCOT.isLTR.check(),
                itemSelector: ".isotope-item",
                layoutMode: "masonry",
                masonry: {
                  columnWidth: ".isotope-item-sizer",
                },
                getSortData: {
                  name: function (itemElem) {
                    return $(itemElem).find(".title").text();
                  },
                  date: "[data-date]",
                },
                filter: "*",
              });
            } else {
              var isotope_inner = $each_istope.children(".isotope-layout-inner");
              isotope_inner.isotope({
                isOriginLeft: THEMEMASCOT.isLTR.check(),
                itemSelector: ".isotope-item",
                layoutMode: "fitRows",
                getSortData: {
                  name: function (itemElem) {
                    return $(itemElem).find(".title").text();
                  },
                  date: "[data-date]",
                },
                filter: "*",
              });
            }
          });

          //search for isotope with single item and add a class to remove left right padding.
          var count = $each_istope.find(".isotope-item:not(.isotope-item-sizer)").length;
          if (count == 1) {
            $each_istope.addClass("isotope-layout-single-item");
          }
        });
      }

      //isotope filter
      $(".isotope-layout-filter").on("click", "a", function (e) {
        var $this = $(this);
        var $this_parent = $this.parent("div");
        $this.addClass("active").siblings().removeClass("active");

        var fselector = $this.data("filter");
        var linkwith = $this_parent.data("link-with");
        if ($("#" + linkwith).hasClass("masonry")) {
          var $this = $("#" + linkwith);
          var isotope_inner = $this.children(".isotope-layout-inner"),
            size = $this.find(".isotope-item-sizer").width();
          tmMasonryItemsHeightResizer(size, $this);
          isotope_inner.isotope({
            isOriginLeft: THEMEMASCOT.isLTR.check(),
            itemSelector: ".isotope-item",
            layoutMode: "masonry",
            masonry: {
              columnWidth: ".isotope-item-sizer",
            },
            filter: fselector,
          });
        } else {
          var $this = $("#" + linkwith);
          var isotope_inner = $this.children(".isotope-layout-inner");
          isotope_inner.isotope({
            isOriginLeft: THEMEMASCOT.isLTR.check(),
            itemSelector: ".isotope-item",
            layoutMode: "fitRows",
            filter: fselector,
          });
        }
        return false;
      });

      //isotope sorter
      $(".isotope-layout-sorter").on("click", "a", function (e) {
        var $this = $(this);
        var $this_parent = $this.parent("div");
        $this.addClass("active").siblings().removeClass("active");

        var sortby = $this.data("sortby");
        var linkwith = $this_parent.data("link-with");
        if (sortby === "shuffle") {
          $("#" + linkwith).isotope("shuffle");
        } else {
          $("#" + linkwith).isotope({
            isOriginLeft: THEMEMASCOT.isLTR.check(),
            sortBy: sortby,
          });
        }
        return false;
      });
    },

    TM_isotopeGridRearrange: function () {
      if ($gallery_isotope.hasClass("masonry")) {
        $gallery_isotope.isotope({
          isOriginLeft: THEMEMASCOT.isLTR.check(),
          itemSelector: ".isotope-item",
          layoutMode: "masonry",
        });
      } else {
        $gallery_isotope.isotope({
          isOriginLeft: THEMEMASCOT.isLTR.check(),
          itemSelector: ".isotope-item",
          layoutMode: "fitRows",
        });
      }
    },

    TM_isotopeGridShuffle: function () {
      $gallery_isotope.isotope("shuffle");
    },

    /* ---------------------------------------------------------------------- */
    /* ------------------------ Funfact Number Counter ---------------------- */
    /* ---------------------------------------------------------------------- */
    TM_funfact: function () {},

    /* ---------------------------------------------------------------------- */
    /* ------------------------- accordion & toggles ------------------------ */
    /* ---------------------------------------------------------------------- */
    TM_accordion_toggles: function () {
      var $panel_group_collapse = $(".tm-accordion");
      $panel_group_collapse.on("show.bs.collapse", function (e) {
        var $parent = e.target.parentNode;
        $($parent).siblings().removeClass("active");
        $($parent).addClass("active");
      });
      $panel_group_collapse.on("hide.bs.collapse", function (e) {
        var $parent = e.target.parentNode;
        $($parent).removeClass("active");
      });
    },
  };

  THEMEMASCOT.slider = {
    init: function () {
      var t = setTimeout(function () {}, 0);
    },
  };

  /* ---------------------------------------------------------------------- */
  /* ---------- document ready, window load, scroll and resize ------------ */
  /* ---------------------------------------------------------------------- */
  //document ready
  THEMEMASCOT.documentOnReady = {
    init: function () {
      THEMEMASCOT.hot.init();
      THEMEMASCOT.initialize.init();
      THEMEMASCOT.header.init();
      THEMEMASCOT.widget.init();
      THEMEMASCOT.windowOnscroll.init();
    },
  };

  //window on load
  THEMEMASCOT.windowOnLoad = {
    init: function () {
      var t = setTimeout(function () {
        THEMEMASCOT.initialize.TM_preLoaderOnLoad();
        THEMEMASCOT.initialize.TM_stickySidebar();
        THEMEMASCOT.initialize.TM_stickInParent();
        THEMEMASCOT.initialize.TM_stickInParentShop();
        THEMEMASCOT.initialize.TM_fitVids();
      }, 0);
      var tdelay = setTimeout(function () {
        THEMEMASCOT.widget.TM_masonryIsotope();
      }, 400);
      $window.trigger("scroll");
      $window.trigger("resize");
    },
  };

  //window on scroll
  THEMEMASCOT.windowOnscroll = {
    init: function () {
      $window.on("scroll", function () {
        THEMEMASCOT.header.TM_scroolToTop();
        THEMEMASCOT.header.TM_activateMenuItemOnReach();
        THEMEMASCOT.header.TM_topnavAnimate();
      });
    },
  };

  //window on resize
  THEMEMASCOT.windowOnResize = {
    init: function () {
      var t = setTimeout(function () {
        THEMEMASCOT.header.TM_wpadminbarInMobile();
        //THEMEMASCOT.header.TM_TopNav_Dropdown_Position();
        THEMEMASCOT.header.TM_Memuzord_Megamenu();
        THEMEMASCOT.header.TM_verticalNavHeaderPadding();
        THEMEMASCOT.initialize.TM_stickySidebar();
        THEMEMASCOT.initialize.TM_stickInParent();
        THEMEMASCOT.initialize.TM_stickInParentShop();
        THEMEMASCOT.header.TM_navLocalScorll();
        THEMEMASCOT.widget.TM_masonryIsotope();
        THEMEMASCOT.initialize.TM_equalHeightDivs();
        THEMEMASCOT.header.TM_HeaderTopElementorSticky();
      }, 400);
    },
  };

  THEMEMASCOT.header.TM_menuzord();

  /* ---------------------------------------------------------------------- */
  /* ---------------------------- Call Functions -------------------------- */
  /* ---------------------------------------------------------------------- */
  $document.ready(THEMEMASCOT.documentOnReady.init);
  $window.on("load", THEMEMASCOT.windowOnLoad.init);
  $window.on("resize", THEMEMASCOT.windowOnResize.init);

  //call function before document ready
  THEMEMASCOT.initialize.TM_preLoaderClickDisable();
})(jQuery);
