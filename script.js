/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 600);

    }, 500);

});


/* =========================
   HEADER SCROLL
========================= */

window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


document.querySelectorAll(".nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================
   ENQUIRY MODAL
========================= */

const enquiryModal =
    document.getElementById("enquiryModal");


function openEnquiry(configuration = "") {

    enquiryModal.classList.add("active");

    if (configuration) {

        document.getElementById("configuration").value =
            configuration;

    }

}


function closeEnquiry() {

    enquiryModal.classList.remove("active");

}


window.addEventListener("click", function (event) {

    if (event.target === enquiryModal) {

        closeEnquiry();

    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeEnquiry();

    }

});


/* =========================
   FORM
========================= */

const enquiryForm =
    document.getElementById("enquiryForm");


enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const configuration =
        document.getElementById("configuration").value;

    const message =
        document.getElementById("message").value.trim();


    if (name.length < 2) {

        showFormMessage(
            "Please enter your name.",
            "error"
        );

        return;

    }


    if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {

        showFormMessage(
            "Please enter a valid phone number.",
            "error"
        );

        return;

    }


    if (email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        showFormMessage(
            "Please enter a valid email address.",
            "error"
        );

        return;

    }


    /*
       FRONT-END DEMO

       Replace this section with your
       actual form/email backend.
    */

    const enquiryData = {

        name: name,
        phone: phone,
        email: email,
        configuration: configuration,
        message: message

    };


    console.log("Enquiry:", enquiryData);


    showFormMessage(
        "Thank you! Your enquiry has been received.",
        "success"
    );


    enquiryForm.reset();

});


function showFormMessage(text, type) {

    const message =
        document.getElementById("formMessage");

    message.textContent = text;

    if (type === "success") {

        message.style.color = "#16833a";

    } else {

        message.style.color = "#c62828";

    }

}


/* =========================
   GOOGLE MAP
========================= */

function openMap() {

    /*
       IMPORTANT:
       Replace this URL with the
       official project Google Maps
       location once confirmed.
    */

    window.open(
        "https://maps.app.goo.gl/MnVHv9N3GnQe11yZ6?g_st=aw",
        "_blank"
    );

}