let one = document.getElementById("one");
let two = document.getElementById("two");

let string1 = "Kevin Xiong";
let string2 = "Early Access V. 0.0.0";

let risingNumbers1 = [];
let opacityAmount1 = [];
let riseEnd1 = false;
let secondArr1 = document.createElement("p");

let risingNumbers2 = [];
let opacityAmount2 = [];
let riseEnd2 = false;
let secondArr2 = document.createElement("p");

let riseAmount1 = 1.7;
let riseAmount2 = 0.6;
roof1 = 7;
roof2 = 4;

function scrollToTopWithDelay() {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 100); // Adjust the delay (in milliseconds) as needed
}


window.addEventListener("load", (event) => {
for (let i = 0; i < string1.length; i++) {
    risingNumbers1[i] = 0.1 / (i + 1);
    opacityAmount1[i] = 0.02 / (i + 1);
    one.innerHTML += `<span style="position: relative; opacity:${opacityAmount1[i]}; bottom: ${risingNumbers1[i]}vw">${string1[i]}</span>`;
}

for (let i = 0; i < string2.length; i++) {
    risingNumbers2[i] = 0.1 / (i + 1);
    opacityAmount2[i] = 0.02 / (i + 1);
    two.innerHTML += `<span style="position: relative; opacity:${opacityAmount2[i]}; bottom: ${risingNumbers2[i]}vw">${string2[i]}</span>`;
}


var blobInside = document.getElementById("blobInside"); // Replace "blobInside" with the actual ID of your element

// var scrolledPast100px = false;

// function checkScrollPosition() {
//     var currentScrollPosition = window.scrollY;

//     if (!scrolledPast100px && currentScrollPosition >= 800) {
//         // blobInside.animate({
//         //     backgroundImage: "linear-gradient(#27ffff, rgb(87, 249, 255), #0e5aff)"

//         // }, {
//         //     duration: 500, fill: "forwards"
//         // });
//         // blobInside.style.animation="colorChange2 2s forwards"
//         scrolledPast100px = true;

//     } else if (scrolledPast100px && currentScrollPosition < 800) {
//         // blobInside.animate({
//         //     backgroundImage: "linear-gradient(#f4ffa0, rgb(248, 255, 122), #fff586)"
//         // }, {
//         //     duration: 500, fill: "forwards"
//         // });
//         blobInside.style.animation="colorChange1 2s forwards"
//         scrolledPast100px = false;
//     }
// }

// window.addEventListener('scroll', checkScrollPosition);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


moblieNavBar = document.getElementsByClassName("mobile-nav-bar")[0]
stickContainer = document.getElementsByClassName("stick-container")[0];
mobileContents = document.getElementsByClassName("mobile-nav-bar-contents")[0];
stick1 = document.getElementById("stick1");
stick2 = document.getElementById("stick2");
stick3 = document.getElementById("stick3");

stickContainer.addEventListener("mousedown", e => {
    if (mobileContents.style.display == 'none' || mobileContents.style.display == "") {
        mobileContents.style.display = 'flex';
        stickContainer.style.transform = "rotate(45deg)";
        stick2.classList.add("disappear");
        stick2.classList.remove("appear");
        stick1.style.transform = "translate(0,6.75px) rotate(90deg)";
        stick3.style.transform = "translate(0,-6.75px)";


    } else {
        mobileContents.style.display = 'none';
        stickContainer.style.transform = "rotate(0deg)";
        stick2.classList.remove("disappear");
        stick2.classList.add("appear");
        stick1.style.transform = "translate(0,0px)";
        stick3.style.transform = "translate(0,0px)";


    }

})

body = document.getElementsByTagName("body")[0];
div = document.getElementsByClassName("blob");
body.addEventListener("mousemove", e => {
    // ig it just returns
    for (i = 0; i < div.length; i++) {
        divProperties = div[i].getBoundingClientRect();
        div[i].animate({
            left: e.clientX + "px",
            top: e.clientY + "px"
        }, {
            duration: 3000, fill: "forwards"
        });
    }
});
body.addEventListener("load", e => {
    // ig it just returns
    for (i = 0; i < div.length; i++) {
        divProperties = div[i].getBoundingClientRect();
        div[i].animate({
            left: e.clientX + "px",
            top: e.clientY + "px"
        }, {
            duration: 3000, fill: "forwards"
        });
    }
});

function myFunction() {

    if (window.innerWidth > 1132) {
        moblieNavBar.style.display = "none";
        mobileContents.style.display = "none"
    }
    else {
        moblieNavBar.style.display = "flex";
        mobileContents.style.display = "none"
    }
}


window.addEventListener("resize", myFunction);


