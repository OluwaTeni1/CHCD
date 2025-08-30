// Newsletter display module
function displayNewsletter(country, newsletterId) {
  const newsletter = getNewsletterData(country, newsletterId);

  if (!newsletter) {
    displayError();
    return;
  }

  // Update header
  const header = document.getElementById("newsletterHeader");
  header.className = `newsletter-header ${newsletter.headerClass}`;

  // Update flag
  const flag = document.getElementById("countryFlag");
  flag.style.background = newsletter.flagStyle;

  // Update content
  document.getElementById("newsletterTitle").textContent = newsletter.title;
  document.getElementById("newsletterSubtitle").textContent =
    newsletter.subtitle;
  document.getElementById("newsletterDate").textContent = newsletter.date;
  document.getElementById("newsletterAuthor").textContent = newsletter.author;
  document.getElementById("readTime").textContent = newsletter.readTime;
  document.getElementById("newsletterBody").innerHTML = newsletter.content;

  // Update page title
  document.title = `${newsletter.title} | CHCD Newsletter`;

  // Update related newsletters
  displayRelatedNewsletters(country, newsletter.related);
}

function displayRelatedNewsletters(country, relatedIds) {
  const relatedGrid = document.getElementById("relatedNewsletters");
  relatedGrid.innerHTML = "";

  const relatedNewsletters = getRelatedNewsletters(country, relatedIds);

  relatedNewsletters.forEach((newsletter) => {
    const relatedItem = document.createElement("div");
    relatedItem.className = "related-item";
    relatedItem.innerHTML = `
            <img src="${newsletter.image}" alt="${newsletter.title}">
            <div class="related-item-content">
                <h4 class="related-item-title">${newsletter.title}</h4>
                <div class="related-item-date">${newsletter.date}</div>
            </div>
        `;

    // Add click event to open the related newsletter
    relatedItem.addEventListener("click", function () {
      window.location.href = `?country=${country}&id=${newsletter.id}`;
    });

    relatedGrid.appendChild(relatedItem);
  });
}

function displayError() {
  const defaultData = getNewsletterData("nigeria", "education");
  document.getElementById("newsletterTitle").textContent = defaultData.title;
  document.getElementById("newsletterSubtitle").textContent =
    "The newsletter you requested could not be found. Here is our latest update from Nigeria";
  document.getElementById("newsletterBody").innerHTML = `
        <div class="highlight-box">
            <p>We're sorry, but the newsletter you're looking for isn't available. This may be because:</p>
            <ul>
                <li>The newsletter has been moved or removed</li>
                <li>There was an error in the link you followed</li>
                <li>The newsletter is from a country we no longer support</li>
            </ul>
            <p>Please use the back button to return to our newsletters page, or enjoy this featured newsletter from Nigeria.</p>
        </div>
        ${defaultData.content}
    `;
}
