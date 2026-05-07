/* ================================
   ITEM DATA
================================ */

const items = [
{
  name: "Swift Sun Abyss",
  chineseName: "",
  category: "Physical Attack",
  image: "images/swift-sun-abyss.png",
  price: 3320,

  summary: "Crit and attack speed item. Active boosts basic attack range and mobility",

  description: "Provides physical attack, attack speed, crit chance, and bonus movement speed. The active greatly increases ranged attack range, grants bonus movement speed, and causes attacks to deal extra splash damage to nearby enemies for 5 seconds, making it strong for kiting and teamfights.",

  passive: "Precision: Increases basic attack damage by 25 points; effect is doubled for ranged heroes.",
  passive2:"",
  active: "Active - Sun Chaser: Increases basic attack range by 125 points and movement speed by 40%. During this period, basic attacks deal 30% bonus damage to one nearby target for 5 seconds. The increased range and bonus damage only apply to ranged heroes. Cooldown: 75 seconds.",

  stats: [
    "+40 Physical Attack",
    "+20% Attack Speed",
    "+15% Crit Chance",
    "+7.5% Movement Speed"
  ],

  chips: [
    "Physical Attack",
    "Attack Speed",
    "Crit Chance",
    "Movement Speed"
  ],

  sortStats: {
    cost: 3320,
    maxHp: 0,
    physicalDefense: 0,
    spellDefense: 0,
    physicalAttack: 40,
    spellAttack: 0,
    attackSpeed: 20,
    critChance: 15,
    movementSpeed: 7.5,
    cdr: 0
  }
},

{
  name: "Immovable Sky",
  chineseName: "",
  category: "Physical Attack",
  image: "images/immovable-sky.png",
  price: 3280,

  summary: "Hybrid bruiser item with anti-CC cleanse, damage reduction, and chase potential.",

  description: "High physical attack, defense, and cooldown reduction for bruisers or frontline fighters. Skills briefly slow enemies and weaken their damage output, helping you stick to targets and survive trades. Active removes all crowd control, grants damage reduction, bonus movement speed, and lets you pass through terrain for 3 seconds; getting a kill refreshes the duration.",

  passive: "Cripple: Skills slow the first enemy hero hit by 10%~20% and reduce their damage taken by 20% for 3 seconds. Cooldown: 8 seconds.",
  passive2:"",
  active: "Active - Dispel: Removes all crowd control effects, grants 35% damage reduction, increases movement speed by 30%, and ignores terrain obstacles for 3 seconds. Killing an enemy hero during this time refreshes the effect's duration. Cooldown: 75 seconds",

  stats: [
    "+80 Physical Attack",
    "+10% Cooldown Reduction",
    "150 Physical Defense"
  ],

  chips: [
    "Physical Attack",
    "Cooldown Reduction",
    "Physical Defense",
    "Slow",
    "Cleanse CC"
  ],

  sortStats: {
    cost: 3280,
    maxHp: 0,
    physicalDefense: 150,
    spellDefense: 0,
    physicalAttack: 150,
    spellAttack: 0,
    attackSpeed: 0,
    critChance: 0,
    movementSpeed: 0,
    cdr: 10
  }
},

{
  name: "The Dawn of Benevolence",
  chineseName: "",
  category: "Physical Attack",
  image: "images/the-dawn-of-benevolence.png",
  price: 2570,

  summary: "Crit and attack speed item with physical penetration.",

  description: "Provides physical attack, attack speed, and critical strike chance for sustained DPS. Its passive grants physical penetration, with ranged heroes receiving double the effect for stronger armor shredding. Basic attacks also deal bonus flat damage, again doubled for ranged heroes, making it highly effective for marksmen and auto-attack focused builds.",

  passive: "Armor Penetration: +15% Physical Penetration (Double effect for ranged heroes)",
  passive2:"Dawn: Basic attack damage increased by 25 points (doubled for ranged heroes).",
  active: "",

  stats: [
    "+75 Physical Attack",
    "+30% Cooldown Reduction",
    "+15% Crit Chance"
  ],

  chips: [
    "Physical Attack",
    "Attack Speed",
    "Crit Chance",
    "Armor Penetration"
  ],

  sortStats: {
    cost: 2570,
    maxHp: 0,
    physicalDefense: 0,
    spellDefense: 0,
    physicalAttack: 75,
    spellAttack: 0,
    attackSpeed: 0,
    critChance: 15,
    movementSpeed: 0,
    cdr: 0
  }
},

{
  name: "Armybreaker",
  chineseName: "",
  category: "Physical Attack",
  image: "images/army-breaker.png",
  price: 2540,

  summary: "Massively increases damage against low-health enemies.",

  description: "Provides a very large boost to physical attack along with minor cooldown reduction for burst-oriented heroes. Its passive increases damage dealt to enemies below 50% health, making it extremely effective for executions and finishing weakened targets.",

  passive: "Breaking Army: Deals an additional 30% damage to enemies with less than 50% health.",
  passive2:"",
  active: "",

  stats: [
    "+150 Physical Attack",
    "+5% Cooldown Reduction"
  ],

  chips: [
    "Physical Attack",
    "CDR",
    "Bonus Damage Below 50% HP"
  ],

  sortStats: {
    cost: 2540,
    maxHp: 0,
    physicalDefense: 0,
    spellDefense: 0,
    physicalAttack: 150,
    spellAttack: 0,
    attackSpeed: 0,
    critChance: 0,
    movementSpeed: 0,
    cdr: 5
  }
},

{
  name: "Moon Goddess",
  chineseName: "",
  category: "Spell Attack",
  image: "images/moon-goddess.png",
  price: 3340,

  summary: "High spell power and spell vamp. Active that grants temporarty invulnerability.",

  description: "",

  passive: "",
  passive2:"",
  active: "Moon Guardian: Immune to all effects, unable to move, attack, or use skills for 1.5 seconds, then gains 60% movement speed over 2 seconds with a decaying effect, and recovers a total of (1000 + 100% spell power) health. Cooldown: 75 seconds.",

  stats: [
    "+160 spell damage",
    "+7.5% cooldown reduction",
    "+12% spell vamp"
  ],

  chips: [
    "Spell Damage",
    "CDR",
    "Spell Vamp",
    "Invulnerability"
  ],
  sortStats: {
  cost: 3340,
  maxHp: 0,
  physicalDefense: 0,
  spellDefense: 0,
  physicalAttack: 0,
  spellAttack: 160,
  attackSpeed: 0,
  critChance: 0,
  movementSpeed: 0,
  cdr: 7.5
}

},

  {
  name: "Wrath of Souls",
  chineseName: "",
  category: "Defence",
  image: "images/wrath-of-souls.png",
  price: 3300,

  summary: "Converts max HP into bonus damage and grants a massive shield through its active.",

  description: "",

  passive: "Fury: Basic attacks deal an additional 1.5% of the user's maximum health as physical damage. When the user's health is below 50%, this damage is increased by 37.5% to 75%.",
  passive2:"",
  active: "Blood Rage: Gradually deducts 30% of current health, gradually gaining a shield equal to 50% of maximum health for 4 seconds. During this time, deals magic damage equal to 4% of maximum health per second to surrounding enemies (damage capped at 200 against monsters). Cooldown: 75 seconds.",

  stats: [
    "+75 Physical Attack",
    "+900 Max HP"
  ],

  chips: [
    "Physical Attack",
    "Max HP",
    "Health-based Damage + Shield"
  ],
  
sortStats: {
  cost: 3300,
  maxHp: 900,
  physicalDefense: 0,
  spellDefense: 0,
  physicalAttack: 75,
  spellAttack: 0,
  attackSpeed: 0,
  critChance: 0,
  movementSpeed: 0,
  cdr: 0
}

},
  {
    name: "Arcane Boots",
    chineseName: "抵抗之靴",
    category: "Movement",
    image: "images/arcane-boots.png",
    price: 700,

    summary: "Spell penetration boots",

    description:
      "Provides movement speed, scaling spell penetration, and mana regeneration. Best suited for spell-based heroes who want stronger poke, better rotations, and more reliable mana sustain.",

    stats: [
      "+50 Movement Speed",
      "+60-120 Spell Penetration",
      "+Regen 10 mana/5 seconds"
    ],

    chips: [
      "MS",
      "Spell Penetration",
      "Mana Regen"
    ],

    sortStats: {
      cost: 700,
      maxHp: 0,
      physicalDefense: 0,
      spellDefense: 0,
      physicalAttack: 0,
      spellAttack: 0,
      attackSpeed: 0,
      cdr: 0
    }
  },

  {
    name: "Boots of Calm",
    chineseName: "测试鞋子",
    category: "Movement",
    image: "images/boots-of-calm.png",
    price: 700,

    summary: "Cooldown reduction boots",

    description:
      "Reduces ability cooldowns and improves summoner spell uptime. Best suited for heroes who rely on frequent skill usage, faster rotations, or repeated engage and escape tools.",

    stats: [
      "+50 Movement Speed",
      "+Summoner CD −10–20%",
      "+15% CDR"
    ],

    chips: [
      "MS",
      "Summoner Spell CDR",
      "CDR"
    ],

    sortStats: {
      cost: 700,
      maxHp: 0,
      physicalDefense: 0,
      spellDefense: 0,
      physicalAttack: 0,
      spellAttack: 0,
      attackSpeed: 0,
      cdr: 15
    }
  },

  {
    name: "Boots of Resistance",
    chineseName: "测试鞋子",
    category: "Movement",
    image: "images/boots-of-resistance.png",
    price: 700,

    summary: "Anti-CC and defense boots",

    description:
      "Provides both spell defense and physical defense while reducing crowd control duration through Toughness. A strong defensive boot choice when enemy control effects are stopping you from moving, escaping, or fighting back.",

    stats: [
      "+50 Movement Speed",
      "+100 Spell Defense",
      "+50 Physical Defense",
      "+25% Toughness"
    ],

    chips: [
      "MS",
      "Spell Defense",
      "Physical Defense",
      "Toughness"
    ],

    sortStats: {
      cost: 700,
      maxHp: 0,
      physicalDefense: 50,
      spellDefense: 100,
      physicalAttack: 0,
      spellAttack: 0,
      attackSpeed: 0,
      cdr: 0
    }
  },

  {
    name: "Rapid Boots",
    chineseName: "测试鞋子",
    category: "Movement",
    image: "images/rapid-boots.png",
    price: 700,

    summary: "Attack speed boots",

    description:
      "Increases basic attack speed and adds health recovery on auto attacks. Best suited for heroes who deal consistent damage through repeated basic attacks and want stronger lane trading or sustained fighting.",

    stats: [
      "+50 Movement Speed",
      "+20% Attack Speed",
      "+Melee/Ranged recover 20~40/30~60 HP with each auto attack"
    ],

    chips: [
      "MS",
      "Attack Speed",
      "Health Recovery"
    ],

    sortStats: {
      cost: 700,
      maxHp: 0,
      physicalDefense: 0,
      spellDefense: 0,
      physicalAttack: 0,
      spellAttack: 0,
      attackSpeed: 20,
      cdr: 0
    }
  },

  {
    name: "Boots of Swiftness",
    chineseName: "测试鞋子",
    category: "Movement",
    image: "images/boots-of-swiftness.png",
    price: 700,

    summary: "Enhanced movement speed boots",

    description:
      "Provides higher movement speed, bonus health, and extra out-of-combat movement speed. Best suited for roaming, rotating, chasing, or moving quickly between lanes and objectives.",

    stats: [
      "+70 Movement Speed",
      "+300 Max HP",
      "+Gain 35-70 movement speed after 5s out of combat"
    ],

    chips: [
      "MS",
      "Max HP",
      "Out of Combat MS"
    ],

    sortStats: {
      cost: 700,
      maxHp: 300,
      physicalDefense: 0,
      spellDefense: 0,
      physicalAttack: 0,
      spellAttack: 0,
      attackSpeed: 0,
      cdr: 0
    }
  },

  {
    name: "Ninja Tabi",
    chineseName: "测试鞋子",
    category: "Movement",
    image: "images/ninja-tabi.png",
    price: 700,

    summary: "Physical damage reduction boots",

    description:
      "Provides physical defense, spell defense, and percentage physical damage reduction. Best suited against physical-heavy teams, basic attackers, marksmen, and heroes who pressure you through repeated physical damage.",

    stats: [
      "+50 Movement Speed",
      "+100 Physical Defense",
      "+50 Spell Defense",
      "Reduce physical damage taken by 6~12%"
    ],

    chips: [
      "MS",
      "Physical Defense",
      "Spell Defense",
      "Reduce Physical Damage"
    ],

    sortStats: {
      cost: 700,
      maxHp: 0,
      physicalDefense: 100,
      spellDefense: 50,
      physicalAttack: 0,
      spellAttack: 0,
      attackSpeed: 0,
      cdr: 0
    }
  }
];


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
        ${item.chips.map(function(chip) {
          return `<span class="stat-chip">${chip}</span>`;
        }).join("")}
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
        <p class="inspector-chinese">${item.chineseName}</p>
        <p class="inspector-price">${item.price} gold</p>
      </div>
    </div>

    <p class="inspector-summary">${item.description}</p>

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
   CATEGORY FILTERING
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


/* ================================
   SORTING
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
      return item.sortStats[selectedStat] > 0;
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

function applySort() {
  const selectedStat = sortStatSelect.value;
  const selectedDirection = sortDirectionSelect.value;

  const filteredItems = getFilteredItems();

  filteredItems.sort(function(a, b) {
    const valueA = a.sortStats[selectedStat];
    const valueB = b.sortStats[selectedStat];

    if (selectedDirection === "desc") {
      return valueB - valueA;
    }

    return valueA - valueB;
  });

  displayItems(filteredItems);
}

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
  applySort();
  resetInspector();
}


/* ================================
   EVENT LISTENERS
================================ */

sortStatSelect.addEventListener("change", function() {
  updateFilterLabel();
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
displayItems(items);
resetInspector();