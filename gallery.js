// ======================================
// PREMIUM GALLERY
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery-item img");

    if (!images.length) return;

    const preview = document.getElementById("galleryPreview");
    const counter = document.getElementById("galleryCount");

    const nextBtn = document.querySelector(".gallery-nav.next");
    const prevBtn = document.querySelector(".gallery-nav.prev");

    let current = 0;

    // ==============================
    // UPDATE SHOWCASE
    // ==============================

    function updateGallery() {

        preview.style.opacity = "0";

        setTimeout(() => {

            preview.src = images[current].src;

            document
            .querySelector(".gallery-showcase")
            .style
            .setProperty(

            "--gallery-bg",

            `url('${images[current].src}')`

            );

            preview.style.opacity = "1";

            counter.innerHTML =
                `${current + 1} / ${images.length}`;

        },200);

    }

    updateGallery();

    // ==============================
    // CLICK THUMBNAIL
    // ==============================

    images.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            current=index;

            updateGallery();

        });

    });

    // ==============================
    // NEXT
    // ==============================

    nextBtn.addEventListener("click",()=>{

        current++;

        if(current>=images.length){

            current=0;

        }

        updateGallery();

    });

    // ==============================
    // PREV
    // ==============================

    prevBtn.addEventListener("click",()=>{

        current--;

        if(current<0){

            current=images.length-1;

        }

        updateGallery();

    });

    // ==============================
    // AUTO SLIDE
    // ==============================

    setInterval(()=>{

        current++;

        if(current>=images.length){

            current=0;

        }

        updateGallery();

    },5000);

    // ==============================
    // KEYBOARD
    // ==============================

    document.addEventListener("keydown",(e)=>{

        if(e.key==="ArrowRight"){

            nextBtn.click();

        }

        if(e.key==="ArrowLeft"){

            prevBtn.click();

        }

    });

    // ==============================
    // LIGHTBOX
    // ==============================

    const lightbox=document.createElement("div");

    lightbox.id="galleryLightbox";

    lightbox.innerHTML=`

        <span id="lightboxClose">&times;</span>

        <img id="lightboxImage">

    `;

    document.body.appendChild(lightbox);

    Object.assign(lightbox.style,{

        position:"fixed",

        inset:"0",

        display:"none",

        justifyContent:"center",

        alignItems:"center",

        background:"rgba(15,8,10,.95)",

        zIndex:"99999",

        padding:"25px"

    });

    const lightboxImage=document.getElementById("lightboxImage");

    Object.assign(lightboxImage.style,{

        maxWidth:"92%",

        maxHeight:"92%",

        borderRadius:"22px",

        border:"2px solid rgba(232,201,139,.45)"

    });

    const close=document.getElementById("lightboxClose");

    Object.assign(close.style,{

        position:"absolute",

        right:"35px",

        top:"25px",

        color:"#fff",

        fontSize:"55px",

        cursor:"pointer"

    });

    preview.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=preview.src;

        document.body.style.overflow="hidden";

    });

    function closeLightbox(){

        lightbox.style.display="none";

        document.body.style.overflow="auto";

    }

    close.addEventListener("click",closeLightbox);

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            closeLightbox();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeLightbox();

        }

    });

});
