export const gear = [
  // === Firearms ===
  // Any firearm can be +linked at no additional cost.
  {
    name: "Holdout Pistol",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "hand", "close", "discreet", "quick", "reload", "loud"]),
    description: "2-harm hand/close discreet quick reload loud"
  },
  {
    name: "Flechette Pistol",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "close", "near", "quick", "flechette"]),
    description: "3-harm close/near quick flechette"
  },
  {
    name: "Revolver",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "close", "near", "reload", "loud", "quick"]),
    description: "2-harm close/near reload loud quick"
  },
  {
    name: "Semi-auto Pistol",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "close", "near", "loud", "quick"]),
    description: "2-harm close/near loud quick"
  },
  {
    name: "Heavy Revolver",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "close", "near", "reload", "loud"]),
    description: "3-harm close/near reload loud"
  },
  {
    name: "Heavy Pistol",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "close", "near", "loud"]),
    description: "3-harm close/near loud"
  },
  {
    name: "Shotgun",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "close", "near", "loud", "messy", "reload"]),
    description: "3-harm close/near loud messy reload"
  },
  {
    name: "Automatic Shotgun",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "close", "near", "loud", "messy", "autofire"]),
    description: "3-harm close/near loud messy autofire"
  },
  {
    name: "Assault Rifle",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "near", "far", "loud", "autofire"]),
    description: "3-harm near/far loud autofire"
  },
  {
    name: "Machine Pistol",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "close", "near", "loud", "autofire"]),
    description: "2-harm close/near loud autofire"
  },
  {
    name: "SMG",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "close", "near", "loud", "autofire"]),
    description: "2-harm close/near loud autofire"
  },
  {
    name: "LMG",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "near", "far", "loud", "messy", "autofire", "clumsy"]),
    description: "3-harm near/far loud messy autofire clumsy"
  },
  {
    name: "Hunting Rifle",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "far", "ex", "loud"]),
    description: "2-harm far/ex loud"
  },
  {
    name: "Crossbow or Hunting Bow",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "close", "near", "far", "reload"]),
    description: "2-harm close/near/far reload"
  },
  {
    name: "Sniper Rifle",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "far", "ex", "loud", "clumsy"]),
    description: "3-harm far/ex loud clumsy"
  },
  {
    name: "Anti-materiel Rifle",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "far", "ex", "loud", "messy", "breach", "clumsy"]),
    description: "3-harm far/ex loud messy breach clumsy"
  },
  {
    name: "Grenade Launcher",
    equipmentType: "weapon",
    tags: JSON.stringify(["4-harm", "near", "far", "area", "loud", "messy", "clumsy"]),
    description: "4-harm near/far area loud messy clumsy"
  },
  {
    name: "Grenade Tube",
    equipmentType: "weapon",
    tags: JSON.stringify(["4-harm", "near", "area", "reload", "loud", "messy"]),
    description: "4-harm near area reload loud messy"
  },
  {
    name: "Assault Cannon",
    equipmentType: "weapon",
    tags: JSON.stringify(["4-harm", "near", "far", "area", "messy", "breach", "clumsy"]),
    description: "4-harm near/far area messy breach clumsy"
  },
  {
    name: "Missile Launcher",
    equipmentType: "weapon",
    tags: JSON.stringify(["5-harm", "far", "area", "messy", "breach", "clumsy"]),
    description: "5-harm far area messy breach clumsy"
  },
  // === Grenades ===
  // At ranges intimate/hand/close, grenades are +dangerous.
  {
    name: "Fragmentation Grenade",
    equipmentType: "weapon",
    tags: JSON.stringify(["4-harm", "near", "area", "reload", "loud", "messy"]),
    description: "4-harm near area reload loud messy. At ranges intimate/hand/close, grenades are +dangerous."
  },
  {
    name: "Flashbang",
    equipmentType: "weapon",
    tags: JSON.stringify(["s-harm", "near", "area", "loud", "reload"]),
    description: "s-harm near area loud reload. At ranges intimate/hand/close, grenades are +dangerous."
  },
  {
    name: "Gas Grenade",
    equipmentType: "weapon",
    tags: JSON.stringify(["s-harm", "near", "area", "reload", "gas"]),
    description: "s-harm near area reload gas. At ranges intimate/hand/close, grenades are +dangerous."
  },
  // === Hand weapons ===
  {
    name: "Knife",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "hand"]),
    description: "2-harm hand"
  },
  {
    name: "Club",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "hand"]),
    description: "2-harm hand"
  },
  {
    name: "Sword",
    equipmentType: "weapon",
    tags: JSON.stringify(["3-harm", "hand", "messy"]),
    description: "3-harm hand messy"
  },
  {
    name: "Hand Taser",
    equipmentType: "weapon",
    tags: JSON.stringify(["s-harm", "hand", "reload"]),
    description: "s-harm hand reload"
  },
  {
    name: "Monofilament Whip",
    equipmentType: "weapon",
    tags: JSON.stringify(["4-harm", "hand", "messy", "area", "dangerous"]),
    description: "4-harm hand messy area dangerous"
  },
  {
    name: "Shuriken or Throwing Knives",
    equipmentType: "weapon",
    tags: JSON.stringify(["2-harm", "close", "numerous"]),
    description: "2-harm close numerous"
  },
  // === Armour ===
  {
    name: "Armoured Clothing or Synth Leathers",
    equipmentType: "armor",
    tags: JSON.stringify(["0-armour", "discreet"]),
    description: "0-armour, +discreet. Subtract 1 when rolling the harm move."
  },
  {
    name: "Armoured Vest, Jacket or Coat",
    equipmentType: "armor",
    tags: JSON.stringify(["1-armour"]),
    description: "1-armour"
  },
  {
    name: "Body Armour",
    equipmentType: "armor",
    tags: JSON.stringify(["2-armour"]),
    description: "2-armour"
  },
  {
    name: "Military Hardsuit",
    equipmentType: "armor",
    tags: JSON.stringify(["3-armour", "clumsy"]),
    description: "3-armour, clumsy"
  },
  // === Ammunition ===
  {
    name: "AP Rounds",
    equipmentType: "gear",
    tags: JSON.stringify(["AP"]),
    description: "Penetrate armour more easily. A weapon loaded with AP rounds adds the +AP tag."
  },
  {
    name: "Airburst Rounds",
    equipmentType: "gear",
    tags: JSON.stringify(["area", "messy"]),
    description: "Explode in the air near a target by proximity or targeting suite. A weapon loaded with airburst rounds adds the +area and +messy tags."
  },
  {
    name: "Explosive Rounds",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Explode on impact. A weapon loaded with explosive rounds adds +1 harm and cannot be silenced."
  },
  {
    name: "Flechette Rounds",
    equipmentType: "gear",
    tags: JSON.stringify(["flechette"]),
    description: "Tightly packed synthetic plastic shards that tear through flesh but are easily stopped by armour. A weapon loaded with flechette rounds adds +1 harm, but the target's armour value is doubled. Weapons with the +flechette tag already include the +1 harm."
  },
  {
    name: "Gel Rounds",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Less lethal. A weapon loaded with gel rounds inflicts s-harm instead of its listed harm value; targets harmed by gel rounds add the original harm value (minus armour) to their roll when making the harm move."
  },
  // === Other equipment / gear ===
  {
    name: "Climbing/Rappelling Rig",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Rope, harness and hardware for climbing and rappelling."
  },
  {
    name: "Communications Equipment",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Optional tags: +encrypted, +jamming, +satellite relay, +recording."
  },
  {
    name: "Disguise Kit",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "+1 ongoing to avoid being detected while successfully maintaining a fake persona."
  },
  {
    name: "EMT Kit",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Allows you to apply first aid to characters at any level of harm."
  },
  {
    name: "Explosives",
    equipmentType: "gear",
    tags: JSON.stringify(["AP", "dangerous", "messy", "loud", "breach"]),
    description: "Spray explosives for breaching doors, small portable plastic explosives for destroying vehicles and weakening structures, or industrial-grade demolitions equipment. All are +AP, +dangerous, +messy, +loud, +breach."
  },
  {
    name: "Gyroscopic Exoskeleton",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Provides a mobile brace point for weapons which require precise stabilisation or recoil absorption."
  },
  {
    name: "Microtronics Workstation",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "You may perform field repairs on electronics and cyberware."
  },
  {
    name: "Musical Instruments",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Optional tags: +recording, +satellite relay, +simsense."
  },
  {
    name: "Recording Equipment",
    equipmentType: "gear",
    tags: JSON.stringify(["audio", "video"]),
    description: "+audio, +video. Optional tags: +simsense, +discreet, +encrypted."
  },
  {
    name: "Scuba Equipment",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Breathing apparatus and gear for operating underwater."
  },
  {
    name: "Silencer or Sound Suppressor",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "A weapon equipped with a silencer or sound suppressor removes the loud tag. A +messy or +breach weapon cannot be silenced."
  },
  {
    name: "Stealth Suit",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "+1 ongoing to avoid being detected while hidden and alone."
  },
  {
    name: "Surgery or Portable Operating Room",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Allows treatment of life-threatening injuries and implantation of cyberware."
  },
  {
    name: "Specialist Toolkit",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Specialist toolkits, survival kits, and the like. Can be used 3 times. Each use grants +1 forward to a move relevant to the specialisation of the toolkit."
  },
  {
    name: "Trauma Derms",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Allows you to apply first aid to characters at 2-harm or less."
  },
  {
    name: "Vision Enhancing Devices",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Glasses, goggles, scopes. Basic models have one or two tags, more advanced models can have more. Available tags: +thermographic, +light amplification, +magnification, +recording, +flare compensation. The feed can be sent to a remote or local display through communications gear."
  },
  {
    name: "Wingsuit or Microlite",
    equipmentType: "gear",
    tags: JSON.stringify([]),
    description: "Wingsuit, microlite, or other lightweight single-occupant aircraft."
  },
  // === Vehicles (sample profiles) ===
  // Frame + Design + Profile. Profiles range: Power/Looks/Weakness with 0-2 Armour.
  {
    name: "Zhuangzi She (Sports Car)",
    equipmentType: "gear",
    tags: JSON.stringify(["vehicle", "flashy"]),
    description: "A flashy sports car."
  },
  {
    name: "Omni Familia (Sedan)",
    equipmentType: "gear",
    tags: JSON.stringify(["vehicle", "nondescript"]),
    description: "A nondescript sedan."
  },
  {
    name: "Nkembe-Harley Thunderbolt (Motorcycle)",
    equipmentType: "gear",
    tags: JSON.stringify(["vehicle", "aggressive"]),
    description: "An aggressive motorcycle."
  },
  {
    name: "Zhuangzi Jian (Motorcycle)",
    equipmentType: "gear",
    tags: JSON.stringify(["vehicle", "sleek"]),
    description: "A sleek motorcycle."
  },
  {
    name: "Omni Mula (Van)",
    equipmentType: "gear",
    tags: JSON.stringify(["vehicle", "cramped", "rugged"]),
    description: "A cramped, rugged van."
  },
  {
    name: "Empire-Lear Arma Heliou (Helicopter)",
    equipmentType: "gear",
    tags: JSON.stringify(["vehicle", "luxurious"]),
    description: "A luxurious helicopter."
  },
  {
    name: "Titan Colossus III (Panzer)",
    equipmentType: "gear",
    tags: JSON.stringify(["vehicle", "loud", "armoured"]),
    description: "A loud, armoured vectored-thrust panzer."
  },
  {
    name: "Zhuangzi Shayu (Speedboat)",
    equipmentType: "gear",
    tags: JSON.stringify(["vehicle", "quiet", "responsive"]),
    description: "A quiet, responsive speedboat."
  },
  {
    name: "Titan Standard Vanguard PAV (Coupé)",
    equipmentType: "gear",
    tags: JSON.stringify(["vehicle", "rugged", "armoured"]),
    description: "A rugged, armoured Personal Armoured Vehicle (PAV) coupé."
  },
  // === Drones (sample profiles) ===
  {
    name: "Kikuyu Animatronics Spy Fly",
    equipmentType: "gear",
    tags: JSON.stringify(["drone", "tiny", "rotor", "fragile", "stealthy", "magnification"]),
    description: "Infiltration drone. Tiny rotor fragile stealthy magnification."
  },
  {
    name: "MDI Night Creeper",
    equipmentType: "gear",
    tags: JSON.stringify(["drone", "small", "octoped", "stealthy", "jamming", "thermographic", "fragile"]),
    description: "Infiltration and interdiction drone. Small octoped stealthy jamming thermographic fragile."
  },
  {
    name: "Shanghai Mobile Eagle Eye",
    equipmentType: "gear",
    tags: JSON.stringify(["drone", "small", "fixed-wing", "autonomous", "magnification", "thermographic", "slow"]),
    description: "Infiltration drone. Small fixed-wing autonomous magnification thermographic slow."
  },
  {
    name: "Shanghai Mobile Packmate",
    equipmentType: "gear",
    tags: JSON.stringify(["drone", "medium", "wheeled", "rugged", "off-road", "armed", "thermographic"]),
    description: "Assault drone. Medium wheeled rugged off-road armed:assault rifle (3-harm near loud autofire) thermographic."
  },
  {
    name: "Kikuyu Animatronics Razor Fin",
    equipmentType: "gear",
    tags: JSON.stringify(["drone", "medium", "submarine", "fast", "stealthy", "armed", "sonar", "fragile"]),
    description: "Assault drone. Medium submarine fast stealthy armed:teeth (3-harm hand messy) sonar fragile."
  },
  {
    name: "MDI Kodiak",
    equipmentType: "gear",
    tags: JSON.stringify(["drone", "large", "tracked", "rugged", "off-road", "uncomplaining", "armed", "magnification", "obvious", "loud"]),
    description: "Assault drone. Large tracked rugged off-road uncomplaining armed:assault cannon (4-harm near/far area messy breach) magnification obvious loud."
  },
  {
    name: "Titan Blast Turtle",
    equipmentType: "gear",
    tags: JSON.stringify(["drone", "large", "tracked", "slow", "obvious", "responsive", "robot-arm", "jamming"]),
    description: "Bomb disposal drone. Large tracked slow obvious responsive robot-arm jamming."
  },
  // === Cyberdecks (representative profiles) ===
  // Ratings: Hardening, Firewall, Processor, Stealth. Can run programs equal to Processor.
  {
    name: "Basic Cyberdeck",
    equipmentType: "gear",
    tags: JSON.stringify(["cyberdeck"]),
    description: "Divides 5 points among Hardening, Firewall, Processor, and Stealth, with no rating lower than 0 or higher than 2. Runs a number of programs equal to its Processor rating."
  },
  {
    name: "Advanced Cyberdeck",
    equipmentType: "gear",
    tags: JSON.stringify(["cyberdeck"]),
    description: "Divides 6 or more points among Hardening, Firewall, Processor, and Stealth, with no rating higher than 3. Runs a number of programs equal to its Processor rating."
  }
];
