document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("countrySelect");
  const initiativeCards = document.querySelectorAll(".initiative-card");
  const countryName = document.getElementById("countryName");
  const countryFlag = document.getElementById("countryFlag");
  const countryDetails = document.getElementById("countryDetails");
  const initiativeBadges = document.getElementById("initiativeBadges");
  const adoptButton = document.getElementById("adoptButton");

  // Country data
  const countryData = {
    france: {
      name: "France",
      flag: "linear-gradient(to right, #002395 0%, #002395 33%, #FFFFFF 33%, #FFFFFF 66%, #ED2939 66%, #ED2939 100%)",
      description:
        "Western European nation with rich history and culture. Population: 67 million. Only about 1% evangelical Christians.",
    },
    germany: {
      name: "Germany",
      flag: "linear-gradient(to bottom, #000000 0%, #000000 33%, #DD0000 33%, #DD0000 66%, #FFCC00 66%, #FFCC00 100%)",
      description:
        "Central European economic power. Population: 83 million. About 2.5% evangelical Christians.",
    },
    italy: {
      name: "Italy",
      flag: "linear-gradient(to right, #009246 0%, #009246 33%, #FFFFFF 33%, #FFFFFF 66%, #CE2B37 66%, #CE2B37 100%)",
      description:
        "Southern European nation with strong Catholic tradition. Population: 60 million. Less than 1% evangelical Christians.",
    },
    spain: {
      name: "Spain",
      flag: "linear-gradient(to bottom, #AA151B 0%, #AA151B 25%, #F1BF00 25%, #F1BF00 75%, #AA151B 75%, #AA151B 100%)",
      description:
        "Southwestern European country. Population: 47 million. About 1% evangelical Christians.",
    },
    uk: {
      name: "United Kingdom",
      flag: "linear-gradient(to bottom, #012169 0%, #012169 66%, #C8102E 66%, #C8102E 100%)",
      description:
        "Island nation in Northwestern Europe. Population: 67 million. About 3% evangelical Christians.",
    },
  };

  // Initiative data
  const initiativeData = {
    prayer: {
      name: "Prayer",
      class: "badge-prayer",
      icon: "<i class='fas fa-pray'></i>",
    },
    mission: {
      name: "Mission Trip",
      class: "badge-mission",
      icon: "<i class='fas fa-hands-helping'></i>",
    },
    planting: {
      name: "Church Planting",
      class: "badge-planting",
      icon: "<i class='fas fa-church'></i>",
    },
  };

  let selectedCountry = null;
  let selectedInitiatives = [];

  // Country selection handler
  countrySelect.addEventListener("change", function () {
    selectedCountry = this.value;
    updatePreview();
  });

  // Initiative selection handler
  initiativeCards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("selected");
      const initiative = this.getAttribute("data-initiative");

      if (this.classList.contains("selected")) {
        if (!selectedInitiatives.includes(initiative)) {
          selectedInitiatives.push(initiative);
        }
      } else {
        selectedInitiatives = selectedInitiatives.filter(
          (item) => item !== initiative
        );
      }

      updatePreview();
    });
  });

  // Update preview based on selections
  function updatePreview() {
    if (selectedCountry && countryData[selectedCountry]) {
      const country = countryData[selectedCountry];
      countryName.textContent = country.name;
      countryFlag.style.background = country.flag;
      countryDetails.textContent = country.description;

      // Update initiative badges
      initiativeBadges.innerHTML = "";
      selectedInitiatives.forEach((initiative) => {
        if (initiativeData[initiative]) {
          const badge = document.createElement("span");
          badge.className = `initiative-badge ${initiativeData[initiative].class}`;
          badge.innerHTML = `${initiativeData[initiative].icon} ${initiativeData[initiative].name}`;
          initiativeBadges.appendChild(badge);
        }
      });

      // Update adopt button
      if (selectedInitiatives.length > 0) {
        adoptButton.textContent = `Adopt ${country.name}`;
        adoptButton.style.display = "block";
      } else {
        adoptButton.style.display = "none";
      }
    } else {
      countryName.textContent = "Select a country";
      countryFlag.style.background = "#f0f0f0";
      countryDetails.textContent =
        "Choose a country and initiative to see details";
      initiativeBadges.innerHTML = "";
      adoptButton.style.display = "none";
    }
  }

  // Adopt button handler
  adoptButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (selectedCountry && selectedInitiatives.length > 0) {
      alert(
        `Thank you for adopting ${
          countryData[selectedCountry].name
        } for ${selectedInitiatives
          .map((initiative) => initiativeData[initiative].name)
          .join(", ")}! You will receive more information soon.`
      );
    }
  });
});
