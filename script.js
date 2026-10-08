/* =========================================================
   IMPORTADOS LASTORIA — script.js
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------------------------------------------------
   DADOS DOS PRODUTOS
   Edite aqui: imagem, descrição e tamanhos de cada produto.
--------------------------------------------------------- */
const PRODUCTS = [
  {
    id: 'ao-leite',
    badge: 'Ao Leite',
    name: 'Chocolate ao Leite',
    img: 'assets/produto-ao-leite.jpg',
    desc: 'O clássico da linha Feastables: chocolate ao leite cremoso, feito com receita simples e ingredientes de qualidade — leite em pó, manteiga de cacau e um toque de baunilha. Uma textura macia que derrete na boca a cada mordida.',
    type: 'variants',
    variants: [
      { key: '35g', label: '35g' },
      { key: '60g', label: '60g' }
    ]
  },
  {
    id: 'ao-leite-crocante',
    badge: 'Crocante',
    name: 'Chocolate ao Leite Crocante',
    img: 'assets/produto-ao-leite-crocante.jpg',
    desc: 'A mesma receita cremosa do chocolate ao leite, agora com pedacinhos de arroz crocante em cada mordida. Ideal para quem gosta de contraste de textura sem abrir mão do sabor clássico.',
    type: 'variants',
    variants: [
      { key: '35g', label: '35g' },
      { key: '60g', label: '60g' }
    ]
  },
  {
    id: 'peanut-butter',
    badge: 'Peanut Butter',
    name: 'Chocolate de Manteiga de Amendoim',
    img: 'assets/produto-peanut-butter.jpg',
    desc: 'Chocolate ao leite recheado com um creme macio de amendoim, equilibrando perfeitamente o doce do chocolate com o sabor marcante do amendoim. Um encontro clássico que conquista de primeira.',
    type: 'variants',
    variants: [
      { key: '35g', label: '35g' },
      { key: '60g', label: '60g' }
    ]
  },
  {
    id: 'peanut-butter-crunch',
    badge: 'PB Crunch',
    name: 'Chocolate de Manteiga de Amendoim Crocante',
    img: 'assets/produto-peanut-butter-crunch.jpg',
    desc: 'O creme de amendoim ganha um crocante extra de arroz para quem gosta de mais textura em cada pedaço. A versão mais indulgente da linha peanut butter.',
    type: 'variants',
    variants: [
      { key: '35g', label: '35g' },
      { key: '60g', label: '60g' }
    ]
  },
  {
    id: 'mimuu-vaquinha',
    badge: 'Mimo Lastoria',
    name: 'Mimuu Chaveiro Vaquinha 3D',
    img: 'assets/mimuu-banner-1.jpg',
    desc: 'O Mimuu é o nosso chaveirinho temático em impressão 3D, feito à mão no estilo amigurumi (crochê), com carinha de vaquinha super fofa. É o mimo perfeito para tornar sua compra ainda mais especial!',
    type: 'single',
    isMimo: true,
    mimoNote: 'Este chaveiro é o mesmo "mimo" que oferecemos de brinde em compras de chocolates e doces importados.',
    gallery: ['assets/mimuu-banner-1.jpg']
  }
];

/* ---------------------------------------------------------
   DADOS DOS PARCEIROS
   Edite "maps" com o link exato do Google Maps de cada
   parceiro quando quiser refinar a localização.
--------------------------------------------------------- */
const PARTNERS = [
  { img: 'assets/parceiro-1.jpg', name: 'Cervejaria Araras', address: 'Av. Washington Luiz, 241 — Centro, Araras/SP' },
  { img: 'assets/parceiro-2.jpg', name: 'Quiosque Divina', address: 'R. Dr. Armando Sales de Oliveira — Lago, Araras/SP' },
  { img: 'assets/parceiro-3.jpg', name: 'Elaine Menezes Doceria', address: 'Av. José Ometto, 1980 — FHO, Araras/SP' },
  { img: 'assets/parceiro-4.jpg', name: 'Seu Leoncio Bar e Petiscaria', address: 'Av. Melvin Jones, 560, Araras/SP' },
  { img: 'assets/parceiro-5.jpg', name: 'Virtual Games Araras', address: 'R. Rodrigues Alves, 44 — Jd. Belvedere, Araras/SP' }
];

/* ---------------------------------------------------------
   DEPOIMENTOS REAIS (avaliações de clientes na Shopee)
   Nota: por privacidade, não usamos a foto de perfil do
   cliente — apenas as fotos reais que ele enviou junto
   com a avaliação do produto.
--------------------------------------------------------- */
const TESTIMONIALS = [
  {
    name: 'bianagahara',
    place: 'Compra via Shopee · Variação: 60g',
    date: '06/08/2026',
    stars: 5,
    text: 'Embalagem: veio muito bem embalado. Custo-benefício: o preço mais em conta que achei. Vendedor super atencioso, e ainda ganhei um mimo! A entrega foi super rápida, 3 dias pra chegar.',
    photos: ['assets/review-bianagahara-1.jpg']
  },
  {
    name: 'rooose_ane',
    place: 'Compra via Shopee · Variação: 35g',
    date: '25/08/2026',
    stars: 5,
    text: 'Chegou rapidão e ainda veio um brinde coisa mais linda!! Amamossss',
    photos: ['assets/review-rooose-1.jpg', 'assets/review-rooose-2.jpg', 'assets/review-rooose-3.jpg']
  },
  {
    name: 'laila_fox137',
    place: 'Compra via Shopee · Variação: 35g',
    date: '07/08/2026',
    stars: 5,
    text: 'Embalagem: muito bem embalado, foi até difícil de abrir. Custo-benefício: razoável, pensei que seria maior a barrinha. Chegou no prazo e em plástico bolha. Veio até com um mimo, adoreii. Não provei pois é pra outra pessoa, mas fiquei muito feliz com a minha compra.',
    photos: ['assets/review-laila-1.jpg', 'assets/review-laila-2.jpg', 'assets/review-laila-3.jpg']
  }
];

/* ---------------------------------------------------------
   RENDER: Catálogo
--------------------------------------------------------- */
const productGrid = document.getElementById('productGrid');
productGrid.innerHTML = PRODUCTS.map(p => {
  const sizeBoxes = p.type === 'variants'
    ? `<div class="size-grid">${p.variants.map(v => `<div class="size-box"><span class="g">${v.label}</span></div>`).join('')}</div>`
    : '';

  return `
  <article class="product-card reveal ${p.isMimo ? 'is-mimo' : ''}">
    <div class="product-media" data-open-modal="${p.id}">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      ${p.isMimo ? '<div class="foil-peel foil-peel-mimo"><span>Mimo</span></div>' : ''}
    </div>
    <div class="product-body">
      <h3 data-open-modal="${p.id}">${p.name}</h3>
      ${sizeBoxes}
      <span class="link-details" data-open-modal="${p.id}">Ver detalhes do produto →</span>
    </div>
  </article>
`;
}).join('');

/* ---------------------------------------------------------
   RENDER: Parceiros
--------------------------------------------------------- */
const partnerGrid = document.getElementById('partnerGrid');
partnerGrid.innerHTML = PARTNERS.map(p => `
  <a class="partner-card reveal" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ', ' + p.address)}" target="_blank" rel="noopener">
    <img src="${p.img}" alt="${p.name}" loading="lazy">
    <div class="partner-overlay"><span>📍 Ver no mapa</span></div>
  </a>
`).join('');

/* ---------------------------------------------------------
   RENDER: Depoimentos
--------------------------------------------------------- */
const testiTrack = document.getElementById('testiTrack');
testiTrack.innerHTML = TESTIMONIALS.map(t => `
  <div class="testi-card reveal">
    <div class="testi-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
    <p>"${t.text}"</p>
    ${t.photos && t.photos.length ? `
      <div class="testi-photos">
        ${t.photos.map(src => `<img src="${src}" alt="Foto enviada por cliente na avaliação" loading="lazy">`).join('')}
      </div>` : ''}
    <div class="testi-person">
      <div class="testi-avatar">${t.name.charAt(0).toUpperCase()}</div>
      <div><strong>${t.name}</strong><span>${t.place}</span></div>
    </div>
  </div>
`).join('');

/* ---------------------------------------------------------
   MODAL DE PRODUTO
--------------------------------------------------------- */
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImg');
const modalThumbs = document.getElementById('modalThumbs');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalSizeArea = document.getElementById('modalSizeArea');
const modalMimoNote = document.getElementById('modalMimoNote');

function openModal(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  const gallery = p.gallery && p.gallery.length ? p.gallery : [p.img];
  modalImg.src = gallery[0];
  modalImg.alt = p.name;
  if(gallery.length > 1){
    modalThumbs.style.display = 'flex';
    modalThumbs.innerHTML = gallery.map((src, i) => `<img src="${src}" alt="${p.name}" class="${i===0 ? 'active':''}" data-thumb="${src}">`).join('');
  } else {
    modalThumbs.style.display = 'none';
    modalThumbs.innerHTML = '';
  }
  modalTitle.textContent = p.name;
  modalDesc.textContent = p.desc;

  if(p.type === 'variants'){
    modalSizeArea.innerHTML = `
      <div class="size-grid">
        ${p.variants.map(v => `<div class="size-box"><span class="g">${v.label}</span></div>`).join('')}
      </div>`;
  } else {
    modalSizeArea.innerHTML = '';
  }

  if(p.mimoNote){
    modalMimoNote.style.display = 'block';
    modalMimoNote.textContent = p.mimoNote;
  } else {
    modalMimoNote.style.display = 'none';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-open-modal]');
  if(trigger){
    e.preventDefault();
    openModal(trigger.getAttribute('data-open-modal'));
    closeMobileNav();
    return;
  }
  const thumb = e.target.closest('[data-thumb]');
  if(thumb){
    modalImg.src = thumb.getAttribute('data-thumb');
    modalThumbs.querySelectorAll('img').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    return;
  }
});
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

/* ---------------------------------------------------------
   HEADER SCROLL STATE
--------------------------------------------------------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------------------------------------------------------
   MENU MOBILE
--------------------------------------------------------- */
const burger = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
function closeMobileNav(){
  burger.classList.remove('open');
  mobileNav.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}
burger.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
});
mobileNav.querySelectorAll('a:not([data-open-modal])').forEach(a => a.addEventListener('click', closeMobileNav));

/* ---------------------------------------------------------
   MARQUEE (duplica o conteúdo p/ loop perfeito)
--------------------------------------------------------- */
const stripTrack = document.getElementById('stripTrack');
stripTrack.innerHTML += stripTrack.innerHTML;

/* ---------------------------------------------------------
   SCROLL REVEAL
--------------------------------------------------------- */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));

/* ---------------------------------------------------------
   ACTIVE NAV LINK ON SCROLL
--------------------------------------------------------- */
const navLinks = document.querySelectorAll('.nav-desktop > li > .nav-link');
const sections = ['topo','catalogo','sobre','parceiros','depoimentos','contato'].map(id => document.getElementById(id));
window.addEventListener('scroll', () => {
  let current = sections[0];
  sections.forEach(sec => { if(sec && window.scrollY >= sec.offsetTop - 140) current = sec; });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + (current ? current.id : 'topo'));
  });
}, { passive: true });

/* ---------------------------------------------------------
   SPARKLE CANVAS (poeira dourada no hero)
--------------------------------------------------------- */
(function sparkles(){
  const canvas = document.getElementById('sparkleCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let particles = [];
  let w, h;

  function resize(){
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    const count = Math.floor((w * h) / 16000);
    particles = Array.from({ length: count }, () => makeParticle());
  }
  function makeParticle(){
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.6 + 0.2,
      twinkle: Math.random() * Math.PI * 2
    };
  }
  function tick(){
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.twinkle += 0.03;
      const a = p.alpha * (0.6 + 0.4 * Math.sin(p.twinkle));
      ctx.beginPath();
      ctx.fillStyle = `rgba(241, 214, 140, ${a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y -= p.speed;
      p.x += p.drift;
      if(p.y < -4){ p.y = h + 4; p.x = Math.random() * w; }
    });
    if(!reduceMotion) requestAnimationFrame(tick);
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();
  tick();
})();
