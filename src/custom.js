function menucode(){
!(function(n, i, e, a) {
    ;(n.navigation = function(t, s) {
      var o = {
          responsive: !0,
          mobileBreakpoint: 991,
          showDuration: 200,
          hideDuration: 200,
          showDelayDuration: 0,
          hideDelayDuration: 0,
          submenuTrigger: "hover",
          effect: "fadeIn",
          submenuIndicator: !0,
          submenuIndicatorTrigger: !1,
          hideSubWhenGoOut: !0,
          visibleSubmenusOnMobile: !1,
          fixed: !1,
          overlay: !0,
          overlayColor: "rgba(0, 0, 0, 0.5)",
          hidden: !1,
          hiddenOnMobile: !1,
          offCanvasSide: "left",
          offCanvasCloseButton: !0,
          animationOnShow: "",
          animationOnHide: "",
          onInit: function() {},
          onLandscape: function() {},
          onPortrait: function() {},
          onShowOffCanvas: function() {},
          onHideOffCanvas: function() {}
        },
        r = this,
        u = Number.MAX_VALUE,
        d = 1,
        l = "click.nav touchstart.nav",
        f = "mouseenter focusin",
        c = "mouseleave focusout"
      r.settings = {}
      var t = (n(t), t)
      n(t).find(".nav-search").length > 0 &&
        n(t)
          .find(".nav-search")
          .find("form")
          .prepend(
            "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
          ),
        (r.init = function() {
          ;(r.settings = n.extend({}, o, s)),
            r.settings.offCanvasCloseButton &&
              n(t)
                .find(".nav-menus-wrapper")
                .prepend(
                  "<div class='sad'><span class='nav-menus-wrapper-close-button'>&#10005;</span></div>"
                ),
            "right" == r.settings.offCanvasSide &&
              n(t)
                .find(".nav-menus-wrapper")
                .addClass("nav-menus-wrapper-right"),
            r.settings.hidden &&
              (n(t).addClass("navigation-hidden"),
              (r.settings.mobileBreakpoint = 99999)),
            v(),
            r.settings.fixed && n(t).addClass("navigation-fixed"),
            n(t)
              .find(".nav-toggle")
              .on("click touchstart", function(n) {
                n.stopPropagation(),
                  n.preventDefault(),
                  r.showOffcanvas(),
                  s !== a && r.callback("onShowOffCanvas")
              }),
            n(t)
              .find(".nav-menus-wrapper-close-button")
              .on("click touchstart", function() {
                r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")
              }),
            n(t)
              .find(".nav-search-button, .nav-search-close-button")
              .on("click touchstart keydown", function(i) {
                i.stopPropagation(), i.preventDefault()
                var e = i.keyCode || i.which
                "click" === i.type ||
                "touchstart" === i.type ||
                ("keydown" === i.type && 13 == e)
                  ? r.toggleSearch()
                  : 9 == e && n(i.target).blur()
              }),
            n(t).find(".megamenu-tabs").length > 0 && y(),
            n(i).resize(function() {
              r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m()
            }),
            r.initNavigationMode(C()),
            r.settings.hiddenOnMobile && m(),
            s !== a && r.callback("onInit")
        })
      var h = function() {
          n(t)
            .find(".nav-submenu")
            .hide(0),
            n(t)
              .find("li")
              .removeClass("focus")
        },
        v = function() {
          n(t)
            .find("li")
            .each(function() {
              n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
                (n(this)
                  .children(".nav-dropdown,.megamenu-panel")
                  .addClass("nav-submenu"),
                r.settings.submenuIndicator &&
                  n(this)
                    .children("a")
                    .append(
                      "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                    ))
            })
        },
        m = function() {
          n(t).hasClass("navigation-portrait")
            ? n(t).addClass("navigation-hidden")
            : n(t).removeClass("navigation-hidden")
        }
      ;(r.showSubmenu = function(i, e) {
        C() > r.settings.mobileBreakpoint &&
          n(t)
            .find(".nav-search")
            .find("form")
            .fadeOut(),
          "fade" == e
            ? n(i)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.showDelayDuration)
                .fadeIn(r.settings.showDuration)
                .removeClass(r.settings.animationOnHide)
                .addClass(r.settings.animationOnShow)
            : n(i)
                .children(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.showDelayDuration)
                .slideDown(r.settings.showDuration)
                .removeClass(r.settings.animationOnHide)
                .addClass(r.settings.animationOnShow),
          n(i).addClass("focus")
      }),
        (r.hideSubmenu = function(i, e) {
          "fade" == e
            ? n(i)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.hideDelayDuration)
                .fadeOut(r.settings.hideDuration)
                .removeClass(r.settings.animationOnShow)
                .addClass(r.settings.animationOnHide)
            : n(i)
                .find(".nav-submenu")
                .stop(!0, !0)
                .delay(r.settings.hideDelayDuration)
                .slideUp(r.settings.hideDuration)
                .removeClass(r.settings.animationOnShow)
                .addClass(r.settings.animationOnHide),
            n(i)
              .removeClass("focus")
              .find(".focus")
              .removeClass("focus")
        })
      var p = function() {
          n("body").addClass("no-scroll"),
            r.settings.overlay &&
              (n(t).append("<div class='nav-overlay-panel'></div>"),
              n(t)
                .find(".nav-overlay-panel")
                .css("background-color", r.settings.overlayColor)
                .fadeIn(300)
                .on("click touchstart", function(n) {
                  r.hideOffcanvas()
                }))
        },
        g = function() {
          n("body").removeClass("no-scroll"),
            r.settings.overlay &&
              n(t)
                .find(".nav-overlay-panel")
                .fadeOut(400, function() {
                  n(this).remove()
                })
        }
      ;(r.showOffcanvas = function() {
        p(),
          "left" == r.settings.offCanvasSide
            ? n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "left")
                .addClass("nav-menus-wrapper-open")
            : n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "right")
                .addClass("nav-menus-wrapper-open")
      }),
        (r.hideOffcanvas = function() {
          n(t)
            .find(".nav-menus-wrapper")
            .removeClass("nav-menus-wrapper-open")
            .on(
              "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
              function() {
                n(t)
                  .find(".nav-menus-wrapper")
                  .css("transition-property", "none")
                  .off()
              }
            ),
            g()
        }),
        (r.toggleOffcanvas = function() {
          C() <= r.settings.mobileBreakpoint &&
            (n(t)
              .find(".nav-menus-wrapper")
              .hasClass("nav-menus-wrapper-open")
              ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
              : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")))
        }),
        (r.toggleSearch = function() {
          "none" ==
          n(t)
            .find(".nav-search")
            .find("form")
            .css("display")
            ? (n(t)
                .find(".nav-search")
                .find("form")
                .fadeIn(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .focus())
            : (n(t)
                .find(".nav-search")
                .find("form")
                .fadeOut(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .blur())
        }),
        (r.initNavigationMode = function(i) {
          r.settings.responsive
            ? (i <= r.settings.mobileBreakpoint &&
                u > r.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-portrait")
                  .removeClass("navigation-landscape"),
                S(),
                s !== a && r.callback("onPortrait")),
              i > r.settings.mobileBreakpoint &&
                d <= r.settings.mobileBreakpoint &&
                (n(t)
                  .addClass("navigation-landscape")
                  .removeClass("navigation-portrait"),
                k(),
                g(),
                r.hideOffcanvas(),
                s !== a && r.callback("onLandscape")),
              (u = i),
              (d = i))
            : (n(t).addClass("navigation-landscape"),
              k(),
              s !== a && r.callback("onLandscape"))
        })
      var b = function() {
          n("html").on("click.body touchstart.body", function(i) {
            0 === n(i.target).closest(".navigation").length &&
              (n(t)
                .find(".nav-submenu")
                .fadeOut(),
              n(t)
                .find(".focus")
                .removeClass("focus"),
              n(t)
                .find(".nav-search")
                .find("form")
                .fadeOut())
          })
        },
        C = function() {
          return (
            i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
          )
        },
        w = function() {
          n(t)
            .find(".nav-menu")
            .find("li, a")
            .off(l)
            .off(f)
            .off(c)
        },
        O = function() {
          if (C() > r.settings.mobileBreakpoint) {
            var i = n(t).outerWidth(!0)
            n(t)
              .find(".nav-menu")
              .children("li")
              .children(".nav-submenu")
              .each(function() {
                n(this)
                  .parent()
                  .position().left +
                  n(this).outerWidth() >
                i
                  ? n(this).css("right", 0)
                  : n(this).css("right", "auto")
              })
          }
        },
        y = function() {
          function i(i) {
            var e = n(i)
                .children(".megamenu-tabs-nav")
                .children("li"),
              a = n(i).children(".megamenu-tabs-pane")
            n(e).on("click.tabs touchstart.tabs", function(i) {
              i.stopPropagation(),
                i.preventDefault(),
                n(e).removeClass("active"),
                n(this).addClass("active"),
                n(a)
                  .hide(0)
                  .removeClass("active"),
                n(a[n(this).index()])
                  .show(0)
                  .addClass("active")
            })
          }
          if (n(t).find(".megamenu-tabs").length > 0)
            for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
              i(e[a])
        },
        k = function() {
          w(),
            h(),
            navigator.userAgent.match(/Mobi/i) ||
            navigator.maxTouchPoints > 0 ||
            "click" == r.settings.submenuTrigger
              ? n(t)
                  .find(".nav-menu, .nav-dropdown")
                  .children("li")
                  .children("a")
                  .on(l, function(e) {
                    if (
                      (r.hideSubmenu(
                        n(this)
                          .parent("li")
                          .siblings("li"),
                        r.settings.effect
                      ),
                      n(this)
                        .closest(".nav-menu")
                        .siblings(".nav-menu")
                        .find(".nav-submenu")
                        .fadeOut(r.settings.hideDuration),
                      n(this).siblings(".nav-submenu").length > 0)
                    ) {
                      if (
                        (e.stopPropagation(),
                        e.preventDefault(),
                        "none" ==
                          n(this)
                            .siblings(".nav-submenu")
                            .css("display"))
                      )
                        return (
                          r.showSubmenu(
                            n(this).parent("li"),
                            r.settings.effect
                          ),
                          O(),
                          !1
                        )
                      if (
                        (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                        "_blank" === n(this).attr("target") ||
                          "blank" === n(this).attr("target"))
                      )
                        i.open(n(this).attr("href"))
                      else {
                        if (
                          "#" === n(this).attr("href") ||
                          "" === n(this).attr("href") ||
                          "javascript:void(0)" === n(this).attr("href")
                        )
                          return !1
                        i.location.href = n(this).attr("href")
                      }
                    }
                  })
              : n(t)
                  .find(".nav-menu")
                  .find("li")
                  .on(f, function() {
                    r.showSubmenu(this, r.settings.effect), O()
                  })
                  .on(c, function() {
                    r.hideSubmenu(this, r.settings.effect)
                  }),
            r.settings.hideSubWhenGoOut && b()
        },
        S = function() {
          w(),
            h(),
            r.settings.visibleSubmenusOnMobile
              ? n(t)
                  .find(".nav-submenu")
                  .show(0)
              : (n(t)
                  .find(".submenu-indicator")
                  .removeClass("submenu-indicator-up"),
                r.settings.submenuIndicator &&
                r.settings.submenuIndicatorTrigger
                  ? n(t)
                      .find(".submenu-indicator")
                      .on(l, function(i) {
                        return (
                          i.stopPropagation(),
                          i.preventDefault(),
                          r.hideSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li")
                              .siblings("li"),
                            "slide"
                          ),
                          r.hideSubmenu(
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .children("li"),
                            "slide"
                          ),
                          "none" ==
                          n(this)
                            .parent("a")
                            .siblings(".nav-submenu")
                            .css("display")
                            ? (n(this).addClass("submenu-indicator-up"),
                              n(this)
                                .parent("a")
                                .parent("li")
                                .siblings("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              n(this)
                                .closest(".nav-menu")
                                .siblings(".nav-menu")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              r.showSubmenu(
                                n(this)
                                  .parent("a")
                                  .parent("li"),
                                "slide"
                              ),
                              !1)
                            : (n(this)
                                .parent("a")
                                .parent("li")
                                .find(".submenu-indicator")
                                .removeClass("submenu-indicator-up"),
                              void r.hideSubmenu(
                                n(this)
                                  .parent("a")
                                  .parent("li"),
                                "slide"
                              ))
                        )
                      })
                  : n(t)
                      .find(".nav-menu, .nav-dropdown")
                      .children("li")
                      .children("a")
                      .on(l, function(e) {
                        if (
                          (e.stopPropagation(),
                          e.preventDefault(),
                          r.hideSubmenu(
                            n(this)
                              .parent("li")
                              .siblings("li"),
                            r.settings.effect
                          ),
                          r.hideSubmenu(
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .children("li"),
                            "slide"
                          ),
                          "none" ==
                            n(this)
                              .siblings(".nav-submenu")
                              .css("display"))
                        )
                          return (
                            n(this)
                              .children(".submenu-indicator")
                              .addClass("submenu-indicator-up"),
                            n(this)
                              .parent("li")
                              .siblings("li")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            n(this)
                              .closest(".nav-menu")
                              .siblings(".nav-menu")
                              .find(".submenu-indicator")
                              .removeClass("submenu-indicator-up"),
                            r.showSubmenu(n(this).parent("li"), "slide"),
                            !1
                          )
                        if (
                          (n(this)
                            .parent("li")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          r.hideSubmenu(n(this).parent("li"), "slide"),
                          "_blank" === n(this).attr("target") ||
                            "blank" === n(this).attr("target"))
                        )
                          i.open(n(this).attr("href"))
                        else {
                          if (
                            "#" === n(this).attr("href") ||
                            "" === n(this).attr("href") ||
                            "javascript:void(0)" === n(this).attr("href")
                          )
                            return !1
                          i.location.href = n(this).attr("href")
                        }
                      }))
        }
      ;(r.callback = function(n) {
        s[n] !== a && s[n].call(t)
      }),
        r.init()
    }),
      (n.fn.navigation = function(i) {
        return this.each(function() {
          if (a === n(this).data("navigation")) {
            var e = new n.navigation(this, i)
            n(this).data("navigation", e)
          }
        })
      })
  })(jQuery, window, document)

  ;(function($) {
    "use strict"

    var $window = $(window)

    if ($.fn.navigation) {
      $("#navigation1").navigation()
      $("#always-hidden-nav").navigation({
        hidden: true
      })
    }

    $window.on("load", function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove()
      })
    })
  })(jQuery)

}

function productslider(){
   /*---product column4 activation---*/
   var $porductColumn4 =  $('.product_column4');
   if($porductColumn4.length > 0){
       $porductColumn4.on('changed.owl.carousel initialized.owl.carousel', function (event) {
           $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
           autoplay: true,
           loop: true,
           nav: true,
           autoplay: false,
           autoplayTimeout: 8000,
           items: 4,
           dots:false,
          navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
           responsiveClass:true,
           responsive:{
                   0:{
                   items:1,
               },
               576:{
                   items:2,
               },
               768:{
                   items:3,
               },
               992:{
                   items:3,
               },
               1200:{
                   items:4,
               },   
             }
       });
   }
}

function tooltip(){
  $('.action_links ul li a,.add_to_cart a,.footer_social_link ul li a').tooltip({
    animated: 'fade',
    placement: 'top',
    container: 'body'
});
}

function brand(){
   /*---brand container activation---*/
   var $brandContainer = $('.brand_container');
   if($brandContainer.length > 0){
    $('.brand_container').on('changed.owl.carousel initialized.owl.carousel', function (event) {
       $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
       autoplay: true,
       loop: true,
       nav: true,
       autoplay: false,
       autoplayTimeout: 8000,
       items: 7,
       margin: 20,
       dots:false,
       navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
       responsiveClass:true,
       responsive:{
               0:{
               items:1,
           },
           480:{
               items:2,
           },
           576:{
               items:4,
           },
           768:{
               items:5,
           },
           992:{
               items:6,
           },
           1200:{
               items:7,
           },
         }
   });
} 

}

function blog(){
   /*---blog column3 activation---*/
   var $blogColumn3 = $('.blog_column3');
   if($blogColumn3.length > 0){
   $('.blog_column3').owlCarousel({
       autoplay: true,
       loop: true,
       nav: true,
       autoplay: false,
       autoplayTimeout: 8000,
       items: 3,
       dots:false,
       navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'], 
       responsiveClass:true,
       responsive:{
               0:{
               items:1,
           },
           768:{
               items:2,
           },
           992:{
               items:3,
           },
           1200:{
               items:3,
           },
         }
   });
}        
 
}

function testimonials(){
    /*testimonial activation*/
    $('.testimonial_content_collumn1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.testimonial_thumb_column3',
         prevArrow:'<button class="prev_arrow"><i class="ion-ios-arrow-left"></i></button>',
        nextArrow:'<button class="next_arrow"><i class="ion-ios-arrow-right"></i></button>',  
    });
    $('.testimonial_thumb_column3').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.testimonial_content_collumn1',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false      
    });
}

function newmenu(){
      /*---stickey menu---*/
      $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
         $(".sticky-header").removeClass("sticky");
        }else{
         $(".sticky-header").addClass("sticky");
        }
 });

/*---canvas menu activation---*/
$('.canvas_open').on('click', function(){
  $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
});

$('.canvas_close,.off_canvars_overlay').on('click', function(){
  $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
});



/*---Off Canvas Menu---*/
var $offcanvasNav = $('.offcanvas_main_menu'),
  $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
$offcanvasNavSubMenu.parent().prepend('<span class="menu-expand" style="position: absolute; right:0px;"><i class="fa fa-angle-down"></i></span>');

$offcanvasNavSubMenu.slideUp();

$offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
  var $this = $(this);
  if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length){
          $this.siblings('ul').slideUp('slow');
      }else {
          $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
          $this.siblings('ul').slideDown('slow');
      }
  }
  if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
    $this.parent().toggleClass('menu-open');
  }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
    $this.toggleClass('menu-open');
  }
});






}

function slider(){
   /*---slider activation---*/
   var $slider = $('.slider_area');
   if($slider.length > 0){
       $slider.owlCarousel({
           animateOut: 'fadeOut',
           autoplay: true,
           loop: true,
           nav: false,
           autoplay: false,
           autoplayTimeout: 8000,
           items: 1,
           dots:true,
       });
   }
}

function listgrid(){
   /*---shop grid activation---*/
   $('.shop_toolbar_btn > button').on('click', function (e) {
        
		e.preventDefault();
        
        $('.shop_toolbar_btn > button').removeClass('active');
		$(this).addClass('active');
        
		var parentsDiv = $('.shop_wrapper');
		var viewMode = $(this).data('role');
        
        
		parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

		if(viewMode == 'grid_3'){
			parentsDiv.children().addClass('col-lg-4 col-md-4 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');
            
		}

		if(viewMode == 'grid_4'){
			parentsDiv.children().addClass('col-lg-3 col-md-4 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
		}
        
        if(viewMode == 'grid_list'){
			parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-4 col-sm-6 col-cust-5');
		}
            
  });
  
    /*---widget sub categories---*/
    $(".sub_categories1 > a").on("click", function() {
      $(this).toggleClass('active');
      $('.dropdown_categories1').slideToggle('medium');
  }); 
  
  /*---widget sub categories---*/
  $(".sub_categories2 > a").on("click", function() {
      $(this).toggleClass('active');
      $('.dropdown_categories2').slideToggle('medium');
  }); 
  
  /*---widget sub categories---*/
  $(".sub_categories3 > a").on("click", function() {
      $(this).toggleClass('active');
      $('.dropdown_categories3').slideToggle('medium');
  }); 
  

 /*--- niceSelect---*/
 $('.select_option').niceSelect();
}

function searchdata(){
    /*---search account slideToggle---*/
    $(".search_list > a").on("click", function() {
      $(this).toggleClass('active');
      $('.dropdown_search').slideToggle('medium');
  }); 
  
  $('.mini_cart_wrapper > a').on('click', function(event){
    if($(window).width() < 991){
        $('.mini_cart').slideToggle('medium');
    }
}); 



}

function zoom(){

  (function ($) {
    $(document).ready(function() {
        $('.xzoom, .xzoom-gallery').xzoom({zoomWidth: 400, title: true, tint: '#333', Xoffset: 15});
        $('.xzoom2, .xzoom-gallery2').xzoom({position: '#xzoom2-id', tint: '#ffa200'});
        $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
        $('.xzoom4, .xzoom-gallery4').xzoom({tint: '#006699', Xoffset: 15});
        $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#006699', Xoffset: 15});

        //Integration with hammer.js
        var isTouchSupported = 'ontouchstart' in window;

        if (isTouchSupported) {
            //If touch device
            $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
                var xzoom = $(this).data('xzoom');
                xzoom.eventunbind();
            });
            
            $('.xzoom, .xzoom2, .xzoom3').each(function() {
                var xzoom = $(this).data('xzoom');
                $(this).hammer().on("tap", function(event) {
                    event.pageX = event.gesture.center.pageX;
                    event.pageY = event.gesture.center.pageY;
                    var s = 1, ls;
    
                    xzoom.eventmove = function(element) {
                        element.hammer().on('drag', function(event) {
                            event.pageX = event.gesture.center.pageX;
                            event.pageY = event.gesture.center.pageY;
                            xzoom.movezoom(event);
                            event.gesture.preventDefault();
                        });
                    }
    
                    xzoom.eventleave = function(element) {
                        element.hammer().on('tap', function(event) {
                            xzoom.closezoom();
                        });
                    }
                    xzoom.openzoom(event);
                });
            });

        $('.xzoom4').each(function() {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function(event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function(element) {
                    element.hammer().on('drag', function(event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function(element) {
                    element.hammer().on('tap', function() {
                        counter++;
                        if (counter == 1) setTimeout(openfancy,300);
                        event.gesture.preventDefault();
                    });
                }

                function openfancy() {
                    if (counter == 2) {
                        xzoom.closezoom();
                        $.fancybox.open(xzoom.gallery().cgallery);
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
            xzoom.openzoom(event);
            });
        });
        
        $('.xzoom5').each(function() {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function(event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function(element) {
                    element.hammer().on('drag', function(event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function(element) {
                    element.hammer().on('tap', function() {
                        counter++;
                        if (counter == 1) setTimeout(openmagnific,300);
                        event.gesture.preventDefault();
                    });
                }

                function openmagnific() {
                    if (counter == 2) {
                        xzoom.closezoom();
                        var gallery = xzoom.gallery().cgallery;
                        var i, images = new Array();
                        for (i in gallery) {
                            images[i] = {src: gallery[i]};
                        }
                        $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
                xzoom.openzoom(event);
            });
        });

        } else {
            //If not touch device

            //Integration with fancybox plugin
            $('#xzoom-fancy').bind('click', function(event) {
                var xzoom = $(this).data('xzoom');
                xzoom.closezoom();
                $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
                event.preventDefault();
            });
           
            //Integration with magnific popup plugin
            $('#xzoom-magnific').bind('click', function(event) {
                var xzoom = $(this).data('xzoom');
                xzoom.closezoom();
                var gallery = xzoom.gallery().cgallery;
                var i, images = new Array();
                for (i in gallery) {
                    images[i] = {src: gallery[i]};
                }
                $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                event.preventDefault();
            });
        }
    });
})(jQuery);

}

function testimonial(){
  jQuery(document).ready( function ($) {

    // For Home Page
    let i=2;
    var radius = 200;
    var fields = $('.itemDot');
    var container = $('.dotCircle');
    var width = container.width();
    radius = width/2.5;
     
    var height = container.height();
    var angle = 0, step = (2*Math.PI) / fields.length;
    fields.each(function() {
      var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
       var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
  
      $(this).css({
          left: x + 'px',
          top: y + 'px'
       });
       angle += step;
    });
              
      $('.itemDot').click(function() {
      var dataTab= $(this).data("tab");
        $('.itemDot').removeClass('active');
      $(this).addClass('active');
      $('.CirItem').removeClass('active');
      $( '.CirItem'+ dataTab).addClass('active');
      
      i=dataTab;
         
      $('.dotCircle').css({
        "transform":"rotate("+(360-(i-1)*36)+"deg)",
        "transition":"2s"
      });
      $('.itemDot').css({
        "transform":"rotate("+((i-1)*36)+"deg)",
        "transition":"1s"
      });
    });
              
      setInterval(function() {
      var dataTab= $('.itemDot.active').data("tab");
      if(dataTab>5||i>5){
        dataTab=1;
        i=1;
      }
      $('.itemDot').removeClass('active');
      $('[data-tab="'+i+'"]').addClass('active');
      $('.CirItem').removeClass('active');
      $( '.CirItem'+i).addClass('active');
      i++;
  
      $('.dotCircle').css({
        "transform":"rotate("+(360-(i-2)*36)+"deg)",
        "transition":"2s"
      });
      $('.itemDot').css({
        "transform":"rotate("+((i-2)*36)+"deg)",
        "transition":"1s"
      });
    }, 5000); 
    });
}

function topbtn(){
  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


}

function pricerange(){
  
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

}









