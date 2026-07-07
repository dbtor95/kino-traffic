const films = [
  { title: "In the Mood for Love", year: "2000" },
  { title: "The Apartment", year: "1960" },
  { title: "Spirited Away", year: "2001" },
  { title: "Do the Right Thing", year: "1989" },
  { title: "Portrait of a Lady on Fire", year: "2019" }
];

const searchInput = document.querySelector("#film-search");
const results = document.querySelector("#autocomplete-results");

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

searchInput.addEventListener("input", (event) => {
  renderResults(event.target.value);
});

results.addEventListener("click", (event) => {
  const result = event.target.closest(".result");

  if (!result) {
    return;
  }

  searchInput.value = result.querySelector(".title").textContent;
  results.hidden = true;
  searchInput.setAttribute("aria-expanded", "false");
  searchInput.focus();
});
