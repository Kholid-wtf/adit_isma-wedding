// ======================================
// MUSIC.JS
// Adit & Isma Wedding
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // AUDIO ELEMENT
    // ======================================

    const audio =
        document.getElementById("backgroundMusic");

    if (!audio) return;

    // ======================================
    // DEFAULT SETTINGS
    // ======================================

    audio.loop = true;
    audio.volume = 0.35;

    // ======================================
    // CREATE FLOATING BUTTON
    // ======================================

    const musicButton =
        document.createElement("button");

    musicButton.id = "musicToggle";

    musicButton.innerHTML = "♫";

    document.body.appendChild(
        musicButton
    );

    // ======================================
    // BUTTON STYLE
    // ======================================

    Object.assign(
        musicButton.style,
        {

            position: "fixed",

            left: "20px",

            bottom: "20px",

            width: "55px",

            height: "55px",

            borderRadius: "50%",

            border: "none",

            background:
                "#d9b56d",

            color:
                "#07111f",

            fontSize:
                "24px",

            fontWeight:
                "700",

            cursor:
                "pointer",

            zIndex:
                "9999",

            boxShadow:
                "0 10px 30px rgba(217,181,109,.35)",

            display:
                "flex",

            alignItems:
                "center",

            justifyContent:
                "center"

        }
    );

    // ======================================
    // ICON UPDATE
    // ======================================

    function updateButton() {

        if (audio.paused) {

            musicButton.innerHTML = "♫";

            musicButton.style.opacity =
                ".65";

        } else {

            musicButton.innerHTML = "❚❚";

            musicButton.style.opacity =
                "1";

        }

    }

    updateButton();

    // ======================================
    // TOGGLE MUSIC
    // ======================================

    musicButton.addEventListener(
        "click",
        async () => {

            try {

                if (audio.paused) {

                    await audio.play();

                } else {

                    audio.pause();

                }

                updateButton();

            } catch (error) {

                console.log(
                    "Music Error:",
                    error
                );

            }

        }
    );

    // ======================================
    // AUTO START
    // ======================================

    const openButton =
        document.getElementById(
            "openInvitationBtn"
        );

    if (openButton) {

        openButton.addEventListener(
            "click",
            async () => {

                try {

                    await audio.play();

                    updateButton();

                } catch (error) {

                    console.log(
                        error
                    );

                }

            }
        );

    }

    // ======================================
    // PAGE VISIBILITY
    // ======================================

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                return;

            }

            updateButton();

        }
    );

});