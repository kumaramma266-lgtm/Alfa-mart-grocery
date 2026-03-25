// Product Database (Mock)
let products = JSON.parse(localStorage.getItem('alfaProducts'));

if (!products || products.length === 0) {
  products = [
    // Fruits
    { id: 1, name: 'Fresh Apples (Fuji)', category: 'Fruits', price: 120, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Ripe Bananas (1 Dozen)', category: 'Fruits', price: 60, image: 'https://images.unsplash.com/photo-1571501474201-38ae0571fa58?auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Sweet Oranges', category: 'Fruits', price: 90, image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Green Grapes (500g)', category: 'Fruits', price: 80, image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=500&q=60' },
    
    // Vegetables
    { id: 5, name: 'Fresh Tomatoes (1kg)', category: 'Vegetables', price: 40, image: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Potatoes (1kg)', category: 'Vegetables', price: 30, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=60' },
    { id: 7, name: 'Onions (1kg)', category: 'Vegetables', price: 35, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=500&q=60' },
    { id: 8, name: 'Carrots (500g)', category: 'Vegetables', price: 25, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=60' },
    
    // Dairy
    { id: 9, name: 'Full Cream Milk (1L)', category: 'Dairy', price: 65, image: 'https://images.unsplash.com/photo-1563636619276-20015bf9b6b7?auto=format&fit=crop&w=500&q=60' },
    { id: 10, name: 'Fresh Paneer (200g)', category: 'Dairy', price: 85, image: 'https://images.unsplash.com/photo-1631452180490-64ac01f99c15?auto=format&fit=crop&w=500&q=60' },
    { id: 11, name: 'Butter (100g)', category: 'Dairy', price: 55, image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=500&q=60' },
    { id: 12, name: 'Curd / Dahi (400g)', category: 'Dairy', price: 40, image: 'https://images.unsplash.com/photo-1563636619276-20015bf9b6b7?auto=format&fit=crop&w=500&q=60' },

    // Snacks
    { id: 13, name: 'Potato Chips (Salted)', category: 'Snacks', price: 20, image: 'https://images.unsplash.com/photo-1566478989037-e50159fa6bad?auto=format&fit=crop&w=500&q=60' },
    { id: 14, name: 'Chocolate Chip Cookies', category: 'Snacks', price: 50, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=60' },
    { id: 15, name: 'Roasted Almonds (200g)', category: 'Snacks', price: 250, image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=500&q=60' },
    { id: 16, name: 'Namkeen Mix (400g)', category: 'Snacks', price: 80, image: 'https://images.unsplash.com/photo-1604085792782-8d92f276d7d8?auto=format&fit=crop&w=500&q=60' },

    // Beverages
    { id: 17, name: 'Green Tea (25 Bags)', category: 'Beverages', price: 150, image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=500&q=60' },
    { id: 18, name: 'Cold Coffee (200ml)', category: 'Beverages', price: 40, image: 'https://images.unsplash.com/photo-1461023058943-07cb12eeedc3?auto=format&fit=crop&w=500&q=60' },
    { id: 19, name: 'Orange Juice (1L)', category: 'Beverages', price: 110, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451b02?auto=format&fit=crop&w=500&q=60' },

    // Staples
    { id: 20, name: 'Basmati Rice (5kg)', category: 'Staples', price: 450, image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&w=500&q=60' },
    { id: 21, name: 'Whole Wheat Atta (5kg)', category: 'Staples', price: 220, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=60' },
    { id: 22, name: 'Toor Dal (1kg)', category: 'Staples', price: 160, image: 'https://images.unsplash.com/photo-1585235881472-fefa013f9c31?auto=format&fit=crop&w=500&q=60' },
    { id: 23, name: 'Refined Oil (1L)', category: 'Staples', price: 140, image: 'https://images.unsplash.com/photo-1663080645672-fb3de31aaede?auto=format&fit=crop&w=500&q=60' },
    { id: 24, name: 'Sugar (1kg)', category: 'Staples', price: 45, image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=500&q=60' }
  ];
  localStorage.setItem('alfaProducts', JSON.stringify(products));
}

// Initialize Cart from LocalStorage
let cart = JSON.parse(localStorage.getItem('alfaCart')) || [];

// Save Cart to LocalStorage
function saveCart() {
  localStorage.setItem('alfaCart', JSON.stringify(cart));
  updateCartCount();
}

// Update Cart Count Badge
function updateCartCount() {
  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;
  }
}

// Add to Cart Logic
function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  saveCart();
  
  // Optional: show toast notification instead of alert for better UI
  showToast(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  if (typeof renderCart === 'function') renderCart(); // Trigger re-render if on cart page
}

// Update Quantity
function updateQuantity(productId, newQty) {
  if (newQty < 1) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = newQty;
    saveCart();
    if (typeof renderCart === 'function') renderCart(); // Trigger re-render if on cart page
  }
}

// Format Currency
function formatPrice(price) {
  return `₹${price.toFixed(2)}`;
}

// Render Product Card (Reusable Component)
function createProductCard(product) {
  return `
    <div class="product-card" data-id="${product.id}">
      <span class="product-badge">${product.category}</span>
      <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title" title="${product.name}">${product.name}</h3>
        <div class="product-price">${formatPrice(product.price)}</div>
        <div class="product-actions">
          <a href="product-details.html?id=${product.id}" class="btn btn-outline" style="padding: 5px 10px; font-size: 0.9rem;">View</a>
          <button class="btn" onclick="addToCart(${product.id})" style="padding: 5px 10px; font-size: 0.9rem;">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// Simple Toast Notification
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.background = 'var(--primary-dark)';
    toast.style.color = 'white';
    toast.style.padding = '15px 25px';
    toast.style.borderRadius = '5px';
    toast.style.boxShadow = 'var(--shadow-hover)';
    toast.style.zIndex = '10000';
    toast.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 3000);
}

// Shared Document Ready Logic
document.addEventListener('DOMContentLoaded', () => {
  // Hide loader
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 500);
    }, 500); // 500ms min delay to show loading animation
  }

  // Update Cart Count on page load
  updateCartCount();

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
  }
});
