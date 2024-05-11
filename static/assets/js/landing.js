import { Splide } from 'https://cdn.jsdelivr.net/npm/@splidejs/splide@3/+esm'
import { Intersection } from 'https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-intersection@0/+esm'
import { AutoScroll } from 'https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0/+esm'


/* =============================================================
                           USER COUNT                           
============================================================= */

fetch("https://scratchaddons.com/usercount.json").then(res => res.json()).then(({count}) => {
    const callback = (entries) => {
        if (entries[0].intersectionRatio <= 0) return;
        document.querySelector("#total-users").innerText = count;
        observer.unobserve(document.querySelector("#total-users"))
    }
    const observer = new IntersectionObserver(callback, {root: null});
    observer.observe(document.querySelector("#total-users"))
})

/* =============================================================
                      HIGHLIGHTS CAROUSEL
============================================================= */

Splide.defaults = {
    i18n: window.i18nSplide
};

new Splide('#highlights-carousel', {
    type: 'loop',
    perPage: 5,
    perMove: 1,
    gap: '0.5rem',
    breakpoints: {
        1399.98: {
            perPage: 4,
        },
        1199.98: {
            perPage: 3,
        },
        767.98: {
            perPage: 2,
        },
        575.98: {
            perPage: 1,
        }

    },
    autoScroll: {
        speed: 1,
    },
    // arrows: { 
    //     prev: prevArrow,
    //     next: nextArrow,
    // }
}).mount({ AutoScroll });

$(() => {

    new Splide('#intro-carousel', {
        type: 'loop',
        perMove: 1,
        start: 1,
        autoplay: 'pause',
        intersection: {
            inView: {
                autoplay: true,
            },
            outView: {
                autoplay: false,
            },
        },
        interval: 4000,
        pauseOnHover: true,
        // arrows: { 
        //     prev: prevArrow,
        //     next: nextArrow,
        // }
    }).mount({ Intersection });

})