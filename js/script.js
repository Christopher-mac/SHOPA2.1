//SHOPA 2.1

// smooth scrollbar
// owlcarousel
const testimonial = $("#testimonial")
const brands = $("#brands")
testimonial.owlCarousel({
     loop: true,
     margin: 20,
     nav: false,
     center: true,
     dots: false,
     stagePadding: 20,

     responsive: {
          0: {
               items: 1.1
          },
          400: {
               items: 1.2
          },
          450: {
               items: 1.3
          },
          530: {
               items: 1.5
          },
          700: {
               items: 2
          },
          1000: {
               items: 3.2
          },
          1200: {
               items: 3.5
          },
          1400: {
               items: 4
          },
          1700: {
               items: 5
          }
     }
});
brands.owlCarousel({
     items: 4,
     loop: true,
     margin: 20,
     autoplay: true,
     autoplaySpeed: 1800,
     autoplayTimeout: 2500,
     autoplayHoverPause: false,
     nav: false,
     center: true,
     dots: false,
     stagePadding: 20,

}
);
// banner gsap 
const headline = document.querySelector(".headline");
const slider = document.querySelector(".slider");
const arrows = document.querySelector(".arrows");
const slider2 = document.querySelector(".slider2");
const banner = gsap.timeline();
banner.fromTo(slider, 1, { y: "50%" }, { y: "100%", ease: Power2.easeInOut })
     .fromTo(slider2, 1, { y: "-50%" }, { y: "-100%", ease: Power2.easeInOut }, "-=1")
     .fromTo(slider, 0.1, { opacity: 1 }, { opacity: 0 }, "-=0.4")
     .fromTo(headline, 0.8, { opacity: 0, y: -50 }, { opacity: 1, y: 0 }, "-=0.7")
     .fromTo(arrows, 1, { opacity: 0 }, { opacity: 1 }, "-=0.3")
// 
const bim = document.querySelector(".bim");
const bimg = gsap.timeline({
     scrollTrigger: {
          trigger: headline,
          start: 'top 30%',
          scrub: true
     }
});
bimg.to(headline, 1, { opacity: 0, y: -100 })
     .to(arrows, 1, { opacity: 0, y: -100 }, "-=1")
// page2 gsap scroll animation
document.addEventListener('DOMContentLoaded', init);
function init() {
     const query = window.matchMedia("(min-width: 530px)")

     if (query.matches) {
          const page2_1 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.product1',
                    start: 'center bottom',
                    end: "bottom bottom",
                    scrub: 0.1
               }
          });
          page2_1.from(".product1", 0.7, { x: -150, opacity: 0 })
               .from(".p2b1", 0.7, { x: 150, opacity: 0 })
               .from(".p2h1", 0.7, { x: 100, opacity: 0 }, "-=0.8")
               .from(".p2tx1", 0.7, { y: 300, opacity: 0, ease: "back.out(1.7)" }, "-=0.8")
               .from(".p2btn1", 0.7, { y: 100, opacity: 0 }, "-=0.8")

          const page2_2 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.product2',
                    start: '10% bottom',
                    end: "bottom bottom",
                    scrub: 0.1
               }
          });
          page2_2.from(".product2", 0.7, { x: 150, opacity: 0 })
               .from(".p2b2", 0.7, { x: -150, opacity: 0 })
               .from(".p2h2", 0.7, { x: -100, opacity: 0 }, "-=0.8")
               .from(".p2tx2", 0.7, { y: 300, opacity: 0, ease: "back.out(1.7)" }, "-=0.8")
               .from(".p2btn2", 0.7, { y: -100, opacity: 0 }, "-=0.8")

          // page3 gsap scroll animation
          const page3_1 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.s3',
                    start: 'top 80%',
                    end: "bottom bottom",
                    scrub: 0.1
               }
          });
          page3_1.from(".p3h1", 0.7, { y: 150, opacity: 0, ease: Power2.easeInOut })
               .from(".p3tx1", 0.7, { x: -250, opacity: 0 }, "-=0.5")
               .from(".p3btn1", 0.7, { y: 150, opacity: 0 }, "-=1")
               .from(".wheelsvg", 0.7, { x: 150, opacity: 0, ease: Power2.easeInOut }, "-=0.9")

          // page4 gsap scroll animation
          const page4_1 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.product3',
                    start: '45% bottom',
                    end: "bottom bottom",
                    scrub: 0.1
               }
          });
          page4_1.from(".product3", 1, { x: -250, opacity: 0 })
               .from(".p4b1", 1, { x: 200, opacity: 0 })
               .from(".p4h1", 1, { y: -100, opacity: 0 })
               .from(".p4tx1", 1, { x: 150, opacity: 0 }, "-=0.9")
               .from(".p4btn1", 1, { y: 100, opacity: 0 }, "-=1.5")

          const page4_2 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.product4',
                    start: '45% bottom',
                    end: "bottom bottom",
                    scrub: 0.1
               }
          });
          page4_2.from(".product4", 0.7, { x: 250, opacity: 0 })
               .from(".p4b2", 1, { x: -200, opacity: 0 })
               .from(".p4h2", 1, { y: -100, opacity: 0 })
               .from(".p4tx2", 1, { x: -150, opacity: 0 }, "-=0.9")
               .from(".p4btn2", 1, { y: 100, opacity: 0 }, "-=1.5")
     } else {
          const page2_1 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.product1',
                    start: 'center bottom',
                    end: "bottom bottom",
                    scrub: 0.1
               }
          });
          page2_1.from(".product1", 0.7, { x: -150, opacity: 0 })
               .from(".p2b1", 0.7, { x: 150, opacity: 0 })
               .from(".p2h1", 0.7, { x: 100, opacity: 0 }, "-=0.8")
               .from(".p2tx1", 0.7, { y: 300, opacity: 0, ease: "back.out(1.7)" }, "-=0.8")
               .from(".p2btn1", 0.7, { y: 100, opacity: 0 }, "-=0.8")

          const page2_2 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.product2',
                    start: '10% bottom',
                    end: "bottom bottom",
                    scrub: 0.1
               }
          });
          page2_2.from(".product2", 0.7, { x: 150, opacity: 0 })
               .from(".p2b2", 0.7, { x: -150, opacity: 0 })
               .from(".p2h2", 0.7, { x: -100, opacity: 0 }, "-=0.8")
               .from(".p2tx2", 0.7, { y: 300, opacity: 0, ease: "back.out(1.7)" }, "-=0.8")
               .from(".p2btn2", 0.7, { y: -100, opacity: 0 }, "-=0.8")

          // page3 gsap scroll animation
          const page3_1 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.s3',
                    start: 'top 80%',
                    end: "bottom bottom",
                    scrub: 0.1
               }
          });
          page3_1.from(".p3h1", 0.7, { y: 150, opacity: 0, ease: Power2.easeInOut })
               .from(".p3tx1", 0.7, { x: -250, opacity: 0 }, "-=0.5")
               .from(".p3btn1", 0.7, { y: 150, opacity: 0 }, "-=1")
               .from(".wheelsvg", 0.7, { x: 150, opacity: 0, ease: Power2.easeInOut }, "-=0.9")

          // page4 gsap scroll animation
          const page4_1 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.product3',
                    start: '45% bottom',
                    end: "10%",
                    scrub: 0.1
               }
          });
          page4_1.from(".product3", 1, { x: -250, opacity: 0 })
               .from(".p4b1", 1, { x: 200, opacity: 0 })
               .from(".p4h1", 1, { y: -100, opacity: 0 })
               .from(".p4tx1", 1, { x: 150, opacity: 0 }, "-=0.9")
               .from(".p4btn1", 1, { y: 100, opacity: 0 }, "-=1.5")

          const page4_2 = gsap.timeline({
               scrollTrigger: {
                    trigger: '.product4',
                    start: '45% bottom',
                    end: "10%",
                    scrub: 0.1
               }
          });
          page4_2.from(".product4", 0.7, { x: 250, opacity: 0 })
               .from(".p4b2", 1, { x: -200, opacity: 0 })
               .from(".p4h2", 1, { y: -100, opacity: 0 })
               .from(".p4tx2", 1, { x: -150, opacity: 0 }, "-=0.9")
               .from(".p4btn2", 1, { y: 100, opacity: 0 }, "-=1.5")
     }
}

// window.addEventListener('touchmove', event = {
//      console.log(event);
// }, { passive: true })