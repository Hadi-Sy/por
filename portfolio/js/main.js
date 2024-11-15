let observer = new IntersectionObserver((ent) => {
    ent.forEach((ent) => {
        if (ent.isIntersecting) {
            ent.target.classList.add(`show`);
        }
        else {
            ent.target.classList.remove(`show`);
        }
    })
})

let hiddenelem = document.querySelectorAll(`.hidden`)
hiddenelem.forEach((el) => observer.observe(el));

let loader = document.getElementById("preloader");
window.addEventListener("load", () => {
    loader.style.display = "none";
})
