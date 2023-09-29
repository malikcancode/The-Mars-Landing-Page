let moon = document.getElementById("moon");
let stones = document.getElementById("stones");

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});


gsap.registerPlugin("to");

function animateImage(id, duration) {
    const element = document.getElementById(id);

    function animate() {
        gsap.to(element, {
            x: "100%",
            duration: duration,
            ease: "linear",
            onComplete: resetPosition,
        });
    }

    function resetPosition() {
        gsap.set(element, { x: "-100%" });
        animate();
    }

    animate();
}

animateImage("stars", 30);
animateImage("stones", 10);


const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

const radius = 400;
let angle = 0;

const image = document.getElementById('moon');

const animation = gsap.to(image, {
    duration: 3,
    repeat: -1,
    ease: 'linear',

    onUpdate: () => {
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        gsap.set(image, { x, y });

        angle += 0.01;
    },
});



document.addEventListener('DOMContentLoaded', () => {
    const movingImage = document.getElementById('sat');
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: movingImage,
            scroller: "body",
            start: 'top center',
            end: 'bottom center',
            scrub: true,
        },
    });

    tl.fromTo(
        movingImage,
        { x: 300, opacity: 0, rotate: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power2.inOut', rotate: 360 }
    );
});


