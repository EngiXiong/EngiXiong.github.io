



var blobInside = document.getElementById("blobInside");



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



// storeButton = document.getElementById("store");
// storeMenu = document.getElementById("storeMenu");
// body = document.getElementsByTagName("body")[0];
// blob = document.getElementsByClassName("blob")[0];
// state = false;

// let animationFinished = true;

// storeButton.addEventListener("click", (e) => {
//     e.stopPropagation(); // Stop event propagation to body
//     if (animationFinished) {
//         state = !state;
//         if (state) {
//             storeMenu.style.display = "block";
//             storeMenu.classList.remove("store-menu-gone");
//         } else {
//             storeMenu.classList.add("store-menu-gone");
//         }
//         animationFinished = false;
//     }
// });

// body.addEventListener("click", (e) => {
//     if (state == true) {
//         if (animationFinished) {
//             animationFinished = false;
//             storeMenu.classList.add("store-menu-gone");
//             state = !state;
//         }
//     }
// });

// storeMenu.addEventListener("animationend", () => {
//     animationFinished = true;
// });









