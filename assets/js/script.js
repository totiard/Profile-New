const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function () {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

toTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};