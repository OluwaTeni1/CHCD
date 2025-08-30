document.addEventListener("DOMContentLoaded", function () {
  const countryTabs = document.querySelectorAll(".country-tab");
  const countryContents = document.querySelectorAll(".country-content");

  countryTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const country = this.getAttribute("data-country");

      // Remove active class from all tabs and contents
      countryTabs.forEach((t) => t.classList.remove("active"));
      countryContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab and corresponding content
      this.classList.add("active");
      document.getElementById(`${country}-content`).classList.add("active");
    });
  });
});
