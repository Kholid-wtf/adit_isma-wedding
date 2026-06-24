// ======================================
// MAIN.JS
// Adit & Isma Wedding
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.getElementById("loading-screen");
    const openButton = document.getElementById("openInvitationBtn");
    const mainContent = document.getElementById("mainContent");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const backToTop = document.getElementById("backToTop");
    const copyBtn = document.getElementById("copyRekeningBtn");

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

            const openingSection =
                document.getElementById("opening-section");

            document.body.classList.add(
                "invitation-open"
            );

            if (openingSection) {

                openingSection.style.display = "none";

            }

            if (mainContent) {

                mainContent.style.display = "block";

            }

            try {

                backgroundMusic.play();

            } catch (err) {

                console.log(err);

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

   // ======================================
// COPY REKENING
// ======================================

const copyAccountBtn =
    document.getElementById(
        "copyAccount"
    );

if(copyAccountBtn){

    copyAccountBtn.addEventListener(
        "click",
        async () => {

            const rekening =
                document
                .getElementById(
                    "accountNumber"
                )
                ?.textContent
                .trim();

            if(!rekening) return;

            try{

                await navigator
                    .clipboard
                    .writeText(
                        rekening
                    );

                copyAccountBtn.innerHTML =
                    "✓ Berhasil Disalin";

                setTimeout(() => {

                    copyAccountBtn.innerHTML =
                    "Salin Nomor Rekening";

                },2000);

            }catch(err){

                alert(
                    "Gagal menyalin nomor rekening"
                );

            }

        }
    );

}


    // ======================================
    // BACK TO TOP
    // ======================================

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.style.display = "flex";

            } else {

                backToTop.style.display = "none";

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
    // AOS INIT
    // ======================================

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1200,

            once: true,

            offset: 100

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

    galleryImages.forEach((src) => {

        const img = new Image();

        img.src = src;

    });

});
