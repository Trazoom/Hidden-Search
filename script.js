const btn = document.getElementById('btn');
const bar = document.getElementById('bar');

btn.addEventListener('click', () => {
    bar.classList.toggle('active');
    bar.focus();
});