const products = gsap.timeline();
products.from(".ptitle", 0.8, { opacity:0, x:-200 })
     .from(".sort", 0.8, { opacity:0, x:200 },"-=0.8")
     .from(".products", 0.8, { opacity:0, y:150 },"-=0.8")