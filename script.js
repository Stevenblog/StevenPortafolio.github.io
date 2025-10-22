// NAV toggle (mobile)
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn && menuBtn.addEventListener('click', () => {
  if (!menu) return;
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

// set year in footer
document.getElementById('year').textContent = new Date().getFullYear();
