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

//whatsapp/about-me
function openWhatsApp () {
    var phoneNumber = '8740861925';
    window.open( 'https://api.whatsapp.com/send?phone=' + phoneNumber, '_blank' );
}

//telegram/about-me
function openTelegram () {
    var username = 'himank17';
    window.open( 'https://t.me/' + username, '_blank' );
}

//github/about-me
function openGitHubProfile () {
    var username = 'HimankArora';
    window.open( 'https://github.com/' + username, '_blank' );
}

//fb/about-me
function openFacebookProfile () {
    var username = 'himank.arora.ha';
    window.open( 'https://www.facebook.com/' + username, '_blank' );
}

//insta/about-me
function openInstagramProfile () {
    var username = 'himank_009';
    window.open( 'https://www.instagram.com/' + username, '_blank' );
}