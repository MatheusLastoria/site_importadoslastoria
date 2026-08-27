/* =========================================================
   IMPORTADOS LASTORIA — script.js
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------------------------------------------------
   DADOS DOS PRODUTOS
   Edite aqui: imagem, descrição, e principalmente o link
   "shopeeUrl" de cada produto quando tiver o link real do
   seu anúncio na Shopee.
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
      { key: '35g', label: '35g', old: 'R$ 32,00', price: 22.40 },
      { key: '60g', label: '60g', old: 'R$ 45,00', price: 31.50 }
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
      { key: '35g', label: '35g', old: 'R$ 32,00', price: 22.40 },
      { key: '60g', label: '60g', old: 'R$ 45,00', price: 31.50 }
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
      { key: '35g', label: '35g', old: 'R$ 32,00', price: 22.40 },
      { key: '60g', label: '60g', old: 'R$ 45,00', price: 31.50 }
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
      { key: '35g', label: '35g', old: 'R$ 32,00', price: 22.40 },
      { key: '60g', label: '60g', old: 'R$ 45,00', price: 31.50 }
    ]
  },
  {
    id: 'mimuu-vaquinha',
    badge: 'Mimo Lastoria',
    name: 'Mimuu Chaveiro Vaquinha 3D',
    img: 'assets/mimuu-banner-1.jpg',
    desc: 'O Mimuu é o nosso chaveirinho temático em impressão 3D, feito à mão no estilo amigurumi (crochê), com carinha de vaquinha super fofa. É o mimo perfeito para tornar sua compra ainda mais especial — pode levar avulso ou ganhar de brinde!',
    type: 'single',
    price: 16.00,
    old: 'R$ 18,00',
    isMimo: true,
    mimoNote: 'Este chaveiro é o mesmo "mimo" que oferecemos de brinde nas compras acima de R$ 60,00 em chocolates e doces importados pelo site. Se preferir, você também pode comprá-lo avulso por R$ 16,00.',
    gallery: ['assets/mimuu-banner-1.jpg']
  }
];

const MIMO_THRESHOLD = 60;
const WHATSAPP_NUMBER = '5519989384050';

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
function formatBRL(v){ return 'R$ ' + v.toFixed(2).replace('.', ','); }

const productGrid = document.getElementById('productGrid');
productGrid.innerHTML = PRODUCTS.map(p => {
  const priceBoxes = p.type === 'variants'
    ? `<div class="price-grid">${p.variants.map((v,i) => `
        <div class="price-box card-variant-box ${i===0 ? 'selected':''}" data-card-variant="${v.key}"><span class="g">${v.label}</span><span class="old">${v.old}</span><span class="new">${formatBRL(v.price)}</span></div>
      `).join('')}</div>`
    : `<div class="price-grid price-grid-single"><div class="price-box"><span class="g">Unidade</span>${p.old ? `<span class="old">${p.old}</span>` : ''}<span class="new">${formatBRL(p.price)}</span></div></div>`;

  const actionBtn = `<button class="btn btn-primary btn-block" data-add-cart="${p.id}">Adicionar ao carrinho</button>`;

  return `
  <article class="product-card reveal ${p.isMimo ? 'is-mimo' : ''}">
    <div class="product-media" data-open-modal="${p.id}">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      ${p.isMimo ? '<div class="foil-peel foil-peel-mimo"><span>Mimo</span></div>' : '<div class="foil-peel"><span>-30%</span></div>'}
    </div>
    <div class="product-body">
      <h3 data-open-modal="${p.id}">${p.name}</h3>
      ${priceBoxes}
      ${actionBtn}
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
const modalPriceArea = document.getElementById('modalPriceArea');
const modalMimoNote = document.getElementById('modalMimoNote');
const modalAddBtn = document.getElementById('modalAddBtn');
let modalVariantKey = null;

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
    modalVariantKey = p.variants[0].key;
    modalPriceArea.innerHTML = `
      <div class="price-grid">
        ${p.variants.map(v => `
          <div class="price-box modal-variant-box ${v.key === modalVariantKey ? 'selected' : ''}" data-modal-variant="${v.key}">
            <span class="g">${v.label}</span><span class="old">${v.old}</span><span class="new">${formatBRL(v.price)}</span>
          </div>
        `).join('')}
      </div>`;
  } else {
    modalVariantKey = null;
    modalPriceArea.innerHTML = `
      <div class="price-grid price-grid-single"><div class="price-box selected"><span class="g">Unidade</span>${p.old ? `<span class="old">${p.old}</span>` : ''}<span class="new">${formatBRL(p.price)}</span></div></div>`;
  }

  if(p.mimoNote){
    modalMimoNote.style.display = 'block';
    modalMimoNote.textContent = p.mimoNote;
  } else {
    modalMimoNote.style.display = 'none';
  }

  modalAddBtn.setAttribute('data-modal-add', p.id);
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
  const variantBox = e.target.closest('[data-modal-variant]');
  if(variantBox){
    modalVariantKey = variantBox.getAttribute('data-modal-variant');
    modalPriceArea.querySelectorAll('.modal-variant-box').forEach(b => b.classList.remove('selected'));
    variantBox.classList.add('selected');
    return;
  }
});
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

modalAddBtn.addEventListener('click', () => {
  const id = modalAddBtn.getAttribute('data-modal-add');
  addToCart(id, modalVariantKey);
  closeModal();
});

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

/* =========================================================
   CARRINHO DE COMPRAS
   O cliente monta o pedido no site e envia para o WhatsApp;
   a venda é finalizada manualmente pelo vendedor.
   ========================================================= */
const CART_KEY = 'lastoria_cart_v1';
let cart = [];

function loadCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    cart = raw ? JSON.parse(raw) : [];
  } catch(e){ cart = []; }
}
function saveCart(){
  try{ localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch(e){ /* ignore */ }
}

function findProduct(id){ return PRODUCTS.find(p => p.id === id); }

function addToCart(productId, variantKey){
  const p = findProduct(productId);
  if(!p) return;
  let unitPrice, variantLabel;
  if(p.type === 'variants'){
    const v = p.variants.find(v => v.key === variantKey) || p.variants[0];
    unitPrice = v.price;
    variantLabel = v.label;
  } else {
    unitPrice = p.price;
    variantLabel = 'Unidade';
  }
  const lineId = productId + '::' + variantLabel;
  const existing = cart.find(l => l.lineId === lineId);
  if(existing){
    existing.qty += 1;
  } else {
    cart.push({ lineId, productId, name: p.name, variantLabel, unitPrice, qty: 1, isMimo: !!p.isMimo });
  }
  saveCart();
  renderCart();
  openCartDrawer();
  pulseCartIcon();
}

function updateQty(lineId, delta){
  const line = cart.find(l => l.lineId === lineId);
  if(!line) return;
  line.qty += delta;
  if(line.qty <= 0){
    cart = cart.filter(l => l.lineId !== lineId);
  }
  saveCart();
  renderCart();
}

function removeLine(lineId){
  cart = cart.filter(l => l.lineId !== lineId);
  saveCart();
  renderCart();
}

function cartTotals(){
  const chocTotal = cart.filter(l => !l.isMimo).reduce((sum, l) => sum + l.unitPrice * l.qty, 0);
  const mimoTotal = cart.filter(l => l.isMimo).reduce((sum, l) => sum + l.unitPrice * l.qty, 0);
  const grandTotal = chocTotal + mimoTotal;
  const itemCount = cart.reduce((sum, l) => sum + l.qty, 0);
  return { chocTotal, mimoTotal, grandTotal, itemCount };
}

const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartCountEl = document.getElementById('cartCount');
const cartFabCountEl = document.getElementById('cartFabCount');
const cartTotalEl = document.getElementById('cartTotal');
const cartMimoBanner = document.getElementById('cartMimoBanner');
const cartWhatsBtn = document.getElementById('cartWhatsBtn');

function renderCart(){
  const { grandTotal, itemCount, chocTotal } = cartTotals();
  cartCountEl.textContent = itemCount;
  cartFabCountEl.textContent = itemCount;
  cartFabCountEl.style.display = itemCount > 0 ? 'flex' : 'none';

  if(cart.length === 0){
    cartItemsEl.innerHTML = '';
    cartEmptyEl.style.display = 'flex';
    cartWhatsBtn.setAttribute('disabled', 'true');
  } else {
    cartEmptyEl.style.display = 'none';
    cartWhatsBtn.removeAttribute('disabled');
    cartItemsEl.innerHTML = cart.map(l => `
      <div class="cart-line ${l.isMimo ? 'is-mimo' : ''}">
        <div class="cart-line-info">
          <strong>${l.name}</strong>
          <span>${l.variantLabel}${l.isMimo ? ' · mimo' : ''} — ${formatBRL(l.unitPrice)}</span>
        </div>
        <div class="cart-line-actions">
          <button class="qty-btn" data-qty-minus="${l.lineId}" aria-label="Diminuir">−</button>
          <span class="qty-value">${l.qty}</span>
          <button class="qty-btn" data-qty-plus="${l.lineId}" aria-label="Aumentar">+</button>
          <button class="cart-remove" data-remove="${l.lineId}" aria-label="Remover">✕</button>
        </div>
      </div>
    `).join('');
  }

  cartTotalEl.textContent = formatBRL(grandTotal);

  const missing = MIMO_THRESHOLD - chocTotal;
  const alreadyHasMimo = cart.some(l => l.isMimo);
  if(chocTotal >= MIMO_THRESHOLD && !alreadyHasMimo){
    cartMimoBanner.style.display = 'flex';
    cartMimoBanner.innerHTML = `🎁 Você já pode ganhar o <strong>Mimuu Chaveiro Vaquinha</strong> de brinde! Fale com a gente pelo WhatsApp ao fechar o pedido.`;
  } else if(chocTotal >= MIMO_THRESHOLD && alreadyHasMimo){
    cartMimoBanner.style.display = 'flex';
    cartMimoBanner.innerHTML = `🎁 Seu pedido já dá direito ao mimo de brinde — aproveitado!`;
  } else if(chocTotal > 0 && missing > 0){
    cartMimoBanner.style.display = 'flex';
    cartMimoBanner.innerHTML = `Faltam <strong>${formatBRL(missing)}</strong> em chocolates para ganhar o Mimuu Chaveiro Vaquinha de brinde 🐮`;
  } else {
    cartMimoBanner.style.display = 'none';
    cartMimoBanner.innerHTML = '';
  }
}

function pulseCartIcon(){
  const fab = document.getElementById('cartFab');
  fab.classList.remove('pulse');
  void fab.offsetWidth;
  fab.classList.add('pulse');
}

function openCartDrawer(){
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartDrawer(){
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cartFab').addEventListener('click', openCartDrawer);
document.getElementById('cartClose').addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);

document.addEventListener('click', (e) => {
  const addBtn = e.target.closest('[data-add-cart]');
  if(addBtn){
    const id = addBtn.getAttribute('data-add-cart');
    const card = addBtn.closest('.product-card');
    const selected = card ? card.querySelector('.card-variant-box.selected') : null;
    const variantKey = selected ? selected.getAttribute('data-card-variant') : null;
    addToCart(id, variantKey);
    return;
  }
  const cardVariant = e.target.closest('[data-card-variant]');
  if(cardVariant){
    cardVariant.closest('.price-grid').querySelectorAll('.card-variant-box').forEach(b => b.classList.remove('selected'));
    cardVariant.classList.add('selected');
    return;
  }
  const plus = e.target.closest('[data-qty-plus]');
  if(plus){ updateQty(plus.getAttribute('data-qty-plus'), 1); return; }
  const minus = e.target.closest('[data-qty-minus]');
  if(minus){ updateQty(minus.getAttribute('data-qty-minus'), -1); return; }
  const rem = e.target.closest('[data-remove]');
  if(rem){ removeLine(rem.getAttribute('data-remove')); return; }
});

cartWhatsBtn.addEventListener('click', () => {
  if(cart.length === 0) return;
  const { grandTotal, chocTotal } = cartTotals();
  let msg = 'Olá! Quero fazer um pedido na Importados Lastoria:\n\n';
  cart.forEach(l => {
    msg += `• ${l.name} (${l.variantLabel}) x${l.qty} — ${formatBRL(l.unitPrice * l.qty)}\n`;
  });
  msg += `\nTotal: ${formatBRL(grandTotal)}`;
  if(chocTotal >= MIMO_THRESHOLD && !cart.some(l => l.isMimo)){
    msg += `\n\nAcredito que tenho direito ao mimo Chaveiro Vaquinha de brinde 🎁`;
  }
  msg += '\n\nPode me confirmar disponibilidade e forma de pagamento?';
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener');
});

loadCart();
renderCart();
