export const hunterMoves = [
  // === Starting Moves (you get these two) ===
  {
    name: "Ear to the ground",
    moveType: "move",
    playbook: "Hunter",
    rollType: "",
    description: "You have a knack for loosening lips and picking up information. When you circulate among a neighbourhood or a group of people, you may <strong>research</strong> to gather information.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "It all fits together!",
    moveType: "move",
    playbook: "Hunter",
    rollType: "edge",
    description: "You're a master of making connections between seemingly unrelated events. At the start of a mission, roll Edge.<br><br>As you put everything together during the mission, spend 1 hold at any time to ask a question from the <strong>research</strong> list.",
    results: { success: "Gain 3 hold.", partial: "Gain 1 hold.", failure: "" }
  },
  // === Optional Moves (choose two more) ===
  {
    name: "Big game hunter",
    moveType: "move",
    playbook: "Hunter",
    rollType: "edge",
    description: "When you spring a trap for a target you have investigated, roll Edge.",
    results: {
      success: "You have them trapped, the only way out is through you. Additionally, they are at your mercy; if the target attempts to escape, roll Edge instead of Meat to <strong>mix it up</strong>.",
      partial: "You have them trapped, the only way out is through you.",
      failure: ""
    }
  },
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Hunter",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did your first piece of cyberware.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Deadbeat",
    moveType: "move",
    playbook: "Hunter",
    rollType: "",
    description: "Everyone knows you only help your friends out when it's convenient for you. When you <strong>hit the street</strong>, you never take the -1 penalty when you avoid your contacts' problems. You may still select the option that your contact has a problem, and if you do that choice may have fictional effects.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Enhance",
    moveType: "move",
    playbook: "Hunter",
    rollType: "",
    description: "When you examine your gathered evidence, gain [intel] and roll <strong>research</strong> with Edge instead of Mind.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Eye for detail",
    moveType: "move",
    playbook: "Hunter",
    rollType: "",
    description: "You are a master at tailing people and staking out locations. When you perform surveillance on a person or a place, gain [intel] and roll <strong>assess</strong>.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Human terrain",
    moveType: "move",
    playbook: "Hunter",
    rollType: "",
    description: "When you investigate a group and spend [intel], name that group as your target. You gain +1 ongoing while acting against or in pursuit of that group. You may only target one group at a time.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "On the trail",
    moveType: "move",
    playbook: "Hunter",
    rollType: "",
    description: "When you want to find someone or something, name your target. When you gain [intel], you may note that it concerns your target. When you spend three such [intel], the MC will describe where your target is; you say how the clues led you to that knowledge and how you have your target or its defenses at a disadvantage.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "See the angles",
    moveType: "move",
    playbook: "Hunter",
    rollType: "",
    description: "At the start of the Action Phase, gain [intel] and [gear].",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Sniper",
    moveType: "move",
    playbook: "Hunter",
    rollType: "cool",
    description: "When you set up a covered and concealed place to hide, roll Cool.<br><br>Options:<br>• Your site is well hidden<br>• Your site has excellent cover<br>• Your site has an excellent field of view<br>• You have a similarly covered and concealed backup location<br>• Your spot is well secured<br><br>Then describe your hide site.",
    results: { success: "Choose 3.", partial: "Choose 2.", failure: "" }
  }
];
