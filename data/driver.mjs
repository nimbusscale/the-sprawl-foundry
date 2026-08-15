export const driverMoves = [
  // === Starting Moves ===
  {
    name: "Wheels",
    moveType: "move",
    playbook: "Driver",
    rollType: "",
    description: "You start with a cyber-linked vehicle. If your vehicle has Power+2, it may start with one mounted weapon system. To build your vehicle:<br><br>Choose a Frame: motorcycle, car, hovercraft, boat, vectored-thrust panzer, fixed-wing aircraft, helicopter, amphibious<br><br>Choose a Design: racing, recreational, passenger transport, cargo, military, luxury, civilian, commercial, courier<br><br>Choose a Profile:<br>• Power+2, Looks+1, Weakness+1; 1-Armour<br>• Power+2, Looks+2, Weakness+1; 0-Armour<br>• Power+1, Looks+2, Weakness+1; 1-Armour<br>• Power+2, Looks+1, Weakness+2; 2-Armour<br><br>For each point of Power, choose a strength; for each point of Looks, choose a look; for each point of Weakness, choose a weakness. If your vehicle has Power+2, it may mount one weapon system; Military vehicles may mount an additional weapon system.<br><br>• Strengths: fast, quiet, rugged, aggressive, huge, off-road, responsive, uncomplaining, capacious, workhorse, easily repaired<br>• Looks: sleek, vintage, pristine, powerful, luxurious, flashy, muscular, quirky, pretty, garish, armoured, armed, nondescript<br>• Weaknesses: slow, fragile, sloppy, lazy, cramped, picky, guzzler, unreliable, loud<br>• Weapons: Machine guns (3-harm near/far area loud messy autofire), grenade launchers (4-harm near/far area loud messy), missile launcher (5-harm far area messy breach), autocannon (4-harm near/far area messy breach)<br><br>When you've finished creating your vehicle, name it.",
    results: {}
  },
  {
    name: "Second Skin",
    moveType: "move",
    playbook: "Driver",
    rollType: "",
    description: "When jacked in through your Neural Interface to a cyber-linked vehicle:<br>• when you act under pressure, roll Cool + your car's power<br>• if you mix it up, roll Synth (instead of Meat) + your car's power<br>• if you play hardball, roll Edge + your car's looks<br>• if you help or interfere with someone, roll Links + your car's power<br>• if someone interferes with you, add your car's weakness to their roll (in addition to their links)",
    results: {}
  },
  // === Choose one more ===
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Driver",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did for your first piece of cyberware.",
    results: {}
  },
  {
    name: "Daredevil",
    moveType: "move",
    playbook: "Driver",
    rollType: "",
    description: "When you drive straight into danger without hedging your bets, you get +1 armour. If you take one or more harm, mark experience.",
    results: {}
  },
  {
    name: "Drone jockey",
    moveType: "move",
    playbook: "Driver",
    rollType: "",
    description: "You start with two drones. For each:<br><br>Choose a motive style: rotor, fixed-wing, quadruped, octoped, tracked, wheeled, aquatic, amphibious, submarine<br><br>Choose a frame:<br>• Tiny (insect-sized): +small, +fragile, +stealthy, pick one sensor<br>• Small (rat- to cat-sized): choose one strength, one sensor, one weakness, and one other from any category<br>• Medium (dog-sized): choose one strength, one sensor, one weakness, and two others from any category<br>• Large (bear-sized): +obvious, choose two strengths, one sensor, one weakness and two others from any category<br><br>• Strengths: fast, rugged, off-road, responsive, uncomplaining, easily repaired, stealthy, tight encryption, autonomous, robot arm, armed, satellite relay<br>• Sensors: magnification, thermographic, jamming, image enhancement, analysis software, sonar, medical<br>• Weaknesses: slow, fragile, unreliable, loud, loose encryption, obvious<br><br>Armed: a weapon can be mounted on the drone. The size of the weapon is determined by the size of the frame.<br>• A small drone can mount a gun dealing 2- or s-harm with a range tag of close or less and without the autofire tag<br>• A medium drone can mount a gun dealing up to 3-harm with a range tag of near or less<br>• A large drone can mount a gun dealing up to 5-harm",
    results: {}
  },
  {
    name: "Eye in the sky",
    moveType: "move",
    playbook: "Driver",
    rollType: "",
    description: "When helping or interfering while piloting a drone, roll Edge instead of Links.",
    results: {}
  },
  {
    name: "Hot shit driver",
    moveType: "move",
    playbook: "Driver",
    rollType: "edge",
    description: "When you're driving a cyber-linked vehicle in a high-pressure situation, roll Edge.<br><br>You may spend 1 hold to do one of the following:<br>• Avoid one external danger (a rocket, a burst of gunfire, a collision, etc)<br>• Escape one pursuing vehicle<br>• Maintain control of the vehicle<br>• Impress, dismay or frighten someone",
    results: {
      success: "Gain 3 hold.",
      partial: "Gain 1 hold.",
      failure: ""
    }
  },
  {
    name: "Iceman",
    moveType: "move",
    playbook: "Driver",
    rollType: "",
    description: "When you try to fast talk someone, roll Cool.",
    results: {}
  },
  {
    name: "Right tool for the job",
    moveType: "move",
    playbook: "Driver",
    rollType: "",
    description: "You have two additional cyber-linked vehicles (build each using the same method as your custom vehicle).",
    results: {}
  },
  {
    name: "Sweet ride",
    moveType: "move",
    playbook: "Driver",
    rollType: "",
    description: "When you hit the street in your vehicle, roll Style + your vehicle's Looks.",
    results: {}
  }
];
