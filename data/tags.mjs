export const tags = [
  // === Range Tags ===
  // These indicate the optimum range for the weapon. In good conditions you may be
  // able to use the weapon at longer (or shorter) ranges, but take a -1 to do so.
  { name: "Intimate", description: "The optimum range for the weapon: close enough to kiss." },
  { name: "Hand", description: "The optimum range for the weapon: close enough to touch." },
  { name: "Close", description: "The optimum range for the weapon: within a few steps." },
  { name: "Near", description: "The optimum range for the weapon: within a couple of dozen metres." },
  { name: "Far", description: "The optimum range for the weapon: within a block." },
  { name: "Ex", description: "Extreme range: the optimum range for the weapon is several hundred metres away." },
  // === Other Tags ===
  { name: "AP", description: "The target of AP (armour-piercing) rounds subtracts 2 from their armour value." },
  { name: "area", description: "The weapon harms everyone in the area of effect." },
  { name: "autofire", description: "The user can opt to temporarily give the weapon +area and +reload. If the weapon is belt-fed, the user can opt to temporarily give the weapon +area only." },
  { name: "breach", description: "These weapons make big holes in hard targets like walls and tanks. They are +AP and +loud and cannot be silenced." },
  { name: "clumsy", description: "This weapon or armour is large and unwieldy. It can be difficult to move quickly, quietly, or in tight spaces while carrying this. Weapons with the +clumsy tag usually require a braced or prone firing position, or some sort of gyroscopic exoskeleton." },
  { name: "dangerous", description: "On a miss, the user suffers harm." },
  { name: "discreet", description: "The weapon is easy to hide and will often be overlooked." },
  { name: "flechette", description: "The target's armour value is doubled." },
  { name: "linked", description: "The weapon can interface with a neural interface (and a targeting suite)." },
  { name: "loud", description: "The sound is unmistakable, everyone nearby hears it, and, if the circumstances allow, they'll be able to identify where it came from as well." },
  { name: "messy", description: "Fire effect is inconsistent throughout the area of effect, but it makes a mess of people and things that it hits. If a messy weapon is +loud, it cannot be silenced." },
  { name: "numerous", description: "These are easy to hide (+discreet) and there are always more around when needed." },
  { name: "reload", description: "After firing, the user must spend a brief time reloading." },
  { name: "quick", description: "If speed matters, quick weapons go first." },
  // === Equipment / Vehicle / Drone Tags ===
  { name: "armour", description: "The armour value is subtracted from the harm the wearer suffers when making the harm move." },
  { name: "armed", description: "A weapon can be mounted on the vehicle or drone. The size of the weapon is determined by the size of the frame." }
];
