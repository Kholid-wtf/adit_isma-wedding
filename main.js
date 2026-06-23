// ======================================
// MAIN.JS (UPGRADED FINAL)
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const data = window.weddingData;

    const loadingScreen = document.getElementById("loading-screen");
    const openButton = document.getElementById("openInvitationBtn");
    const mainContent = document.getElementById("mainContent");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const backToTop = document.getElementById("backToTop");
    const copyBtn = document.getElementById("copyRekeningBtn");

    // ======================================
    // 🔥 SET DATA KE HTML (INI INTI)
    // ======================================

    // TITLE
    document.title = data.opening.names + " Wedding Invitation";

    // OPENING
    setText("openingTitle", data.opening.title);
    setText("openingNames", data.opening.names);
    setText("openingDate", data.opening.date);
    setText("openingText", data.opening.text);

    // HERO
    setImage("heroImage", data.hero.image);
    setText("heroTitle", data.opening.title);
    setText("heroNames", data.opening.names);
    setText("heroDate", data.opening.date);

    // QURAN
    setText("quranArabic", data.quran.arab);
    setText("quranTranslation", data.quran.translation);
    setText("quranSource", data.quran.source);

    // COUPLE
    setImage("bridePhoto", data.couple.bride.photo);
    setText("brideName", data.couple.bride.fullName);
    setText("brideFather", data.couple.bride.father);
    setText("brideMother", data.couple.bride.mother);

    setImage("groomPhoto", data.couple.groom.photo);
    setText("groomName", data.couple.groom.fullName);
    setText("groomFather", data.couple.groom.father);
    setText("groomMother", data.couple.groom.mother);
/*
    // FAMILY
    const brideList = document.getElementById("familyBride");
    const groomList = document.getElementById("familyGroom");

    data.families.bride.forEach(item => {
        brideList.innerHTML += `<li>${item}</li>`;
    });

    data.families.groom.forEach(item => {
        groomList.innerHTML += `<li>${item}</li>`;
    });
*/
    // MUSIC
    if (backgroundMusic) {
        backgroundMusic.src = data.music.file;
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

            const openingSection =
                document.getElementById("opening-section");

            document.body.classList.add("invitation-open");

            if (openingSection) openingSection.style.display = "none";
            if (mainContent) mainContent.style.display = "block";

            if (backgroundMusic) {
                backgroundMusic.play().catch(() => {});
            }

            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ======================================
    // COPY REKENING
    // ======================================

    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
            try {

                await navigator.clipboard.writeText(
                    data.gift.accountNumber
                );

                copyBtn.innerText = "Tersalin ✓";

                setTimeout(() => {
                    copyBtn.innerText = "Salin Rekening";
                }, 2000);

            } catch {
                alert("Gagal menyalin");
            }
        });
    }

    // ======================================
    // BACK TO TOP
    // ======================================

    if (backToTop) {

        window.addEventListener("scroll", () => {
            backToTop.style.display =
                window.scrollY > 500 ? "flex" : "none";
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
    // PRELOAD GALLERY (DARI DATA)
    // ======================================

    data.gallery.forEach(src => {
        const img = new Image();
        img.src = src;
    });

});

// ======================================
// 🔧 HELPER FUNCTION (BIAR CLEAN)
// ======================================

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
}

function setImage(id, src) {
    const el = document.getElementById(id);
    if (el) el.src = src;
}
