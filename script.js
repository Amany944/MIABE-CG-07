const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    const isHidden = mobileMenu.classList.contains("hidden");

    // 🔼 Scroll seulement si on ouvre le menu
    if (isHidden) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // attendre la fin du scroll
        setTimeout(() => {
            mobileMenu.classList.remove("hidden");
        }, 300);

    } else {
        // fermer directement
        mobileMenu.classList.add("hidden");
    }
});