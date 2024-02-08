document.addEventListener('DOMContentLoaded', function() {
    const easyButton = document.querySelector('#game-container #mode-buttons button[name="easyBtn"]');
    const mediumButton = document.querySelector('#game-container #mode-buttons button[name="mediumBtn"]');
    const hardButton = document.querySelector('#game-container #mode-buttons button[name="hardBtn"]');
    const nightmareButton = document.querySelector('#game-container #mode-buttons button[name="nightmareBtn"]');
    const exitButton = document.querySelector('button[name="exitBtn"]');
    
    easyButton.addEventListener('click', function easyGame(){
        window.location.href = 'easy.html';
    });
    mediumButton.addEventListener('click', function mediumGame(){
        window.location.href = 'medium.html';
    });
    hardButton.addEventListener('click', function hardGame(){
        window.location.href = 'hard.html';
    });
    nightmareButton.addEventListener('click', function nightmareGame(){
        window.location.href = 'nightmare.html';
    });
    exitButton.addEventListener('click', function exitGame(){
        window.location.href = 'https://www.google.it/';
    })
});



