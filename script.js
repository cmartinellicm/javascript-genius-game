let gameOrder = [];
let clickedOrder = [];
let score = 0;

const green = document.querySelector('.green'); // 0
const red = document.querySelector('.red'); // 1
const yellow = document.querySelector('.yellow'); // 2
const blue = document.querySelector('.blue'); // 3

// Cria ordem aleatoria de cores
const shuffleOrder = () => {
    let newColor = Math.floor(Math.random() * 4);
    gameOrder[gameOrder.length] = newColor;
    // gameOrder = [...gameOrder, newColor];
    clickedOrder = [];

    for (let i in gameOrder) {
        let colorElement = selectColorElement(gameOrder[i]);
        blinkColor(colorElement, Number(i) + 1);
    }
};

// Acende a proxima cor
const blinkColor = (element, position) => {
    let time = position * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, time);

    setTimeout(() => {
        element.classList.remove('selected');
    }, time + 300);
};

// Checa se os botoes clicados sao os mesmos da ordem gerada no jogo
const checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] !== gameOrder[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == gameOrder.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
};

// Armazena cliques do usuarios
const click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    selectColorElement(color).classList.add('selected');

    setTimeout(() => {
        selectColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
};

// Retorna a cor
const selectColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
};

// Vai para proximo nivel do jogo
const nextLevel = () => {
    score++;
    shuffleOrder();
};

// Game over, reinicia jogo
const gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em ok para iniciar um novo jogo`);
    gameOrder = [];
    clickedOrder = [];

    playGame();
};

// Inicio do jogo
const playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!');
    score = 0;

    nextLevel();
};

// Eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Dispara inicio do jogo
playGame();
