let img = document.getElementById("image");
let text_1 = document.getElementById("text_1");
let text_2 = document.getElementById("text_2");
let send = document.getElementById("link");
let clickCount = 0;

function transform() {
    clickCount++;

    let storedNumber = localStorage.getItem('storedNumber');

    if (!storedNumber) {
        alert('No WhatsApp number found. Please go back and enter your number.');
        return;
    }

    if (clickCount === 1) {
        text_1.innerHTML = "I like you?";
        text_2.innerHTML = "Do you feel the same way about me?";
        img.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png";
    } else if (clickCount === 2) {
        var number = "234" + storedNumber.slice(1); 
        var message = encodeURIComponent("Yes I feel the same way about you 😘");
        var whatsappLink = "https://wa.me/" + number + "?text=" + message;
        window.location.href = whatsappLink;
        send.href = whatsappLink;
    }
}

function move() {
    const noBtnRect = document.getElementById("btn_no").getBoundingClientRect();
    const x = window.innerWidth - noBtnRect.width;
    const y = window.innerHeight - noBtnRect.height;

    const w = Math.floor(Math.random() * x);
    const h = Math.floor(Math.random() * y);

    document.getElementById("btn_no").style.left = w + "px";
    document.getElementById("btn_no").style.top = h + "px";
}

function check() {
    let input = document.getElementById("in").value;
    if (input.length !== 11 || !input.startsWith("0")) {
        alert("Please enter a correct WhatsApp number");
    } else {
        localStorage.setItem('storedNumber', input);
        window.location.href = 'index1.html'; 
    }
}
