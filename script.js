let marketRates = {};

function renderRates() {
  const ratesList = document.getElementById("rates-list");
  ratesList.innerHTML = "";
  for (let item in marketRates) {
    const p = document.createElement("p");
    p.textContent = `${item}: ₹${marketRates[item]} प्रति क्विंटल`;
    ratesList.appendChild(p);
  }
}

function addRate() {
  const item = document.getElementById("item").value.trim();
  const rate = document.getElementById("rate").value.trim();
  
  if (!item || !rate) {
    alert("Please enter both item and rate");
    return;
  }
  
  marketRates[item] = rate;
  renderRates();
  
  document.getElementById("item").value = "";
  document.getElementById("rate").value = "";
}

// Initial dummy data
marketRates = {
  "Soyabean": 5400,
  "Wheat": 2800,
  "Maize": 2200
};
renderRates();



let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down → hide navbar
    navbar.classList.add('hidden');
  } else {
    // Scrolling up → show navbar
    navbar.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});

