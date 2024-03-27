
function myFunction(x) {
  if (x < 450) { // If media query matches
   
    page4media405();

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 40,
    
    });
}

    else if(x < 900 || x > 700  ) {
        // page4media405();
 page4Animation();
   
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
        
        });
    }
    else if(x < 700 || x > 500) {
        // page4media405();
 page4Animation();
   
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 35,
        
        });
    }
    
   else {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 50,
    
    });
    
   c
  }
}

// Create a MediaQueryList object
// var x = window.matchMedia("(max-width: 435px)")
var x = window.innerWidth;

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});





function page4Animation() {
    var elems = document.querySelectorAll(".elem")

    var elemC = document.querySelector("#container")
    var fixed = document.querySelector("#fixed-img")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
        fixed.style.pointerEvents= "none";
        elems.forEach(function (e) {
            e.addEventListener("mouseenter", function () {
                var image = e.getAttribute("fix-img")
                fixed.style.backgroundImage = `url(${image})`
                
            })
        })
        
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    
}
function page4media405(){
    var fixed = document.querySelector("#fixed-img")
    var elemC = document.querySelector("#container")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "none"
        fixed.style.pointerEvents= "none";
        
    })
}


