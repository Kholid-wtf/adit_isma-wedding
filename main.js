// ======================================
// MAIN.JS
// PREMIUM WEDDING VERSION
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen =
        document.getElementById("loading-screen");

    const openButton =
        document.getElementById("openInvitationBtn");

    const openingSection =
        document.getElementById("opening-section");

    const mainContent =
        document.getElementById("mainContent");

    const backgroundMusic =
        document.getElementById("backgroundMusic");

    const backToTop =
        document.getElementById("backToTop");

    const copyBtn =
        document.getElementById("copyRekeningBtn");

    // ======================================
    // MAIN CONTENT HIDDEN
    // ======================================

    if (mainContent) {

        mainContent.style.display = "none";

    }

    // ======================================
    // LOADING SCREEN
    // ======================================

    setTimeout(() => {

        if (loadingScreen) {

            loadingScreen.style.opacity = "0";

            setTimeout(() => {

                loadingScreen.style.display = "none";

            }, 800);

        }

    }, 1800);

    // ======================================
    // OPEN INVITATION
    // ======================================

    if (openButton) {

        openButton.addEventListener("click", () => {

            if (openingSection) {

                openingSection.classList.add(
                    "opening-hide"
                );

                setTimeout(() => {

                    openingSection.style.display =
                        "none";

                }, 1000);

            }

            if (mainContent) {

                mainContent.style.display =
                    "block";

                setTimeout(() => {

                    mainContent.classList.add(
                        "content-show"
                    );

                }, 100);

            }

            if (backgroundMusic) {

                backgroundMusic.play()
                    .catch(() => {});

            }

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    // ======================================
    // COPY REKENING
    // ======================================

    if (copyBtn) {

        copyBtn.addEventListener("click", async () => {

            try {

                const rekening =
                    document.getElementById(
                        "rekeningNumber"
                    );

                await navigator.clipboard.writeText(
                    rekening.innerText
                );

                copyBtn.innerText =
                    "✓ Berhasil Disalin";

                setTimeout(() => {

                    copyBtn.innerText =
                        "Salin Nomor Rekening";

                }, 2500);

            } catch {

                alert(
                    "Gagal menyalin nomor rekening"
                );

            }

        });

    }

    // ======================================
    // BACK TO TOP
    // ======================================

    if (backToTop) {

        backToTop.style.display =
            "none";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.style.display =
                    "flex";

            } else {

                backToTop.style.display =
                    "none";

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    // ======================================
    // PRELOAD GALLERY
    // ======================================

    const galleryImages = [

        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg"

    ];

    galleryImages.forEach(src => {

        const img = new Image();

        img.src = src;

    });

    // ======================================
    // SCROLL ANIMATION
    // ======================================

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1200,
            once: true,
            offset: 120

        });

    }

    // ======================================
    // HERO PARALLAX
    // ======================================

    const heroBg =
        document.querySelector(".hero-bg");

    window.addEventListener("scroll", () => {

        if (heroBg) {

            const scrolled =
                window.pageYOffset;

            heroBg.style.transform =
                `translateY(${scrolled * 0.2}px)`;

        }

    });

});
