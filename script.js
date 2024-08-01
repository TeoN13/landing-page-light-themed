addEventListener("DOMContentLoaded", (event) => {
  // Starts carousel
  const myCarouselElement = document.querySelector("#features-carousel");

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false // don't let user scroll through images
  });
});

// Light mode - Dark mode toggle
function switchMode() {
  const checkbox = document.getElementById("theme-checkbox");

  const navBar = document.getElementById("navBar");
  const footer = document.getElementById("footer");
  const featuresContainer = document.getElementById("features-container");
  const pricingSection = document.getElementById("pricing");
  const contactForm = document.getElementById("contact-form");
  const featuresButtons = document.querySelectorAll(
    "#features .card-body button"
  );
  const pricingButtons = document.querySelectorAll(
    "#pricing .card-body button"
  );
  const features = document.getElementById("features");
  const featureColor = getComputedStyle(features)
    .getPropertyValue("--features-color")
    .trim(); // getting the color for the button border color in light mode
  const featureColorDarkMode = getComputedStyle(features)
    .getPropertyValue("--dark-mode-color")
    .trim(); // color for dark mode

  // Check the current theme
  if (checkbox.checked) {
    // Switch to dark mode
    navBar.classList.remove("bg-light");
    navBar.classList.add("bg-dark");
    navBar.setAttribute("data-bs-theme", "dark");
    footer.setAttribute("data-bs-theme", "dark");
    featuresContainer.setAttribute("data-bs-theme", "dark");
    pricingSection.setAttribute("data-bs-theme", "dark");
    contactForm.setAttribute("data-bs-theme", "dark");
    featuresButtons.forEach((button) => {
      button.style.borderColor = featureColorDarkMode;
      button.style.color = featureColorDarkMode;
    });
    pricingButtons.forEach((button) => {
      button.style.borderColor = featureColorDarkMode;
      button.style.color = featureColorDarkMode;
    });
  } else {
    // Switch to light mode
    navBar.classList.remove("bg-dark");
    navBar.classList.add("bg-light");
    navBar.setAttribute("data-bs-theme", "light");
    footer.setAttribute("data-bs-theme", "light");
    featuresContainer.setAttribute("data-bs-theme", "light");
    pricingSection.setAttribute("data-bs-theme", "light");
    contactForm.setAttribute("data-bs-theme", "light");
    featuresButtons.forEach((button) => {
      button.style.borderColor = featureColor;
      button.style.color = featureColor;
    });
    pricingButtons.forEach((button) => {
      button.style.borderColor = featureColor;
      button.style.color = featureColor;
    });
  }
}