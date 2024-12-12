const header = document.getElementById('header-scroll');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundImage = 'linear-gradient(to right, #659999, #f4791f)';
        // header.style.color = '#fff'
    } else {
        header.style.backgroundImage = 'none'
        header.style.backgroundColor = '#fff'
        // header.style.color = '#000'
    }
});