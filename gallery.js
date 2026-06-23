// ======================================
// GALLERY.JS PREMIUM V2
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const images =
        document.querySelectorAll(
            ".gallery-item img"
        );

    if (!images.length) return;

    let currentIndex = 0;

    const lightbox =
        document.createElement("div");

    lightbox.id = "galleryLightbox";

    lightbox.innerHTML = `
        <span id="lightboxClose">&times;</span>

        <button id="galleryPrev">
            &#10094;
        </button>

        <img id="lightboxImage">

        <button id="galleryNext">
            &#10095;
        </button>
    `;

    document.body.appendChild(
        lightbox
    );

    // ============================
    // STYLE
    // ============================

    Object.assign(
        lightbox.style,
        {
            position: "fixed",
            inset: "0",
            background:
                "rgba(0,0,0,.95)",
            display: "none",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "99999"
        }
    );

    const img =
        document.getElementById(
            "lightboxImage"
        );

    Object.assign(
        img.style,
        {
            maxWidth: "90%",
            maxHeight: "90%",
            borderRadius: "18px",
            transition:
                "all .3s ease"
        }
    );

    const close =
        document.getElementById(
            "lightboxClose"
        );

    Object.assign(
        close.style,
        {
            position: "absolute",
            top: "20px",
            right: "30px",
            fontSize: "50px",
            color: "#fff",
            cursor: "pointer",
            zIndex: "2"
        }
    );

    const prev =
        document.getElementById(
            "galleryPrev"
        );

    const next =
        document.getElementById(
            "galleryNext"
        );

    [prev, next].forEach(btn => {

        Object.assign(
            btn.style,
            {
                position: "absolute",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "45px",
                cursor: "pointer"
            }
        );

    });

    prev.style.left = "20px";
    next.style.right = "20px";

    // ============================
    // FUNCTIONS
    // ============================

    function showImage(index) {

        currentIndex = index;

        img.src =
            images[index].src;

        lightbox.style.display =
            "flex";

        document.body.style.overflow =
            "hidden";

    }

    function closeLightbox() {

        lightbox.style.display =
            "none";

        document.body.style.overflow =
            "auto";

    }

    function nextImage() {

        currentIndex++;

        if (
            currentIndex >=
            images.length
        ) {

            currentIndex = 0;

        }

        img.src =
            images[currentIndex].src;

    }

    function prevImage() {

        currentIndex--;

        if (
            currentIndex < 0
        ) {

            currentIndex =
                images.length - 1;

        }

        img.src =
            images[currentIndex].src;

    }

    // ============================
    // EVENTS
    // ============================

    images.forEach(
        (image, index) => {

            image.addEventListener(
                "click",
                () => {

                    showImage(
                        index
                    );

                }
            );

        }
    );

    close.addEventListener(
        "click",
        closeLightbox
    );

    next.addEventListener(
        "click",
        nextImage
    );

    prev.addEventListener(
        "click",
        prevImage
    );

    lightbox.addEventListener(
        "click",
        (e) => {

            if (
                e.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );

    document.addEventListener(
        "keydown",
        (e) => {

            if (
                lightbox.style.display !==
                "flex"
            ) return;

            if (
                e.key ===
                "Escape"
            ) {

                closeLightbox();

            }

            if (
                e.key ===
                "ArrowRight"
            ) {

                nextImage();

            }

            if (
                e.key ===
                "ArrowLeft"
            ) {

                prevImage();

            }

        }
    );

});
