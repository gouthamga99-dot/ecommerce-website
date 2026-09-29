/* ============================================
   NEXORA — Single-Page E-Commerce JavaScript
   Cart, Gallery, Filters, Configurator, UI
   ============================================ */

// ============================================
// PRODUCT DATA
// ============================================

const products = [
  {
    id: 1,
    name: "Titan Ultra 16 Pro Max 5G (Natural Titanium, 256GB)",
    price: 134900,
    oldPrice: 144900,
    image: "assets/images/img_31.jpg",
    category: "smartphones",
    brand: "Apple",
    rating: 4.9,
    reviews: 3120,
    badge: "Bestseller",
    badgeType: "bestseller",
    delivery: "Free 1-Day Delivery",
    deliveryType: "green",
    colors: ["#B8B4AA", "#35363A", "#E5E6E8", "#C2A58F"],
    specs: "A18 Pro 3nm • 48MP Periscope • 4,685mAh",
    ram: "8GB",
    storage: "256GB",
    emi: "₹6,540/mo"
  },
  {
    id: 2,
    name: "Galaxy S25 Ultra 5G (Titanium Gray, 512GB with S-Pen)",
    price: 129999,
    oldPrice: 139999,
    image: "assets/images/img_21.jpg",
    category: "smartphones",
    brand: "Samsung",
    rating: 4.8,
    reviews: 2840,
    badge: "AI Powered",
    badgeType: "ai",
    delivery: "S-Pen Included",
    deliveryType: "blue",
    colors: ["#646467", "#202227", "#837B72"],
    specs: "Snapdragon 8 Elite • 200MP Quad Cam • 5,000mAh",
    ram: "12GB",
    storage: "512GB",
    emi: "₹6,300/mo"
  },
  {
    id: 3,
    name: "Pixel 9 Pro XL (Obsidian, 256GB Tensor G4)",
    price: 109999,
    oldPrice: 119999,
    image: "assets/images/img_28.jpg",
    category: "smartphones",
    brand: "Google Pixel",
    rating: 4.7,
    reviews: 1100,
    badge: "Pure Gemini AI",
    badgeType: "premium",
    delivery: "Titan M2 Chip",
    deliveryType: "neutral",
    colors: ["#1F2022", "#ECEBE7", "#A8B2A6"],
    specs: "Tensor G4 • 50MP Pro Triple • 7 Yrs Android OS",
    ram: "16GB",
    storage: "256GB",
    emi: "₹5,330/mo"
  },
  {
    id: 4,
    name: "OnePlus 13 5G (Midnight Black, 16GB/512GB Snapdragon 8 Elite)",
    price: 69999,
    oldPrice: 74999,
    image: "assets/images/img_37.jpg",
    category: "smartphones",
    brand: "OnePlus",
    rating: 4.8,
    reviews: 1940,
    badge: "Snapdragon 8 Elite",
    badgeType: "flagship",
    delivery: "100W In-Box Charger",
    deliveryType: "green",
    colors: ["#18191B", "#1B3B36", "#3F5B82"],
    specs: "16GB LPDDR5X • 6000mAh Glacier • 100W SuperVOOC",
    ram: "16GB",
    storage: "512GB",
    emi: "₹3,390/mo"
  },
  {
    id: 5,
    name: "ROG Phone 9 Pro (16GB/512GB, 185Hz Matrix Display)",
    price: 84999,
    oldPrice: 94999,
    image: "assets/images/img_33.jpg",
    category: "smartphones",
    brand: "Asus ROG",
    rating: 4.6,
    reviews: 890,
    badge: "185Hz Matrix",
    badgeType: "gaming",
    delivery: "AirTrigger Ultrasonic",
    deliveryType: "red",
    colors: ["#1a1a2e", "#16213e", "#0f3460"],
    specs: "AirTrigger Ultrasonic • Active AeroCooling • 5,800mAh",
    ram: "16GB",
    storage: "512GB",
    emi: "₹4,120/mo"
  },
  {
    id: 6,
    name: "Xiaomi 15 Ultra (16GB/1TB, Leica Optics)",
    price: 79999,
    oldPrice: 89999,
    image: "assets/images/img_13.jpg",
    category: "smartphones",
    brand: "Xiaomi",
    rating: 4.7,
    reviews: 1520,
    badge: "Leica Optics",
    badgeType: "premium",
    delivery: "Leica Summilux Lens",
    deliveryType: "neutral",
    colors: ["#2C2C2C", "#F5F5F5", "#8B7355"],
    specs: "Snapdragon 8 Elite • 50MP Leica Quad • 5,410mAh",
    ram: "16GB",
    storage: "1TB",
    emi: "₹3,880/mo"
  }
];

// ============================================
// PAGE NAVIGATION
// ============================================

function showPage(page) {
  // Hide all pages
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-products').style.display = 'none';
  document.getElementById('page-product').style.display = 'none';
  document.getElementById('page-cart').style.display = 'none';

  // Show selected page
  document.getElementById('page-' + page).style.display = 'block';

  // Update nav active state
  document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
  const navLinks = document.querySelectorAll('.nav a');
  if (page === 'home' && navLinks[0]) navLinks[0].classList.add('active');
  if (page === 'products' && navLinks[1]) navLinks[1].classList.add('active');
  if (page === 'product' && navLinks[2]) navLinks[2].classList.add('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// CART MANAGEMENT
// ============================================

let cart = [];

function loadCart() {
  try {
    const saved = localStorage.getItem('nexora_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('nexora_cart', JSON.stringify(cart));
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  saveCart();
  updateCartUI();
  showToast('Added to Cart', product.name);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartGST() {
  return Math.round(getCartSubtotal() * 0.18);
}

function getCartTotal() {
  return getCartSubtotal() + getCartGST();
}

function formatPrice(num) {
  return '₹' + num.toLocaleString('en-IN');
}

function updateCartUI() {
  const count = getCartCount();
  const subtotal = getCartSubtotal();
  const gst = getCartGST();
  const total = getCartTotal();

  // Update badge
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = count;

  // Update cart items
  const itemsContainer = document.getElementById('cart-items');
  const emptyCart = document.getElementById('empty-cart');
  const cartFooter = document.getElementById('cart-footer');
  const cartItemCount = document.getElementById('cart-item-count');
  const progressFill = document.getElementById('progress-fill');

  if (cartItemCount) cartItemCount.textContent = count;

  if (progressFill) {
    const pct = Math.min((subtotal / 1999) * 100, 100);
    progressFill.style.width = pct + '%';
  }

  if (cart.length === 0) {
    if (emptyCart) emptyCart.style.display = 'flex';
    if (cartFooter) cartFooter.style.display = 'none';
    if (itemsContainer) {
      itemsContainer.innerHTML = '<div class="empty-cart"><span class="material-symbols-outlined">shopping_cart</span><h3>Your cart is empty</h3><p>Add items to get started</p></div>';
    }
    return;
  }

  if (emptyCart) emptyCart.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'flex';

  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <span class="material-symbols-outlined" style="display:none;color:var(--primary);font-size:32px;">smartphone</span>
        </div>
        <div class="item-details">
          <div class="item-name">${item.name}</div>
          <div class="item-variant">${item.specs || ''}</div>
          <div class="item-price-row">
            <span class="item-price">${formatPrice(item.price * item.qty)}</span>
            <div class="item-actions">
              <button class="qty-btn" onclick="updateQty(${item.id}, -1)" aria-label="Decrease">
                <span class="material-symbols-outlined">remove</span>
              </button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${item.id}, 1)" aria-label="Increase">
                <span class="material-symbols-outlined">add</span>
              </button>
              <button class="remove-btn material-symbols-outlined" onclick="removeFromCart(${item.id})">delete</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Update footer amounts
  const subtotalEl = document.getElementById('cart-subtotal');
  const gstEl = document.getElementById('cart-gst');
  const totalEl = document.getElementById('cart-total');
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (gstEl) gstEl.textContent = formatPrice(gst);
  if (totalEl) totalEl.textContent = formatPrice(total);

  // Update cart page if on cart page
  updateCartPage();
}

// ============================================
// CART DRAWER
// ============================================

function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function checkout() {
  showToast('Checkout', 'Redirecting to secure payment gateway...');
  setTimeout(() => {
    closeCart();
  }, 1000);
}

// ============================================
// CART PAGE
// ============================================

function updateCartPage() {
  const pageEmpty = document.getElementById('cart-page-empty');
  const pageContent = document.getElementById('cart-page-content');
  const pageList = document.getElementById('cart-page-list');
  const pageSubtotal = document.getElementById('page-subtotal');
  const pageGST = document.getElementById('page-gst');
  const pageTotal = document.getElementById('page-total');

  if (!pageEmpty || !pageContent) return;

  if (cart.length === 0) {
    pageEmpty.style.display = 'block';
    pageContent.style.display = 'none';
    return;
  }

  pageEmpty.style.display = 'none';
  pageContent.style.display = 'block';

  if (pageList) {
    pageList.innerHTML = cart.map(item => `
      <div class="cart-item" style="border:1px solid var(--outline-variant);">
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
          <span class="material-symbols-outlined" style="display:none;color:var(--primary);font-size:32px;">smartphone</span>
        </div>
        <div class="item-details">
          <div class="item-name">${item.name}</div>
          <div class="item-variant">${item.specs || ''}</div>
          <div class="item-price-row">
            <span class="item-price">${formatPrice(item.price * item.qty)}</span>
            <div class="item-actions">
              <button class="qty-btn" onclick="updateQty(${item.id}, -1)" aria-label="Decrease">
                <span class="material-symbols-outlined">remove</span>
              </button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${item.id}, 1)" aria-label="Increase">
                <span class="material-symbols-outlined">add</span>
              </button>
              <button class="remove-btn material-symbols-outlined" onclick="removeFromCart(${item.id})">delete</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  const subtotal = getCartSubtotal();
  const gst = getCartGST();
  const total = getCartTotal();
  if (pageSubtotal) pageSubtotal.textContent = formatPrice(subtotal);
  if (pageGST) pageGST.textContent = formatPrice(gst);
  if (pageTotal) pageTotal.textContent = formatPrice(total);
}

// ============================================
// PRODUCT LISTING PAGE
// ============================================

function renderProductGrid(filteredProducts) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = filteredProducts.map(product => `
    <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
      <div class="card-image-wrapper">
        <span class="card-badge ${product.badgeType}">${product.badge}</span>
        <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(this)" aria-label="Add to Wishlist">
          <span class="material-symbols-outlined">favorite</span>
        </button>
        <img src="${product.image}" alt="${product.name}" onerror="this.src='assets/images/img_0.jpg'">
        <div class="hover-specs"><p>${product.specs}</p></div>
      </div>
      <div class="card-info">
        <div class="card-meta">
          <span class="delivery-tag ${product.deliveryType}">
            ${product.deliveryType === 'green' ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>' : ''}
            ${product.deliveryType === 'blue' ? '<span class="material-symbols-outlined" style="font-size:14px;">edit</span>' : ''}
            ${product.deliveryType === 'red' ? '<span class="material-symbols-outlined" style="font-size:14px;">bolt</span>' : ''}
            ${product.deliveryType === 'neutral' ? '<span class="material-symbols-outlined" style="font-size:14px;">security</span>' : ''}
            ${product.delivery}
          </span>
          <div class="rating">
            <span class="material-symbols-outlined fill">star</span>
            <span class="rating-value">${product.rating}</span>
            <span class="rating-count">(${product.reviews})</span>
          </div>
        </div>
        <h3>${product.name}</h3>
        <div class="color-swatches">
          ${product.colors.map((color, i) => `<span class="swatch ${i === 0 ? 'active' : ''}" style="background:${color};" title="Color option"></span>`).join('')}
        </div>
      </div>
      <div class="card-price">
        <div class="price-row">
          <span class="price">${formatPrice(product.price)}</span>
          <span class="old-price">${formatPrice(product.oldPrice)}</span>
          <span class="save-tag">Save ₹${(product.oldPrice - product.price).toLocaleString('en-IN')}</span>
        </div>
        <p class="emi-text">No-Cost EMI from <strong>${product.emi}</strong></p>
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
          <span class="material-symbols-outlined">add_shopping_cart</span>
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

function sortProducts(sortBy) {
  let sorted = [...products];
  switch (sortBy) {
    case 'price-asc': sorted.sort((a, b) => a.price - b.price); break;
    case 'price-desc': sorted.sort((a, b) => b.price - a.price); break;
    case 'rating': sorted.sort((a, b) => b.rating - a.rating); break;
    case 'newest': sorted.sort((a, b) => b.id - a.id); break;
    default: break;
  }
  renderProductGrid(sorted);
}

function updatePriceReadout(value) {
  const readout = document.getElementById('price-readout');
  const maxDisplay = document.getElementById('max-price-display');
  if (readout) {
    const val = parseInt(value);
    if (val >= 180000) {
      readout.textContent = '₹15k – ₹1.8L';
    } else {
      readout.textContent = '₹15k – ₹' + (val / 1000) + 'k';
    }
  }
  if (maxDisplay) {
    const val = parseInt(value);
    if (val >= 180000) {
      maxDisplay.textContent = '1,80,000';
    } else {
      maxDisplay.textContent = val.toLocaleString('en-IN');
    }
  }
}

function resetFilters() {
  const checkboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = false);
  const radios = document.querySelectorAll('.filter-sidebar input[type="radio"]');
  radios.forEach(r => r.checked = false);
  const range = document.getElementById('price-range');
  if (range) range.value = 180000;
  updatePriceReadout(180000);
  renderProductGrid(products);
}

// ============================================
// PRODUCT DETAIL PAGE — CONFIGURATOR
// ============================================

let basePrice = 219900;
let chipAddon = 0;
let ramAddon = 0;
let storageAddon = 0;
let carePlusAddon = 0;
let quantity = 1;

function calculateTotal() {
  const unitPrice = basePrice + chipAddon + ramAddon + storageAddon + carePlusAddon;
  const total = unitPrice * quantity;
  const formatted = formatPrice(total);

  const displayPrice = document.getElementById('display-price');
  const btnPrice = document.getElementById('btn-price-summary');
  if (displayPrice) displayPrice.textContent = formatted;
  if (btnPrice) btnPrice.textContent = formatted;
}

function selectColor(colorName, btn) {
  document.querySelectorAll('.color-option').forEach(b => {
    b.classList.remove('active');
    const chk = b.querySelector('.check-icon');
    if (chk) chk.remove();
  });
  btn.classList.add('active');

  const icon = document.createElement('span');
  icon.className = 'material-symbols-outlined check-icon';
  icon.textContent = 'check';
  btn.appendChild(icon);

  const label = document.getElementById('selected-color-label');
  if (label) {
    label.textContent = colorName + (colorName === 'Space Black' ? ' (Anodized Anti-Fingerprint)' : '');
  }
}

function selectChip(type, delta, btn) {
  chipAddon = delta;
  document.querySelectorAll('.chip-option').forEach(b => {
    b.classList.remove('active');
    const badge = b.querySelector('.chip-check');
    if (badge) badge.remove();
  });
  btn.classList.add('active');

  const check = document.createElement('span');
  check.className = 'absolute top-2 right-2 text-primary material-symbols-outlined chip-check';
  check.textContent = 'check_circle';
  btn.appendChild(check);

  calculateTotal();
}

function selectRam(amount, delta, btn) {
  ramAddon = delta;
  document.querySelectorAll('.storage-option').forEach(b => {
    b.classList.remove('active');
    const title = b.querySelector('.font-bold');
    if (title) {
      title.classList.remove('text-primary');
      title.classList.add('text-on-surface');
    }
  });
  btn.classList.add('active');
  const title = btn.querySelector('.font-bold');
  if (title) {
    title.classList.add('text-primary');
    title.classList.remove('text-on-surface');
  }
  calculateTotal();
}

function selectStorage(cap, delta, btn) {
  storageAddon = delta;
  document.querySelectorAll('.storage-option').forEach(b => {
    b.classList.remove('active');
    const title = b.querySelector('.font-bold');
    if (title) {
      title.classList.remove('text-primary');
      title.classList.add('text-on-surface');
    }
  });
  btn.classList.add('active');
  const title = btn.querySelector('.font-bold');
  if (title) {
    title.classList.add('text-primary');
    title.classList.remove('text-on-surface');
  }
  calculateTotal();
}

function toggleCarePlus(input) {
  carePlusAddon = input.checked ? 12999 : 0;
  calculateTotal();
}

function updateQty(delta) {
  const next = quantity + delta;
  if (next >= 1 && next <= 10) {
    quantity = next;
    const qtyEl = document.getElementById('qty-value');
    if (qtyEl) qtyEl.textContent = quantity;
    calculateTotal();
  }
}

// ============================================
// TABS
// ============================================

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));

  const target = document.getElementById('tab-' + tabId);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
  }

  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.classList.add('text-on-surface-variant');
  });

  btn.classList.add('active');
  btn.classList.remove('text-on-surface-variant');
}

// ============================================
// IMAGE GALLERY
// ============================================

const galleryImages = [
  'assets/images/img_22.jpg',
  'assets/images/img_30.jpg',
  'assets/images/img_18.jpg',
  'assets/images/img_41.jpg',
  'assets/images/img_24.jpg',
  'assets/images/img_42.jpg'
];

function switchImage(index, btn) {
  document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const heroImg = document.getElementById('main-product-image');
  if (heroImg && galleryImages[index]) {
    heroImg.style.opacity = '0.5';
    setTimeout(() => {
      heroImg.src = galleryImages[index];
      heroImg.style.opacity = '1';
    }, 150);
  }
}

function zoomModal() {
  const img = document.getElementById('main-product-image');
  if (img) {
    img.style.transform = img.style.transform === 'scale(1.25)' ? '' : 'scale(1.25)';
  }
}

function toggle360() {
  showToast('360° View', 'Interactive 360° studio viewer coming soon');
}

// ============================================
// PINCODE CHECKER
// ============================================

function checkPincode() {
  const input = document.getElementById('pincode-input');
  const status = document.getElementById('pincode-status');
  if (!input || !status) return;

  const val = input.value.trim();
  if (val.length === 6 && !isNaN(val)) {
    status.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;">check_circle</span><span>Express Delivery Available! Arrives <strong>Tomorrow by 2:00 PM</strong> to <strong>' + val + '</strong></span>';
    status.className = 'pincode-status';
  } else {
    status.innerHTML = '<span class="material-symbols-outlined text-error" style="font-size:16px;">error</span><span class="text-error">Please enter a valid 6-digit Indian Postal Pincode</span>';
    status.className = 'pincode-status error';
  }
}

// ============================================
// WISHLIST TOGGLE
// ============================================

function toggleWishlist(btn) {
  const icon = btn.querySelector('.material-symbols-outlined');
  if (icon && icon.textContent === 'favorite') {
    icon.textContent = 'favorite_border';
    btn.classList.remove('text-error');
    btn.classList.add('text-on-surface');
  } else if (icon) {
    icon.textContent = 'favorite';
    btn.classList.add('text-error');
    btn.classList.remove('text-on-surface');
  }
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(label, message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<div class="toast-icon"><span class="material-symbols-outlined">check_circle</span></div><div class="toast-content"><span class="toast-label">' + label + '</span><span class="toast-message">' + message + '</span></div>';

  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// MOBILE MENU
// ============================================

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  if (menu) menu.classList.toggle('open');
  if (overlay) overlay.classList.toggle('open');
  document.body.style.overflow = menu && menu.classList.contains('open') ? 'hidden' : '';
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function startCountdown() {
  let totalSeconds = 9 * 3600 + 42 * 60 + 18;

  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      const hours = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      const hEl = document.getElementById('ticker-hours');
      const mEl = document.getElementById('ticker-mins');
      const sEl = document.getElementById('ticker-secs');

      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(mins).padStart(2, '0');
      if (sEl) sEl.textContent = String(secs).padStart(2, '0');
    }
  }, 1000);
}

// ============================================
// TRADE-IN CALCULATOR
// ============================================

function calculateTradeValue() {
  const select = document.getElementById('trade-select');
  const output = document.getElementById('trade-output');
  if (select && output) {
    const val = parseInt(select.value, 10).toLocaleString('en-IN');
    output.textContent = '₹' + val;
  }
}

function updateModalValuation() {
  const select = document.getElementById('modal-trade-device');
  const valDisplay = document.getElementById('modal-trade-val');
  if (select && valDisplay) {
    const val = parseInt(select.value, 10).toLocaleString('en-IN');
    valDisplay.textContent = '₹' + val;
  }
}

function applyTradeDiscount() {
  const modal = document.getElementById('trade-modal');
  if (modal) modal.classList.remove('open');
  openCart();
}

// ============================================
// VIP FORM
// ============================================

function handleVipSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('vip-email');
  const feedback = document.getElementById('vip-feedback');
  if (input && feedback) {
    feedback.classList.add('show');
    input.value = '';
  }
}

// ============================================
// CLAIM LAUNCH PASS
// ============================================

function claimLaunchPass() {
  const btn = document.getElementById('claim-btn');
  if (btn) {
    btn.innerHTML = '<span class="material-symbols-outlined">verified</span><span>Pass Applied (₹10,000 Off)</span>';
    btn.classList.remove('bg-white', 'text-primary');
    btn.classList.add('bg-emerald-500', 'text-white');
  }
}

// ============================================
// BUNDLE ADD
// ============================================

function addBundleToCart() {
  showToast('Bundle Added', 'All 3 items added to cart');
  openCart();
}

// ============================================
// ADD TO CART ANIMATION
// ============================================

function addToCartAnimation() {
  const product = {
    id: 100,
    name: 'Nexora StealthBook Pro 16" Workstation',
    price: basePrice + chipAddon + ramAddon + storageAddon + carePlusAddon,
    oldPrice: 239900,
    image: 'assets/images/img_22.jpg',
    category: 'laptops',
    brand: 'Nexora',
    rating: 4.9,
    reviews: 1428,
    specs: 'M4 Max • 36GB • 1TB SSD • Space Black',
    emi: '₹18,325/mo'
  };

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ ...product, qty: quantity });
  }
  saveCart();
  updateCartUI();
  openCart();
}

function directCheckout() {
  if (cart.length === 0) {
    addToCartAnimation();
  }
  setTimeout(() => {
    checkout();
  }, 500);
}

// ============================================
// MODALS
// ============================================

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

// ============================================
// SEARCH
// ============================================

function handleSearch(query) {
  if (!query || query.length < 2) return;
  const q = query.toLowerCase();
  const results = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
  if (results.length > 0) {
    showPage('products');
    renderProductGrid(results);
  }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  loadCart();

  // Render product grid if on products page
  const grid = document.getElementById('product-grid');
  if (grid) {
    renderProductGrid(products);
  }

  // Start countdown timer
  startCountdown();

  // Initialize trade-in calculator
  const tradeSelect = document.getElementById('trade-select');
  if (tradeSelect) {
    tradeSelect.addEventListener('change', calculateTradeValue);
  }

  // Initialize modal trade valuation
  const modalTrade = document.getElementById('modal-trade-device');
  if (modalTrade) {
    modalTrade.addEventListener('change', updateModalValuation);
  }

  // Close cart on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeCart();
      // Close any open modals
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
