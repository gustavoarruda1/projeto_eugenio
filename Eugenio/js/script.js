function menuView() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu-mobile-icon.svg";z
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/menu-x-icon.svg";
    }
}
