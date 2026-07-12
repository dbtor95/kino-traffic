const categories = [
  { id: "direction", label: "Direction" },
  { id: "acting", label: "Acting & Cast" },
  { id: "cinematography", label: "Cinematography" },
  { id: "music", label: "Music" }
];

const films = [
  {
    title: "In the Mood for Love",
    year: "2000",
    summary: "Two neighbors in 1960s Hong Kong form a quiet bond after suspecting their spouses are having an affair.",
    people: [
      { id: "source-lead-1", name: "Maggie Cheung", categoryId: "acting" },
      { id: "source-lead-2", name: "Tony Leung", categoryId: "acting" },
      { id: "source-director", name: "Wong Kar-wai", categoryId: "direction" },
      { id: "source-cinematographer", name: "Christopher Doyle", categoryId: "cinematography" },
      { id: "source-composer", name: "Michael Galasso", categoryId: "music" }
    ]
  },
  {
    title: "The Apartment",
    year: "1960",
    summary: "An office worker lends out his apartment to company executives and slowly realizes the cost of trying to get ahead.",
    people: [
      { id: "source-lead-1", name: "Jack Lemmon", categoryId: "acting" },
      { id: "source-lead-2", name: "Shirley MacLaine", categoryId: "acting" },
      { id: "source-director", name: "Billy Wilder", categoryId: "direction" },
      { id: "source-cinematographer", name: "Joseph LaShelle", categoryId: "cinematography" },
      { id: "source-composer", name: "Adolph Deutsch", categoryId: "music" }
    ]
  },
  {
    title: "Spirited Away",
    year: "2001",
    summary: "A young girl enters a strange spirit world and must find courage, kindness, and a way back to her family.",
    people: [
      { id: "source-lead-1", name: "Rumi Hiiragi", categoryId: "acting" },
      { id: "source-lead-2", name: "Miyu Irino", categoryId: "acting" },
      { id: "source-director", name: "Hayao Miyazaki", categoryId: "direction" },
      { id: "source-cinematographer", name: "Atsushi Okui", categoryId: "cinematography" },
      { id: "source-composer", name: "Joe Hisaishi", categoryId: "music" }
    ]
  },
  {
    title: "Do the Right Thing",
    year: "1989",
    summary: "On the hottest day of the year in Brooklyn, tensions rise around a neighborhood pizza shop.",
    people: [
      { id: "source-lead-1", name: "Danny Aiello", categoryId: "acting" },
      { id: "source-lead-2", name: "Ruby Dee", categoryId: "acting" },
      { id: "source-director", name: "Spike Lee", categoryId: "direction" },
      { id: "source-cinematographer", name: "Ernest Dickerson", categoryId: "cinematography" },
      { id: "source-composer", name: "Bill Lee", categoryId: "music" }
    ]
  },
  {
    title: "Portrait of a Lady on Fire",
    year: "2019",
    summary: "A painter is hired to secretly make a wedding portrait of a young woman on an isolated coast.",
    people: [
      { id: "source-lead-1", name: "Noemie Merlant", categoryId: "acting" },
      { id: "source-lead-2", name: "Adele Haenel", categoryId: "acting" },
      { id: "source-director", name: "Celine Sciamma", categoryId: "direction" },
      { id: "source-cinematographer", name: "Claire Mathon", categoryId: "cinematography" },
      { id: "source-composer", name: "Jean-Baptiste de Laubier", categoryId: "music" }
    ]
  }
];

const recommendations = [
  {
    title: "Brief Encounter",
    year: "1945",
    matches: [
      {
        categoryId: "direction",
        personId: "source-director",
        role: "Director"
      },
      {
        categoryId: "acting",
        personId: "source-lead-1",
        role: "Cast"
      },
      {
        categoryId: "acting",
        personId: "source-lead-2",
        role: "Cast"
      },
      {
        categoryId: "music",
        personId: "source-composer",
        role: "Composer"
      }
    ]
  },
  {
    title: "Lost in Translation",
    year: "2003",
    matches: [
      {
        categoryId: "direction",
        personId: "source-director",
        role: "Director"
      },
      {
        categoryId: "acting",
        personId: "source-lead-1",
        role: "Cast"
      },
      {
        categoryId: "acting",
        personId: "source-lead-2",
        role: "Cast"
      },
      {
        categoryId: "cinematography",
        personId: "source-cinematographer",
        role: "Director of Photography"
      }
    ]
  },
  {
    title: "Chungking Express",
    year: "1994",
    matches: [
      {
        categoryId: "direction",
        personId: "source-director",
        role: "Director"
      },
      {
        categoryId: "cinematography",
        personId: "source-cinematographer",
        role: "Director of Photography"
      },
      {
        categoryId: "music",
        personId: "source-composer",
        role: "Composer"
      }
    ]
  },
  {
    title: "Before Sunset",
    year: "2004",
    matches: [
      {
        categoryId: "direction",
        personId: "source-director",
        role: "Director"
      },
      {
        categoryId: "acting",
        personId: "source-lead-1",
        role: "Cast"
      },
      {
        categoryId: "acting",
        personId: "source-lead-2",
        role: "Cast"
      }
    ]
  },
  {
    title: "Carol",
    year: "2015",
    matches: [
      {
        categoryId: "acting",
        personId: "source-lead-1",
        role: "Cast"
      },
      {
        categoryId: "acting",
        personId: "source-lead-2",
        role: "Cast"
      },
      {
        categoryId: "cinematography",
        personId: "source-cinematographer",
        role: "Director of Photography"
      },
      {
        categoryId: "music",
        personId: "source-composer",
        role: "Composer"
      }
    ]
  },
  {
    title: "Past Lives",
    year: "2023",
    matches: [
      {
        categoryId: "direction",
        personId: "source-director",
        role: "Director"
      },
      {
        categoryId: "acting",
        personId: "source-lead-1",
        role: "Cast"
      },
      {
        categoryId: "acting",
        personId: "source-lead-2",
        role: "Cast"
      }
    ]
  },
  {
    title: "Happy Together",
    year: "1997",
    matches: [
      {
        categoryId: "direction",
        personId: "source-director",
        role: "Director"
      },
      {
        categoryId: "cinematography",
        personId: "source-cinematographer",
        role: "Director of Photography"
      },
      {
        categoryId: "acting",
        personId: "source-lead-1",
        role: "Cast"
      },
      {
        categoryId: "acting",
        personId: "source-lead-2",
        role: "Cast"
      }
    ]
  },
  {
    title: "Columbus",
    year: "2017",
    matches: [
      {
        categoryId: "cinematography",
        personId: "source-cinematographer",
        role: "Director of Photography"
      },
      {
        categoryId: "acting",
        personId: "source-lead-1",
        role: "Cast"
      }
    ]
  },
  {
    title: "The Umbrellas of Cherbourg",
    year: "1964",
    matches: [
      {
        categoryId: "music",
        personId: "source-composer",
        role: "Composer"
      },
      {
        categoryId: "cinematography",
        personId: "source-cinematographer",
        role: "Director of Photography"
      }
    ]
  },
  {
    title: "Paris, Texas",
    year: "1984",
    matches: [
      {
        categoryId: "cinematography",
        personId: "source-cinematographer",
        role: "Director of Photography"
      },
      {
        categoryId: "music",
        personId: "source-composer",
        role: "Composer"
      }
    ]
  },
  {
    title: "Mikey and Nicky",
    year: "1976",
    matches: [
      {
        categoryId: "acting",
        personId: "source-lead-1",
        role: "Cast"
      },
      {
        categoryId: "acting",
        personId: "source-lead-2",
        role: "Cast"
      },
      {
        categoryId: "direction",
        personId: "source-director",
        role: "Director"
      }
    ]
  },
  {
    title: "Only Yesterday",
    year: "1991",
    matches: [
      {
        categoryId: "direction",
        personId: "source-director",
        role: "Director"
      },
      {
        categoryId: "music",
        personId: "source-composer",
        role: "Composer"
      }
    ]
  }
];

const searchInput = document.querySelector("#film-search");
const results = document.querySelector("#autocomplete-results");
const selectedFilm = document.querySelector("#selected-film");
const selectionPanel = document.querySelector("#selection-panel");

let selectedCategories = [];
let currentRecommendationViewModels = [];
let currentFilm = null;

function groupMatchesByCategory(activeMatches) {
  const groups = [];

  categories.forEach((category) => {
    const matches = activeMatches.filter((match) => match.categoryId === category.id);

    if (matches.length > 0) {
      groups.push({ category, matches });
    }
  });

  return groups;
}

function uniqueActiveCategoryCount(activeMatches) {
  const categoryIds = new Set();

  activeMatches.forEach((match) => {
    categoryIds.add(match.categoryId);
  });

  return categoryIds.size;
}

function renderResults(query) {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    results.hidden = true;
    results.innerHTML = "";
    searchInput.setAttribute("aria-expanded", "false");
    return;
  }

  const matches = films.filter((film) =>
    film.title.toLowerCase().includes(trimmedQuery.toLowerCase())
  );

  const visibleFilms = matches.length > 0 ? matches : films.slice(0, 3);

  results.innerHTML = visibleFilms
    .map(
      (film) => `
        <button class="result" type="button" role="option">
          <span class="poster" aria-hidden="true"></span>
          <span class="title">${film.title}</span>
          <span class="year">${film.year}</span>
        </button>
      `
    )
    .join("");

  results.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
}

function openFilmPage(title) {
  window.location.href = `film.html?title=${encodeURIComponent(title)}`;
}

function renderSelectedFilm() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  const film = films.find((item) => item.title === title) || films[0];
  currentFilm = film;

  selectedFilm.innerHTML = `
    <div class="key-visual" aria-hidden="true"></div>
    <div class="film-copy">
      <p class="eyebrow">Selected film</p>
      <h1 class="film-title">${film.title}</h1>
      <p class="film-year">${film.year}</p>
      <p class="plot-summary">${film.summary}</p>
      <h2 class="section-title">Creative team</h2>
      <div class="pill-list">
        ${film.people
          .map(
            (person) => `
              <span
                class="pill cast-pill category-${person.categoryId}"
                data-person-id="${person.id}"
                data-category-id="${person.categoryId}"
              >
                ${person.name}
              </span>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderCategoryPanel() {
  selectionPanel.className = "category-panel";
  selectionPanel.setAttribute("aria-label", "Choose recommendation categories");
  selectionPanel.innerHTML = `
    <div>
      <p class="eyebrow">Recommendation match</p>
      <h2 class="panel-title">What should Kino Traffic match on?</h2>
      <p class="panel-note">Choose at least one category to unlock fake recommendations.</p>
    </div>
    <div class="category-list">
      ${categories
        .map(
          (category) => `
            <button
              class="category-button category-${category.id}"
              type="button"
              data-category="${category.id}"
            >
              ${category.label}
            </button>
          `
        )
        .join("")}
    </div>
    <p id="category-error" class="category-error" hidden>Select at least one category first.</p>
    <button class="submit-button" type="button" data-action="show-recommendations">Submit</button>
  `;
}

function updateCategorySelection() {
  document.querySelectorAll(".category-button").forEach((button) => {
    button.classList.toggle("is-selected", selectedCategories.includes(button.dataset.category));
  });

  document.querySelectorAll(".cast-pill").forEach((pill) => {
    pill.classList.toggle(
      "is-highlighted",
      selectedCategories.includes(pill.dataset.categoryId)
    );
  });
}

function getActiveMatches(recommendation, selectedCategoryIds) {
  const selected = selectedCategoryIds instanceof Set
    ? selectedCategoryIds
    : new Set(selectedCategoryIds);

  return recommendation.matches
    .filter((match) => selected.has(match.categoryId))
    .map((match) => ({
      ...match,
      personName: personNameForMatch(match)
    }));
}

function uniqueSourcePersonCount(activeMatches) {
  const personIds = new Set();

  activeMatches.forEach((match) => {
    personIds.add(match.personId);
  });

  return personIds.size;
}

function personNameForMatch(match) {
  const person = currentFilm.people.find((item) => item.id === match.personId);

  return person ? person.name : "Unknown person";
}

function recommendationViewModels() {
  const selected = new Set(selectedCategories);

  return recommendations
    .map((recommendation) => {
      const activeMatches = getActiveMatches(recommendation, selected);

      return {
        ...recommendation,
        activeMatches,
        matchedCategoryCount: uniqueActiveCategoryCount(activeMatches)
      };
    })
    .filter((recommendation) => recommendation.activeMatches.length > 0)
    .sort((first, second) => {
      if (second.matchedCategoryCount !== first.matchedCategoryCount) {
        return second.matchedCategoryCount - first.matchedCategoryCount;
      }

      return uniqueSourcePersonCount(second.activeMatches) - uniqueSourcePersonCount(first.activeMatches);
    });
}

function matchCountLabel(count) {
  return `${count} matched ${count === 1 ? "category" : "categories"}`;
}

function selectedCategoryCountLabel() {
  const count = new Set(selectedCategories).size;

  return `${count} selected ${count === 1 ? "category" : "categories"}`;
}

function clearRecommendationHover() {
  document.querySelectorAll(".cast-pill.is-hovered").forEach((pill) => {
    pill.classList.remove("is-hovered");
  });
}

function highlightMatchedPeople(card) {
  clearRecommendationHover();

  const recommendation = currentRecommendationViewModels[Number(card.dataset.recommendationIndex)];

  if (!recommendation) {
    return;
  }

  recommendation.activeMatches.forEach((match) => {
    const pill = document.querySelector(`.cast-pill[data-person-id="${match.personId}"]`);

    if (pill) {
      pill.classList.add("is-hovered");
    }
  });
}

function renderRecommendations() {
  currentRecommendationViewModels = recommendationViewModels();

  selectionPanel.className = "recommendation-panel";
  selectionPanel.setAttribute("aria-label", "Fake recommendations");
  selectionPanel.innerHTML = `
    <div class="recommendation-header">
      <div>
        <p class="eyebrow">Fake recommendations</p>
        <h2 class="panel-title">Because you picked ${selectedCategoryCountLabel()}</h2>
      </div>
      <button class="secondary-button" type="button" data-action="show-categories">Edit categories</button>
    </div>
    ${
      currentRecommendationViewModels.length === 0
        ? '<p class="panel-note">No fake recommendations match the selected categories yet.</p>'
        : `
          <div class="recommendation-grid">
            ${currentRecommendationViewModels
              .map(
                (film, index) => `
                  <article
                    class="recommendation-card"
                    data-recommendation-index="${index}"
                  >
                    <div class="recommendation-poster" aria-hidden="true"></div>
                    <h3>${film.title}</h3>
                    <p>${film.year}</p>
                    <strong>${matchCountLabel(film.matchedCategoryCount)}</strong>
                    <div class="reason-list" aria-label="Match reasons">
                      ${groupMatchesByCategory(film.activeMatches)
                        .map((group) => `
                          <span class="reason-pill category-${group.category.id}">
                            ${group.category.label}
                          </span>
                        `)
                        .join("")}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        `
    }
  `;
}

if (searchInput && results) {
  searchInput.addEventListener("input", (event) => {
    renderResults(event.target.value);
  });

  results.addEventListener("click", (event) => {
    const result = event.target.closest(".result");

    if (!result) {
      return;
    }

    openFilmPage(result.querySelector(".title").textContent);
  });
}

if (selectedFilm) {
  renderSelectedFilm();
}

if (selectionPanel) {
  selectionPanel.addEventListener("click", (event) => {
    const button = event.target.closest("button");

    if (!button) {
      return;
    }

    if (button.dataset.action === "back") {
      window.location.href = "index.html";
      return;
    }

    if (button.dataset.action === "show-categories") {
      selectedCategories = [];
      clearRecommendationHover();
      document.querySelector(".film-layout").classList.remove("has-recommendations");
      renderCategoryPanel();
      updateCategorySelection();
      return;
    }

    if (button.dataset.category) {
      const category = button.dataset.category;
      const isSelected = selectedCategories.includes(category);
      selectedCategories = isSelected
        ? selectedCategories.filter((item) => item !== category)
        : [...selectedCategories, category];

      document.querySelector("#category-error").hidden = true;
      updateCategorySelection();
      return;
    }

    if (button.dataset.action === "show-recommendations") {
      if (selectedCategories.length === 0) {
        document.querySelector("#category-error").hidden = false;
        return;
      }

      document.querySelector(".film-layout").classList.add("has-recommendations");
      renderRecommendations();
    }
  });

  selectionPanel.addEventListener("mouseover", (event) => {
    const card = event.target.closest(".recommendation-card");

    if (card) {
      highlightMatchedPeople(card);
    }
  });

  selectionPanel.addEventListener("mouseout", (event) => {
    const card = event.target.closest(".recommendation-card");

    if (card && !card.contains(event.relatedTarget)) {
      clearRecommendationHover();
    }
  });
}
