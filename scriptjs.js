
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function changebtn(){

var parachange = document.querySelector("#pad p");

function f111() {
    var c1 = document.querySelector(".f11")
c1.style.borderColor = "rgb(90, 85, 85)"
    c1.style.color = "rgb(234, 216, 196)"
}

function f222() {
    var c2 = document.querySelector(".f22");
     c2.style.borderColor = "rgb(90, 85, 85)"
    c2.style.color = "rgb(234, 216, 196)"
}

function f333() {
    var c3 = document.querySelector(".f33")
c3.style.borderColor = "rgb(90, 85, 85)"
    c3.style.color = "rgb(234, 216, 196)"
}

document.querySelector(".f11").addEventListener("click", function (parnt) {
    var checkmach = parnt.target;

    checkmach.style.borderColor = "red"
    checkmach.style.color = "white"
    parachange.innerHTML =`${para.parag1}`
     document.querySelector("#exrgbx img ").src=`${image.img1}`

    f222();
    f333();
})

document.querySelector(".f22").addEventListener("click", function (parnt) {
    var checkmach = parnt.target;

    checkmach.style.borderColor = "red"
    checkmach.style.color = "white"
    parachange.innerHTML =`${para.parag2}`
    document.querySelector("#exrgbx img ").src=`${image.img2}`


    f111();
    f333();
})

document.querySelector(".f33").addEventListener("click", function (parnt) {
    var checkmach = parnt.target;

    checkmach.style.borderColor = "red"
    checkmach.style.color = "white"
    parachange.innerHTML =`${para.parag3}`
    document.querySelector("#exrgbx img ").src=`${image.img3}`


    f111();
    f222();
})
}
changebtn();


var image= { img1:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg",img2:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp", img3:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg"}

var para = { parag1:"Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",parag2:"Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",parag3:"We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."}
var open_page = 0;

var page_down= document.querySelector("#nav-2")
var close_icon = document.querySelector(".gg-close")
close_icon.style.display="none"
var open_icon = document.querySelector(".gg-menu-cheese")
document.querySelector("#menu").onclick=() => {
    if(open_page==0){
page_down.style.top="0"
close_icon.style.display="block"
open_icon.style.display="none"
open_page=1;
    }
    else if(open_page==1){
        page_down.style.top="-100%"
close_icon.style.display="none"
open_icon.style.display="block"
open_page=0;
    }

}



