// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

//lenis scroll setup (initially stopped)
const lenis = new Lenis({
  duration: 1.5,
  touchMultiplier: 2,
  smoothTouch: true,
  direction: "vertical",
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
lenis.stop(); // Stop Lenis initially

// Start Lenis only after page load
window.addEventListener("load", () => {
  lenis.start(); // Start Lenis after page load
});

// Function to request animation frame for smooth scrolling
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Select elements for each animation type
const fadeUpElements = document.querySelectorAll('[data-gsap="fadeUp"]');
const fadeInElements = document.querySelectorAll('[data-gsap="fadeIn"]');
const fadeLeftElements = document.querySelectorAll('[data-gsap="fadeLeft"]');
const fadeRightElements = document.querySelectorAll('[data-gsap="fadeRight"]');

// Fade Up Animation
fadeUpElements.forEach((element) => {
  const delay = element.getAttribute("data-delay") || 0;
  gsap.fromTo(
    element,
    { autoAlpha: 0, y: 100 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: "ease",
      delay: parseFloat(delay),
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
});

// Fade In Animation
fadeInElements.forEach((element) => {
  const delay = element.getAttribute("data-delay") || 0;
  gsap.fromTo(
    element,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 0.9,
      ease: "ease",
      delay: parseFloat(delay),
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
});

// Fade Left Animation
fadeLeftElements.forEach((element) => {
  const delay = element.getAttribute("data-delay") || 0;
  gsap.fromTo(
    element,
    { autoAlpha: 0, x: -100 }, // Start position (off-screen to the left)
    {
      autoAlpha: 1,
      x: 0, // End position (back to original position)
      duration: 0.9,
      ease: "ease",
      delay: parseFloat(delay),
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
});

// Fade Right Animation
fadeRightElements.forEach((element) => {
  const delay = element.getAttribute("data-delay") || 0;
  gsap.fromTo(
    element,
    { autoAlpha: 0, x: 100 }, // Start position (off-screen to the right)
    {
      autoAlpha: 1,
      x: 0, // End position (back to original position)
      duration: 0.9,
      ease: "ease",
      delay: parseFloat(delay),
      scrollTrigger: {
        trigger: element,
        start: "top 100%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
});

jQuery(document).ready(function () {
  // SVG Create
  jQuery(function () {
    jQuery("img.svg").each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      jQuery.get(
        imgURL,
        function (data) {
          var $svg = jQuery(data).find("svg");
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
          }
          $svg = $svg.removeAttr("xmlns:a");
          if (
            !$svg.attr("viewBox") &&
            $svg.attr("height") &&
            $svg.attr("width")
          ) {
            $svg.attr(
              "viewBox",
              "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
            );
          }
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  });

  var headerwrap = jQuery(".header-wrap");
  var headerTop = jQuery(headerwrap).find(".head-top");

  jQuery(window).on("load scroll", function () {
    var headerTopHeight = headerTop.innerHeight();

    if (jQuery(this).scrollTop() > 25) {
      jQuery(headerwrap).addClass("sticky");
      jQuery(headerwrap)
        .find("header")
        .css("transform", `translateY(-${headerTopHeight}px)`);
    } else {
      jQuery(headerwrap).removeClass("sticky");
      jQuery(headerwrap).find("header").css("transform", "translateY(0)");
    }
  });

  jQuery(".menu-toggle button, .header-overlay").on("click", function () {
    jQuery(".header-menu").toggleClass("active");
    jQuery(".header-overlay").toggleClass("active");
    if (jQuery(".header-menu").hasClass("active")) {
      lenis.stop();
    } else {
      lenis.start();
    }
  });
});

var meetTeamSlider = new Swiper(".meet-team-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  speed: 1500,
  pagination: {
    el: ".meet-team-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
  },
});
