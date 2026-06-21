// ======================================
// FIRESTORE.JS
// RSVP + Wishes Realtime
// ======================================

import { db } from "./firebase-config.js";

import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";


// ======================================
// COLLECTIONS
// ======================================

const rsvpCollection =
    collection(db, "rsvp");

const wishesCollection =
    collection(db, "wishes");


// ======================================
// RSVP FORM
// ======================================

const rsvpForm =
    document.getElementById("rsvpForm");

if (rsvpForm) {

    rsvpForm.addEventListener(
        "submit",
        async (e) => {

            e.preventDefault();

            const name =
                document
                .getElementById("rsvpName")
                ?.value
                .trim();

            const status =
                document
                .getElementById("attendance")
                ?.value;

            if (!name || !status) {

                alert(
                    "Mohon lengkapi data."
                );

                return;
            }

            try {

                await addDoc(
                    rsvpCollection,
                    {
                        name,
                        status,
                        createdAt:
                            serverTimestamp()
                    }
                );

                alert(
                    "Konfirmasi kehadiran berhasil dikirim ❤️"
                );

                rsvpForm.reset();

           } catch (error) {

    console.error(error);

    alert(
        "RSVP Error: " + error.message
    );

}
        }
    );

}


// ======================================
// WISH FORM
// ======================================

const wishForm =
    document.getElementById(
        "wishForm"
    );

if (wishForm) {

    wishForm.addEventListener(
        "submit",
        async (e) => {

            e.preventDefault();

            const name =
                document
                .getElementById("wishName")
                ?.value
                .trim();

            const message =
                document
                .getElementById("wishMessage")
                ?.value
                .trim();

            if (!name || !message) {

                alert(
                    "Silakan isi nama dan ucapan."
                );

                return;
            }

            try {

                await addDoc(
                    wishesCollection,
                    {
                        name,
                        message,
                        createdAt:
                            serverTimestamp()
                    }
                );

                alert(
                    "Ucapan berhasil dikirim ❤️"
                );

                wishForm.reset();

            } catch (error) {

                console.error(error);

                alert(
                    "Gagal mengirim ucapan."
                );

            }

        }
    );

}


// ======================================
// REALTIME WISHES
// ======================================

const wishList =
    document.getElementById(
        "wishList"
    );

if (wishList) {

    const wishesQuery =
        query(
            wishesCollection,
            orderBy(
                "createdAt",
                "desc"
            )
        );

    onSnapshot(
        wishesQuery,
        (snapshot) => {

            wishList.innerHTML = "";

            snapshot.forEach(
                (doc) => {

                    const data =
                        doc.data();

                    const item =
                        document.createElement(
                            "div"
                        );

                    item.classList.add(
                        "wish-item"
                    );

                    item.innerHTML = `
                        <h4>${data.name}</h4>
                        <p>${data.message}</p>
                    `;

                    wishList.appendChild(
                        item
                    );

                }
            );

        }
    );

}
// ======================================
// REALTIME RSVP
// ======================================

const rsvpList =
    document.getElementById(
        "rsvpList"
    );

if (rsvpList) {

    const hadirCount =
        document.getElementById(
            "hadirCount"
        );

    const tidakHadirCount =
        document.getElementById(
            "tidakHadirCount"
        );

    const rsvpQuery =
        query(
            rsvpCollection,
            orderBy(
                "createdAt",
                "desc"
            )
        );

    onSnapshot(
        rsvpQuery,
        (snapshot) => {

            rsvpList.innerHTML = "";

            let hadir = 0;
            let tidakHadir = 0;

            snapshot.forEach(
                (doc) => {

                    const data =
                        doc.data();

                    if (
                        data.status ===
                        "Hadir"
                    ) {

                        hadir++;

                    } else {

                        tidakHadir++;

                    }

                    const item =
                        document.createElement(
                            "div"
                        );

                    item.className =
                        "rsvp-card";

                    item.innerHTML = `
                        <div class="rsvp-name">
                            ${data.name}
                        </div>

                        <div class="rsvp-status">
                            ${
                                data.status === "Hadir"
                                ? "✅ Hadir"
                                : "❌ Tidak Hadir"
                            }
                        </div>
                    `;

                    rsvpList.appendChild(
                        item
                    );

                }
            );

            hadirCount.textContent =
                hadir;

            tidakHadirCount.textContent =
                tidakHadir;

        }
    );

}
