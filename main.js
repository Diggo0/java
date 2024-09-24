// Lista de animais
const animais = ['🐶', '🐱', '🐰', '🦊', '🐼', '🦁', '🐻', '🐨', '🦒', '🐧'];

// Função para gerar uma cor aleatória
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 2; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para gerar uma posição aleatória
function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}

// Função para mostrar o animal
function mostrarAnimal() {
    const animal = animais[Math.floor(Math.random() * animais.length)];
    const { x, y } = getRandomPosition();
    const color = getRandomColor();

    const animalElement = document.createElement('div');
    animalElement.textContent = animal;
    animalElement.style.position = 'absolute';
    animalElement.style.fontSize = '50px';
    animalElement.style.color = color;
    animalElement.style.left = `${x}px`;
    animalElement.style.top = `${y}px`;
    animalElement.style.pointerEvents = 'none'; // Para não interferir com cliques

    document.body.appendChild(animalElement);

    // Remover o animal após 3 segundos
    setTimeout(() => {
        document.body.removeChild(animalElement);
    }, 3000);
}

// Mostrar um animal a cada 3 segundos
setInterval(mostrarAnimal, 3000);

