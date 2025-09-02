// Simulate login check
function isLoggedIn() {
  // Replace this with real login check
  return false; // change to true if user is logged in
}

// Global cart array
let cart = [];

// Add to Cart button handler
document.querySelectorAll(".sp-mini-btn").forEach(button => {
  button.addEventListener("click", function () {
    if (!isLoggedIn()) {
      alert("Login first to use the cart!");
      window.location.href = "login.html"; // redirect to login page
      return;
    }

    // Find product info from card
    const card = this.closest(".about-card");
    const title = card.querySelector("h3").innerText;
    const priceText = card.querySelector(".sp-price").innerText;
    const price = parseInt(priceText.replace(/[^\d]/g, "")); // Rs 350 → 350
    const qty = 1; // default 1 per click

    // Check if product already in cart
    const existing = cart.find(item => item.title === title);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ title, price, qty });
    }

    updateCart();
  });
});

// Toggle Cart Sidebar
function toggleCart() {
  if (!isLoggedIn()) {
    alert("Login first to use the cart!");
    window.location.href = "login.html";
    return;
  }

  const cartSidebar = document.getElementById("cartSidebar");
  cartSidebar.classList.toggle("open");
  updateCart();
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
}

// Update cart UI
function updateCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.qty * item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.title} x ${item.qty}</span>
      <span>Rs. ${item.qty * item.price}</span>
    `;
    cartItemsContainer.appendChild(div);
  });

  document.getElementById("total-price").innerText = total + " PKR";
}

// Place order
function placeOrder() {
  if (!isLoggedIn()) {
    alert("Login first to place order!");
    window.location.href = "login.html";
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order placed!");
  cart = [];
  updateCart();
  closeCart();
}
