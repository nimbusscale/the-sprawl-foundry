export const soldierMoves = [
  // === Starting Moves ===
  {
    name: "Here's the plan",
    moveType: "move",
    playbook: "Soldier",
    rollType: "",
    description: "<strong>Starting Move.</strong> When you plan a Mission, everyone to whom you assign a task takes +1 ongoing while they act on that task according to the plan. Anyone who rolls a miss or goes off the plan loses their bonus for that mission. If you <strong>get paid</strong>, mark experience.",
    results: {}
  },
  {
    name: "I love it when a plan comes together",
    moveType: "move",
    playbook: "Soldier",
    rollType: "edge",
    description: "<strong>Starting Move.</strong> At the start of a mission, roll Edge.<br><br>During the mission, spend 1 hold for one of the following effects:<br>• You have that piece of gear that you need, right now<br>• You appear in a scene where you are needed, right now",
    results: {
      success: "gain 3 hold",
      partial: "gain 1 hold",
      failure: "gain 1 hold anyway, but your opponent has predicted your every move; the MC will advance the Legwork Clock"
    }
  },
  // === Optional Moves ===
  {
    name: "Aura of professionalism",
    moveType: "move",
    playbook: "Soldier",
    rollType: "",
    description: "When you <strong>get the job</strong> and try to <strong>get paid</strong>, choose one extra option, even on a miss.",
    results: {}
  },
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Soldier",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did your first piece of cyberware.",
    results: {}
  },
  {
    name: "Corporate knowledge",
    moveType: "move",
    playbook: "Soldier",
    rollType: "",
    description: "You used to be a Company Man. When you <strong>research</strong> a corporation, you may always ask a follow up question. On a 10+, take an additional [intel].",
    results: {}
  },
  {
    name: "Exit strategy",
    moveType: "move",
    playbook: "Soldier",
    rollType: "mind",
    description: "You always have an escape plan prepared. When shit hits the fan and you decide to bail out, roll Mind.",
    results: {
      success: "You escape the situation, and choose one thing to leave behind:<br>• Your team<br>• A mission objective<br>• Identifiable evidence<br>• Your staked Cred",
      partial: "You escape the situation, but choose two things to leave behind:<br>• Your team<br>• A mission objective<br>• Identifiable evidence<br>• Your staked Cred",
      failure: ""
    }
  },
  {
    name: "Hands-on management",
    moveType: "move",
    playbook: "Soldier",
    rollType: "mind",
    description: "When you <strong>mix it up</strong> while directing a mission from the front, roll Mind instead of Meat.",
    results: {}
  },
  {
    name: "Recruiter",
    moveType: "move",
    playbook: "Soldier",
    rollType: "edge",
    description: "When you attempt to recruit a specialist or a team of specialists to directly assist with your mission, roll Edge.",
    results: {
      success: "choose 2:<br>• Reliable professional(s)<br>• A small team (up to 5)<br>• As competent as required",
      partial: "choose 1:<br>• Reliable professional(s)<br>• A small team (up to 5)<br>• As competent as required",
      failure: ""
    }
  },
  {
    name: "Slippery",
    moveType: "move",
    playbook: "Soldier",
    rollType: "edge",
    description: "At the end of a mission during which you planted or hid evidence to shift blame away from you and your team, name who you threw under the corporate bus and roll Edge.",
    results: {
      success: "the MC will not increase Corporate Clocks in the retaliation phase, and the MC will reduce a Corporate Clock by one",
      partial: "the MC will not increase Corporate Clocks in the retaliation phase",
      failure: "create or increase the Threat Clock of whoever you threw under the bus"
    }
  },
  {
    name: "Steady presence",
    moveType: "move",
    playbook: "Soldier",
    rollType: "",
    description: "When you give someone a pep talk while in a stressful situation, you <strong>help</strong> them as if you had rolled 10+.",
    results: {}
  },
  {
    name: "Tactical operations",
    moveType: "move",
    playbook: "Soldier",
    rollType: "",
    description: "When you <strong>assess</strong> while leading a mission from the front, hold +1, even if you miss.",
    results: {}
  }
];
