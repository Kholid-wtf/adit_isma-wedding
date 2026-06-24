// ======================================
// GUEST.JS
// Nama Tamu Otomatis dari URL
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // AMBIL PARAMETER URL
    // ======================================

    const params = new URLSearchParams(
        window.location.search
    );

    const guestNameElement =
        document.getElementById("guestName");

    const rsvpNameInput =
        document.getElementById("rsvpName");

    const wishNameInput =
        document.getElementById("wishName");

    // ======================================
    // FORMAT NAMA
    // ======================================

    const formatGuestName = (name) => {

        if (!name) return "";

        return name
            .replace(/\+/g, " ")
            .replace(/%20/g, " ")
            .trim();

    };

    // ======================================
    // PRIORITAS PARAMETER
    // ?to=
    // ======================================

    let guestName = params.get("to");

    if (!guestName) {

        guestName = params.get("guest");

    }

    if (!guestName) {

        guestName = params.get("nama");

    }

    guestName = formatGuestName(guestName);

    // ======================================
    // TAMPILKAN KE HALAMAN
    // ======================================

    if (guestName) {

        if (guestNameElement) {

            guestNameElement.textContent =
                guestName;

        }

        if (rsvpNameInput) {

            rsvpNameInput.value =
                guestName;

        }

        if (wishNameInput) {

            wishNameInput.value =
                guestName;

        }

    } else {

        if (guestNameElement) {

            guestNameElement.textContent =
                "Tamu Undangan";

        }

    }

});


// ======================================
// CONTOH LINK
// ======================================

// ?to=Manda
// ?to=Kevin
// ?to=Kholid
// ?to=Pak%20Asep%20Supir
// ?to=Teh%20Lia
