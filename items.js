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

{
  name: "Pure Sky",
  chineseName: "",
  category: "Physical Attack",
  image: "images/pure-sky.png",
  price: 2140,

  summary: "Defensive item. Slows the first enemy hit by a skill and reduces their damage. Active grants temporary damage reduction.",

  description: "Provides physical attack, physical defense, and cooldown reduction. The passive causes your skill to slow the first enemy hero hit and reduce their damage for 3 seconds, making it useful for duels and catching targets. The active grants 30% damage reduction for 3 seconds, giving strong short-term survivability during trades or teamfights.",

  passive: "Cripple: The skill slows the first enemy hero hit by 10%~20% and reduces their damage taken by 20% for 3 seconds. Cooldown: 8 seconds.",
  passive2: "",
  active: "Dispel: Gain 30% damage reduction for 3 seconds. Cooldown: 75 seconds.",

  stats: [
    "+80 Physical Attack",
    "+150 Physical Defense",
    "+10% Cooldown Reduction" 
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.physicalDefense,
    TAGS.cooldown,
    TAGS.active,
    TAGS.damageReduction
  ],

  sortStats: {
    cost: 2140,

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
  name: "Endless Blade",
  chineseName: "",
  category: "Physical Attack",
  image: "images/endless-blade.png",
  price: 2110,

  summary: "High-damage crit item. Passive that increases crit damage based on your total crit chance.",

  description: "Provides high physical attack and critical hit chance. The passive increases critical damage based on your total critical hit chance, scaling up to a maximum bonus of 50%. Strong for heroes who build multiple crit items and rely on basic attack burst.",

  passive: "Endless: Gain 20% critical strike chance, increasing by 1% for every 2% critical strike chance, up to a maximum of 50%.",
  passive2: "",
  active: "",

  stats: [
    "+120 Physical Attack",
    "+20% Critical Hit Chance"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.critChance,
  ],

  sortStats: {
    cost: 2140,

    physicalAttack: 120,
    spellAttack: 0,
    attackSpeed: 0,
    critChance: 20,
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
  name: "Sunbow",
  chineseName: "",
  category: "Physical Attack",
  image: "images/sunbow.png",
  price: 2100,

  summary: "Crit and attack speed item with bonus movement speed. Active increases attack range and mobility for ranged heroes.",

  description: "Provides physical attack, attack speed, crit chance, and bonus movement speed to improve sustained DPS and kiting. The active temporarily increases basic attack range and movement speed for ranged heroes, making it strong for chasing, repositioning, and safer teamfight damage output.",

  passive: "Precision: Basic attack damage increased by 25 points; effect doubled for ranged heroes.",
  passive2: "",
  active: "Increases your basic attack range by 125 and movement speed by 20% for 5 seconds. Cooldown: 75 seconds (The increased range effect only applies to ranged heroes).",

  stats: [
    "+120 Physical Attack",
    "+20% Attack Speed",
    "+20% Critical Hit Chance"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.attackSpeed,
    TAGS.critChance,
  ],

  sortStats: {
    cost: 2140,

    physicalAttack: 120,
    spellAttack: 0,
    attackSpeed: 0,
    critChance: 20,
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
  name: "Apocalypse",
  chineseName: "",
  category: "Physical Attack",
  image: "images/apocalypse.png",
  price: 2100,

  summary: "Lifesteal bruiser item that converts excess healing into bonus health.",

  description: "Grants physical attack, physical lifesteal, and bonus health for strong sustain and survivability. It increases physical skill lifesteal and turns overflow healing into additional maximum health, making it especially effective on heroes with frequent self-healing abilities",

  passive: "Ruined King: Basic attacks deal an additional 80~160 (+7% of target's bonus maximum health) physical damage to the target.",
  passive2: "",
  active: "",

  stats: [
    "+40 Physical Attack",
    "+20% Attack Speed",
    "+20% Physical Lifesteal",
    "+500 maximum health"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.attackSpeed,
    TAGS.physicalLifesteal,
    TAGS.maxHp
  ],

  sortStats: {
    cost: 2140,

    physicalAttack: 40,
    spellAttack: 0,
    attackSpeed: 20,
    critChance: 0,
    critDamage: 0,

    maxHp: 500,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 0,

    physicalLifesteal: 20,
    spellVamp: 0,

    tenacity: 0
  }
},

{
  name: "Grandmaster's Power",
  chineseName: "",
  category: "Physical Attack",
  image: "images/grandmasters-power.png",
  price: 2100,

  summary: "Crit bruiser item with bonus health and enhanced attacks after using skills.",

  description: "Provides physical attack, crit chance, attack speed, and bonus health for a balanced mix of damage and survivability. After using a skill, it grants bonus movement speed and empowers the next basic attack to deal extra physical damage based on physical attack, making it strong for weaving abilities between attacks and sticking to targets.",

  passive: "Power Strike: After using the skill, movement speed is increased by 12% for 2 seconds, and the next basic attack within 5 seconds deals additional physical damage equal to 80% of physical attack. Cooldown: 3 seconds.",
  passive2: "",
  active: "",

  stats: [
    "+55 Physical Attack",
    "+20% Critical Strike Chance",
    "+15% Attack Speed",
    "+600 maximum health"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.critChance,
    TAGS.attackSpeed,
    TAGS.maxHp
  ],

  sortStats: {
    cost: 2100,

    physicalAttack: 55,
    spellAttack: 0,
    attackSpeed: 15,
    critChance: 20 ,
    critDamage: 0,

    maxHp: 600,
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
  name: "Shadow Axe",
  chineseName: "",
  category: "Physical Attack",
  image: "images/shadow-axe.png",
  price: 2090,

  summary: "Physical attack item with cooldown reduction, health, and scaling armor penetration.",

  description: "Grants high physical attack, cooldown reduction, and bonus health for stronger damage output with added survivability. Its passive provides scaling physical penetration, making it especially effective against armored targets and stronger as the game progresses.",

  passive: "Cleave: Increases physical penetration by 90~180.",
  passive2: "",
  active: "",

  stats: [
    "+80 Physical Attack",
    "+10% Cooldown Reduction",
    "+500 Max Health"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.cdr,
    TAGS.maxHp,
    TAGS.physicalPenetration
  ],

  sortStats: {
    cost: 2090,

    physicalAttack: 80,
    spellAttack: 0,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 500,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 10,

    physicalLifesteal: 0,
    spellVamp: 0,

    tenacity: 0
  }
},

{
  name: "Chasing the Wind",
  chineseName: "",
  category: "Physical Attack",
  image: "images/chasing-the-wind.png",
  price: 2080,

  summary: "Physical attack item that gains stacking speed and damage in combat.",

  description: "",

  passive: "Wind Chaser: Basic attacks and skill hits increase attack speed, movement speed, and damage by 2% for 2.5 seconds, stacking up to 5 times.",
  passive2: "",
  active: "",

  stats: [
    "+600 maximum health",
    "+50 Physical Attack",
    "+30% Attack Speed"
  ],

  chips: [
    TAGS.maxHp,
    TAGS.physicalAttack,
    TAGS.attackSpeed,
    TAGS.movementSpeed
  ],

  sortStats: {
    cost: 2080,

    physicalAttack: 50,
    spellAttack: 0,
    attackSpeed: 30,
    critChance: 0,
    critDamage: 0,

    maxHp: 600,
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
  name: "Star Shattering Hammer",
  chineseName: "",
  category: "Physical Attack",
  image: "images/star-shattering-hammer.png",
  price: 2080,

  summary: "High-damage bruiser item with bonus health, mobility, and percentage armor penetration.",

  description: "Grants high physical attack, bonus max health, and movement speed for strong offensive pressure with added survivability. Its passive increases percentage physical penetration, allowing attacks to deal significantly more damage against heavily armored enemies.",

  passive: "Armor Penetration: Increase physical penetration by 30%",
  passive2: "",
  active: "",

  stats: [
    "+90 Physical Attack",
    "+700 Maximum Health",
    "+7.5% Movement Speed"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.maxHp,
    TAGS.movementSpeed,
    TAGS.physicalPenetration
  ],

  sortStats: {
    cost: 2080,

    physicalAttack: 90,
    spellAttack: 0,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 700,
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
  name: "Blade of Sanctions",
  chineseName: "",
  category: "Physical Attack",
  image: "images/blade-of-sanctions.png",
  price: 2080,

  summary: "Sustain-focused attack item with lifesteal, healing reduction, and emergency recovery.",

  description: "Provides high physical attack, attack speed, and strong physical lifesteal for sustained fighting and survivability. Its passives grant emergency healing at low health and apply healing reduction to enemies hit by attacks or skills, making it effective in extended fights against sustain-heavy heroes.",

  passive: "Resurrection: When your health is below 30%, you will recover a total of 375-750 health points over 5 seconds. Cooldown: 20 seconds.",
  passive2: "Grievous Wounds : After a basic attack/skill hits an enemy, reduce their health regeneration and lifesteal by 35% for 2.5 seconds.",
  active: "",

  stats: [
    "+100 Physical Attack",
    "+20% Physical Lifesteal",
    "+20% Attack Speed"
  ],

  chips: [
    TAGS.physicalAttack,  
    TAGS.physicalLifesteal,
    TAGS.attackSpeed,
    TAGS.healing,
    TAGS.antiHeal
  ],

  sortStats: {
    cost: 2080,

    physicalAttack: 100,
    spellAttack: 0,
    attackSpeed: 20,
    critChance: 0,
    critDamage: 0,

    maxHp: 0,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 0,

    physicalLifesteal: 20,
    spellVamp: 0,

    tenacity: 0
  }
},

{
  name: "Famous Sword - Fate",
  chineseName: "",
  category: "Physical Attack",
  image: "images/famous-sword-fate.png",
  price: 2060,

  summary: "Bruiser item with attack speed, survivability, and a temporary death-prevention effect.",

  description: "Provides physical attack, attack speed, and bonus health for balanced offense and durability. When taking fatal damage, it grants brief invulnerability and movement speed instead of dying instantly, allowing aggressive plays and clutch escapes, with the invulnerability duration and base stats increasing over time.",

  passive: "Dark Curtain: When receiving fatal damage, you will not die instantly, but will gain brief invulnerability and a 15% increase in movement speed for 1 second. After purchase, every 90/180/270 seconds, you will gain an additional 0.2 seconds of invulnerability and a 5% boost to the base stats of the Famous Blade of Fate, up to 3 times. Cooldown: 120 seconds.",
  passive2: "",
  active: "",

  stats: [
    "+500 Max Health",
    "+15% Attack Speed",
    "+75 Physical Attack"
  ],

  chips: [
    TAGS.maxHp,
    TAGS.attackSpeed,
    TAGS.physicalAttack,
    TAGS.invulnerability,
  ],

  sortStats: {
    cost: 2060,

    physicalAttack: 75,
    spellAttack: 0,
    attackSpeed: 15,
    critChance: 0,
    critDamage: 0,

    maxHp: 500,
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
  name: "Demon Breaking Knife",
  chineseName: "",
  category: "Physical Attack",
  image: "images/demon-breaking-knife.png",
  price: 2060,

  summary: "Anti-mage bruiser item with high durability and scaling magic defense.",

  description: "Provides physical attack, magic defense, and bonus health for strong survivability against magic damage while maintaining offensive pressure. Its passive converts a portion of physical damage into additional spell defense, allowing physical fighters to become increasingly resistant to mages during combat.",

  passive: "Demon Slayer: Gain spell defense equal to 50% of physical damage, up to a maximum of 250 points.",
  passive2: "",
  active: "",

  stats: [
    "+90 Physical Attack",
    "+150 Magic Defense",
    "+600 Maximum Health"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.spellDefense,
    TAGS.maxHp
  ],

  sortStats: {
    cost: 2060,

    physicalAttack: 90,
    spellAttack: 0,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 600,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 150,

    movementSpeed: 0,
    cdr: 0,

    physicalLifesteal: 0,
    spellVamp: 0,

    tenacity: 0
  }
},

{
  name: "Frost Attacks",
  chineseName: "",
  category: "Physical Attack",
  image: "images/frost-attacks.png",
  price: 2040,

  summary: "Tanky attack-speed item that slows enemies and deals bonus on-hit damage.",

  description: "Provides max health, physical attack, and attack speed for durable sustained damage. Its passives apply stacking slows and periodic bonus physical damage on attacks or skills, making it effective for sticking to targets and chasing enemies during extended fights.",

  passive: "Frost: Basic attacks and skills reduce movement speed by 5%~10% for 1.5 seconds, stacking up to 2 times.",
  passive2: "Frostbite: Basic attacks and skills deal 135~270 (+45% bonus physical attack) physical damage to the target. Cooldown: 3 seconds.",
  active: "",

  stats: [
    "+750 Max Health",
    "+25% Attack Speed",
    "+70 Physical Attack"
  ],

  chips: [
    TAGS.maxHp, 
    TAGS.attackSpeed,
    TAGS.physicalAttack,
    TAGS.slow,
    TAGS.onHit
  ],

  sortStats: {
    cost: 2040,

    physicalAttack: 70,
    spellAttack: 0,
    attackSpeed: 25,
    critChance: 0,
    critDamage: 0,

    maxHp: 750,
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
  name: "Shadow Blade",
  chineseName: "",
  category: "Physical Attack",
  image: "images/shadow-blade.png",
  price: 2040,

  summary: "Crit attack-speed item with stealth, healing, and mobility active.",

  description: "Provides physical attack, attack speed, crit chance, and bonus health for balanced offense and survivability. Its active grants temporary stealth, healing, and increasing movement speed, making it useful for escaping danger, repositioning, or setting up surprise engages.",

  passive: "",
  passive2: "",
  active: "Untraceable: Instantly enter stealth mode. While in stealth, recover 110~220 + 6% of the health lost in the first 3 seconds and gain 30% speed boost every 0.5 seconds for 2.5 seconds (half speed boost for melee attacks). Casting a skill or basic attack will immediately exit stealth mode. Cooldown: 75 seconds.",

  stats: [
    "+40 Physical Attack",
    "+20% Attack Speed",
    "+20% Critical Strike Chance",
    "+650 maximum health"
  ],

  chips: [
    TAGS.attackSpeed,
    TAGS.critChance,
    TAGS.physicalAttack,
    TAGS.maxHp,
    TAGS.healing,
    TAGS.movementSpeed,
    TAGS.stealth,
    TAGS.defense
  ],

  sortStats: {
    cost: 2040,

    physicalAttack: 40,
    spellAttack: 0,
    attackSpeed: 20,
    critChance: 20,
    critDamage: 0,

    maxHp: 650,
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
  name: "Phantom Blade",
  chineseName: "",
  category: "Physical Attack",
  image: "images/phantom-blade.png",
  price: 2040,

  summary: "High attack-speed crit item that grants stacking combat speed bonuses.",

  description: "Provides physical attack, attack speed, crit chance, and movement speed for fast sustained damage and kiting. Its passive grants additional attack speed and movement speed after basic attacks, with critical hits greatly increasing the effect, making it especially strong for rapid-fire crit builds.",

  passive: "Storm: After a basic attack hits, you gain 10% attack speed (doubled on a critical hit) and 5% movement speed for 3 seconds.",
  passive2: "",
  active: "",

  stats: [
    "+45 Physical Attack",
    "+35% Attack Speed",
    "+20% Critical Strike Chance",
    "+7.5% Movement Speed"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.attackSpeed,
    TAGS.critChance,
    TAGS.movementSpeed,
    TAGS.onHit
  ],

  sortStats: {
    cost: 2040,

    physicalAttack: 45,
    spellAttack: 0,
    attackSpeed: 35,
    critChance: 20,
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
  name: "Lightning Dagger",
  chineseName: "",
  category: "Physical Attack",
  image: "images/lightning-dagger.png",
  price: 2040,

  summary: "Attack-speed item with bonus magic damage and chain lightning effects.",

  description: "Provides physical attack, attack speed, and movement speed for fast-paced sustained damage. Its passive adds bonus magic damage to basic attacks and periodically unleashes chain lightning, making it effective for wave clear and multi-target fights.",

  passive: "Arc: Basic attacks deal an additional 40-80 magic damage. Every 3 basic attacks will unleash a chain lightning bolt, dealing 160-400 magic damage.",
  passive2: "",
  active: "",

  stats: [
    "+40 Physical Attack",
    "+35% Attack Speed",
    "+7.5% Movement Speed"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.attackSpeed,
    TAGS.movementSpeed,
    TAGS.onHit,
    TAGS.magicDamage
  ],

  sortStats: {
    cost: 2040,

    physicalAttack: 40,
    spellAttack: 0,
    attackSpeed: 35,
    critChance: 0,
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
  name: "Bloodthirsty Blade",
  chineseName: "",
  category: "Physical Attack",
  image: "images/bloodthirsty-blade.png",
  price: 2020,

  summary: "Sustain-focused bruiser item with strong lifesteal and bonus health scaling.",

  description: "Provides high physical attack, physical lifesteal, and bonus health for durable sustained fighting. Its passives greatly increase skill lifesteal and convert excess healing into additional maximum health, allowing heroes with strong self-healing to become increasingly tanky over time.",

  passive: "Battle Power: Increases physical skill lifesteal by 25%.",
  passive2: "Overflow: 50% of the overflow health restored is converted into maximum health, with a maximum of 400~800 health.",
  active: "",

  stats: [
    "+80 Physical Attack",
    "+25% Physical Lifesteal",
    "+500 maximum health"
  ],

  chips: [
    TAGS.physicalAttack,
    TAGS.physicalLifesteal,
    TAGS.maxHp,
    TAGS.healing,
    TAGS.sustain
  ],

  sortStats: {
    cost: 2020,

    physicalAttack: 0,
    spellAttack: 0,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 500,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 0,

    physicalLifesteal: 25,
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

{
  name: "The Sage's Book",
  chineseName: "",
  category: "Spell Attack",
  image: "images/the-sage's-book.png",
  price: 2610,

  summary: "High spell attack item with cooldown reduction. Scales bonus damage and damage reduction from your spell attack.",

  description: "Provides a large amount of spell attack and cooldown reduction. Its passive rewards high spell attack builds by granting bonus damage and damage reduction for every 100 spell attack you have, making it stronger as your total spell power increases.",

  passive: "Imprint: Each 100 spell attacks grants a 0.5% damage increase and a 0.5% damage reduction.",
  passive2: "",
  active: "",

  stats: [
    "+350 spell attack",
    "+10% Cooldown Reduction",
    ""
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.cooldown,
    TAGS.damageIncrease,
    TAGS.damageReduction
  ],

  sortStats: {
    cost: 2610,

    physicalAttack: 0,
    spellAttack: 350,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 0,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 10,

    physicalLifesteal: 0,
    spellVamp: 0,

    tenacity: 0
  }
},

{
  name: "Prophecy of Time",
  chineseName: "",
  category: "Spell Attack",
  image: "images/prophecy-of-time.png",
  price: 2150,

  summary: "Durable spell item with health, mana sustain, and scaling defenses.",

  description: "Provides spell attack, maximum mana, and a large amount of health. The first passive restores health and mana after leveling up, giving strong sustain during the mid game. At max level, the effect becomes a timed recovery trigger. The second passive grants scaling physical and spell defense based on spell attack, making the item especially effective for battlemages and durable casters.",

  passive: "Heroic Reward: After a hero levels up, they recover 20% of their maximum health and mana over 3 seconds. At max level, this effect triggers once every 45 seconds.",
  passive2: "Prophecy: Gain 50~100 (+10% spell attack) physical and spell defense.",
  active: "",

  stats: [
    "+140 Spell Attack",
    "+450 Max Mana",
    "+900 Max Health"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.maxMana,
    TAGS.maxHp,
    TAGS.spellDefense,
    TAGS.physicalDefense
  ],

  sortStats: {
    cost: 2150,

    physicalAttack: 0,
    spellAttack: 140,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 900,
    maxMana: 450,

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
  name: "The Wrath of the Scholar",
  chineseName: "",
  category: "Spell Attack",
  image: "images/the-wrath-of-the-scholar.png",
  price: 2140,

  summary: "Pure late-game spell damage item with massive spell attack amplification.",

  description: "Provides a very high amount of spell attack and further amplifies total spell power through its passive, making it one of the strongest raw damage items for burst mages and scaling spellcasters.",

  passive: "Destruction:Increase spell attack by 30%",
  passive2: "",
  active: "",

  stats: [
    "+210 spell attack",
    "",
    ""
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.damageIncrease
  ],

  sortStats: {
    cost: 2140,

    physicalAttack: 0,
    spellAttack: 210,
    attackSpeed: 0,
    critChance: 0,
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
  name: "Emerging from the Cocoon",
  chineseName: "",
  category: "Spell Attack",
  image: "images/emerging-from-the-cocoon.png",
  price: 2120,

  summary: "Tanky spell item that converts maximum health into bonus spell damage and spell penetration.",

  description: "Provides spell attack and a large amount of health. Its passives scale from maximum health, granting bonus spell damage and spell penetration as your HP increases. Especially strong for battlemages, tanks with magic damage, and high-health spell builds.",

  passive: "Emerging from the Cocoon: Gain spell damage equal to 20~40 + 2% of your maximum health, up to a maximum of 100.",
  passive2: "Purge: Gain spell penetration of 30~60 + 3% bonus maximum health, up to a maximum of 150.",
  active: "",

  stats: [
    "+120 spell attack",
    "+900 Maximum Health",
    ""
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.maxHp,
    TAGS.spellPenetration,
    TAGS.healthBasedDamage,
    TAGS.healthBasedPenetration
  ],

  sortStats: {
    cost: 2120,

    physicalAttack: 0,
    spellAttack: 120,
    attackSpeed: 0,
    critChance: 0,
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
},

{
  name: "Breath of Ice",
  chineseName: "",
  category: "Spell Attack",
  image: "images/breath-of-ice.png",
  price: 2100,

  summary: "Durable utility mage item that adds slows and bonus magic damage on hit.",

  description: "Provides spell power, cooldown reduction, and bonus health. Its passives allow skills and attacks to slow enemies while periodically dealing extra magic damage, making it strong for kiting, poke, and sustained teamfight control.",

  passive: "Freeze: Basic attacks and skills will reduce movement speed by 5%~10% (stacks up to 2 times) for 1.5 seconds upon first hitting a target.",
  passive2: "Frostbite: Basic attacks and skills deal (75~150 + 15% magic attack) magic damage to the target. Cooldown: 3 seconds.",
  active: "",

  stats: [
    "+180 spell power",
    "+7.5% cooldown reduction",
    "+500 maximum health"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.cooldown,
    TAGS.maxHp,
    TAGS.slow,
    TAGS.onHit,
    TAGS.magicDamage
  ],

  sortStats: {
    cost: 2100,

    physicalAttack: 0,
    spellAttack: 180,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 500,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 7.5,

    physicalLifesteal: 0,
    spellVamp: 0,

    tenacity: 0
  }
},

{
  name: "Book of Devouring Gods",
  chineseName: "",
  category: "Spell Attack",
  image: "images/book-of-devouring-gods.png",
  price: 2090,

  summary: "Sustain-focused spell item with high spell vamp, health, and bonus cooldown reduction.",

  description: "Provides spell attack, strong spell vamp, and bonus health to improve survivability during fights. Its passive converts spell vamp into additional cooldown reduction, making it especially effective for sustained damage mages and drain-style heroes.",

  passive: "Spell Conversion: Each 2% spell vamp grants an additional 1% cooldown reduction.",
  passive2: "",
  active: "",

  stats: [
    "+160 spell attack",
    "+24% spell vamp",
    "+750 maximum health"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.spellVamp,
    TAGS.cooldown,
    TAGS.maxHp
  ],

  sortStats: {
    cost: 2090,

    physicalAttack: 0,
    spellAttack: 160,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 750,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 0,

    physicalLifesteal: 0,
    spellVamp: 24,

    tenacity: 0
  }
},

{
  name: "Pain Mask",
  chineseName: "",
  category: "Spell Attack",
  image: "images/pain-mask.png",
  price: 2080,

  summary: "Tanky burn mage item that deals percentage current health magic damage over time.",

  description: "Provides spell damage, cooldown reduction, and a large amount of health. Its passive causes abilities to inflict repeated percentage current health magic damage after hitting enemies, making it especially effective against high-health targets and frontline heroes.",

  passive: "Torture: After the skill hits, the target will receive 4 instances of magic damage equal to 3% of their current health over 3 seconds (damage capped at 200 against monsters). Cooldown: 3 seconds.",
  passive2: "",
  active: "",

  stats: [
    "+100 spell damage",
    "+7.5% cooldown reduction",
    "+900 maximum health"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.cooldown,
    TAGS.maxHp,
    TAGS.healthBasedDamage
  ],

  sortStats: {
    cost: 2080,

    physicalAttack: 0,
    spellAttack: 100,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 900,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 7.5,

    physicalLifesteal: 0,
    spellVamp: 0,

    tenacity: 0
  }
},

{
  name: "Shining Moon",
  chineseName: "",
  category: "Spell Attack",
  image: "images/shining-moon.png",
  price: 2080,

  summary: "Spell sustain item with stasis active for survival and outplay potential.",

  description: "Provides spell damage, cooldown reduction, and spell vamp for sustained combat power. Its active grants brief complete immunity, allowing users to avoid burst damage, dodge abilities, or stall during fights at the cost of being unable to act.",

  passive: "",
  passive2: "",
  active: "Moon Guardian: Immune to all effects, unable to move, attack, or use skills for 1.5 seconds. Cooldown: 75 seconds.",

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
    cost: 2080,

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

{
  name: "Witchcraft Staff",
  chineseName: "",
  category: "Spell Attack",
  image: "images/witchcraft-staff.png",
  price: 2080,

  summary: "Mobile burst mage item that empowers attacks after casting abilities.",

  description: "Provides high spell attack, health, mana, and bonus movement speed for strong mobility and survivability. Its passive enhances the next basic attack after using a skill, dealing bonus magic damage and enabling powerful burst combos for spellcasters that weave attacks between abilities.",

  passive: "Powerful Strike: After using the skill, the next basic attack within 5 seconds will deal an additional (180~360 + 40% magic attack) magic damage. Cooldown: 2.5 seconds.",
  passive2: "",
  active: "",

  stats: [
    "+180 spell attack",
    "+600 Max Health",
    "+300 Max Mana",
    "+7.5% movement speed"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.maxHp,
    TAGS.maxMana,
    TAGS.movementSpeed,
    TAGS.onHit,
    TAGS.magicDamage
  ],

  sortStats: {
    cost: 2080,

    physicalAttack: 0,
    spellAttack: 180,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 600,
    maxMana: 300,

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
  name: "Golden Holy Sword",
  chineseName: "",
  category: "Spell Attack",
  image: "images/golden-holy-sword.png",
  price: 2070,

  summary: "Attack-speed mage item that empowers repeated basic attacks with bonus magic damage.",

  description: "Provides spell power, attack speed, and movement speed to support fast, sustained magic damage. Its passives increase basic attack damage and reward continuous attacks with stacking attack speed and additional magic damage, making it ideal for attack-based mages and hybrid spellcasters.",

  passive: "Precision: Basic attack damage increased by 60 points",
  passive2: "Holy Sword: Basic attacks that hit enemies grant 10% attack speed for 5 seconds, stacking up to 2 times; when fully stacked, basic attacks will deal additional magic damage equal to (30% magic attack). Cooldown: 0.2 seconds.",
  active: "",

  stats: [
    "+150 spell power",
    "+20% attack speed",
    "+7.5% movement speed"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.attackSpeed,
    TAGS.movementSpeed,
    TAGS.onHit,
    TAGS.magicDamage
  ],

  sortStats: {
    cost: 2070,

    physicalAttack: 0,
    spellAttack: 150,
    attackSpeed: 20,
    critChance: 0,
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
  name: "Echoing Staff",
  chineseName: "",
  category: "Spell Attack",
  image: "images/echoing-staff.png",
  price: 2050,

  summary: "High burst mage item that adds explosive bonus damage to abilities.",

  description: "Provides high spell attack and bonus movement speed for strong burst potential and mobility. Its passive causes abilities to trigger an area explosion on hit, dealing additional magic damage and improving poke, wave clear, and teamfight damage.",

  passive: "Echo: The skill will trigger a small-area explosion upon hitting an enemy, dealing (140~280 + 28% magic attack) magic damage. Cooldown: 5 seconds.",
  passive2: "",
  active: "",

  stats: [
    "+210 spell attack",
    "+7.5% movement speed",
    ""
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.movementSpeed,
    TAGS.onHit,
    TAGS.magicDamage
  ],

  sortStats: {
    cost: 2050,

    physicalAttack: 0,
    spellAttack: 210,
    attackSpeed: 0,
    critChance: 0,
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
  name: "Nightmare Fang",
  chineseName: "",
  category: "Spell Attack",
  image: "images/nightmare-fang.png",
  price: 2050,

  summary: "Utility mage item with anti-heal, mobility, and cooldown reduction.",

  description: "Provides high spell damage, movement speed, and cooldown reduction for strong overall combat utility. Its passive applies anti-heal effects through attacks and skills, making it highly effective against heroes with strong healing, regeneration, or lifesteal.",

  passive: "Grievous Injury: Basic attacks/skills reduce an enemy's health regeneration and lifesteal by 35% for 2.5 seconds.",
  passive2: "",
  active: "",

  stats: [
    "+220 spell damage",
    "7.5% movement speed",
    "+7.5% cooldown reduction"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.movementSpeed,
    TAGS.cooldown,
    TAGS.antiHeal
  ],

  sortStats: {
    cost: 2050,

    physicalAttack: 0,
    spellAttack: 220,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 0,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 7.5,
    cdr: 7.5,

    physicalLifesteal: 0,
    spellVamp: 0,

    tenacity: 0
  }
},

{
  name: "Sunset Stream",
  chineseName: "",
  category: "Spell Attack",
  image: "images/sunset-stream.png",
  price: 2040,

  summary: "Sustained combat mage item that builds stacking magic penetration during fights.",

  description: "Provides spell attack, bonus health, and cooldown reduction for balanced offense and survivability. Its passive grants stacking magic penetration whenever you damage enemy heroes, allowing spellcasters to gradually break through magic defense during extended fights.",

  passive: "Cleanse: Dealing damage to heroes grants 20-40 magic penetration for 4 seconds, and this effect can stack up to 6 times.",
  passive2: "",
  active: "",

  stats: [
    "+160 Spell Attack",
    "+500 Max Health",
    "+10% Cooldown Reduction"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.maxHp,
    TAGS.cooldown,
    TAGS.magicPenetration
  ],

  sortStats: {
    cost: 2040,

    physicalAttack: 0,
    spellAttack: 160,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 500,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 10,

    physicalLifesteal: 0,
    spellVamp: 0,

    tenacity: 0
  }
},

{
  name: "Fiery Domination",
  chineseName: "",
  category: "Spell Attack",
  image: "images/fiery-domination.png",
  price: 2040,

  summary: "Defensive sustain mage item with emergency cleanse, shielding, and mobility.",

  description: "Provides spell attack, spell vamp, and movement speed for strong sustain and repositioning. Its passive activates when critically low on health, cleansing crowd control, granting a large shield, and boosting movement speed to help survive burst damage or escape dangerous fights.",

  passive: "Mana Shield: When health drops below 30%, immediately break free from crowd control and gain a shield equal to (500~1000 + 100% magic attack + 7.5% maximum health). The shield increases movement speed by 30% for 4 seconds. Cooldown: 90 seconds.",
  passive2: "",
  active: "",

  stats: [
    "+150 spell attack",
    "+12% Spell Vamp",
    "+7.5 movement speed"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.spellVamp,
    TAGS.movementSpeed, 
    TAGS.shield,
    TAGS.cleanse
  ],

  sortStats: {
    cost: 2040,

    physicalAttack: 0,
    spellAttack: 150,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 0,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 7.5,
    cdr: 0,

    physicalLifesteal: 0,
    spellVamp: 12,

    tenacity: 0
  }
},

  {
  name: "Void Staff",
  chineseName: "",
  category: "Spell Attack",
  image: "images/void-staff.png",
  price: 2040,

  summary: "High-penetration mage item for breaking through magic defense.",

  description: "Provides high magic attack, bonus health, and cooldown reduction for balanced offensive power and survivability. Its passive greatly increases spell penetration, making it especially effective against enemies stacking magic defense.",

  passive: "Ruin: Increases spell penetration by 45%",
  passive2: "",
  active: "",

  stats: [
    "+210 Magic Attack",
    "+500 Maximum Health",
    "+5% Cooldown Reduction"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.maxHp,
    TAGS.cooldown,
    TAGS.spellPenetration
  ],

  sortStats: {
    cost: 2040,

    physicalAttack: 0,
    spellAttack: 210,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 500,
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

{
  name: "Holy Grail",
  chineseName: "",
  category: "Spell Attack",
  image: "images/holy-grail.png",
  price: 2020,

  summary: "Sustain-focused mage item with continuous health and mana regeneration.",

  description: "Provides spell power, cooldown reduction, and bonus health for balanced survivability and utility. Its passive grants constant mana and health regeneration, with additional healing when mana is full, making it especially effective for prolonged fights and poke-heavy playstyles.",

  passive: "Mana Source: Restores 1.5% mana and 0.5% maximum health per second. If mana is full, restores an additional 0.5% maximum health per second.",
  passive2: "",
  active: "",

  stats: [
    "+150 spell power",
    "+15% cooldown reduction",
    "+500 maximum health"
  ],

  chips: [
    TAGS.spellDamage,
    TAGS.cooldown,
    TAGS.maxHp,
    TAGS.manaRegen,
    TAGS.healthRegen
  ],

  sortStats: {
    cost: 2020,

    physicalAttack: 0,
    spellAttack: 150,
    attackSpeed: 0,
    critChance: 0,
    critDamage: 0,

    maxHp: 500,
    maxMana: 0,

    physicalDefense: 0,
    spellDefense: 0,

    movementSpeed: 0,
    cdr: 15,

    physicalLifesteal: 0,
    spellVamp: 0,

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
