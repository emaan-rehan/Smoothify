// FAQ Accordion Toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;

      // Close all other answers before opening the clicked one
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        if (ans !== answer) {
          ans.style.display = "none";
        }
      });

      // Toggle the current answer
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});




// ===== Modal Handling =====
let currentItem = null;
const cards = document.querySelectorAll(".coffee-card");

function openCard(index) {
  const card = cards[index];
  const title = card.querySelector("h3").innerText;
  const desc = card.querySelector("p").innerText;
  const price = card.querySelector("span").innerText.replace("Rs. ", "");
  const img = card.querySelector("img").src;

  currentItem = { title, desc, price: parseFloat(price), img };

  document.getElementById("detailTitle").innerText = title;
  document.getElementById("detailDesc").innerText = desc;
  document.getElementById("detailPrice").innerText = "Rs. " + price;
  document.getElementById("detailImage").src = img;
  document.getElementById("detailQty").value = 1;
  document.getElementById("detailNote").value = "";

  document.getElementById("cardDetails").classList.add("active");
}

function closeCard() {
  document.getElementById("cardDetails").classList.remove("active");
}

// ===== Cart Handling =====
let cart = [];

function addCurrentToCart() {
  if (!currentItem) return;
  const qty = parseInt(document.getElementById("detailQty").value) || 1;
  const note = document.getElementById("detailNote").value;

  // check if already exists
  const existing = cart.find(item => item.title === currentItem.title);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...currentItem, qty, note });
  }

  updateCart();
  closeCard();
  openCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="cart-info">
        <h4>${item.title}</h4>
        <p>Rs. ${item.price} × ${item.qty} = <b>Rs. ${itemTotal}</b></p>
        <div class="qty-control">
          <button onclick="changeQty(${index}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeItem(${index})">✖</button>
    `;
    cartItemsContainer.appendChild(div);
  });

  document.getElementById("total-price").innerText = total + " PKR";
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// ===== Sidebar Toggle =====
function openCart() {
  document.getElementById("cartSidebar").classList.add("active");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("active");
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}

// ===== Checkout =====
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  updateCart();
  closeCart();
}



document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        // your open modal or add to cart logic
    });
});

document.querySelectorAll(".sp-mini-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const card = btn.closest(".about-card");
        const title = card.querySelector("h3").innerText;
        const price = card.querySelector(".sp-price").innerText.replace("Rs ", "");
        const img = card.querySelector("img").src;

        // Call your existing function that adds items to the cart
        addToCart(title, price, img);
    });
});
// ===== Checkout =====
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Redirect to order.html
  window.location.href = "order.html";
}
