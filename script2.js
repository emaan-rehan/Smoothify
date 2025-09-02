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


  // Simulate login check
  function isLoggedIn() {
    // Replace this with real login check
    return false; // change to true if user is logged in
  }

  // Add to Cart button handler
  function addCurrentToCart() {
    if (!isLoggedIn()) {
      alert("Login first to use the cart!");
      window.location.href = "login.html"; // redirect to login page
      return;
    }

    const qty = parseInt(document.getElementById("detailQty").value);
    const note = document.getElementById("detailNote").value;

    if (!window.cart) window.cart = [];
    const existing = cart.find(item => item.title === currentCard.title);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...currentCard, qty, note });
    }

    closeCard();
    updateCart();
  }

  // Toggle Cart Sidebar
  function toggleCart() {
    if (!isLoggedIn()) {
      alert("Login first to use the cart!");
      window.location.href = "login.html"; // redirect to login page
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
    if (!window.cart) window.cart = [];
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

  // Placeholder for placing order
  function placeOrder() {
    if (!isLoggedIn()) {
      alert("Login first to place order!");
      window.location.href = "login.html";
      return;
    }
    alert("Order placed!");
    cart = [];
    updateCart();
    closeCart();
  }

