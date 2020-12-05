const sections = document.querySelectorAll('[data-anim]');

const options = {
    rootMargin: '0px',
    threshold: 0.52
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    })
}, options)

export default sections.forEach(section => {
    observer.observe(section);
})