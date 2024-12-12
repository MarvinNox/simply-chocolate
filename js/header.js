const header = document.getElementById('header-scroll');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'linear-gradient(to right, #659999, #f4791f)';
        // header.style.color = '#fff'
    } else {
        header.style.background = 'none'
        header.style.backgroundColor = '#fff'
        // header.style.color = '#000'
    }
});