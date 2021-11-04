let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria ordem aleatoria de cores
const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};

// Acende a proxima cor
const lightColor = (element, number) => {
    let time = number * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, time - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
};

// Checa se os botoes clicados sao os mesmos da ordem gerada no jogo
const checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
};

// Armazena cliques do usuarios
const click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
};

// Retorna a cor
const createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 1) {
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
    order = [];
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
