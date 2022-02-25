fetch("https://scratchaddons.com/usercount.json").then(res => res.json()).then(({count}) => {
    const callback = (entries) => {
        if (entries[0].intersectionRatio <= 0) return;
        setTimeout(() => document.querySelector("#total-users").innerText = count, 500);
    }
    const observer = new IntersectionObserver(callback, {root: null});
    observer.observe(document.querySelector("#total-users"))
})
