function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

window.addEventListener("scroll", function() {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// location popup
function showLocationPopup() {
  document.getElementById("locationPopup").style.display = "block";
}

function closeLocationPopup() {
  document.getElementById("locationPopup").style.display = "none";
}

function toggleLocationList() {
  let list = document.getElementById("locationList");
  list.style.display = list.style.display === "block" ? "none" : "block";
}

function chooseLocation(location) {
  document.getElementById("locationInput").value = location;
  document.getElementById("locationList").style.display = "none";
}

function saveLocation() {
  let selected = document.getElementById("locationInput").value.trim();
  let address = document.getElementById("addressInput").value.trim();
  let contact = document.getElementById("contactInput").value.trim();

  let addressError = document.getElementById("addressError");
  let contactError = document.getElementById("contactError");

  // Reset errors
  addressError.textContent = "";
  contactError.textContent = "";

  let valid = true;

  if (!address) {
    addressError.textContent = "Please enter your full address.";
    valid = false;
  }
  if (!contact) {
    contactError.textContent = "Please enter your contact number.";
    valid = false;
  }

  if (valid) {
    if (selected) {
      document.getElementById("location-text").textContent = selected;
    }
    closeLocationPopup();
  }
}

// cards
function openCard(index) {
  const cardData = document.querySelectorAll('.coffee-card')[index];
  const img = cardData.querySelector('img').src;
  const title = cardData.querySelector('h3').innerText;
  const desc = cardData.querySelector('p').innerText;

  document.getElementById('detailImage').src = img;
  document.getElementById('detailTitle').innerText = title;
  document.getElementById('detailDesc').innerText = desc;

  document.getElementById('cardDetails').classList.add('active');
}

function closeCard() {
  document.getElementById('cardDetails').classList.remove('active');
}


function openCard(index) {
  const cards = document.querySelectorAll('.coffee-card');
  const card = cards[index];
  if (!card) return;

  const img = card.querySelector('img').src;
  const title = card.querySelector('h3').innerText;
  const desc = card.querySelector('p').innerText;

  document.getElementById('detailImage').src = img;
  document.getElementById('detailTitle').innerText = title;
  document.getElementById('detailDesc').innerText = desc;

  document.getElementById('cardDetails').classList.add('active');
}

function closeCard() {
  document.getElementById('cardDetails').classList.remove('active');
}


  // menu search bar
function searchMenu() {
  let input = document.getElementById("searchInput").value.toLowerCase().trim();
  let cards = document.querySelectorAll(".coffee-card");
  let banner = document.querySelector(".deals-banner");
  let resultsFound = false;

  cards.forEach(card => {
    let text = card.textContent.toLowerCase();
    if (text.includes(input) || input === "") {
      card.style.display = "block";
      resultsFound = true;
    } else {
      card.style.display = "none";
    }
  });

  // Hide banner if searching
  if (banner) {
    banner.style.display = input ? "none" : "block";
  }

  // Show "No results" message if nothing matches
  let noResultMsg = document.getElementById("noResultsMsg");
  if (!resultsFound && input !== "") {
    if (!noResultMsg) {
      noResultMsg = document.createElement("p");
      noResultMsg.id = "noResultsMsg";
      noResultMsg.style.textAlign = "center";
      noResultMsg.style.marginTop = "20px";
      noResultMsg.style.color = "#ff69b4";
      noResultMsg.style.fontWeight = "bold";
      noResultMsg.innerText = "No results found!";
      document.querySelector(".cards-container").after(noResultMsg);
    }
  } else {
    if (noResultMsg) noResultMsg.remove();
  }
}


  // Smooth scroll tracking
const sectionBar = document.querySelector(".section-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    sectionBar.classList.add("shrink");
  } else {
    sectionBar.classList.remove("shrink");
  }
});


  // Hamburger toggle for mobile menu
  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const icons = document.querySelector('.icons');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    icons.style.display = icons.style.display === 'flex' ? 'none' : 'flex';
  }


  const coffeeData = [
    //  coffes
    {
      title: "Iced Vanilla Latte",
      img: "./images/coffee/iced vanilla latte.png",
      desc: "Sweet, chilled, and effortlessly cool — like your fav playlist on a lazy Sunday. A vanilla hug with every sip"
    },
    {
      title: "Caramel Macchiato",
      img: "./images/coffee/caramel.png",
      desc: "Golden hour in a cup. Drizzled caramel chaos layered with espresso drama. Sweet on top, bold beneath"
    },
    {
      title: "Chai",
      img: "./images/coffee/chai.png",
      desc: "She’s warm, spicy, and doesn’t text back. Chai with an espresso kick —for the bold & beautifully unbothered"
    },
    {
      title: "Hazelnut Mocha Hug",
      img: "./images/coffee/hazelnut.png",
      desc: "Nutty, chocolatey, and emotionally stable. A cozy sweater in drink form. For when you need comfort and caffeine"
    },
     {
      title: "Classic Cappuccino",
      img: "./images/coffee/cappucino.png",
      desc: "Sophisticated but soft. Frothy, rich, and never out of style. Like the quiet girl who reads and ruins your standards."
    },
     {
      title: "Matcha Mood",
      img: "./images/coffee/matcha.png",
      desc: "For the clean girl aesthetic. Earthy, chill, and green like your skincare goals. Zen in every sip."
    },
     {
      title: "Espresso Shot(No Feelings, Just Vibes)",
      img: "./images/coffee/espresso shot.png",
      desc: "One sip. That’s it. No sugar, no fluff — just caffeine chaos. For the 'I’ve got things to do and a soul to rebuild' kinda mood"
    },
     {
      title: "Cozy Cocoa(Thicc Hot Chocolate)",
      img: "./images/coffee/cocoa.png",
      desc: "Melty, rich, and unapologetically thicc. No caffeine, just warmth and childhood nostalgia in a mug."
    },
  
    //  smoothies
     {
    title: "Cold Brew Crush",
    img: "./images/shakes/coldbre.png",
    desc: "Bold, chilled, and ready to wake your drama up. The ultimate cool-girl caffeine move."
  },
  {
    title: "Oreo Shake It Up",
    img: "./images/shakes/oreo.png",
    desc: "Crushed cookies. Creamy vibes. Basically, a dessert and a mood swing in one sip."
  },
  {
    title: "Mango Tango Smoothie",
    img: "./images/shakes/mango.png",
    desc: "Sweet, tropical, and lowkey flirty. A golden summer sunset in a glass."
  },
  {
    title: "Strawberry Baby Shake",
    img: "./images/shakes/strabery.png",
    desc: "Soft girl certified. Blush pink, sugar-sweet, and made for your Insta story."
  },
  {
    title: "Boba Baddie (Brown Sugar / Taro / Matcha)",
    img: "./images/shakes/boba.png",
    desc: "Choose your baddie: Brown Sugar for the drama, Taro for the aesthetic, Matcha for the chaos."
  },
  {
    title: "Blueberry Yogurt Chill",
    img: "./images/shakes/blueberry.png",
    desc: "Fruity, frosty, and effortlessly cool. Like that one quiet friend who always slays."
  },
  {
    title: "Banana Buzz Frappe",
    img: "./images/shakes/banana.png",
    desc: "Energetic, bold, and a little extra. A banana party blended into your day."
  },
  {
    title: "Choco Chip Frostbite",
    img: "./images/shakes/chocolate.png",
    desc: "Chocolate chips, chill factor maxed. Sweet, fierce, and just a lil’ chaotic."
  },
  // snacks
  {
  title: "Melty Grilled Cheese",
  img: "./images/snacks/Melty Grilled Cheese.jpg",
  desc: "Golden, gooey, grilled to perfection. It’s not just a sandwich — it’s a warm hug with crispy edges."
},
{
  title: "Chicken Dynamite Wrap",
  img: "./images/snacks/chekcn wrap.jpg",
  desc: "Loaded with spicy chicken, creamy sauce & crunchy lettuce — it’s the drama queen of wraps."
},
{
  title: "Classic Clubber",
  img: "./images/snacks/club san.jpg",
  desc: "Three layers, endless flavor. Chicken, egg, veggies, and mayo stacked like your emotions — complicated but worth it."
},
{
  title: "Spicy Paneer Sandwich",
  img: "./images/snacks/paneer.jpg",
  desc: "Crispy, spicy paneer sandwiched between soft bread — bold, desi, and a little rebellious."
},
{
  title: "BBQ Chicken Panini",
  img: "./images/snacks/chicken panini.jpg",
  desc: "Smoky BBQ chicken and melted cheese pressed to perfection — drama grilled into every bite."
},
{
  title: "Garlic Mayo Fries",
  img: "./images/snacks/mayo fires.jpg",
  desc: "Crispy fries dipped in creamy garlic mayo — dangerous, addictive, and 100% no regrets."
},
{
  title: "Mac n Cheese Balls",
  img: "./images/snacks/cheese balls.jpg",
  desc: "Cheesy on the inside, crispy on the outside. Basically, comfort food wearing party clothes."
},
{
  title: "Nacho Fiesta Crunch",
  img: "./images/snacks/nachos.jpg",
  desc: "Loaded nachos with salsa, cheese, and attitude. Every crunch is a mic drop."
},

// sweet

{
  title: "Red Velvet Babygirl Cupcake",
  img: "./images/sweet/red vel.jpg",
  desc: "Soft, red, and dangerously cute. Frosted like it knows it’s the main character."
},
{
  title: "Churro Bites & Dip",
  img: "./images/sweet/chros.jpg",
  desc: "Crispy cinnamon sugar bites served with dreamy dip — sweet, sassy, and always ready to party."
},
{
  title: "Nutella Lava Cake",
  img: "./images/sweet/lava.jpg",
  desc: "Looks innocent until the gooey Nutella explosion. Handle with care (and a spoon)."
},
{
  title: "Lotus Cheesecake Baddie",
  img: "./images/sweet/lotus.jpg",
  desc: "Crunchy Lotus base, creamy vibes on top. A baddie in dessert form."
},
{
  title: "Bubble Waffle Bliss",
  img: "./images/sweet/bublle.jpg",
  desc: "Waffle bubbles stuffed with joy, topped with ice cream and a sweet personality."
},
{
  title: "Cinnamon Rollin’",
  img: "./images/sweet/ciinnamon.jpg",
  desc: "Sticky, swirly, sugary love. The kind of roll you fall for instantly."
},
{
  title: "Mini Pancake Stack Attack",
  img: "./images/sweet/pancake.jpg",
  desc: "Tiny pancakes, big drama. Stacked with syrup, fruits, and weekend energy."
},
{
  title: "OG Brownie Mood",
  img: "./images/sweet/brownie.jpg",
  desc: "Classic, rich, fudgy. It doesn’t need a glow-up — it *is* the mood."
},
// tiny bites
  {
    title: "Mozzarella Stickzzz",
    img: "./images/tinybites/sticks.jpg",
    desc: "Stretchy, cheesy, golden sticks served with marinara dip. Instant love!"
  },
  {
    title: "Chicken Popcorn",
    img: "./images/tinybites/popcorn.jpg",
    desc: "Crispy mini bites of spicy chicken, perfect for sharing (or not)."
  },
  {
    title: "Tornado Twister Fries",
    img: "./images/tinybites/tornadofries.jpg",
    desc: "Spiral-cut fries seasoned and twisted to perfection. A snack storm!"
  },
  {
    title: "Onion Ring Queen",
    img: "./images/tinybites/onionrings.jpg",
    desc: "Golden crispy rings with attitude. Bow down to the crunch."
  },
  {
    title: "Mini Cheese Sliders",
    img: "./images/tinybites/sliders.jpg",
    desc: "Tiny buns, cheesy layers, big flavor. These sliders go fast!"
  },
  {
    title: "Chicken Wings (Hot Honey / BBQ)",
    img: "./images/tinybites/wings.jpg",
    desc: "Juicy wings glazed in your pick — Hot Honey 🔥 or BBQ 🍯. Finger-lickin'."
  },
   {
    title: "Cheese Jalepeno Beef Burger",
    img: "./images/tinybites/burger.jpg",
    desc: "Juicy, grilled, and stacked with flavor. This burger doesn’t play small."
  },
  {
    title: "Loaded Fries",
    img: "./images/tinybites/fries.jpg",
    desc: "Cheese, jalapeños, secret sauce. These fries understood the assignment."
  },
//  moctails
{
  title: "Mint Mojito Babe",
  img: "./images/mocktails/mint mojito.jpg",
  desc: "Cool mint. Tangy lime. Ice-cold attitude. She’s the breeziest babe in the room."
},
{
  title: "Blue Lagoon Glow",
  img: "./images/mocktails/blue lagoon.jpg",
  desc: "Electric blue, citrus spark, total main character glow. Sip it like you own the ocean."
},
{
  title: "Peach Please Iced Tea",
  img: "./images/mocktails/peach iced tea.jpg",
  desc: "Juicy peach meets iced tea realness. This one doesn’t ask — it *tells*."
},
{
  title: "Green Apple Popstar",
  img: "./images/mocktails/gren aple.jpg",
  desc: "Sour, sweet, and ready to steal the spotlight. A pop of green that never misses."
},
{
  title: "Watermelon Slush Szn",
  img: "./images/mocktails/water melon.jpg",
  desc: "Summer in a sip. Cold, juicy, and always in season. This slush is a whole mood."
},
{
  title: "Lychee Cloud Cooler",
  img: "./images/mocktails/Lychee Mint Slushie Recipe.jpg",
  desc: "Fluffy lychee dreams with a cool twist. Soft, sweet, and seriously aesthetic."
},
{
  title: "Virgin Pina Colada Mood",
  img: "./images/mocktails/pinacolada.jpg",
  desc: "Tropical, creamy, and drama-free. No rum, no rules — just full-on beach babe energy."
},
{
  title: "Pink Lemonade Drip",
  img: "./images/mocktails/pink lemoande.jpg",
  desc: "Pretty, punchy, and packed with pink power. It’s giving ✨lemonade royalty✨."
},
// gelato
{
    title: "Cookie Dough Chaos",
    img: "./images/icecreams/cookies and cream.jpg",
    desc: "Chunks of cookie dough buried in creamy vanilla — pure sweet madness."
  },
  {
    title: "Biscoff Blizzard",
    img: "./images/icecreams/biscoff.jpg",
    desc: "Swirls of Biscoff and caramel in a storm of crunch. A blizzard worth the brain freeze."
  },
  {
    title: "Sundae Funday",
    img: "./images/icecreams/sunade.jpg",
    desc: "Brownie base, scoops on top, sprinkles to finish — this isn’t just dessert, it’s a whole event."
  },
  {
    title: "Strawberry Shortcake Chill",
    img: "./images/icecreams/strawberry.jpg",
    desc: "Layers of strawberry, cake, and vanilla scoops — it’s giving sweet summer date night."
  },
  {
    title: "Waffle Cone Party Pack",
    img: "./images/icecreams/pack.jpg",
    desc: "Crunchy cones, creamy scoops, and chaos toppings — this party doesn’t stop at one bite."
  },
  {
    title: "Choco Lava Cream Dream",
    img: "./images/icecreams/chocolava.jpg",
    desc: "Molten chocolate cake oozing into silky ice cream. It’s hot. It’s cold. It’s everything."
  },
  {
    title: "Rainbow Sprinkle Fantasy",
    img: "./images/icecreams/sprinkle.jpg",
    desc: "Colorful sprinkles, cotton candy swirls, and unicorn-level magic in every scoop."
  },
  {
    title: "Triple Threat Scoops",
    img: "./images/icecreams/3 scoop.jpg",
    desc: "Pick your power combo — any 3 scoops from our fab flavors. Create your chaos."
  },
  {
    title: "Pink Lemonade Drip",
    img: "./images/mocktails/pink lemoande.jpg",
    desc: "Pretty, punchy, and packed with pink power. It’s giving ✨lemonade royalty✨."
  },
  // brunch
    {
    title: "Sunny Side Me Up",
    img: "./images/lunch/eggs.jpg",
    desc: "Perfectly sunny eggs, crispy toast, and creamy avocado for that breakfast glow-up."
  },
  {
    title: "The Big Boo Breakfast Platter",
    img: "./images/lunch/Breakfast Board with Florida OJ - Something….jpg",
    desc: "A full plate of breakfast joy — eggs, toast, sausages, and all the good stuff."
  },
  {
    title: "Sausage & Hash Brown Sandwich",
    img: "./images/lunch/Sausage and Peppers Sandwich with Cheese Recipe….jpg",
    desc: "Loaded breakfast sandwich with crispy hash browns and juicy sausage. Yes please."
  },
  {
    title: "French Toast Drizzle",
    img: "./images/lunch/Mini Dutch Pancakes.jpg",
    desc: "Golden toast drizzled in maple or Nutella — your sweet morning fix."
  },
  {
    title: "Egg n' Cheese Croissant",
    img: "./images/lunch/🔶 Croissant Sandwich with Scrambled Eggs 🔶  A….jpg",
    desc: "Flaky croissant stuffed with melty cheese and fluffy eggs. Breakfast luxury."
  },
  {
    title: "Mini Pancake Party Box",
    img: "./images/lunch/Mini Dutch Pancakes.jpg",
    desc: "Stacked, fluffy, and ready to dip — party vibes in every pancake bite."
  }






  ];

  function openCard(index) {
    const card = coffeeData[index];
    document.getElementById("detailImage").src = card.img;
    document.getElementById("detailTitle").textContent = card.title;
    document.getElementById("detailDesc").textContent = card.desc;
    document.getElementById("cardDetails").style.display = "flex";
    document.body.style.overflow = "hidden"; 
  }

  function closeCard() {
    document.getElementById("cardDetails").style.display = "none";
    document.body.style.overflow = "auto"; 
  }

// chatbox
let isChatOpen = false;

function toggleChat() {
  const chatbox = document.getElementById("chatbox");
  const overlay = document.getElementById("chat-blur-overlay");

  if (isChatOpen) {
    chatbox.classList.add("hidden");
    overlay.style.display = "none";
  } else {
    chatbox.classList.remove("hidden");
    overlay.style.display = "block";
  }

  isChatOpen = !isChatOpen;
}

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage("user", userText);

  const mood = userText.toLowerCase();
  let botReply = "Tell me more about how you're feeling!";

  if (mood.includes("happy")) {
    botReply = "Yay! 🎉 Try our Mint Mojito Babe or a fruity smoothie!";
  } else if (mood.includes("tired") || mood.includes("sleepy")) {
    botReply = "How about a strong Espresso Shot or Mocha Charge?";
  } else if (mood.includes("sad") || mood.includes("low")) {
    botReply = "Sending hugs! Try a Hot Chocolate Hug or Oreo Brownie Warmth.";
  } else if (mood.includes("hungry")) {
    botReply = "Let’s fix that! Maybe Mozzarella Stickzzz or our Loaded Nachos?";
  } else if (mood.includes("refreshed") || mood.includes("cool")) {
    botReply = "Try a Blue Lagoon Glow or Watermelon Slush Szn!";
  } else if (mood.includes("romantic") || mood.includes("sweet")) {
    botReply = "Aww! How about our Pink Lemonade Drip or Gelato Swirl?";
  }
    else if (mood.includes("stressed") || mood.includes("anxious")) {
    botReply = "Take a deep breath 🌿 Try our Green Apple Popstar or a calm Chamomile Latte.";
  } else if (mood.includes("excited") || mood.includes("celebrating")) {
    botReply = "Woohoo! 🎉 You deserve a Virgin Pina Colada Mood or Loaded Brunch Platter!";
  } else if (mood.includes("bored") || mood.includes("dull")) {
    botReply = "Let’s spice things up! 🔥 Go for Peri Peri Fries or a Peach Please Iced Tea.";
  } else if (mood.includes("lazy") || mood.includes("chill")) {
    botReply = "Perfect time to sip on a Lychee Cloud Cooler or grab a Choco Lava Cake!";
  } else if (mood.includes("cold") || mood.includes("freezing")) {
    botReply = "Warm up with our Hot Mocha Hug or the cozy Hazelnut Latte Swirl ☕.";
  } else if (mood.includes("hot") || mood.includes("sweaty")) {
    botReply = "Cool off with our Watermelon Slush Szn or Mint Mojito Babe! ❄️";
  }


  setTimeout(() => {
    appendMessage("bot", botReply);
  }, 500);

  input.value = "";
}

function appendMessage(sender, text) {
  const chatBody = document.getElementById("chatBody");
  const msg = document.createElement("div");
  msg.className = sender;
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}


// login form
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Error Fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Clear previous errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  // Name validation
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation
  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If valid, simulate submission
  if (valid) {
    alert("Login successful!");
    // You can redirect or submit here
  }
});

// contact form
function validateForm() {
  let isValid = true;

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Name validation (only alphabets, min 3 chars)
  const name = document.getElementById("name").value.trim();
  if (!/^[A-Za-z\s]{3,}$/.test(name)) {
    document.getElementById("nameError").textContent = "Name must be at least 3 letters (no numbers).";
    isValid = false;
  }

  // Email validation (must end with .com)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email) || !email.endsWith(".com")) {
    document.getElementById("emailError").textContent = "Enter a valid email (must end with .com).";
    isValid = false;
  }

  // Phone validation (optional but if given → at least 10 digits)
  const phone = document.getElementById("phone").value.trim();
  if (phone && !/^\d{10,}$/.test(phone)) {
    alert("Phone must have at least 10 digits.");
    isValid = false;
  }

  // Message validation (required, min 15 chars)
  const message = document.getElementById("message").value.trim();
  if (message.length < 15) {
    document.getElementById("messageError").textContent = "Message must be at least 15 characters.";
    isValid = false;
  }

  // ✅ If valid
  if (isValid) {
    alert("✅ Feedback submitted successfully!");
    document.querySelector(".contact-form").reset(); // clear form
  }

  return false; // Stop default submit always (so page reload na ho)
}


// about section
const reveals = document.querySelectorAll('.sp-reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.16 });
reveals.forEach(el => io.observe(el));

// Mini “Add” button feedback (demo)
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-add]');
  if (!btn) return;
  const name = btn.getAttribute('data-add');
  btn.textContent = 'Added ✓';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Add';
    btn.disabled = false;
  }, 1200);
});


