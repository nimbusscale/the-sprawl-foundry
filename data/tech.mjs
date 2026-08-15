export const techMoves = [
  // === Starting Moves ===
  {
    name: "Expert",
    moveType: "move",
    playbook: "Tech",
    rollType: "",
    description: "<strong>Starting Move.</strong> Choose one area of expertise:<br>• Mechanic: you are an <strong>expert</strong> in the construction, maintenance and operation of vehicles & drones; you have two drones created according to the Driver move <strong>drone jockey</strong><br>• Splicer: you are an <strong>expert</strong> in cybernetics and biomodification; you may begin with one extra piece of cyberware; describe how you implanted this in yourself, but you need not describe how you paid for it<br>• Breadboarder: you are an <strong>expert</strong> in computers and electronics; you have a cyberdeck with 5 points of ratings (no rating may be higher than 2) and a number of programs equal to its Processor rating+1<br>• Gunsmith: you are an <strong>expert</strong> in armaments; you begin with the Killer move <strong>custom weapon</strong><br>• Medic: you are an <strong>expert</strong> in medicine and pharmaceuticals; when you <strong>apply first aid</strong>, you heal one additional harm segment, even on a miss<br>• Pyrotechnician: you are an <strong>expert</strong> in chemistry and explosives; ignore the +dangerous tag for explosives<br><br>You start with workshops appropriate to your areas of expertise (e.g. surgery, electronics workshop, garage).",
    results: {}
  },
  {
    name: "Storage",
    moveType: "move",
    playbook: "Tech",
    rollType: "mind",
    description: "<strong>Starting Move.</strong> After receiving a job you may look through your accumulated parts and supplies for equipment that might help with the current mission. Roll Mind.",
    results: {
      success: "gain 3 [gear] relevant to your chosen area(s) of expertise.",
      partial: "gain 1 [gear] relevant to your chosen area(s) of expertise.",
      failure: ""
    }
  },
  {
    name: "Customiser",
    moveType: "move",
    playbook: "Tech",
    rollType: "",
    description: "<strong>Starting Move.</strong> You can identify and examine new or complicated technology related to your area of expertise, and modify technology with which you are familiar. When you try to modify a piece of tech, tell the MC what you want to do and discuss what tags or game effect that modification will have. The MC will tell you the requirements in terms of:<br>• time<br>• tools",
    results: {}
  },
  // === Optional Moves ===
  {
    name: "Analytic",
    moveType: "move",
    playbook: "Tech",
    rollType: "mind",
    description: "When you <strong>assess</strong>, roll Mind instead of Edge.",
    results: {}
  },
  {
    name: "Blend in",
    moveType: "move",
    playbook: "Tech",
    rollType: "cool",
    description: "When you're about to be caught somewhere you shouldn't be, but look and act like you belong there, roll Cool.",
    results: {
      success: "no one thinks twice about your presence until you do something to attract attention",
      partial: "you'll be fine as long as you leave right now, but if you do anything else, your presence will arouse suspicion",
      failure: ""
    }
  },
  {
    name: "Bypass",
    moveType: "move",
    playbook: "Tech",
    rollType: "cool",
    description: "When you attempt to subvert security measures (bypassing a locked door, disabling an alarm, camera or motion detector, etc), roll Cool.",
    results: {
      success: "you successfully bypass the system without leaving a trace, and you gain some valuable insight into the facility's security, gain [intel]",
      partial: "you successfully bypass the system without leaving a trace",
      failure: ""
    }
  },
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Tech",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did your first piece of cyberware.",
    results: {}
  },
  {
    name: "Diverse interests",
    moveType: "move",
    playbook: "Tech",
    rollType: "",
    description: "Choose one more area of expertise.",
    results: {}
  },
  {
    name: "Jack of all trades",
    moveType: "move",
    playbook: "Tech",
    rollType: "",
    description: "Choose one more area of expertise.",
    results: {}
  },
  {
    name: "Obsessive",
    moveType: "move",
    playbook: "Tech",
    rollType: "",
    description: "When you shut yourself away with a problem or piece of cutting edge tech, make a <strong>research</strong> move. You may use one question to ask any question about the object of your contemplation and study.",
    results: {}
  },
  {
    name: "On it",
    moveType: "move",
    playbook: "Tech",
    rollType: "cool",
    description: "When your areas of expertise are central to helping or interfering with a teammate, roll Cool instead of Links.",
    results: {}
  },
  {
    name: "Renaissance man",
    moveType: "move",
    playbook: "Tech",
    rollType: "",
    description: "Choose one more area of expertise.",
    results: {}
  }
];
