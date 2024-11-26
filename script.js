document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fade-in");

    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, index * 300);
    });

    // Bira şişeleri oluşturma
    for (let i = 0; i < 10; i++) {
        createBottle();
    }

    // Galeri için modal açma
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <img src="${this.querySelector('img').src}" alt="Gallery Image">
                <a href="#" class="close-modal">&times;</a>
            `;
            document.body.appendChild(modal);
            modal.querySelector('.close-modal').addEventListener('click', function() {
                modal.remove();
            });
        });
    });
});

function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

function createBottle() {
    const bottleContainer = document.getElementById('bottle-container');
    const bottle = document.createElement('div');
    bottle.classList.add('bottle');
    bottle.style.left = Math.random() * window.innerWidth + 'px';
    bottle.style.animationDuration = (Math.random() * 5 + 5) + 's';
    bottleContainer.appendChild(bottle);
}

// Arkaplan müziği için
const audio = new Audio('background-music.mp3');
audio.loop = true;

// Müzik başlatma
window.addEventListener('load', function() {
    const audioTime = localStorage.getItem('audioTime');
    if (audioTime) {
        audio.currentTime = audioTime;
    }
    audio.play().catch(error => {
        console.error("Müzik oynatma hatası: ", error);
    });
});

window.addEventListener('beforeunload', function() {
    audio.pause();
    localStorage.setItem('audioTime', audio.currentTime);
});
