function Upload() {
    document.getElementById("comein").style.display = "block";
    document.getElementById("remove").style.display = "none";
}
function reload() {
    document.getElementById("comein").style.display = "none";
    document.getElementById("remove").style.display = "block";
}

// mobile menu (hamburger)
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('nav-links');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });
})();
