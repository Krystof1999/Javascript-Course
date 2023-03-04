const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home State
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
  <p>Home</p>
  `;
};

// About State
const aboutState = function (page) {
  document.querySelector("#heading").textContent = "About us";
  document.querySelector("#content").innerHTML = `
    <p>About Page</p>
    `;
};

// Contact State
const contactState = function (page) {
  document.querySelector("#heading").textContent = "Contact us";
  document.querySelector("#content").innerHTML = `
    <p>Contact us</p>
    `;
};

// instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI variables
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

// Home
home.addEventListener("click", (e) => {
  page.change(new homeState());

  e.preventDefault();
});

// Aboout
about.addEventListener("click", (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

// Contact
contact.addEventListener("click", (e) => {
  page.change(new contactState());

  e.preventDefault();
});
