const messages = [
    "Kamu yakin!?",
    "Benerann??",
    "Benar benar benar yakinnn?",
    "Nyesel luu...",
    "Pikirin lagi dongg!",
    "Ngambek gue ni",
    "Beneran sedihhhh......",
    "Benar benar benar sedih",
    "Ok fine, I will stop asking...",
    "Becanda... teken yes dong"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }

    // Setelah semua pesan habis, alihkan ke link
    if (messageIndex === messages.length) {
        window.location.href = "https://www.instagram.com/share/BANRKDeFTO";
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
