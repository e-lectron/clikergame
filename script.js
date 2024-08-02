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

            // Пример действия при клике на иконку
            const iconImg = icon.querySelector('img');
            if (iconImg) {
                switch (iconImg.alt) {
                    case 'Icon 1':
                        // Переход на index.html при клике на icon1
                        window.location.href = 'index.html';
                        break;
                    case 'Icon 2':
                        // Переход на boost.html при клике на icon2
                        window.location.href = 'boost.html';
                        break;
                    case 'Icon 3':
                        // Переход на tasks.html при клике на icon3
                        window.location.href = 'tasks.html';
                        break;
                    case 'Icon 4':
                        // Переход на referals.html при клике на icon4
                        window.location.href = 'referrals.html';
                        break;
                    default:
                        console.log('Неизвестная иконка:', iconImg.alt);
                }
            }
        });
    });

    // Пример форматирования числа
    const numberTextElement = document.getElementById('number-text');

    if (numberTextElement) {
        const number = 1234567890; // Замените это значение на ваше число

        function formatNumberWithSpaces(number) {
            // Преобразуем число в строку
            let numberStr = number.toString();
            // Используем регулярное выражение для добавления пробелов
            return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }

        // Форматируем число и обновляем элемент
        numberTextElement.innerHTML = formatNumberWithSpaces(number);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Получаем целевую страницу из атрибута data-target
            const targetPage = icon.getAttribute('data-target');
            const currentPage = window.location.pathname.split('/').pop();

            console.log(`Current Page: ${currentPage}`);
            console.log(`Target Page: ${targetPage}`);

            // Сравниваем текущую страницу с целевой
            if (targetPage === currentPage) {
                console.log('Already on the target page. No redirection.');
                // Если они совпадают, ничего не делаем
                return;
            }

            // Перенаправляем на целевую страницу
            console.log('Redirecting to the target page.');
            window.location.href = targetPage;
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Отключаем масштабирование
    const preventZoom = (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey) {
            e.preventDefault();
        }
    };

    // Блокируем события мыши и касания
    document.addEventListener('wheel', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('gesturestart', preventZoom, { passive: false });

    // Предотвращаем масштабирование при двойном нажатии
    document.addEventListener('dblclick', (e) => {
        e.preventDefault();
    });

    // Отключаем масштабирование при нажатии кнопок управления масштабом (например, Ctrl +)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
        }
    });
});

