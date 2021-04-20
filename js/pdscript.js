const img_main = document.getElementById("img_main");
const img_small = document.getElementsByClassName("img_small");

     img_small[0].onclick = function(){
          img_main.src = img_small[0].src;
     }
     img_small[1].onclick = function(){
          img_main.src = img_small[1].src;
     }
     img_small[2].onclick = function(){
          img_main.src = img_small[2].src;
     }

     
const product_phone = $("#pph")
     product_phone.owlCarousel({
          center: true,
          items:1,
          loop:true,
          margin:10,
          lazyLoad: true,
          responsive:{
              900:{
                  items:1
              }
          }
      });

      const rec = $("#rec")
      rec.owlCarousel({
           center: true,
           loop:true,
           margin:10,
           lazyLoad: true,
           nav:false,
           dots: false,
           responsive: {
               0: {
                    items: 2
               },
               530: {
                    items: 2
               },
               800: {
                    items: 3
               },
               1000: {
                    items: 3.8
               },
               1200: {
                    items: 5
               },
          }
       });
