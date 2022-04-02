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

const prevArrow = document.querySelector('#highlights-carousel carousel-control-prev')
const nextArrow = document.querySelector('#highlights-carousel carousel-control-next')

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
        991.98: {
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
}).mount(window.splide.Extensions);