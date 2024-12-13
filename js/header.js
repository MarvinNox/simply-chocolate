const header = document.getElementById('header-scroll');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundImage = 'linear-gradient(to right, #659999, #f4791f)';
           header.style.opacity = '0.9';
        // header.style.color = '#fff'
    } else {
        header.style.backgroundImage = 'none'
        header.style.backgroundColor = '#fff'
                   header.style.opacity = '1';
        // header.style.color = '#000'
    }
});