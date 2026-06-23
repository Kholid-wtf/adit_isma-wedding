// ======================================
// MAIN.JS
// CLEAN VERSION
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
    // LOADING
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

    if (mainContent) {

        mainContent.style.display = "none";

    }

    if (openButton) {

        openButton.addEventListener("click", () => {

            if (openingSection) {

                openingSection.style.opacity = "0";

                openingSection.style.transition =
                    "all .8s ease";

                setTimeout(() => {

                    openingSection.style.display =
                        "none";

                }, 800);

            }

            if (mainContent) {

                mainContent.style.display =
                    "block";

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

                await navigator.clipboard.writeText(
                    "8103103612"
                );

                copyBtn.innerText =
                    "Berhasil Disalin ✓";

                setTimeout(() => {

                    copyBtn.innerText =
                        "Salin Nomor Rekening";

                }, 2000);

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

        backToTop.style.display = "none";

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
    // AOS
    // ======================================

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1200,
            once: true,
            offset: 100

        });

    }

});
