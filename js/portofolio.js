window.onload = () => {
    window.scrollTo(0,0);
}

// Search
// function Search() {
//     let sch = document.getElementById("search");
//     if(sch.style.width == "160px") {
//         sch.style.width = "0";
//     } else {
//         sch.style.width = "160px";
//     }   
// }
// Search

// span first
// let sp = document.getElementById("span-first");
// if (scrollY === 0) {
//     sp.style.display = "block";
// } else {
//     sp.style.display = "block";
// }
// span first

// main display
// let last = 0;
// let counter = 0;
// let main = document.getElementById("main");
// let index = document.getElementById("index");
// window.onscroll = _ => {
//     let post = this.scrollY;
//     if (post > last){
//         // down
//         if (counter < -79.8) {
//             counter == -79.8;
//         }
//         if (counter > -79.8) {
//             counter-= 9.1;
//         }
//     } else {
//         // up
//         if (counter > 0) {
//             counter == 0;
//         }
//         if (counter < 0 ) {
//             counter+= 9.1;
//         }
//         if (scrollY == 0 && counter != 0) {
//             counter = 0;
//         }
//     }
//     main.style.transform = "translateY(" + counter + "%)";
//     last = post;
// }

let last = 0;
let main = document.getElementById("main");
window.onscroll = () => {
    let post = this.scrollY;
    if (post > last){
        // down
        if (main.style.top != "74.5px") {
            window.scrollTo(0,.4);
        }
        main.style.top = "74.5px";
    } else {
        // up
        main.style.top = "100vh";
    }
}
// main display

// scroll btn
function btnScrolling() {
    main.style.top = "74.5px";
    window.scrollTo(0,.4);
    let last = 0;
    window.onscroll = () => {
        let post = this.scrollY;
        if (post > last){
            // down
            main.style.top = "74.5px";
        } else {
            // up
            main.style.top = "100vh";
        }
    }
}
// scroll btn