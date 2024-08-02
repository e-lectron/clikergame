document.addEventListener('DOMContentLoaded', () => {
    // Обработка кликов по иконке монетки
    const coinIcon = document.querySelector('.coin-icon');
    if (coinIcon) {
        coinIcon.addEventListener('click', () => {
            // Добавляем класс, чтобы активировать анимацию
            coinIcon.classList.add('bounce');
            
            // Удаляем класс через 0.6 секунды (длительность анимации), чтобы можно было повторить её
            setTimeout(() => {
                coinIcon.classList.remove('bounce');
            }, 600);
        });
    }

    // Обработка кликов по иконкам
    const icons = document.querySelectorAll('.image-content .icon');
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Добавляем анимацию пульсации
            icon.classList.add('pulse');
            
            // Удаляем класс через 0.6 секунды, чтобы можно было повторить анимацию
            setTimeout(() => {
                icon.classList.remove('pulse');
            }, 600);

            // Переход на целевую страницу, если это необходимо
            const iconImg = icon.querySelector('img');
            if (iconImg) {
                const targetPage = {
                    'Icon 1': 'index.html',
                    'Icon 2': 'boost.html',
                    'Icon 3': 'tasks.html',
                    'Icon 4': 'referrals.html'
                }[iconImg.alt];

                if (targetPage) {
                    const currentPage = window.location.pathname.split('/').pop();
                    if (currentPage !== targetPage) {
                        window.location.href = targetPage;
                    }
                }
            }
        });
    });

    // Пример форматирования числа
    const numberTextElement = document.getElementById('number-text');
    if (numberTextElement) {
        const number = 1234567890; // Замените это значение на ваше число

        function formatNumberWithSpaces(number) {
            // Преобразуем число в строку и добавляем пробелы
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }

        numberTextElement.innerHTML = formatNumberWithSpaces(number);
    }

    // Отключаем масштабирование
    const preventZoom = (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
            e.preventDefault();
        }
    };

    document.addEventListener('wheel', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('gesturestart', preventZoom, { passive: false });
    document.addEventListener('dblclick', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
        }
    });

    // Модальное окно
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const modalLevel = document.getElementById('modal-level');
    const closeBtn = document.querySelector('.close');

    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Слушатели событий для каждой плитки
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach((tile, index) => {
            tile.addEventListener('click', () => {
                modalImage.src = `skill${index + 1}.png`;
                modalText.textContent = 'Улучшай, чтобы увеличить свою добычу за клик';
                modalLevel.textContent = `Текущий уровень - ${index + 1}`;
                modal.style.display = 'block';
            });
        });
    }
});
