const items = [
/* ================================
   ITEM DATA
================================ */


/* ================================
   PHYSICAL ATTACK ITEMS
================================ */

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
    TAGS.physicalAttack,
    TAGS.attackSpeed,
    TAGS.critChance,
    TAGS.movementSpeed
  ],

  sortStats: {
  cost: 3320,

  physicalAttack: 40,
  spellAttack: 0,
  attackSpeed: 20,
  critChance: 15,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 0,
  spellDefense: 0,

  movementSpeed: 7.5,
  cdr: 0,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
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
    TAGS.physicalAttack,
    TAGS.cooldown,
    TAGS.physicalDefense,
    TAGS.slow,
    TAGS.cleanse
  ],

  sortStats: {
  cost: 3280,

  physicalAttack: 80,
  spellAttack: 0,
  attackSpeed: 0,
  critChance: 0,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 150,
  spellDefense: 0,

  movementSpeed: 0,
  cdr: 10,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
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
    TAGS.physicalAttack,
    TAGS.attackSpeed,
    TAGS.critChance,
    TAGS.physicalPenetration
  ],

  sortStats: {
  cost: 2570,

  physicalAttack: 75,
  spellAttack: 0,
  attackSpeed: 0,
  critChance: 15,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 0,
  spellDefense: 0,

  movementSpeed: 0,
  cdr: 0,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
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
    TAGS.physicalAttack,
    TAGS.cooldown,
    TAGS.bonusDamage
  ],

  sortStats: {
  cost: 2540,

  physicalAttack: 150,
  spellAttack: 0,
  attackSpeed: 0,
  critChance: 0,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 0,
  spellDefense: 0,

  movementSpeed: 0,
  cdr: 5,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
}
},

/* ================================
   SPELL ATTACK ITEMS
================================ */

{
  name: "Moon Goddess",
  chineseName: "",
  category: "Spell Attack",
  image: "images/moon-goddess.png",
  price: 3340,

  summary: "High spell power and spell vamp. Active that grants temporary invulnerability.",

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
    TAGS.spellDamage,
    TAGS.cooldown,
    TAGS.spellVamp,
    TAGS.active,
    TAGS.invulnerability
  ],
  sortStats: {
  cost: 3340,

  physicalAttack: 0,
  spellAttack: 160,
  attackSpeed: 0,
  critChance: 0,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 0,
  spellDefense: 0,

  movementSpeed: 0,
  cdr: 7.5,

  physicalLifesteal: 0,
  spellVamp: 12,

  tenacity: 0
}
},

/* ================================
   DEFENCE ITEMS
================================ */

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
    TAGS.physicalAttack,
    TAGS.maxHp,
    TAGS.healthBasedDamage
  ],
  
sortStats: {
  cost: 3300,

  physicalAttack: 75,
  spellAttack: 0,
  attackSpeed: 0,
  critChance:0,
  critDamage: 0,

  maxHp: 900,
  maxMana: 0,

  physicalDefense: 0,
  spellDefense: 0,

  movementSpeed: 0,
  cdr: 0,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
}


/* ================================
   MOVEMENT ITEMS
================================ */
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
      TAGS.movementSpeed,
      TAGS.spellPenetration,
      TAGS.manaRegen
    ],

  sortStats: {
  cost: 700,

  physicalAttack: 0,
  spellAttack: 0,
  attackSpeed: 0,
  critChance: 0,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 0,
  spellDefense: 0,

  movementSpeed: 50,
  cdr: 0,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
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
      "+Summoner CD -10-20%",
      "+15% CDR"
    ],

    chips: [
      TAGS.movementSpeed,
      TAGS.summonerSpellCDR,
      TAGS.cooldown
    ],

    sortStats: {
  cost: 700,

  physicalAttack: 0,
  spellAttack: 0,
  attackSpeed: 0,
  critChance: 0,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 0,
  spellDefense: 0,

  movementSpeed: 50,
  cdr: 15,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
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
      TAGS.movementSpeed,
      TAGS.spellDefense,
      TAGS.physicalDefense,
      TAGS.toughness
    ],

    sortStats: {
  cost: 700,

  physicalAttack: 0,
  spellAttack: 0,
  attackSpeed: 0,
  critChance: 0,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 50,
  spellDefense: 100,

  movementSpeed: 50,
  cdr: 0,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 25
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
      TAGS.movementSpeed,
      TAGS.attackSpeed,
      TAGS.healthRegen
    ],

    sortStats: {
  cost: 700,

  physicalAttack: 0,
  spellAttack: 0,
  attackSpeed: 20,
  critChance: 0,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 0,
  spellDefense: 0,

  movementSpeed: 50,
  cdr: 0,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
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
      TAGS.movementSpeed,
      TAGS.maxHp,
      TAGS.outOfCombatMS
    ],

    sortStats: {
  cost: 700,

  physicalAttack: 0,
  spellAttack: 0,
  attackSpeed: 0,
  critChance: 0,
  critDamage: 0,

  maxHp: 300,
  maxMana: 0,

  physicalDefense: 0,
  spellDefense: 0,

  movementSpeed: 50,
  cdr: 0,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
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
      TAGS.movementSpeed,
      TAGS.physicalDefense,
      TAGS.spellDefense,
      TAGS.physicalDamageReduction
    ],

    sortStats: {
  cost: 700,

  physicalAttack: 0,
  spellAttack: 0,
  attackSpeed: 0,
  critChance: 0,
  critDamage: 0,

  maxHp: 0,
  maxMana: 0,

  physicalDefense: 100,
  spellDefense: 50,

  movementSpeed: 50,
  cdr: 0,

  physicalLifesteal: 0,
  spellVamp: 0,

  tenacity: 0
}
  }
];
