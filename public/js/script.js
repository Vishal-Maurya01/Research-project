// slider item auto
let index = 0;
const slider_deal = document.querySelector('.slider-track');


function moveSlide() {
    index++;
    slider_deal.style.transition = "transform 0.5s ease-in-out";
    slider_deal.style.transform = `translateX(-${index * 25}%)`;

    if (index === 4) {
        setTimeout(() => {
            slider_deal.style.transition = "none";
            slider_deal.style.transform = `translateX(0)`;
            index = 0;
        }, 0);
    }
}

setInterval(moveSlide, 3000);



// scrolling 

document.querySelectorAll('.drag-scroll').forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => isDown = false);
    slider.addEventListener('mouseup', () => isDown = false);

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const walk = (e.pageX - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});


// voice search function

const voiceBtn = document.getElementById("voiceBtn");
const searchBox = document.getElementById("search-box");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;

    voiceBtn.addEventListener("click", () => {
        recognition.start();
        voiceBtn.classList.add("listening");
    });

    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        searchBox.value = text;
    };

    recognition.onend = () => {
        voiceBtn.classList.remove("listening");
    };

} else {
    alert("Voice search not supported in this browser");
}



//signup page 

function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

// login page

function toggleLoginPassword() {
    const pass = document.getElementById("loginPassword");
    pass.type = pass.type === "password" ? "text" : "password";
}


// for flash messages 

    setTimeout(() => {
        const flash = document.querySelector(".flash-container");
        if (flash) {
            flash.style.display = "none";
        }
    }, 4000);

