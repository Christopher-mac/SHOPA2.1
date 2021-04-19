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
          responsive:{
              900:{
                  items:1
              }
          }
      });

 
