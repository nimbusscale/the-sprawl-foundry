export const hackerMoves = [
  // === Starting Moves ===
  {
    name: "Jack in",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When you're jacked into the matrix, you have access to the matrix moves in Chapter 8: The Matrix.",
    results: {}
  },
  {
    name: "Console cowboy",
    moveType: "move",
    playbook: "Hacker",
    rollType: "mind",
    description: "When you connect to a secure system, roll Mind.<br><br>While in that system, you may spend 1 hold for any of the following effects:<br>• Prevent a construct from triggering an alert<br>• Avoid an ICE routine executed against you, your deck, or your programs<br>• Increase your hold over compromised security or manipulated systems by 1",
    results: {
      success: "Gain 3 hold.",
      partial: "Gain 1 hold.",
      failure: ""
    }
  },
  // === Choose one more ===
  {
    name: "Black ICE vet",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When Black ICE executes a routine against you, the MC only chooses two options.",
    results: {}
  },
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did your first piece of cyberware.",
    results: {}
  },
  {
    name: "ICE breaker",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "You know how to disable ICE quickly and quietly. Once per Matrix run you may cancel a routine executed against you, your deck, or your programs.",
    results: {}
  },
  {
    name: "Neural scars",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "You have 1-armour against Black ICE.",
    results: {}
  },
  {
    name: "Programming on the fly",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "You can adapt your programs to the specific weaknesses of matrix constructs as you encounter them. When you successfully compromise security or manipulate systems, hold +1.",
    results: {}
  },
  {
    name: "Rep",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When you appear in the Matrix with a recognisable avatar, roll Synth instead of Style for fast talk and instead of Edge for play hardball. When your reputation gets you into trouble, mark experience.",
    results: {}
  },
  {
    name: "Search optimisation",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When you research a topic in the Matrix, you may always ask a follow up question. On a 10+, take an additional [intel].",
    results: {}
  },
  {
    name: "Tech support",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When you help a team member while jacked into the matrix, roll Mind instead of Links.",
    results: {}
  },
  {
    name: "Zeroed",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "Your identity is a mystery which you closely guard. Your deck has +2 Stealth.",
    results: {}
  }
];
