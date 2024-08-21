var active = 3;

// Here we have selected all mincircle and it return as all the the mincircle in the form of nodelist so to access the 3 element we have to do mincircle[active - 1] 
var mincircle = document.querySelectorAll(".mincircle")
var second = document.querySelectorAll(".second")

// starting opacity of only one mincircle & one second will be one
gsap.to(mincircle[active - 1], {
    opacity: .8
});


gsap.to(second[active - 1], {
    opacity: 1
});

mincircle.forEach(function (val, index) {
    val.addEventListener("click", function () {

        gsap.to("#circle", {
            rotate: (3 - (index + 1)) * 10,
            ease: Expo.easeInOut,
            duration: 1

        })
        greyOut();
        gsap.to(this, {
            opacity: .8,

        })
        gsap.to(second[index], {
            opacity: 1
        })
    })
})


function greyOut() {
    gsap.to(mincircle, {
        opacity: .1
    })

    gsap.to(second, {
        opacity: .5
    })
}

gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})