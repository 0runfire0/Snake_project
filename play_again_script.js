document.addEventListener('DOMContentLoaded', function() {
    const playAgainBtn = document.querySelector('#mode-buttons button[name="playAgainBtn"]');
    const changeBtn = document.querySelector('#mode-buttons button[name="changeBtn"]');
    const exitBtn = document.querySelector('button[name="exitBtn"]');
    
    playAgainBtn.addEventListener('click', function playAgain(){
        window.history.back();
    });

    changeBtn.addEventListener('click', function changeMode(){
        window.location.href = 'mode_selector.html';
    });

    exitBtn.addEventListener('click', function exitGame(){
        window.location.href = 'https://www.google.it/';
    })
});
