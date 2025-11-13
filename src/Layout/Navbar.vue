<template>
  <nav class="navbar">
    <div class="logo">
      <span class="logo-text">MySite</span>
    </div>

    <!-- Desktop Navigation -->
    <ul class="nav-links desktop-only">
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li><router-link to="/product" class="nav-link">Product</router-link></li>
      <li><router-link to="/variant" class="nav-link">Variant</router-link></li>
      <li><router-link to="/promo" class="nav-link">Promo</router-link></li>
    </ul>

    <!-- Desktop Cart & Buy Button -->
    <div class="nav-actions desktop-only">
      <button class="cart-btn" @click="handleCart">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <span class="cart-badge">3</span>
      </button>
      <button class="buy-btn" @click="handleBuy">Buy Now</button>
    </div>

    <!-- Mobile Menu Button -->
    <button class="menu-btn mobile-only" @click="toggleMenu">
      <span class="hamburger-line" :class="{ active: menuActive }"></span>
      <span class="hamburger-line" :class="{ active: menuActive }"></span>
      <span class="hamburger-line" :class="{ active: menuActive }"></span>
    </button>

    <!-- Mobile Side Menu -->
    <div class="overlay" :class="{ active: menuActive }" @click="toggleMenu"></div>
    <div class="side-menu" :class="{ active: menuActive }">
      <div class="side-menu-header">
        <span class="logo-text">Menu</span>
        <button class="close-btn" @click="toggleMenu">✕</button>
      </div>
      
      <ul class="side-nav-links">
        <li><router-link to="/" class="side-nav-link" @click="toggleMenu">Home</router-link></li>
        <li><router-link to="/product" class="side-nav-link" @click="toggleMenu">Product</router-link></li>
        <li><router-link to="/variant" class="side-nav-link" @click="toggleMenu">Variant</router-link></li>
        <li><router-link to="/promo" class="side-nav-link" @click="toggleMenu">Promo</router-link></li>
      </ul>

      <div class="side-menu-actions">
        <button class="side-cart-btn" @click="handleCart">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <span>Cart (3)</span>
        </button>
        <button class="side-buy-btn" @click="handleBuy">Buy Now</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuActive = ref(false)

function toggleMenu() {
  menuActive.value = !menuActive.value
}

function handleCart() {
  alert('Cart clicked!')
  // Add your cart logic here
}

function handleBuy() {
  alert('Buy Now clicked!')
  // Add your buy logic here
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: linear-gradient(135deg, #aa13b1 0%, #302ad1 100%);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Desktop Navigation */
.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 80%;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Desktop Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cart-btn {
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #5d30ff;
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
}

.buy-btn {
  background: white;
  color: #667eea;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.buy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Mobile Menu Button */
.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  z-index: 1001;
}

.hamburger-line {
  width: 26px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.hamburger-line:nth-child(1).active {
  transform: rotate(45deg) translate(7px, 7px);
}

.hamburger-line:nth-child(2).active {
  opacity: 0;
}

.hamburger-line:nth-child(3).active {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Side Menu */
.side-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100%;
  background: linear-gradient(180deg, #d222ed 0%, #5616f8 100%);
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  z-index: 1001;
  display: flex;
  flex-direction: column;
}

.side-menu.active {
  right: 0;
}

.side-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.close-btn {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 24px;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.side-nav-links {
  list-style: none;
  padding: 24px 0;
  flex: 1;
}

.side-nav-links li {
  margin: 0;
}

.side-nav-link {
  display: block;
  color: white;
  text-decoration: none;
  padding: 16px 24px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.side-nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-left-color: white;
}

.side-menu-actions {
  padding: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.side-cart-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  padding: 14px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.side-cart-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.side-buy-btn {
  background: white;
  color: #667eea;
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.side-buy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive Classes */
.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    padding: 16px 20px;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: flex;
  }
}
</style>