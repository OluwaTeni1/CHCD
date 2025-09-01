document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.querySelector(".open");
  const closeMenu = document.querySelector(".close");
  const navLinks = document.querySelector(".nav-links");

  openMenu.addEventListener("click", function () {
    navLinks.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", function () {
    navLinks.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Close menu when clicking on a link
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".nav-links") &&
      !event.target.closest(".open") &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Initialize carousel with interval
  const myCarousel = document.getElementById("carouselExampleIndicators");
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000,
    wrap: true,
  });
});

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

//donation form
document.addEventListener("DOMContentLoaded", function () {
  // Amount selection
  const amountOptions = document.querySelectorAll(".amount-option");
  const customAmountInput = document.getElementById("customAmount");

  amountOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove selected class from all options
      amountOptions.forEach((opt) => opt.classList.remove("selected"));

      // Add selected class to clicked option
      this.classList.add("selected");

      // Clear custom amount
      customAmountInput.value = "";
    });
  });

  // When custom amount is entered, deselect other options
  customAmountInput.addEventListener("input", function () {
    amountOptions.forEach((opt) => opt.classList.remove("selected"));
  });

  // Payment method change
  const paymentMethod = document.getElementById("paymentMethod");
  const creditCardInfo = document.getElementById("creditCardInfo");

  paymentMethod.addEventListener("change", function () {
    if (this.value === "creditCard") {
      creditCardInfo.style.display = "block";
    } else {
      creditCardInfo.style.display = "none";
    }
  });

  // Form validation and submission
  const donationForm = document.getElementById("donationForm");

  donationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get selected amount
    let amount = 0;
    const selectedOption = document.querySelector(".amount-option.selected");

    if (selectedOption) {
      amount = selectedOption.getAttribute("data-amount");
    } else if (customAmountInput.value) {
      amount = customAmountInput.value;
    }

    // Validate amount
    if (amount <= 0) {
      alert("Please select or enter a donation amount.");
      return;
    }

    // Validate other fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    if (!firstName || !lastName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    // If credit card is selected, validate card details
    if (paymentMethod.value === "creditCard") {
      const cardNumber = document.getElementById("cardNumber").value;
      const expiryDate = document.getElementById("expiryDate").value;
      const cvv = document.getElementById("cvv").value;

      if (!cardNumber || !expiryDate || !cvv) {
        alert("Please fill in all credit card details.");
        return;
      }
    }

    // If we get here, form is valid
    alert(
      `Thank you, ${firstName} ${lastName}, for your donation of $${amount}!`
    );
    donationForm.reset();
    amountOptions[2].classList.add("selected"); // Reset to $100 default
  });
});

//contact form
document.addEventListener("DOMContentLoaded", function () {
  // Form validation and submission
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If we get here, form is valid
    alert(
      `Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.`
    );
    contactForm.reset();
  });

  // Add animation to elements on scroll
  const animatedItems = document.querySelectorAll(".animated-item");

  function checkScroll() {
    animatedItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 100) {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }
    });
  }

  // Initial check and add scroll event listener
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

//footer

document.addEventListener("DOMContentLoaded", function () {
  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector("input");

    if (emailInput.value && isValidEmail(emailInput.value)) {
      alert("Thank you for subscribing to our newsletter!");
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Add animation to elements on scroll
  const footerElements = document.querySelectorAll(
    ".footer-links li, .contact-info li"
  );

  function checkScroll() {
    footerElements.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 100) {
        item.style.opacity = 1;
        item.style.transform = "translateX(0)";
      }
    });
  }

  // Initial check and add scroll event listener
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

// swiper initialization
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const currentYear = new Date().getFullYear();

// Update the element with id "Date"
document.getElementById("Date").textContent = currentYear;

// Optional: Update the year every January 1st at midnight
function updateYear() {
  const newYear = new Date().getFullYear();
  document.getElementById("Date").textContent = newYear;
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all gallery items
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeModal = document.getElementById("modalClose");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const viewMoreIcon = viewMoreBtn.querySelector(".icon");

  let currentIndex = 0;
  let images = [];
  let isExpanded = false;

  // View More functionality
  viewMoreBtn.addEventListener("click", function () {
    const hiddenItems = document.querySelectorAll(".gallery-item.hidden");

    if (isExpanded) {
      // Collapse the view
      hiddenItems.forEach((item) => {
        item.classList.add("hidden");
      });
      viewMoreBtn.innerHTML =
        'View More <i class="fas fa-chevron-down icon"></i>';
      viewMoreBtn.classList.remove("expanded");
      isExpanded = false;

      // Scroll to the top of the gallery
      document
        .querySelector(".gallery-grid")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      // Expand the view
      hiddenItems.forEach((item) => {
        item.classList.remove("hidden");
      });
      viewMoreBtn.innerHTML =
        'View Less <i class="fas fa-chevron-up icon"></i>';
      viewMoreBtn.classList.add("expanded");
      isExpanded = true;
    }
  });

  // Create array of image data
  galleryItems.forEach((item, index) => {
    const img = item.querySelector("img");
    const title = item.querySelector(".gallery-item-title");
    const desc = item.querySelector(".gallery-item-desc");

    images.push({
      src: img.src,
      alt: img.alt,
      title: title ? title.textContent : "",
      desc: desc ? desc.textContent : "",
    });

    // Add click event to each gallery item
    item.addEventListener("click", () => {
      currentIndex = index;
      openModal();
    });
  });

  // Open modal with current image
  function openModal() {
    modal.classList.add("active");
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
    modalCaption.innerHTML = `<strong>${images[currentIndex].title}</strong><br>${images[currentIndex].desc}`;
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  });

  // Navigate to previous image
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
    modalCaption.innerHTML = `<strong>${images[currentIndex].title}</strong><br>${images[currentIndex].desc}`;
  });

  // Navigate to next image
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
    modalCaption.innerHTML = `<strong>${images[currentIndex].title}</strong><br>${images[currentIndex].desc}`;
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active")) {
      if (e.key === "Escape") {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      } else if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
        modalImg.alt = images[currentIndex].alt;
        modalCaption.innerHTML = `<strong>${images[currentIndex].title}</strong><br>${images[currentIndex].desc}`;
      } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
        modalImg.alt = images[currentIndex].alt;
        modalCaption.innerHTML = `<strong>${images[currentIndex].title}</strong><br>${images[currentIndex].desc}`;
      }
    }
  });

  // Filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
