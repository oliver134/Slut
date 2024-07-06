// ==UserScript==
// @name         Slut NOT Drop
// @version      3.0
// @description  AutoClicker for Slut TON Drop
// @author       Emin M @emin.mir
// @homepage     https://t.me/crypto_world_aze
// @match        https://zapn.digital/*
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBfD3Vv-jzGzJ9M_UBA9K-XqS7bG_VfhqNnbOyViPJhl-pLCP
// @downloadURL  https://github.com/oliver134/slut/raw/main/Slut NOT Drop Auto clicker.user.js
// @updateURL    https://github.com/oliver134/slut/raw/main/Slut NOT Drop Auto clicker.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict'; // Использование строгого режима для предотвращения некоторых ошибок

    let clicking = false; // Переменная для отслеживания состояния кликов (включены или выключены)
    let clickInterval; // Переменная для хранения ID интервала кликов
    let clickCounter = 0; // Счетчик кликов, чтобы отслеживать количество кликов до паузы
    const divClass = '_ass_125s5_72'; // Класс div элемента, в котором будут производиться клики

    // Создание кнопки Пуск/Пауза
    const button = document.createElement('button'); // Создание элемента кнопки
    button.innerHTML = 'Play'; // Текст кнопки по умолчанию
    button.style.position = 'fixed'; // Фиксированное позиционирование кнопки
    button.style.bottom = '10px'; // Расположение кнопки внизу страницы
    button.style.right = '10px'; // Расположение кнопки справа на странице
    button.style.padding = '10px 20px'; // Внутренние отступы кнопки
    button.style.fontSize = '16px'; // Размер шрифта текста кнопки
    button.style.backgroundColor = '#8B0000'; // Цвет фона кнопки
    button.style.color = '#fff'; // Цвет текста кнопки
    button.style.border = 'none'; // Отсутствие рамки у кнопки
    button.style.borderRadius = '5px'; // Закругленные углы кнопки
    button.style.cursor = 'pointer'; // Курсор указателя при наведении на кнопку
    button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Тень кнопки
    button.style.zIndex = '1000'; // Высокий z-index для кнопки, чтобы она была поверх других элементов
    document.body.appendChild(button); // Добавление кнопки в тело документа

    button.addEventListener('click', toggleClicking); // Добавление обработчика события клика на кнопку

    function toggleClicking() {
        if (clicking) { // Проверка, если клики включены
            stopClicking(); // Остановить клики
        } else {
            startClicking(); // Начать клики
        }
    }

    function startClicking() {
        clicking = true; // Установка состояния кликов в "включено"
        button.innerHTML = 'Pause'; // Изменение текста кнопки на "Пауза"
        button.style.backgroundColor = '#8B0000'; // Изменение цвета фона кнопки на красный
        clickInterval = setInterval(clickRandom, 1000); // Запуск интервала для случайных кликов каждые 1000 мс (1 секунда)
    }

    function stopClicking() {
        clicking = false; // Установка состояния кликов в "выключено"
        button.innerHTML = 'Play'; // Изменение текста кнопки на "Пуск"
        button.style.backgroundColor = '#8B0000'; // Изменение цвета фона кнопки на зеленый
        clearInterval(clickInterval); // Очистка интервала кликов
    }

    function clickRandom() {
        const div = document.querySelector(`.${divClass}`); // Поиск div элемента с указанным классом
        if (div) { // Проверка, найден ли div элемент
            const rect = div.getBoundingClientRect(); // Получение координат и размеров div элемента
            const randomX = Math.random() * rect.width + rect.left; // Генерация случайной координаты X внутри div
            const randomY = Math.random() * rect.height + rect.top; // Генерация случайной координаты Y внутри div
            const clickEvent = new MouseEvent('click', { // Создание события клика с случайными координатами
                bubbles: true, // Включение всплытия события
                cancelable: true, // Включение возможности отмены события
                clientX: randomX, // Установка координаты X для клика
                clientY: randomY // Установка координаты Y для клика
            });
            div.dispatchEvent(clickEvent); // Вызов события клика на div элементе

            clickCounter++; // Увеличение счетчика кликов

            // Проверка, нужно ли делать паузу
            if (clickCounter >= 100) { // Если количество кликов достигло 100
                clickCounter = 0; // Сброс счетчика кликов
                stopClicking(); // Остановить клики
                const randomPause = Math.random() * (30000 - 5000) + 5000; // Генерация случайного времени паузы от 5 до 30 секунд
                setTimeout(startClicking, randomPause); // Установка таймера на случайную паузу перед возобновлением кликов
            }
        }
    }

    // Создаем блок с информацией
    const controlsContainer = document.createElement('div');
    controlsContainer.style.position = 'fixed';
    controlsContainer.style.top = '0';
    controlsContainer.style.left = '50%';
    controlsContainer.style.transform = 'translateX(-50%)';
    controlsContainer.style.zIndex = '9999';
    controlsContainer.style.backgroundColor = '#2c2c2c'; // Темно-серый фон блока
    controlsContainer.style.opacity = '0.6'; // Добавляем прозрачность
    controlsContainer.style.padding = '3px 12px';
    controlsContainer.style.borderRadius = '10px';
    controlsContainer.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.5)'; // Тень блока

    document.body.appendChild(controlsContainer);

    // Контейнер для размещения текста, изображения и ссылки
    const infoContainer = document.createElement('div');
    infoContainer.style.display = 'inline-block';
    infoContainer.style.marginRight = '10px';

    // Добавляем текст "For more info click here:"
    const infoText = document.createElement('a');
    infoText.href = atob('aHR0cHM6Ly90Lm1lL2NyeXB0b193b3JsZF9hemU='); // Декодированный URL ссылки
    infoText.innerHTML = atob('Rm9yIG1vcmUgaW5mbyBjbGljayBoZXJlOg=='); // Декодированный текст "For more info click here:"
    infoText.style.color = 'snow';
    infoText.style.fontWeight = 'bold';
    infoText.style.fontSize = '9px'; // Размер шрифта
    infoText.style.marginBottom = '5px'; // Отступ снизу
    infoText.style.alignItems = 'center';
    infoText.style.textDecoration = 'none'; // Убираем подчеркивание

    // Добавляем изображение перед ссылкой на Telegram
    const telegramImage = document.createElement('img');
    telegramImage.src = 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/telegram/telegram.png'; // Ссылка на изображение
    telegramImage.style.width = '15px'; // Ширина изображения
    telegramImage.style.height = '15px'; // Высота изображения
    telegramImage.style.marginRight = '5px'; // Отступ справа

    // Добавляем обработчик события клика на картинку
    telegramImage.addEventListener('click', function() {
        window.location.href = atob('aHR0cHM6Ly90Lm1lL2NyeXB0b193b3JsZF9hemU='); // Декодированный URL ссылки
    });

    // Добавляем ссылку на Telegram
    const telegramLink = document.createElement('a');
    telegramLink.href = atob('aHR0cHM6Ly90Lm1lL2NyeXB0b193b3JsZF9hemU='); // Декодированный URL ссылки
    telegramLink.innerHTML = atob('Q3J5cHRvIFdvcmxkCg=='); // Декодированный текст ссылки
    telegramLink.style.color = 'white';
    telegramLink.style.fontWeight = 'bold';
    telegramLink.style.fontSize = '14px'; // Размер шрифта
    telegramLink.style.textDecoration = 'none'; // Убираем подчеркивание

    // Объединяем изображение и текст ссылки
    const telegramContainer = document.createElement('div');
    telegramContainer.style.display = 'flex';
    telegramContainer.style.alignItems = 'center';
    telegramContainer.appendChild(telegramImage);
    telegramContainer.appendChild(telegramLink);

    // Добавляем элементы в контейнер
    infoContainer.appendChild(infoText);
    infoContainer.appendChild(telegramContainer);

    // Добавляем контейнер в controlsContainer
    controlsContainer.appendChild(infoContainer);

})();
