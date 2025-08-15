document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const tg = document.querySelector(this.getAttribute('href'));

        if (tg)
            tg.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    });
});

window.addEventListener('scroll', function() {
    const sec = document.querySelectorAll('section');
    const nav = document.querySelectorAll('nav a');
    
    let curr = '';

    sec.forEach(section => {
        const sTop = section.offsetTop - 100;
        const sHeight = section.clientHeight;

        if (scrollY >= sTop && scrollY < sTop + sHeight) 
            curr = section.getAttribute('id');
    });

    nav.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${curr}`)
            link.classList.add('active');
    });
});

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});