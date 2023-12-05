document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var menu = document.getElementById('menu');

    menuButton.addEventListener('click', function () {
        toggleMenu();
    });

    function toggleMenu() {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    }
});