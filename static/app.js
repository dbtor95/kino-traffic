const films = [
  {
    title: "In the Mood for Love",
    year: "2000",
    summary: "Two neighbors in 1960s Hong Kong form a quiet bond after suspecting their spouses are having an affair.",
    castAndCrew: ["Maggie Cheung", "Tony Leung", "Wong Kar-wai", "Christopher Doyle", "William Chang"]
  },
  {
    title: "The Apartment",
    year: "1960",
    summary: "An office worker lends out his apartment to company executives and slowly realizes the cost of trying to get ahead.",
    castAndCrew: ["Jack Lemmon", "Shirley MacLaine", "Billy Wilder", "I. A. L. Diamond", "Adolph Deutsch"]
  },
  {
    title: "Spirited Away",
    year: "2001",
    summary: "A young girl enters a strange spirit world and must find courage, kindness, and a way back to her family.",
    castAndCrew: ["Rumi Hiiragi", "Miyu Irino", "Hayao Miyazaki", "Joe Hisaishi", "Studio Ghibli"]
  },
  {
    title: "Do the Right Thing",
    year: "1989",
    summary: "On the hottest day of the year in Brooklyn, tensions rise around a neighborhood pizza shop.",
    castAndCrew: ["Spike Lee", "Danny Aiello", "Ossie Davis", "Ruby Dee", "Ernest Dickerson"]
  },
  {
    title: "Portrait of a Lady on Fire",
    year: "2019",
    summary: "A painter is hired to secretly make a wedding portrait of a young woman on an isolated coast.",
    castAndCrew: ["Noemie Merlant", "Adele Haenel", "Celine Sciamma", "Claire Mathon", "Jean-Baptiste de Laubier"]
  }
];

const searchInput = document.querySelector("#film-search");
const results = document.querySelector("#autocomplete-results");
const selectedFilm = document.querySelector("#selected-film");

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

  selectedFilm.innerHTML = `
    <div class="key-visual" aria-hidden="true"></div>
    <div class="film-copy">
      <p class="eyebrow">Selected film</p>
      <h1 class="film-title">${film.title}</h1>
      <p class="film-year">${film.year}</p>
      <p class="plot-summary">${film.summary}</p>
      <h2 class="section-title">Cast and crew</h2>
      <div class="pill-list">
        ${film.castAndCrew.map((name) => `<span class="pill">${name}</span>`).join("")}
      </div>
    </div>
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
