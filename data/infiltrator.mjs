export const infiltratorMoves = [
  // === Starting Move (you get this move) ===
  {
    name: "Covert entry",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "cool",
    description: "When you attempt to infiltrate a secure area alone, roll Cool.<br><br>As the MC describes the infiltration and the security measures you must overcome, you may spend 1 hold to describe how you overcome the obstacle and:<br>• Bypass a security system or guard.<br>• Disable a security system you have bypassed.<br>• Disable a guard.<br>• Escape notice.",
    results: { success: "Gain 3 hold.", partial: "Gain 1 hold.", failure: "" }
  },
  // === Choose one of these ===
  {
    name: "Cat burglar",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "",
    description: "You specialise in infiltrating by unconventional access points and manoeuvring through locations by unconventional routes. During your infiltration, you will have opportunity to steal incidental portable items that might be useful later. After you have spent all your <strong>covert entry</strong> hold infiltrating a secure area through stealth and dexterity, gain [gear].",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Face",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "",
    description: "You specialise in infiltrating by appearing to belong in places you do not, hiding in plain sight. During your infiltration, you will have opportunity to see or overhear information which might be relevant later. After you have spent all your <strong>covert entry</strong> hold infiltrating a secure area through charm and social graces, gain [intel].",
    results: { success: "", partial: "", failure: "" }
  },
  // === Choose one more ===
  {
    name: "Assassin",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "",
    description: "When you attack unexpectedly, ask one question from the <strong>assess</strong> list for free.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Case the joint",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "edge",
    description: "When you take time to examine a location for security weaknesses you can exploit, roll Edge.",
    results: {
      success: "Gain three [intel].",
      partial: "Gain [intel]. You may spend this [intel] in the normal way, or you can spend one point of this [intel] to ask questions from the <strong>assess</strong> or <strong>research</strong> lists.",
      failure: ""
    }
  },
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did your first piece of cyberware.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Jack in",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "",
    description: "When you're jacked into the matrix, you have access to the matrix moves in Chapter 8: The Matrix.<br><br>Note: You need a neural interface and a cyberdeck to make the most of this move.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Master of disguise",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "",
    description: "You can sell a persona so well that you set security forces at ease. While you are in disguise and your cover has not been blown, when you roll a 12+ to <strong>fast talk</strong> you may lower the Action Clock by one segment.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Mother duck",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "",
    description: "When you infiltrate a location you can get your team in as well. When you spend hold to bypass a security system or guard or escape notice, your team may accompany you.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Plan B",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "cool",
    description: "When shit hits the fan and you have to get out, name your escape route and roll Cool.",
    results: {
      success: "Sweet, you're gone.",
      partial: "You can go or stay, but if you go it costs you: leave something behind, or take something with you; in either case, the MC will tell you what.",
      failure: "You're caught in a vulnerable position, half in and half out. The MC will make a move."
    }
  },
  {
    name: "Psychological warfare",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "edge",
    description: "When you attempt to influence the morale of your enemies by leaving evidence of violence while remaining undetected, roll Edge.",
    results: {
      success: "Your enemies are impressed and overly cautious, scared and demoralised, or angry and careless — you choose which.",
      partial: "Your enemies are impressed and overly cautious, scared and demoralised, or angry and careless (MC's choice).",
      failure: ""
    }
  },
  {
    name: "Stealth operative",
    moveType: "move",
    playbook: "Infiltrator",
    rollType: "",
    description: "You have an intuitive sense of how to blend in with the rhythms of a secure area and can take actions that make its security forces feel at ease. When you <strong>assess</strong> while undetected and roll a 12+, you may spend one hold to lower the Action Clock by one segment.",
    results: { success: "", partial: "", failure: "" }
  }
];
