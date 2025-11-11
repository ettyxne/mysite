document.addEventListener('DOMContentLoaded', () => { // Добавляем слушатель события, который ждет полной загрузки DOM-дерева.
  document.querySelector('.header__theme-toggle')?.addEventListener('click', (e) => { // Находим элемент с классом 'header__theme-toggle' и добавляем к нему слушатель события клика.
    e.preventDefault(); // Предотвращаем стандартное действие браузера, связанное с кликом (например, переход по ссылке).
    document.body.classList.toggle('dark-theme'); // Переключаем класс 'dark-theme' у элемента <body>. Если класса нет, он добавляется; если есть, удаляется.
  }); // Закрываем слушатель события клика.
}); // Закрываем слушатель события DOMContentLoaded.