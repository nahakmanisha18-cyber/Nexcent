const ham = document.getElementById('ham'), mob = document.getElementById('mob');
ham.addEventListener('click', () => {
    mob.classList.toggle('open');
    const s = ham.querySelectorAll('span');
    if (mob.classList.contains('open')) { s[0].style.transform = 'rotate(45deg) translate(5px,5px)'; s[1].style.opacity = '0'; s[2].style.transform = 'rotate(-45deg) translate(5px,-5px)' }
    else { s[0].style.transform = ''; s[1].style.opacity = ''; s[2].style.transform = '' }
});
window.addEventListener('scroll', () => {
    document.getElementById('nav').style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
});
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target) } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
