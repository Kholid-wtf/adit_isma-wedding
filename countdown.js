// ======================================
// COUNTDOWN.JS
// Adit & Isma Wedding
// 05 Juli 2026 - 09:00 WIB
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // ELEMENT
    // ======================================

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    // ======================================
    // TARGET DATE
    // ======================================

    const weddingDate =
        new Date("2026-07-05T09:00:00");


    // ======================================
    // FORMAT ANGKA
    // ======================================

    const formatNumber = (number) => {

        return number
            .toString()
            .padStart(2, "0");

    };


    // ======================================
    // UPDATE COUNTDOWN
    // ======================================

    function updateCountdown() {

        const now = new Date();

        const distance =
            weddingDate.getTime() -
            now.getTime();

        // ==================================
        // ACARA SUDAH SELESAI
        // ==================================

        if (distance <= 0) {

            if (daysElement)
                daysElement.textContent = "00";

            if (hoursElement)
                hoursElement.textContent = "00";

            if (minutesElement)
                minutesElement.textContent = "00";

            if (secondsElement)
                secondsElement.textContent = "00";

            return;

        }

        // ==================================
        // PERHITUNGAN
        // ==================================

        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (
                    distance %
                    (1000 * 60)
                ) /
                1000
            );

        // ==================================
        // UPDATE UI
        // ==================================

        if (daysElement)
            daysElement.textContent =
                formatNumber(days);

        if (hoursElement)
            hoursElement.textContent =
                formatNumber(hours);

        if (minutesElement)
            minutesElement.textContent =
                formatNumber(minutes);

        if (secondsElement)
            secondsElement.textContent =
                formatNumber(seconds);

    }


    // ======================================
    // START
    // ======================================

    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );

});
