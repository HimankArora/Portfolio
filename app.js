//for typing animation effect
var typing = new Typed( ".text", {
    strings: ["", "Hello World!"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
} );


gsap.registerPlugin( ScrollTrigger );

let horizontalSection = document.querySelector( '.horizontal' );

console.log( horizontalSection.scrollWidth );

gsap.to( '.horizontal', {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
        trigger: '.horizontal',
        start: 'center center',
        end: '+=2000px',
        pin: '.horizontal-scoll',
        scrub: true,
        invalidateOnRefresh: true
    }
} );
