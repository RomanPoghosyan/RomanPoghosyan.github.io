let first = document.querySelector("#first");
let firstRect = first.getBoundingClientRect();
let second = document.querySelector("#second");
let secondRect = second.getBoundingClientRect();

window.addEventListener("scroll", function(){
    let windScroll = window.scrollY;
    console.log(windScroll);
    if(windScroll > firstRect.top - window.pageYOffset){
        document.querySelectorAll(".firstEdu").forEach(function (el) {
            el.style.marginRight = "0px";
        });
        document.querySelector(".firstPlace").style.marginLeft = "0px";
    }
    if(windScroll > secondRect.top - window.pageYOffset){
        document.querySelectorAll(".secondEdu").forEach(function (el) {
            el.style.marginRight = "0px";
        });
        document.querySelector(".secondPlace").style.marginLeft = "0px";
    }
})