/* ================================
   DOM ELEMENTS
================================ */

const categoryButtons = document.querySelectorAll(".category-button");
const itemGrid = document.querySelector(".item-grid");
const itemInspector = document.querySelector(".item-inspector");

const primarySort = document.getElementById("primary-sort-stat");
const secondarySort = document.getElementById("secondary-sort-stat");
const sortDirectionSelect = document.getElementById("sort-direction");

const resetFiltersButton = document.getElementById("reset-filters-button");

let currentCategory = "All";


/* ================================
   SORT OPTIONS
================================ */

const sortOptions = [
  { value: "cost", label: "Cost" },
  { value: "physicalAttack", label: "Physical Attack" },
  { value: "spellAttack", label: "Spell Attack" },
  { value: "attackSpeed", label: "Attack Speed" },
  { value: "critChance", label: "Crit Chance" },
  { value: "critDamage", label: "Crit Damage" },
  { value: "maxHp", label: "Max HP" },
  { value: "maxMana", label: "Max Mana" },
  { value: "physicalDefense", label: "Physical Defense" },
  { value: "spellDefense", label: "Spell Defense" },
  { value: "movementSpeed", label: "Movement Speed" },
  { value: "cdr", label: "CDR" },
  { value: "physicalLifesteal", label: "Physical Lifesteal" },
  { value: "spellLifesteal", label: "Spell Lifesteal" },
  { value: "tenacity", label: "Tenacity" }
];


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

  const primaryStat = primarySort.value;
  const secondaryStat = secondarySort.value;

  if (primaryStat !== "cost") {
    filteredItems = filteredItems.filter(function(item) {
      return (item.sortStats[primaryStat] || 0) > 0;
    });
  }

  if (secondaryStat) {
    filteredItems = filteredItems.filter(function(item) {
      return (item.sortStats[secondaryStat] || 0) > 0;
    });
  }

  return filteredItems;
}






/* ================================
   DUAL SORT DROPDOWN LOGIC
================================ */

function updateSecondarySortOptions() {
  const primaryValue = primarySort.value;
  const currentSecondaryValue = secondarySort.value;

  secondarySort.innerHTML = `<option value="">None</option>`;

  sortOptions.forEach(function(option) {
    if (option.value !== primaryValue) {
      const optionElement = document.createElement("option");

      optionElement.value = option.value;
      optionElement.textContent = option.label;

      secondarySort.appendChild(optionElement);
    }
  });

  if (currentSecondaryValue !== primaryValue) {
    secondarySort.value = currentSecondaryValue;
  } else {
    secondarySort.value = "";
  }
}


/* ================================
   SORTING
================================ */

function applySort() {
  const primaryStat = primarySort.value;
  const secondaryStat = secondarySort.value;
  const selectedDirection = sortDirectionSelect.value;

  const filteredItems = getFilteredItems();

  filteredItems.sort(function(a, b) {
    const primaryA = a.sortStats[primaryStat] || 0;
    const primaryB = b.sortStats[primaryStat] || 0;

    const primaryDifference =
      selectedDirection === "desc"
        ? primaryB - primaryA
        : primaryA - primaryB;

    if (primaryDifference !== 0) {
      return primaryDifference;
    }

    if (secondaryStat) {
      const secondaryA = a.sortStats[secondaryStat] || 0;
      const secondaryB = b.sortStats[secondaryStat] || 0;

      return selectedDirection === "desc"
        ? secondaryB - secondaryA
        : secondaryA - secondaryB;
    }

    return 0;
  });

  displayItems(filteredItems);
}


/* ================================
   RESET
================================ */

function resetFilters() {
  currentCategory = "All";

  primarySort.value = "cost";
  secondarySort.value = "";
  sortDirectionSelect.value = "desc";

  categoryButtons.forEach(function(button) {
    button.classList.remove("active");
  });

  document
    .querySelector('.category-button[data-category="All"]')
    .classList.add("active");

  updateSecondarySortOptions();

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


primarySort.addEventListener("change", function() {
  updateSecondarySortOptions();

  applySort();
  resetInspector();
});


secondarySort.addEventListener("change", function() {
  applySort();
  resetInspector();
});


sortDirectionSelect.addEventListener("change", function() {
  applySort();
  resetInspector();
});


resetFiltersButton.addEventListener("click", resetFilters);


/* ================================
   INITIAL PAGE LOAD
================================ */

updateSecondarySortOptions();

applySort();
resetInspector();