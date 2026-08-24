// Bunting flags
const colors = ['#FF7A00','#E31C79','#017A72','#FFB100','#7B2D8B'];
const buntingRow = document.getElementById('buntingRow');
const flagCount = window.innerWidth < 600 ? 14 : 24;
for (let i = 0; i < flagCount; i++) {
  const f = document.createElement('div');
  f.className = 'flag';
  f.style.background = colors[i % colors.length];
  f.style.animationDelay = (i * 0.12) + 's';
  buntingRow.appendChild(f);
}

// Mandala petals
const petalsGroup = document.getElementById('petals');
const petalColors = ['#FFB100','#E31C79','#017A72','#FF7A00'];
for (let i = 0; i < 16; i++) {
  const angle = (360 / 16) * i;
  const p = document.createElementNS('http://www.w3.org/2000/svg','path');
  p.setAttribute('d','M200 40 C 210 70, 210 90, 200 110 C 190 90, 190 70, 200 40 Z');
  p.setAttribute('fill', petalColors[i % petalColors.length]);
  p.setAttribute('opacity', '0.55');
  p.setAttribute('transform', `rotate(${angle} 200 200)`);
  petalsGroup.appendChild(p);
}

// Floating embers
const embers = document.getElementById('embers');
const emberColors = ['#FF7A00','#FFB100','#E31C79'];
for (let i = 0; i < 14; i++) {
  const e = document.createElement('div');
  e.className = 'ember';
  const size = 4 + Math.random() * 6;
  e.style.width = size + 'px';
  e.style.height = size + 'px';
  e.style.left = (Math.random() * 100) + '%';
  e.style.background = emberColors[i % emberColors.length];
  e.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
  e.style.animationDuration = (6 + Math.random() * 6) + 's';
  e.style.animationDelay = (Math.random() * 8) + 's';
  embers.appendChild(e);
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Team in-charges filters
const filterBtns = document.querySelectorAll('.filter-btn');
const rosterCards = document.querySelectorAll('.roster-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    rosterCards.forEach(card => {
      card.classList.toggle('hide', f !== 'all' && card.dataset.cat !== f);
    });
  });
});
