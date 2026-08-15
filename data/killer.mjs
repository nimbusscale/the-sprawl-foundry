export const killerMoves = [
  // === Starting Move (you get this) ===
  {
    name: "Custom weapon",
    moveType: "move",
    playbook: "Killer",
    rollType: "",
    description: "Choose a base and two options. You may customise an implanted weapon; use the stats of the weapon as the base and add two appropriate options.<br><br>Base (choose 1, any firearm can be +linked):<br>• handgun(s) (2 damage close/near loud quick)<br>• shotgun (3 damage close/near loud messy)<br>• rifle (3 damage near/far/ex loud)<br>• blade (2 damage hand)<br>• chain or wire (1 damage close area)<br><br>Options (choose 2):<br>• ornate (+valuable)<br>• antique (+valuable +reload)<br>• automatic (+autofire)<br>• silenced (-loud)<br>• hi-powered or weighted (+1 damage)<br>• big or dangerous (+1 damage)<br>• versatile (may inflict s-harm)<br>• ridiculous payload (+breach, +dangerous)<br>• subtle (+discreet, +reload)<br>• +numerous (small weapons only)<br><br>When you've finished creating your weapon, name it.",
    results: { success: "", partial: "", failure: "" }
  },
  // === Optional Moves (choose one more) ===
  {
    name: "Emotionless",
    moveType: "move",
    playbook: "Killer",
    rollType: "",
    description: "When you <strong>play hardball</strong>, roll Synth.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Hard",
    moveType: "move",
    playbook: "Killer",
    rollType: "",
    description: "When you make the harm move, subtract your Meat from your roll.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Loaded for bear",
    moveType: "move",
    playbook: "Killer",
    rollType: "",
    description: "Choose another custom weapon.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "More machine than meat",
    moveType: "move",
    playbook: "Killer",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did your first piece of cyberware.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Corporate secrets",
    moveType: "move",
    playbook: "Killer",
    rollType: "",
    description: "You used to be a Company Man. When you <strong>research</strong> a corporation, you may always ask a follow up question. On a 10+, take an additional [intel].",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Military background",
    moveType: "move",
    playbook: "Killer",
    rollType: "",
    description: "You still have contacts in the military. When you <strong>hit the street</strong> for military gear and roll a 7-9, choose one fewer result.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Mil specs",
    moveType: "move",
    playbook: "Killer",
    rollType: "",
    description: "When you <strong>mix it up</strong>, you count as a small gang.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Serious badass",
    moveType: "move",
    playbook: "Killer",
    rollType: "style",
    description: "When you enter a charged situation, roll Style.<br><br>Spend 1 hold to make eye contact with an NPC present, who freezes or flinches and can't act until you break it off.",
    results: {
      success: "Gain 2 hold.",
      partial: "Gain 1 hold.",
      failure: "Your enemies identify you immediately as their foremost threat."
    }
  },
  {
    name: "Trained eye",
    moveType: "move",
    playbook: "Killer",
    rollType: "cool",
    description: "When you evaluate a person, vehicle, drone or gang, roll Cool.",
    results: {
      success: "Ask the target \"How are you vulnerable to me?\" Take +1 forward when acting on the answer. Additionally, gain +1 ongoing when acting against that target.",
      partial: "Ask the target \"How are you vulnerable to me?\" Take +1 forward when acting on the answer.",
      failure: ""
    }
  }
];
