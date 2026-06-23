// ======================================
// GUEST.JS PREMIUM
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const guestNameElement =
        document.getElementById("guestName");

    const rsvpNameInput =
        document.getElementById("rsvpName");

    const wishNameInput =
        document.getElementById("wishName");

    const params =
        new URLSearchParams(
            window.location.search
        );

    let guestName =
        params.get("to") ||
        params.get("guest") ||
        params.get("nama");

    function formatName(name) {

        if (!name)
            return "Tamu Undangan";

        return decodeURIComponent(name)
            .replace(/\+/g, " ")
            .trim()
            .split(" ")
            .map(word =>
                word.charAt(0).toUpperCase() +
                word.slice(1)
            )
            .join(" ");

    }

    guestName =
        formatName(guestName);

    if (guestNameElement) {

        guestNameElement.textContent =
            guestName;

    }

    if (rsvpNameInput) {

        rsvpNameInput.value =
            guestName ===
            "Tamu Undangan"
                ? ""
                : guestName;

    }

    if (wishNameInput) {

        wishNameInput.value =
            guestName ===
            "Tamu Undangan"
                ? ""
                : guestName;

    }

});
