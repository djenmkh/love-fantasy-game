let scene = 1;
function nextScene() {
    const container = document.querySelector('.container');
    if (scene === 1) {
        container.innerHTML = '<h1>Глава 1</h1><p>Ты встречаешь загадочного незнакомца в лесу. Он кажется важной фигурой в этом мире...</p><button onclick="nextScene()">Далее</button>';
        scene++;
    } else if (scene === 2) {
        container.innerHTML = '<h1>Глава 2</h1><p>Вы сталкиваетесь с опасностью, и он спасает тебя. Возникает связь...</p><button onclick="nextScene()">Далее</button>';
        scene++;
    } else {
        container.innerHTML = '<h1>Конец демо</h1><p>Это только начало твоего приключения...</p>';
    }
}