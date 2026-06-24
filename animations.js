// ======================================
// ANIMATIONS.JS
// Premium Scroll Animation
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // ELEMENTS TO REVEAL
    // ======================================

    const revealElements = document.querySelectorAll(`
        .section-header,
        .quran-card,
        .couple-card,
        .family-card,
        .timeline-item,
        .gallery-item,
        .event-card,
        .gift-card,
        .rsvp-form,
        .wish-form,
        .wish-item,
        .closing-content
    `);

    // ======================================
    // INTERSECTION OBSERVER
    // ======================================

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "fade-up"
                    );

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach((el) => {

        el.style.opacity = "0";

        observer.observe(el);

    });

    // ======================================
    // SPARKLE EFFECT
    // ======================================

    createSparkles();

});


/* ======================================
   SPARKLES
====================================== */

function createSparkles() {

    const sparkleContainer =
        document.createElement("div");

    sparkleContainer.id =
        "sparkleContainer";

    document.body.appendChild(
        sparkleContainer
    );

    Object.assign(
        sparkleContainer.style,
        {
            position: "fixed",
            inset: "0",
            pointerEvents: "none",
            zIndex: "1"
        }
    );

    setInterval(() => {

        const sparkle =
            document.createElement(
                "div"
            );

        sparkle.innerHTML = "✦";

        Object.assign(
            sparkle.style,
            {
                position: "absolute",

                left:
                    Math.random() *
                        window.innerWidth +
                    "px",

                top:
                    window.scrollY +
                    window.innerHeight +
                    "px",

                color:
                    "#d9b56d",

                fontSize:
                    Math.random() * 12 +
                    10 +
                    "px",

                opacity: ".8",

                transition:
                    "all 4s linear"
            }
        );

        sparkleContainer.appendChild(
            sparkle
        );

        requestAnimationFrame(() => {

            sparkle.style.transform =
                `translateY(-400px)`;

            sparkle.style.opacity =
                "0";

        });

        setTimeout(() => {

            sparkle.remove();

        }, 4000);

    }, 800);

}


/* ======================================
   BACK TO TOP INITIAL
====================================== */

window.addEventListener("load", () => {

    const backToTop =
        document.getElementById(
            "backToTop"
        );

    if (backToTop) {

        backToTop.style.display =
            "none";

    }

});
