let currentScene = 'start';

function nextScene(choice) {
    const storyElement = document.getElementById('story');
    const buttons = document.querySelectorAll('button');
    const gameImage = document.getElementById('gameImage');
    const gameAudio = document.getElementById('gameAudio');

    // Определяем следующую сцену в зависимости от выбора
    switch (currentScene) {
        case 'start':
            if (choice === 'go_forward') {
                storyElement.textContent = 'Ты идёшь вперед и находишь старую хижину.';
                gameImage.src = 'hut.jpg';
                gameAudio.src = 'creepy-ambience.mp3';
                buttons[0].textContent = 'Войти';
                buttons[0].onclick = () => nextScene('enter_hut');
                buttons[1].textContent = 'Обойти';
                buttons[1].onclick = () => nextScene('go_around');
                buttons[2].style.display = 'none';
            } else if (choice === 'look_around') {
                storyElement.textContent = 'Ты осматриваешься и видишь следы.';
                gameImage.src = 'tracks.jpg';
                gameAudio.src = 'forest-ambience.mp3';
                buttons[0].textContent = 'Следовать';
                buttons[0].onclick = () => nextScene('follow_tracks');
                buttons[1].textContent = 'Остаться';
                buttons[1].onclick = () => nextScene('stay');
                buttons[2].style.display = 'none';
            } else if (choice === 'rest') {
                storyElement.textContent = 'Ты отдыхаешь и засыпаешь. Проснувшись, ты слышишь шаги.';
                gameImage.src = 'campfire.jpg';
                gameAudio.src = 'calm-ambience.mp3';
                buttons[0].textContent = 'Бежать';
                buttons[0].onclick = () => nextScene('run');
                buttons[1].textContent = 'Спрятаться';
                buttons[1].onclick = () => nextScene('hide');
                buttons[2].style.display = 'none';
            }
            break;

        case 'enter_hut':
            storyElement.textContent = 'Ты входишь и находишь дневник. Читаешь его и узнаёшь тайну леса. Игра окончена! Поздравляю!';
            gameImage.src = 'diary.jpg';
            gameAudio.src = 'victory-music.mp3';
            hideButtons();
            break;

        case 'go_around':
            storyElement.textContent = 'Ты обошёл хижину и попал в ловушку. Игра окончена! Попробуй снова.';
            gameImage.src = 'trap.jpg';
            gameAudio.src = 'fail-sound.mp3';
            hideButtons();
            break;

        case 'follow_tracks':
            storyElement.textContent = 'Следы привели к реке. Ты видишь лодку.';
            gameImage.src = 'river.jpg';
            gameAudio.src = 'water-ambience.mp3';
            buttons[0].textContent = 'Плыть';
            buttons[0].onclick = () => nextScene('row_boat');
            buttons[1].textContent = 'Вернуться';
            buttons[1].onclick = () => nextScene('go_back');
            buttons[2].style.display = 'inline';
            buttons[2].textContent = 'Остаться';
            buttons[2].onclick = () => nextScene('stay_river');
            break;

        case 'stay':
            storyElement.textContent = 'Ты остаёшься и ждёшь. Никто не приходит.
