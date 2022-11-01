function clickMenu() {
    if (menuheader.style.display == 'block') {
        menuheader.style.display = 'none';
    }
    else {
        menuheader.style.display = 'block';
    }
}

function mudarTamanho() {
    if (window.innerWidth >= 768) {
        menuheader.style.display = 'block';
    }
    else {
        menuheader.style.display = 'none';
    }
}