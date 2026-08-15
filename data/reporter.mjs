export const reporterMoves = [
  // === Starting Moves ===
  {
    name: "Live and on the air",
    moveType: "move",
    playbook: "Reporter",
    rollType: "edge",
    description: "<strong>Starting Move.</strong> When you go live from the scene and broadcast a stream to avoid harm and expose your target, roll Edge.",
    results: {
      success: "You get the shot you want and are \"escorted\" to a position of safety.",
      partial: "You get the shot you want and are \"escorted\" to a position of safety, but choose one:<br>• Your story irritates your target (the MC will advance a relevant Threat Clock)<br>• Someone on your team gets hurt off camera<br>• Your story angers your employer<br>• Your rushed narrative is misinterpreted by the public with unintended consequences",
      failure: ""
    }
  },
  {
    name: "Nose for a story",
    moveType: "move",
    playbook: "Reporter",
    rollType: "edge",
    description: "<strong>Starting Move.</strong> At the start of a mission, roll Edge.<br><br>During the mission, spend 1 hold to invoke one of the following effects:<br>• Ask one question from the <strong>research</strong> list<br>• Take +1 forward when <strong>monstering</strong><br>• Find a piece of evidence that links this mission to a current story; start a Story Clock and a linked Noise Clock or roll to <strong>gather evidence</strong>",
    results: {
      success: "gain 3 hold",
      partial: "gain 1 hold",
      failure: ""
    }
  },
  {
    name: "Gather evidence",
    moveType: "move",
    playbook: "Reporter",
    rollType: "mind",
    description: "<strong>Starting Move.</strong> When you gather evidence to break a story, roll Mind.<br><br>If the Story Clock reaches 0000 before the Noise Clock, the Reporter has broken the story before the implicated parties could cover up the evidence, or stop the investigation. The exact implications of this for the game will vary based on the story, but it should have a major impact on the implicated parties and will affect at least one Corporate Clock.<br><br>If the Noise Clock reaches 0000 before the Story Clock, the implicated parties have tied up all the loose ends and the story is dead. Now that damage control is complete, they can deal with the Reporter permanently. Advance any relevant Corporate or Threat Clocks.",
    results: {
      success: "you get the evidence you need, advance that Story Clock",
      partial: "you get the evidence, but tip your hand to someone implicated in your story; tell the MC which clock to advance: a relevant Corporate Clock, the linked Noise Clock or the relevant Mission Clock (Legwork or Action, depending on which phase of the current mission you're in)",
      failure: "the MC will advance the Noise Clock and make a move"
    }
  },
  // === Optional Moves ===
  {
    name: "24/7 live feeds",
    moveType: "move",
    playbook: "Reporter",
    rollType: "",
    description: "When you scan the feeds to <strong>research</strong> a topic, you may always ask a follow up question. On a 10+, take an additional [intel].",
    results: {}
  },
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Reporter",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did your first piece of cyberware.",
    results: {}
  },
  {
    name: "Filthy assistants",
    moveType: "move",
    playbook: "Reporter",
    rollType: "",
    description: "When you spend [intel] and give mission advice based on your <strong>research</strong>, your team takes +1 forward to follow that advice and you mark experience.",
    results: {}
  },
  {
    name: "Monstering",
    moveType: "move",
    playbook: "Reporter",
    rollType: "edge",
    description: "When you corner someone and hound them with questions to get to the bottom of a story, roll Edge.",
    results: {
      success: "they tell you the truth, regardless of the consequences",
      partial: "they give you enough to get you off their back, then when they're safe, they choose one:<br>• they respond with fear<br>• they respond with anger<br>• they respond with clinical calm",
      failure: ""
    }
  },
  {
    name: "Press pass",
    moveType: "move",
    playbook: "Reporter",
    rollType: "",
    description: "If you reveal your public persona to <strong>fast talk</strong> your way in, do not roll the dice, you count as rolling a 10+. Take [intel] and advance the Legwork Clock.",
    results: {}
  },
  {
    name: "Reliable sources",
    moveType: "move",
    playbook: "Reporter",
    rollType: "style",
    description: "When you call your regular sources to <strong>research</strong> a topic, roll Style instead of Mind.",
    results: {}
  },
  {
    name: "War correspondent",
    moveType: "move",
    playbook: "Reporter",
    rollType: "edge",
    description: "When <strong>acting under pressure</strong> while in physical danger, roll Edge instead of Cool.",
    results: {}
  }
];
