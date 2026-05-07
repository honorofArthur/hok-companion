/* ================================
   DOM ELEMENTS
================================ */

const categoryButtons = document.querySelectorAll(".category-button");
const itemGrid = document.querySelector(".item-grid");
const itemInspector = document.querySelector(".item-inspector");

const sortStatSelect = document.getElementById("sort-stat");
const sortDirectionSelect = document.getElementById("sort-direction");
const hideZeroStatsCheckbox = document.getElementById("hide-zero-stats");
const resetFiltersButton = document.getElementById("reset-filters-button");
const filterToggleLabel = document.getElementById("filter-toggle-label");
const hideZeroWrapper = document.querySelector(".sort-toggle");

let currentCategory = "All";


/* ================================
   ITEM CARD RENDERING
================================ */

function displayItems(itemsToShow) {
  itemGrid.innerHTML = "";

  itemsToShow.forEach(function(item) {
    const itemCard = document.createElement("article");
    const categoryClass = item.category.toLowerCase().replaceAll(" ", "-");

    itemCard.classList.add("item-card", categoryClass);

    itemCard.innerHTML = `
      <div class="item-card-accent"></div>

      <div class="card-top">
        <img class="item-icon" src="${item.image}" alt="${item.name} icon">

        <div class="item-main">
          <h2>${item.name}</h2>
          <p class="item-price">${item.price} gold</p>
        </div>
      </div>

      <p class="item-summary">${item.summary}</p>

      <div class="stat-chip-row">
  ${(item.chips || []).slice(0, 4).map(function(chip) {
    return `<span class="stat-chip">${chip}</span>`;
  }).join("")}

  ${(item.chips || []).length > 4
    ? `<span class="stat-chip more-chip">+${item.chips.length - 4} more</span>`
    : ""}
</div>
    `;

    itemCard.addEventListener("click", function() {
      showItemInspector(item);
    });

    itemGrid.appendChild(itemCard);
  });
}


/* ================================
   SIDE INSPECTOR
================================ */

function showItemInspector(item) {
  const passiveText = item.passive || "";
  const passiveText2 = item.passive2 || "";
  const activeText = item.active || "";

  itemInspector.innerHTML = `
    <div class="inspector-header">
      <img class="inspector-icon" src="${item.image}" alt="${item.name} icon">

      <div>
        <h2>${item.name}</h2>
        <p class="inspector-chinese">${item.chineseName || ""}</p>
        <p class="inspector-price">${item.price} gold</p>
      </div>
    </div>

    <p class="inspector-summary">${item.description || item.summary || ""}</p>

    <h3>Stats</h3>

    <ul class="inspector-stat-list">
      ${(item.stats || []).map(function(stat) {
        return `<li>${stat}</li>`;
      }).join("")}
    </ul>

    ${passiveText ? `
      <h3>Passive</h3>
      <p class="inspector-ability">${passiveText}</p>
    ` : ""}

    ${passiveText2 ? `
      <h3>Passive 2</h3>
      <p class="inspector-ability">${passiveText2}</p>
    ` : ""}

    ${activeText ? `
      <h3>Active</h3>
      <p class="inspector-ability">${activeText}</p>
    ` : ""}

    <h3>Tags</h3>

    <div class="inspector-chip-row">
      ${(item.chips || []).map(function(chip) {
        return `<span>${chip}</span>`;
      }).join("")}
    </div>
  `;

  itemInspector.classList.remove("is-open");
  void itemInspector.offsetWidth;
  itemInspector.classList.add("is-open");
}

function resetInspector() {
  itemInspector.innerHTML = `
    <div class="inspector-placeholder">
      Select an item
    </div>
  `;

  itemInspector.classList.remove("is-open");
}


/* ================================
   FILTERING
================================ */

function getFilteredItems() {
  let filteredItems = [...items];

  if (currentCategory !== "All") {
    filteredItems = filteredItems.filter(function(item) {
      return item.category === currentCategory;
    });
  }

  if (hideZeroStatsCheckbox.checked) {
    const selectedStat = sortStatSelect.value;

    filteredItems = filteredItems.filter(function(item) {
      return (item.sortStats[selectedStat] || 0) > 0;
    });
  }

  return filteredItems;
}

function updateFilterLabel() {
  const selectedOption =
    sortStatSelect.options[sortStatSelect.selectedIndex].text;

  filterToggleLabel.textContent =
    `Only show ${selectedOption} items`;
}

function updateOnlyShowVisibility() {
  if (sortStatSelect.value === "cost") {
    hideZeroWrapper.style.display = "none";
    hideZeroStatsCheckbox.checked = false;
  } else {
    hideZeroWrapper.style.display = "flex";
  }
}


/* ================================
   SORTING
================================ */

function applySort() {
  const selectedStat = sortStatSelect.value;
  const selectedDirection = sortDirectionSelect.value;

  const filteredItems = getFilteredItems();

  filteredItems.sort(function(a, b) {
    const valueA = a.sortStats[selectedStat] || 0;
    const valueB = b.sortStats[selectedStat] || 0;

    if (selectedDirection === "desc") {
      return valueB - valueA;
    }

    return valueA - valueB;
  });

  displayItems(filteredItems);
}


/* ================================
   RESET
================================ */

function resetFilters() {
  currentCategory = "All";

  sortStatSelect.value = "cost";
  sortDirectionSelect.value = "desc";
  hideZeroStatsCheckbox.checked = false;

  categoryButtons.forEach(function(button) {
    button.classList.remove("active");
  });

  document
    .querySelector('.category-button[data-category="All"]')
    .classList.add("active");

  updateFilterLabel();
  updateOnlyShowVisibility();
  applySort();
  resetInspector();
}


/* ================================
   EVENT LISTENERS
================================ */

categoryButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    currentCategory = button.dataset.category;

    categoryButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    applySort();
    resetInspector();
  });
});

sortStatSelect.addEventListener("change", function() {
  updateFilterLabel();
  updateOnlyShowVisibility();
  applySort();
  resetInspector();
});

sortDirectionSelect.addEventListener("change", function() {
  applySort();
  resetInspector();
});

hideZeroStatsCheckbox.addEventListener("change", function() {
  applySort();
  resetInspector();
});

resetFiltersButton.addEventListener("click", resetFilters);


/* ================================
   INITIAL PAGE LOAD
================================ */

updateFilterLabel();
updateOnlyShowVisibility();
applySort();
resetInspector();