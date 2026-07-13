/**
 * ============================================================
 *  CREPES BAKU  |  app.js
 * ============================================================
 *  WHATSAPP NUMBERS:
 *    ORDER_WA   — Order number
 *    RESERVE_WA — Reservation number
 * ============================================================
 */

// ── WhatsApp numbers (digits only, no "+") ──────────────────
const ORDER_WA   = '994505384749';
const RESERVE_WA = '994505384749';

// ── i18n translations ────────────────────────────────────────
const TRANSLATIONS = {
  az: {
    nav_about: 'Haqqında',
    nav_menu: 'Menyu',
    nav_gallery: 'Qalerya',
    nav_reservation: 'Rezervasiya',
    nav_reservation_short: 'Rezerv',
    nav_order: 'Sifariş Et',
    nav_order_short: 'Sifariş',
    nav_faq: 'FAQ',
    hero_title: 'Salam, Crepes Baku!',
    hero_subtitle: 'Ən dadlı kreplər, ən mehriban atmosfer',
    hours_title: 'İş Saatları',
    contact_title: 'Əlaqə',
    contact_map: 'Ünvanı Xəritədə Gör',
    about_title: 'Haqqımızda',
    about_text: 'Salam, Biz Bakıda ən ləzzətli krep təcrübəsini sizə təqdim edirik. Hər bir krep sevgi ilə hazırlanır — şirin və doyumlu, hər zövq üçün seçim var!',
    cta_menu: 'Menyuya Bax 🥞',
    tab_sirin: '🍫 Şirin Kreplər',
    tab_doyumlu: '🧀 Doyumlu Kreplər',
    tab_soyuq: '🧊 Soyuq İçkilər',
    tab_isti: '☕ İsti İçkilər',
    tab_setler: '🎁 Setlər',
    cart_go: 'Sifarişə keç →',
    cart_empty: 'Hələ heç bir məhsul seçilməyib.',
    cart_go_menu: 'Menyuya get →',
    cart_clear: 'Səbəti Təmizlə',
    order_total: 'Cəmi:',
    manual_add: 'Əl ilə məhsul əlavə et',
    manual_name: 'Məhsul adı',
    manual_qty: 'Miq.',
    btn_add: 'Əlavə et',
    form_name: 'Ad Soyad *',
    form_name_ph: 'Adınız',
    form_phone: 'Telefon *',
    form_date: 'Tarix *',
    form_time: 'Saat *',
    form_people: 'Neçə nəfər? *',
    form_select: 'Seçin',
    form_note: 'Əlavə qeyd',
    form_note_ph: 'Xüsusi istəklər...',
    form_address: 'Ünvan / Çatdırılma yeri *',
    form_address_ph: 'Ünvanınız...',
    btn_location: 'Konumumu Al',
    reservation_subtitle: 'Əvvəlcədən sifariş edin',
    reservation_send: 'WhatsApp ilə Göndər 💬',
    order_subtitle: 'Seçdiyiniz məhsullar',
    order_send: 'WhatsApp ilə Sifariş Ver 🛵',
    faq_title: 'Tez-tez Sorulan Suallar',
    modal_add: 'Səbətə Əlavə Et 🛒',
    modal_ingredients: '🧾 Tərkib: ',
    toast_added: 'səbətə əlavə edildi 🛒',
    toast_fill: 'Bütün məcburi xanaları doldurun ⚠️',
    toast_fill_order: 'Ad, telefon və ünvanı doldurun ⚠️',
    toast_manual_name: 'Məhsul adını daxil edin',
    location_getting: 'Konum alınır...',
    location_not_supported: 'Konum dəstəklənmir',
    location_text: 'Mənim konum: ',
    location_ok: '✓ Konum alındı',
    location_denied: 'Konum icazəsi verilmədi',
    location_not_found: 'Konum tapılmadı',
    location_timeout: 'Vaxt başa çatdı',
    location_error: 'Xəta baş verdi',
    wa_reservation_header: '📅 *REZERVASİYA SİFARİŞİ*',
    wa_name: '👤 Ad: ',
    wa_phone: '📞 Telefon: ',
    wa_date: '📆 Tarix: ',
    wa_time: '🕐 Saat: ',
    wa_people: '👥 Nəfər sayı: ',
    wa_note: '📝 Qeyd: ',
    wa_order_header: '🛵 *YENİ SİFARİŞ*',
    wa_address: '🏠 Ünvan: ',
    wa_location: '📍 Konum: ',
    wa_items: '🛒 *Sifariş:*',
    wa_total: '💰 Cəmi: ',
    day_mon: 'Bazar ertəsi',
    day_tue: 'Çərşənbə axşamı',
    day_wed: 'Çərşənbə',
    day_thu: 'Cümə axşamı',
    day_fri: 'Cümə',
    day_sat: 'Şənbə',
    day_sun: 'Bazar',
    cart_count_label: 'məhsul'
  },
  en: {
    nav_about: 'About',
    nav_menu: 'Menu',
    nav_gallery: 'Gallery',
    nav_reservation: 'Reservation',
    nav_reservation_short: 'Reserve',
    nav_order: 'Order',
    nav_order_short: 'Order',
    nav_faq: 'FAQ',
    hero_title: 'Welcome to Crepes Baku!',
    hero_subtitle: 'The tastiest crepes, the warmest atmosphere',
    hours_title: 'Working Hours',
    contact_title: 'Contact',
    contact_map: 'See Location on Map',
    about_title: 'About Us',
    about_text: 'Hi! We offer the most delicious crepe experience in Baku. Every crepe is made with love — sweet and savory, there is a choice for every taste!',
    cta_menu: 'View Menu 🥞',
    tab_sirin: '🍫 Sweet Crepes',
    tab_doyumlu: '🧀 Savory Crepes',
    tab_soyuq: '🧊 Cold Drinks',
    tab_isti: '☕ Hot Drinks',
    tab_setler: '🎁 Sets',
    cart_go: 'Go to Order →',
    cart_empty: 'No products selected yet.',
    cart_go_menu: 'Go to Menu →',
    cart_clear: 'Clear Cart',
    order_total: 'Total:',
    manual_add: 'Add item manually',
    manual_name: 'Product name',
    manual_qty: 'Qty.',
    btn_add: 'Add',
    form_name: 'Full Name *',
    form_name_ph: 'Your name',
    form_phone: 'Phone *',
    form_date: 'Date *',
    form_time: 'Time *',
    form_people: 'How many people? *',
    form_select: 'Select',
    form_note: 'Additional note',
    form_note_ph: 'Special requests...',
    form_address: 'Address / Delivery location *',
    form_address_ph: 'Your address...',
    btn_location: 'Get My Location',
    reservation_subtitle: 'Book in advance',
    reservation_send: 'Send via WhatsApp 💬',
    order_subtitle: 'Selected products',
    order_send: 'Order via WhatsApp 🛵',
    faq_title: 'Frequently Asked Questions',
    modal_add: 'Add to Cart 🛒',
    modal_ingredients: '🧾 Ingredients: ',
    toast_added: 'added to cart 🛒',
    toast_fill: 'Please fill in all required fields ⚠️',
    toast_fill_order: 'Please fill in name, phone and address ⚠️',
    toast_manual_name: 'Please enter product name',
    location_getting: 'Getting location...',
    location_not_supported: 'Location not supported',
    location_text: 'My location: ',
    location_ok: '✓ Location obtained',
    location_denied: 'Location permission denied',
    location_not_found: 'Location not found',
    location_timeout: 'Timeout',
    location_error: 'An error occurred',
    wa_reservation_header: '📅 *RESERVATION REQUEST*',
    wa_name: '👤 Name: ',
    wa_phone: '📞 Phone: ',
    wa_date: '📆 Date: ',
    wa_time: '🕐 Time: ',
    wa_people: '👥 People: ',
    wa_note: '📝 Note: ',
    wa_order_header: '🛵 *NEW ORDER*',
    wa_address: '🏠 Address: ',
    wa_location: '📍 Location: ',
    wa_items: '🛒 *Order:*',
    wa_total: '💰 Total: ',
    day_mon: 'Monday',
    day_tue: 'Tuesday',
    day_wed: 'Wednesday',
    day_thu: 'Thursday',
    day_fri: 'Friday',
    day_sat: 'Saturday',
    day_sun: 'Sunday',
    cart_count_label: 'items'
  },
  ru: {
    nav_about: 'О нас',
    nav_menu: 'Меню',
    nav_gallery: 'Галерея',
    nav_reservation: 'Резервация',
    nav_reservation_short: 'Резерв',
    nav_order: 'Заказать',
    nav_order_short: 'Заказ',
    nav_faq: 'FAQ',
    hero_title: 'Добро пожаловать в Crepes Baku!',
    hero_subtitle: 'Самые вкусные крепы, самая тёплая атмосфера',
    hours_title: 'Часы работы',
    contact_title: 'Контакты',
    contact_map: 'Посмотреть на карте',
    about_title: 'О нас',
    about_text: 'Привет! Мы предлагаем самый вкусный опыт с крепами в Баку. Каждый крепе готовится с любовью — сладкий и сытный, есть выбор на любой вкус!',
    cta_menu: 'Смотреть меню 🥞',
    tab_sirin: '🍫 Сладкие Крепы',
    tab_doyumlu: '🧀 Сытные Крепы',
    tab_soyuq: '🧊 Холодные Напитки',
    tab_isti: '☕ Горячие Напитки',
    tab_setler: '🎁 Сеты',
    cart_go: 'К заказу →',
    cart_empty: 'Товары ещё не выбраны.',
    cart_go_menu: 'В меню →',
    cart_clear: 'Очистить корзину',
    order_total: 'Итого:',
    manual_add: 'Добавить товар вручную',
    manual_name: 'Название товара',
    manual_qty: 'Кол.',
    btn_add: 'Добавить',
    form_name: 'Имя Фамилия *',
    form_name_ph: 'Ваше имя',
    form_phone: 'Телефон *',
    form_date: 'Дата *',
    form_time: 'Время *',
    form_people: 'Сколько человек? *',
    form_select: 'Выбрать',
    form_note: 'Дополнительная заметка',
    form_note_ph: 'Особые пожелания...',
    form_address: 'Адрес / Место доставки *',
    form_address_ph: 'Ваш адрес...',
    btn_location: 'Получить моё местоположение',
    reservation_subtitle: 'Забронируйте заранее',
    reservation_send: 'Отправить через WhatsApp 💬',
    order_subtitle: 'Выбранные товары',
    order_send: 'Заказать через WhatsApp 🛵',
    faq_title: 'Часто задаваемые вопросы',
    modal_add: 'Добавить в корзину 🛒',
    modal_ingredients: '🧾 Состав: ',
    toast_added: 'добавлен в корзину 🛒',
    toast_fill: 'Пожалуйста, заполните все обязательные поля ⚠️',
    toast_fill_order: 'Пожалуйста, укажите имя, телефон и адрес ⚠️',
    toast_manual_name: 'Пожалуйста, введите название товара',
    location_getting: 'Получение местоположения...',
    location_not_supported: 'Местоположение не поддерживается',
    location_text: 'Моё местоположение: ',
    location_ok: '✓ Местоположение получено',
    location_denied: 'Доступ к местоположению запрещён',
    location_not_found: 'Местоположение не найдено',
    location_timeout: 'Время ожидания истекло',
    location_error: 'Произошла ошибка',
    wa_reservation_header: '📅 *ЗАПРОС НА БРОНИРОВАНИЕ*',
    wa_name: '👤 Имя: ',
    wa_phone: '📞 Телефон: ',
    wa_date: '📆 Дата: ',
    wa_time: '🕐 Время: ',
    wa_people: '👥 Кол. человек: ',
    wa_note: '📝 Заметка: ',
    wa_order_header: '🛵 *НОВЫЙ ЗАКАЗ*',
    wa_address: '🏠 Адрес: ',
    wa_location: '📍 Местоположение: ',
    wa_items: '🛒 *Заказ:*',
    wa_total: '💰 Итого: ',
    day_mon: 'Понедельник',
    day_tue: 'Вторник',
    day_wed: 'Среда',
    day_thu: 'Четверг',
    day_fri: 'Пятница',
    day_sat: 'Суббота',
    day_sun: 'Воскресенье',
    cart_count_label: 'товаров'
  }
};

// ── Current language ─────────────────────────────────────────
let currentLang = localStorage.getItem('crp_lang') || 'az';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS['az'][key] || key;
}

function applyLanguage() {
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Update menu tabs text
  const tabMap = {
    sirin: t('tab_sirin'),
    doyumlu: t('tab_doyumlu'),
    soyuq: t('tab_soyuq'),
    isti: t('tab_isti'),
    setler: t('tab_setler')
  };
  document.querySelectorAll('.menu-tab').forEach(tab => {
    const key = 'tab_' + tab.dataset.cat;
    tab.textContent = t(key);
  });

  // Rebuild menu and FAQ with new language
  buildMenu(activeCat);
  buildFAQ();

  // Update cart UI text
  updateCartUI();

  // Update html lang attribute
  document.documentElement.lang = currentLang;
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('crp_lang', lang);
  applyLanguage();
}

// ── State ────────────────────────────────────────────────────
let cart = {};
let activeCat = 'sirin';
let currentModal = null;
let userLocationLink = null;

// Gallery lightbox
let lbImages = [];
let lbIndex  = 0;
let lbStartX = 0;

// ── DOM References ───────────────────────────────────────────
const menuGrid      = document.getElementById('menuGrid');
const cartBar       = document.getElementById('cartBar');
const cartCount     = document.getElementById('cartCount');
const cartTotal     = document.getElementById('cartTotal');
const galleryGrid   = document.getElementById('galleryGrid');
const faqList       = document.getElementById('faqList');
const lightbox      = document.getElementById('lightbox');
const lbImg         = document.getElementById('lbImg');
const lbCaption     = document.getElementById('lbCaption');
const modalOverlay  = document.getElementById('modalOverlay');
const toast         = document.getElementById('toast');
const navMenu       = document.getElementById('navMenu');
const navToggle     = document.getElementById('navToggle');
const orderItemsList = document.getElementById('orderItemsList');
const orderSummary   = document.getElementById('orderSummary');
const orderTotal     = document.getElementById('orderTotal');
const emptyCartMsg   = document.getElementById('emptyCartMsg');

// ============================================================
//  INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  buildMenu(activeCat);
  buildGallery();
  buildFAQ();
  bindMenuTabs();
  bindNavToggle();
  bindForms();
  bindLangSwitcher();
  setMinDate();
  updateCartUI();
  applyLanguage();
});

// ============================================================
//  LANGUAGE SWITCHER
// ============================================================
function bindLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

// ============================================================
//  NAVIGATION
// ============================================================
function navigateTo(pageId) {
  navMenu.classList.remove('open');

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }

  document.querySelectorAll('.bn-item').forEach(b => {
    b.classList.toggle('active', b.dataset.page === pageId);
  });

  if (pageId === 'sifaris') renderOrderItems();
}

function routeFromHash() {
  const hash = location.hash.replace('#', '') || 'haqqinda';
  navigateTo(hash);
}

window.addEventListener('hashchange', routeFromHash);
window.addEventListener('load', routeFromHash);

// ── Nav toggle ───────────────────────────────────────────────
function bindNavToggle() {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      location.hash = '#' + page;
      navigateTo(page);
    });
  });
}

// ============================================================
//  MENU BUILD
// ============================================================
function getItemName(item) {
  if (typeof item.name === 'object') return item.name[currentLang] || item.name.az || '';
  return item.name;
}

function getItemDesc(item) {
  if (typeof item.desc === 'object') return item.desc[currentLang] || item.desc.az || '';
  return item.desc;
}

function buildMenu(catId) {
  const cat = MENU_DATA.find(c => c.id === catId);
  if (!cat) return;

  menuGrid.innerHTML = '';

  cat.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.setAttribute('role', 'button');
    const itemName = getItemName(item);
    card.setAttribute('aria-label', itemName);

    card.innerHTML = `
      <div class="menu-card-img-wrap">
        <img src="${item.img}" alt="${itemName}" class="menu-card-img" loading="lazy" />
        ${item.popular ? '<span class="popular-badge">⭐ POPULYAR</span>' : ''}
        <button class="menu-card-add" onclick="quickAdd(event,'${item.id}')" aria-label="Add to cart">+</button>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${itemName}</div>
        <div class="menu-card-price">${formatPrice(item.price)}</div>
      </div>
    `;

    card.addEventListener('click', () => openModal(item.id));
    menuGrid.appendChild(card);
  });
}

function bindMenuTabs() {
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeCat = tab.dataset.cat;
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      buildMenu(activeCat);
    });
  });
}

// ============================================================
//  CART
// ============================================================
function quickAdd(e, itemId) {
  e.stopPropagation();
  addToCart(itemId);
}

function addToCart(itemId, silent) {
  const item = findItem(itemId);
  if (!item) return;

  if (cart[itemId]) {
    cart[itemId].qty++;
  } else {
    cart[itemId] = { item, qty: 1 };
  }

  updateCartUI();
  // If called from order page qty controls, re-render instantly without toast
  if (silent) {
    renderOrderItems();
    updateOrderTotal();
  } else {
    showToast(`"${getItemName(item)}" ${t('toast_added')}`);
  }
}

function removeFromCart(itemId) {
  if (!cart[itemId]) return;
  if (cart[itemId].qty > 1) {
    cart[itemId].qty--;
  } else {
    delete cart[itemId];
  }
  updateCartUI();
  renderOrderItems();
  updateOrderTotal();
}

function clearCart() {
  cart = {};
  updateCartUI();
  renderOrderItems();
  updateOrderTotal();
}

function updateCartUI() {
  const total = getCartTotal();
  const count = getCartCount();

  if (count > 0) {
    cartBar.classList.add('show');
    cartCount.textContent = `${count} ${t('cart_count_label')}`;
    cartTotal.textContent = formatPrice(total);
  } else {
    cartBar.classList.remove('show');
  }
}

function getCartTotal() {
  return Object.values(cart).reduce((s, e) => s + e.item.price * e.qty, 0);
}

function getCartCount() {
  return Object.values(cart).reduce((s, e) => s + e.qty, 0);
}

function renderOrderItems() {
  const entries = Object.values(cart);

  // Clear only item rows (not emptyCartMsg which is a static element)
  const existingRows = orderItemsList.querySelectorAll('.order-item-row');
  existingRows.forEach(r => r.remove());

  if (entries.length === 0) {
    orderSummary.style.display = 'none';
    emptyCartMsg.style.display = 'block';
    emptyCartMsg.innerHTML = `<span>${t('cart_empty')}</span> <button class="text-link" onclick="navigateTo('menyu')">${t('cart_go_menu')}</button>`;
    return;
  }

  emptyCartMsg.style.display = 'none';
  orderSummary.style.display = 'block';

  entries.forEach(({ item, qty }) => {
    const row = document.createElement('div');
    row.className = 'order-item-row';
    const itemId = item.id.replace(/'/g, "\\'");
    row.innerHTML = `
      <span class="oi-name">${getItemName(item)}</span>
      <div class="oi-qty-ctrl">
        <button class="oi-qty-btn" data-action="dec" data-id="${item.id}">−</button>
        <span class="oi-qty">${qty}</span>
        <button class="oi-qty-btn" data-action="inc" data-id="${item.id}">+</button>
      </div>
      <span class="oi-price">${formatPrice(item.price * qty)}</span>
      <button class="oi-remove" data-action="del" data-id="${item.id}">🗑</button>
    `;
    orderItemsList.appendChild(row);
  });

  updateOrderTotal();
}

function updateOrderTotal() {
  const total = getCartTotal();
  if (orderTotal) orderTotal.textContent = formatPrice(total);
}

// Delegated event handler for order item controls (instant, no re-render flicker)
document.addEventListener('click', function(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  const id = btn.dataset.id;
  if (!id) return;

  e.stopPropagation();

  if (action === 'inc') {
    if (cart[id]) {
      cart[id].qty++;
    } else {
      // item might be a manual item with no findItem entry
      return;
    }
    // Update just this row instantly
    const row = btn.closest('.order-item-row');
    if (row) {
      row.querySelector('.oi-qty').textContent = cart[id].qty;
      const itemPrice = cart[id].item.price;
      row.querySelector('.oi-price').textContent = formatPrice(itemPrice * cart[id].qty);
    }
    updateCartUI();
    updateOrderTotal();
  } else if (action === 'dec') {
    if (!cart[id]) return;
    if (cart[id].qty > 1) {
      cart[id].qty--;
      const row = btn.closest('.order-item-row');
      if (row) {
        row.querySelector('.oi-qty').textContent = cart[id].qty;
        const itemPrice = cart[id].item.price;
        row.querySelector('.oi-price').textContent = formatPrice(itemPrice * cart[id].qty);
      }
      updateCartUI();
      updateOrderTotal();
    } else {
      delete cart[id];
      updateCartUI();
      renderOrderItems();
    }
  } else if (action === 'del') {
    delete cart[id];
    updateCartUI();
    renderOrderItems();
  }
});

function deleteFromCart(itemId) {
  delete cart[itemId];
  updateCartUI();
  renderOrderItems();
  updateOrderTotal();
}

// Manual add
function toggleManualAdd() {
  const sec = document.getElementById('manualAddSection');
  sec.style.display = sec.style.display === 'none' ? 'block' : 'none';
}

function addManualItem() {
  const nameEl = document.getElementById('manualItem');
  const qtyEl  = document.getElementById('manualQty');
  const name = nameEl.value.trim();
  const qty  = parseInt(qtyEl.value) || 1;

  if (!name) { showToast(t('toast_manual_name')); return; }

  const fakeId = 'manual_' + Date.now();
  cart[fakeId] = {
    item: { id: fakeId, name: name, price: 0 },
    qty
  };

  nameEl.value = '';
  qtyEl.value  = '1';
  updateCartUI();
  renderOrderItems();
  updateOrderTotal();
  showToast(`"${name}" ${t('toast_added')}`);
}

// ============================================================
//  INGREDIENT MODAL
// ============================================================
function openModal(itemId) {
  const item = findItem(itemId);
  if (!item) return;
  currentModal = item;

  document.getElementById('modalImg').src = item.img;
  document.getElementById('modalImg').alt = getItemName(item);
  document.getElementById('modalName').textContent = getItemName(item);
  document.getElementById('modalIngredients').textContent = t('modal_ingredients') + getItemDesc(item);
  document.getElementById('modalPrice').textContent = formatPrice(item.price);

  const btn = document.getElementById('modalOrderBtn');
  btn.textContent = t('modal_add');
  btn.onclick = () => {
    addToCart(item.id);
    closeModal();
  };

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  currentModal = null;
}

// ============================================================
//  GALLERY
// ============================================================
function buildGallery() {
  lbImages = GALLERY_IMAGES;

  galleryGrid.innerHTML = '';
  GALLERY_IMAGES.forEach((img, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';

    const el = document.createElement('img');
    el.src         = img.src;
    el.alt         = img.caption || '';
    el.className   = 'gallery-img';
    el.loading     = 'lazy';

    div.appendChild(el);
    div.addEventListener('click', () => openLightbox(i));
    galleryGrid.appendChild(div);
  });
}

function openLightbox(index) {
  lbIndex = index;
  showLbImage();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  bindLbSwipe();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showLbImage() {
  const d = lbImages[lbIndex];
  lbImg.src = d.src;
  lbCaption.textContent = d.caption || '';
}

function lbGo(dir) {
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  lbImg.style.opacity = '0';
  setTimeout(() => {
    showLbImage();
    lbImg.style.opacity = '1';
  }, 150);
}

function bindLbSwipe() {
  lbImg.addEventListener('touchstart', e => { lbStartX = e.touches[0].clientX; }, { passive: true });
  lbImg.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - lbStartX;
    if (Math.abs(dx) > 40) lbGo(dx < 0 ? 1 : -1);
  });
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => lbGo(-1));
document.getElementById('lbNext').addEventListener('click', () => lbGo(1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

lbImg.style.transition = 'opacity 0.15s ease';

// ============================================================
//  FAQ
// ============================================================
function buildFAQ() {
  faqList.innerHTML = '';
  const data = FAQ_DATA[currentLang] || FAQ_DATA.az;
  data.forEach((faq) => {
    const item = document.createElement('div');
    item.className = 'faq-item';

    item.innerHTML = `
      <button class="faq-q" onclick="toggleFaq(this)">
        <span>${faq.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-a">${faq.a}</div>
    `;

    faqList.appendChild(item);
  });
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');

  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));

  if (!wasOpen) item.classList.add('open');
}

// ============================================================
//  GEOLOCATION
// ============================================================
function getLocation() {
  const btn    = document.getElementById('locationBtn');
  const status = document.getElementById('locationStatus');
  const addrEl = document.getElementById('ordAddress');

  btn.disabled = true;
  status.textContent = t('location_getting');
  status.className = 'location-status';

  if (!navigator.geolocation) {
    status.textContent = t('location_not_supported');
    status.className = 'location-status err';
    btn.disabled = false;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);

      userLocationLink = `https://maps.google.com/?q=${lat},${lon}`;

      // Set value without triggering focus/keyboard (prevents viewport jump)
      addrEl.setAttribute('readonly', 'readonly');
      addrEl.value = `${t('location_text')}${lat}, ${lon}`;
      // Use requestAnimationFrame to avoid layout thrashing
      requestAnimationFrame(() => {
        addrEl.removeAttribute('readonly');
      });

      status.textContent = t('location_ok');
      status.className = 'location-status ok';
      btn.disabled = false;
    },
    err => {
      const msgs = {
        1: t('location_denied'),
        2: t('location_not_found'),
        3: t('location_timeout')
      };
      status.textContent = msgs[err.code] || t('location_error');
      status.className = 'location-status err';
      btn.disabled = false;
    },
    { timeout: 10000, maximumAge: 60000, enableHighAccuracy: false }
  );
}

// ============================================================
//  FORMS
// ============================================================
function bindForms() {
  // Reservation
  document.getElementById('reservationForm').addEventListener('submit', e => {
    e.preventDefault();
    const name   = document.getElementById('resName').value.trim();
    const phone  = document.getElementById('resPhone').value.trim();
    const date   = document.getElementById('resDate').value;
    const time   = document.getElementById('resTime').value;
    const people = document.getElementById('resPeople').value;
    const note   = document.getElementById('resNote').value.trim();

    if (!name || !phone || !date || !time || !people) {
      showToast(t('toast_fill'));
      return;
    }

    const msg = [
      t('wa_reservation_header'),
      t('wa_name') + name,
      t('wa_phone') + phone,
      t('wa_date') + date,
      t('wa_time') + time,
      t('wa_people') + people,
      note ? t('wa_note') + note : ''
    ].filter(Boolean).join('\n');

    openWhatsApp(RESERVE_WA, msg);
  });

  // Order
  document.getElementById('orderForm').addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('ordName').value.trim();
    const phone   = document.getElementById('ordPhone').value.trim();
    const address = document.getElementById('ordAddress').value.trim();
    const note    = document.getElementById('ordNote').value.trim();

    if (!name || !phone || !address) {
      showToast(t('toast_fill_order'));
      return;
    }

    const entries = Object.values(cart);
    let itemLines = '';

    if (entries.length > 0) {
      itemLines = '\n' + t('wa_items') + '\n' + entries.map(({ item, qty }) =>
        `• ${getItemName(item)} × ${qty}${item.price > 0 ? ' — ' + formatPrice(item.price * qty) : ''}`
      ).join('\n');

      const total = getCartTotal();
      if (total > 0) itemLines += `\n${t('wa_total')}${formatPrice(total)}`;
    }

    let locationLine = '';
    if (userLocationLink) {
      locationLine = `\n${t('wa_location')}${userLocationLink}`;
    }

    const msg = [
      t('wa_order_header'),
      t('wa_name') + name,
      t('wa_phone') + phone,
      t('wa_address') + address,
      locationLine,
      itemLines,
      note ? t('wa_note') + note : ''
    ].filter(Boolean).join('\n');

    openWhatsApp(ORDER_WA, msg);
  });
}

function setMinDate() {
  const today = new Date().toISOString().split('T')[0];
  const dateEl = document.getElementById('resDate');
  if (dateEl) dateEl.min = today;
}

function openWhatsApp(number, msg) {
  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
}

// ============================================================
//  HELPERS
// ============================================================
function findItem(id) {
  for (const cat of MENU_DATA) {
    const found = cat.items.find(i => i.id === id);
    if (found) return found;
  }
  return null;
}

function formatPrice(num) {
  return num.toFixed(2).replace('.', ',') + ' ₼';
}

let toastTimer = null;
function showToast(msg) {
  if (toastTimer) { clearTimeout(toastTimer); toast.className = 'toast'; }
  toast.textContent = msg;
  toast.className = 'toast show';
  toastTimer = setTimeout(() => { toast.className = 'toast'; }, 2300);
}
