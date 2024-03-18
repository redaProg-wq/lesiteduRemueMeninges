


// variables pour l'effet d'apparition dans la value proposition //

const valuePInvisible = document.querySelectorAll(".invisible");


// traitements pour rendre visible la value proposition

valuePInvisible.forEach(item => {
    setTimeout(() => {
        item.classList.remove("invisible")
        item.classList.add("visible");
    }, 1000);
});
