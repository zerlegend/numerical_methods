// Simple JavaScript for navigation active state
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".content-box");

  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
});

// Function to show project content
function showContent(contentId) {
  // Hide all content sections
  document.querySelectorAll(".project-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Show the selected content
  document.getElementById(contentId).classList.add("active");

  // Update active button styling
  document.querySelectorAll(".button-group a").forEach((btn) => {
    btn.classList.remove("active");
    btn.classList.add("outline");
  });

  // Make the clicked button primary
  const activeButton = document.querySelector(`a[onclick*="${contentId}"]`);
  if (activeButton) {
    activeButton.classList.add("active");
    activeButton.classList.remove("outline");
  }
}

// Set the first content as active by default when page loads
document.addEventListener("DOMContentLoaded", function () {
  showContent("description");
});

// Add a class to body for mobile detection
function detectMobile() {
  if (window.innerWidth <= 768) {
    document.body.classList.add("mobile-device");
  } else {
    document.body.classList.remove("mobile-device");
  }
}

// Run on load and resize
window.addEventListener("load", detectMobile);
window.addEventListener("resize", detectMobile);
