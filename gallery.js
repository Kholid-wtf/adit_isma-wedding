// ======================================
// GALLERY.JS
// Premium Lightbox Gallery
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const galleryImages =
        document.querySelectorAll(
            ".gallery-item img"
        );

    if (!galleryImages.length) return;

    // ======================================
    // LIGHTBOX
    // ======================================

    const lightbox =
        document.createElement("div");

    lightbox.id = "galleryLightbox";

    lightbox.innerHTML = `
        <span id="lightboxClose">&times;</span>
        <img id="lightboxImage" src="">
    `;

    document.body.appendChild(
        lightbox
    );

    // ======================================
    // STYLE
    // ======================================

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
            zIndex: "99999",
            padding: "20px"
        }
    );

    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );

    Object.assign(
        lightboxImage.style,
        {
            maxWidth: "95%",
            maxHeight: "95%",
            borderRadius: "20px",
            border:
                "2px solid rgba(217,181,109,.5)"
        }
    );

    const closeButton =
        document.getElementById(
            "lightboxClose"
        );

    Object.assign(
        closeButton.style,
        {
            position: "absolute",
            top: "25px",
            right: "30px",
            color: "#fff",
            fontSize: "50px",
            cursor: "pointer",
            fontWeight: "700"
        }
    );

    // ======================================
    // OPEN
    // ======================================

    galleryImages.forEach((image) => {

        image.addEventListener(
            "click",
            () => {

                lightbox.style.display =
                    "flex";

                lightboxImage.src =
                    image.src;

                document.body.style
                    .overflow =
                    "hidden";

            }
        );

    });

    // ======================================
    // CLOSE
    // ======================================

    function closeLightbox() {

        lightbox.style.display =
            "none";

        document.body.style
            .overflow =
            "auto";

    }

    closeButton.addEventListener(
        "click",
        closeLightbox
    );

    lightbox.addEventListener(
        "click",
        (e) => {

            if (e.target === lightbox) {

                closeLightbox();

            }

        }
    );

    // ======================================
    // ESC KEY
    // ======================================

    document.addEventListener(
        "keydown",
        (e) => {

            if (
                e.key === "Escape"
            ) {

                closeLightbox();

            }

        }
    );

});