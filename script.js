const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");

btnSim.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) { // Cria 20 elementos de emojis
        createHeart();
    }
});

btnNao.addEventListener("mouseover", () => {
    const randomX = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    btnNao.style.position = "absolute";
    btnNao.style.left = `${randomX}px`;
    btnNao.style.top = `${randomY}px`;
});

function createHeart() {
    const emojis = ["❤️", "💕", "💖", "💞", "😘"]; // Lista de emojis românticos
    const emoji = emojis[Math.floor(Math.random() * emojis.length)]; // Escolhe um emoji aleatório
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = emoji;
    heart.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 3000); // Remove o emoji após 3 segundos
}