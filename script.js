
// =====================================
// PERSONALIZE YOUR BIRTHDAY WEBSITE
// =====================================

const CONFIG = {
    personName: "Beautiful Soul ❤️",
    senderName: "Someone Who Cares"
};

// Show names on the website
document.getElementById("name").textContent = CONFIG.personName;
document.getElementById("sender").textContent = CONFIG.senderName;

document.title = `Happy Birthday ${CONFIG.personName}`;


// =====================================
// SURPRISE POPUP
// =====================================

function openSurprise() {
    document.getElementById("popup").classList.add("active");
    createConfetti(50);
}

function closeSurprise() {
    document.getElementById("popup").classList.remove("active");
}


// Close popup when clicking outside
document.getElementById("popup").addEventListener("click", function(event) {
    if (event.target === this) {
        closeSurprise();
    }
});


// =====================================
// CELEBRATION
// =====================================

function celebrate() {
    closeSurprise();
    createConfetti(100);

    alert("🎂 Happy Birthday! ❤️ May all your dreams come true!");
}


// =====================================
// CONFETTI ANIMATION
// =====================================

function createConfetti(amount) {
    const symbols = ["❤️", "💖", "✨", "🎉", "💕", "🌸"];

    for (let i = 0; i < amount; i++) {
        const item = document.createElement("span");

        item.className = "confetti";
        item.textContent = symbols[
            Math.floor(Math.random() * symbols.length)
        ];

        item.style.left = Math.random() * 100 + "vw";
        item.style.fontSize = (12 + Math.random() * 18) + "px";
        item.style.animationDuration = (2 + Math.random() * 3) + "s";
        item.style.animationDelay = Math.random() * 0.5 + "s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 5500);
    }
}


// =====================================
// FLOATING HEARTS
// =====================================

function createFloatingHeart() {
    const container = document.querySelector(".hearts");
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

setInterval(createFloatingHeart, 450);


// =====================================
// PHOTO GALLERY UPLOAD
// =====================================

document.querySelectorAll(".photo-box input").forEach(input => {

    input.addEventListener("change", function() {

        const file = this.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please choose an image file.");
            return;
        }

        const box = this.closest(".photo-box");
        const image = box.querySelector("img");
        const label = box.querySelector("span");

        image.src = URL.createObjectURL(file);
        image.hidden = false;

        label.style.display = "none";

    });

});


// =====================================
// WELCOME ANIMATION
// =====================================

window.addEventListener("load", () => {
    setTimeout(() => {
        createConfetti(15);
    }, 700);
});


// Close popup with Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeSurprise();
    }
});

// =====================================
// VIDEO GALLERY UPLOAD
// =====================================

document.querySelectorAll(".video-box input").forEach(input => {

    input.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        if (!file.type.startsWith("video/")) {
            alert("Please select a video file.");
            return;
        }

        const box = this.closest(".video-box");
        const video = box.querySelector("video");
        const placeholder = box.querySelector(".video-placeholder");

        // Load selected video
        if (video.dataset.videoUrl) {
            URL.revokeObjectURL(video.dataset.videoUrl);
        }

        const videoUrl = URL.createObjectURL(file);

        video.dataset.videoUrl = videoUrl;
        video.src = videoUrl;
        video.hidden = false;
        video.load();

        placeholder.style.display = "none";

    });

});
