/**
 * Sweet Delight - Main Application JavaScript
 * Manages Cart, Auth, Product Filtering, Search, Wishlist, Toasts, and Checkout
 */

// Storage Keys
const STORAGE_KEYS = {
  CART: 'sweet_delight_cart',
  USER: 'sweet_delight_user',
  WISHLIST: 'sweet_delight_wishlist',
  COUPON: 'sweet_delight_coupon',
  LAST_ORDER: 'sweet_delight_last_order'
};

// Available Promo Coupons
const PROMO_COUPONS = {
  'SWEET10': { type: 'percent', value: 10, label: '10% Welcome Discount' },
  'FESTIVE50': { type: 'fixed', value: 50, label: '₹50 Festive Special' },
  'DIWALI20': { type: 'percent', value: 20, label: '20% Festive Bonanza' }
};

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(title, message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '🍬';
  if (type === 'success') icon = '✓';
  if (type === 'error') icon = '✕';
  if (type === 'maroon') icon = '✨';

  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'fadeOutRight 0.35s forwards';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 350);
  }, 3500);
}

/* ==========================================================================
   AUTHENTICATION DEMO MANAGEMENT
   ========================================================================== */
function getCurrentUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveUser(user) {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  updateNavUserUI();
}

function logoutUser() {
  localStorage.removeItem(STORAGE_KEYS.USER);
  updateNavUserUI();
  showToast('Logged Out', 'You have been safely signed out. Come back soon!', 'maroon');
  // If currently on checkout or login, refresh or redirect
  if (window.location.pathname.includes('checkout.html') || window.location.pathname.includes('login.html')) {
    setTimeout(() => window.location.reload(), 800);
  }
}

function updateNavUserUI() {
  const user = getCurrentUser();
  const userSlots = document.querySelectorAll('.nav-user-slot');

  userSlots.forEach(slot => {
    if (user && user.isLoggedIn) {
      const initial = (user.name || 'User').charAt(0).toUpperCase();
      slot.innerHTML = `
        <div class="user-menu-btn" onclick="toggleUserDropdown(event)">
          <div class="user-avatar">${initial}</div>
          <span>${user.name.split(' ')[0]}</span>
          <span style="font-size:0.7rem;">▼</span>
        </div>
        <div id="user-nav-dropdown" class="search-dropdown" style="width: 180px; right: 0; left: auto; padding: 8px 0;">
          <div style="padding: 8px 16px; border-bottom: 1px solid var(--border-subtle); font-size: 0.82rem; color: var(--text-muted);">
            Signed in as<br><strong style="color:var(--maroon-900);">${user.email}</strong>
          </div>
          <a href="index.html" class="search-result-item" style="padding: 10px 16px;">🏠 Home</a>
          <a href="cart.html" class="search-result-item" style="padding: 10px 16px;">🛒 My Cart</a>
          <div onclick="logoutUser()" class="search-result-item" style="padding: 10px 16px; color: #DC2626; cursor: pointer;">🚪 Logout</div>
        </div>
      `;
    } else {
      slot.innerHTML = `
        <a href="login.html" class="btn btn-primary btn-sm">
          <span>Login</span>
        </a>
      `;
    }
  });
}

function toggleUserDropdown(e) {
  e.stopPropagation();
  const dd = document.getElementById('user-nav-dropdown');
  if (dd) {
    dd.classList.toggle('active');
  }
}

document.addEventListener('click', () => {
  const dd = document.getElementById('user-nav-dropdown');
  if (dd) dd.classList.remove('active');
  const searchDd = document.getElementById('nav-search-dropdown');
  if (searchDd) searchDd.classList.remove('active');
});

/* ==========================================================================
   CART DATA LAYER (LOCALSTORAGE)
   ========================================================================== */
function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CART);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateCartBadges();
}

function getCartItemKey(sweetId, weight) {
  return `${sweetId}__${weight}`;
}

function addToCart(sweetId, weight = '500g', quantity = 1) {
  const sweet = SWEETS_DATA.find(s => s.id === sweetId);
  if (!sweet) return;

  let qty = parseInt(quantity, 10) || 1;
  if (qty < 1) qty = 1;

  const unitPrice = calculatePriceByWeight(sweet.price, weight);
  const cart = getCart();
  const key = getCartItemKey(sweetId, weight);
  const existingIdx = cart.findIndex(item => item.key === key);

  if (existingIdx > -1) {
    cart[existingIdx].quantity += qty;
  } else {
    cart.push({
      key: key,
      sweetId: sweet.id,
      name: sweet.name,
      weight: weight,
      unitPrice: unitPrice,
      basePrice: sweet.price,
      quantity: qty,
      image: sweet.localImage || sweet.image,
      fallbackColor: sweet.fallbackColor
    });
  }

  saveCart(cart);
  showToast(`${sweet.name} added to your cart!`, `Selected: ${weight} × ${qty}`, 'success');
}

function updateCartQuantity(itemKey, delta) {
  const cart = getCart();
  const idx = cart.findIndex(item => item.key === itemKey);
  if (idx === -1) return;

  cart[idx].quantity += delta;
  if (cart[idx].quantity <= 0) {
    const removedName = cart[idx].name;
    cart.splice(idx, 1);
    showToast('Item Removed', `${removedName} removed from cart`, 'maroon');
  }

  saveCart(cart);
  // Re-render cart if cart page is loaded
  if (typeof renderCartPage === 'function') {
    renderCartPage();
  }
}

function removeFromCart(itemKey) {
  const cart = getCart();
  const idx = cart.findIndex(item => item.key === itemKey);
  if (idx > -1) {
    const name = cart[idx].name;
    cart.splice(idx, 1);
    saveCart(cart);
    showToast('Item Removed', `${name} removed from cart`, 'maroon');
    if (typeof renderCartPage === 'function') {
      renderCartPage();
    }
  }
}

function clearCart() {
  localStorage.removeItem(STORAGE_KEYS.CART);
  localStorage.removeItem(STORAGE_KEYS.COUPON);
  updateCartBadges();
}

function getCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  
  // Delivery Fee: Free above ₹500, else ₹50 (0 if cart empty)
  let deliveryFee = 0;
  if (subtotal > 0) {
    deliveryFee = subtotal >= 500 ? 0 : 50;
  }

  // Check coupon discount
  let discount = 0;
  let appliedCoupon = null;
  const couponCode = localStorage.getItem(STORAGE_KEYS.COUPON);
  if (couponCode && PROMO_COUPONS[couponCode] && subtotal > 0) {
    appliedCoupon = PROMO_COUPONS[couponCode];
    if (appliedCoupon.type === 'percent') {
      discount = Math.round((subtotal * appliedCoupon.value) / 100);
    } else {
      discount = Math.min(appliedCoupon.value, subtotal);
    }
  }

  const grandTotal = Math.max(0, subtotal + deliveryFee - discount);

  return {
    subtotal,
    deliveryFee,
    discount,
    grandTotal,
    couponCode,
    appliedCoupon,
    itemCount: cart.reduce((count, item) => count + item.quantity, 0)
  };
}

function updateCartBadges() {
  const totals = getCartTotals();
  const badgeEls = document.querySelectorAll('.cart-count-badge');
  badgeEls.forEach(badge => {
    badge.textContent = totals.itemCount;
    badge.style.display = totals.itemCount > 0 ? 'flex' : 'none';
  });

  // Mobile floating cart
  const mobileCart = document.getElementById('mobile-floating-cart');
  if (mobileCart) {
    if (totals.itemCount > 0) {
      mobileCart.style.display = 'flex';
      const mCount = mobileCart.querySelector('.mobile-cart-count');
      const mTotal = mobileCart.querySelector('.mobile-cart-total');
      if (mCount) mCount.textContent = `${totals.itemCount} Items`;
      if (mTotal) mTotal.textContent = `₹${totals.grandTotal}`;
    } else {
      mobileCart.style.display = 'none';
    }
  }
}

/* ==========================================================================
   WISHLIST ENGINE (LOCALSTORAGE)
   ========================================================================== */
function getWishlist() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.WISHLIST);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function toggleWishlist(sweetId) {
  let list = getWishlist();
  const idx = list.indexOf(sweetId);
  const sweet = SWEETS_DATA.find(s => s.id === sweetId);
  const name = sweet ? sweet.name : 'Sweet';

  if (idx > -1) {
    list.splice(idx, 1);
    showToast('Wishlist', `${name} removed from your wishlist`, 'maroon');
  } else {
    list.push(sweetId);
    showToast('Wishlist', `${name} added to your wishlist ❤️`, 'success');
  }

  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(list));
  updateWishlistUI();
}

function updateWishlistUI() {
  const list = getWishlist();
  // Update heart icons
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const id = btn.getAttribute('data-id');
    if (list.includes(id)) {
      btn.classList.add('active');
      btn.innerHTML = '❤️';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '🤍';
    }
  });

  const countEls = document.querySelectorAll('.wishlist-count-badge');
  countEls.forEach(el => {
    el.textContent = list.length;
    el.style.display = list.length > 0 ? 'flex' : 'none';
  });
}

/* ==========================================================================
   PRODUCT SEARCH & INSTANT AUTOCOMPLETE
   ========================================================================== */
function setupSearchFeature() {
  const searchInputs = document.querySelectorAll('.search-input-field');
  searchInputs.forEach(input => {
    const dropdown = document.getElementById(input.getAttribute('data-dropdown') || 'nav-search-dropdown');
    
    input.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!dropdown) return;

      if (query.length === 0) {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        return;
      }

      const matches = SWEETS_DATA.filter(s => 
        s.name.toLowerCase().includes(query) ||
        s.categoryName.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        dropdown.innerHTML = `
          <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
            No sweets found matching "<strong>${query}</strong>"
          </div>
        `;
        dropdown.classList.add('active');
      } else {
        dropdown.innerHTML = matches.map(s => `
          <a href="product.html?id=${s.id}" class="search-result-item">
            <img src="${s.localImage || s.image}" alt="${s.name}" class="search-result-thumb" onerror="this.src='${s.localImage}'">
            <div style="flex:1;">
              <div style="font-weight:700; color:var(--maroon-900); font-size:0.92rem;">${s.name}</div>
              <div style="font-size:0.75rem; color:var(--gold-600); font-weight:600;">${s.categoryName}</div>
            </div>
            <div style="font-weight:700; color:var(--maroon-700); font-size:0.92rem;">₹${s.price}</div>
          </a>
        `).join('');
        dropdown.classList.add('active');
      }
    });

    // Also trigger filtering on product grid if on home page
    input.addEventListener('keyup', (e) => {
      if (typeof filterProductsGrid === 'function') {
        filterProductsGrid();
      }
    });
  });
}

/* ==========================================================================
   BACK TO TOP & SCROLL EFFECTS
   ========================================================================== */
function setupScrollEffects() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  }
}

/* ==========================================================================
   GLOBAL APP INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  updateNavUserUI();
  updateCartBadges();
  updateWishlistUI();
  setupSearchFeature();
  setupScrollEffects();
});
