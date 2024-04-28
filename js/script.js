document.addEventListener('DOMContentLoaded', function() {

    // Получаем ссылки на элементы кнопки гамбургера и кнопку закрытия меню
    var hamburgerButton = document.querySelector('.hamburger');
    var closeButton = document.querySelector('.mobile-menu-close');
    var mobileMenu = document.querySelector('.mobile-menu');

    // Добавляем обработчик события клика на кнопку гамбургера
    hamburgerButton.addEventListener('click', function() {
        // Добавляем класс 'is-active' для меню, чтобы показать его
        mobileMenu.classList.add('is-active');
    });

    // Добавляем обработчик события клика на кнопку закрытия меню
    closeButton.addEventListener('click', function() {
        // Удаляем класс 'is-active' у меню, чтобы скрыть его
        mobileMenu.classList.remove('is-active');
    });

});