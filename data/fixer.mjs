export const fixerMoves = [
  // === Starting Moves ===
  {
    name: "Hustling",
    moveType: "move",
    playbook: "Fixer",
    rollType: "edge",
    description: "You have people who work for you in various ways. You start with 2-crew and two jobs from the list below. Between missions, choose a number of those jobs equal to or less than your current crew, describe what each job is, and roll Edge.<br><br>Choose two:<br>• Surveillance: You have a small network of informants who report on events; you then sell that information. Profit: gain [intel]. Disaster: someone acts on bad info<br>• Debt collection: You have a few burly looking fuckers who collect outstanding debts. Profit: gain [gear]. Disaster: someone's out of pocket<br>• Petty theft: You have a small crew who perform minor local robberies. Profit: gain [gear]. Disaster: they robbed the wrong guy<br>• Deliveries: People hire you to transport things and you have a driver who takes care of that. Profit: gain 1 Cred. Disaster: the delivery never arrives<br>• Brokering deals: You arrange for the right people to meet each other. Profit: gain 1 Cred. Disaster: the deal that you arranged goes wrong<br>• Technical work: You have a couple of techs whom you supply with work. Profit: gain [gear]. Disaster: something bad happens to someone else's property<br>• Pimping: You manage a small stable of physical or virtual sex workers. Profit: gain [intel]. Disaster: something goes wrong with a customer<br>• Addictive substances: You manage a small lab producing either drugs or simstim chips. Profit: gain [intel]. Disaster: something goes wrong for a user or for the lab itself",
    results: {
      success: "You profit from each of your jobs.",
      partial: "One of them is a Disaster and you Profit from the rest.",
      failure: "Everything's FUBAR. The MC will make a move based on the Disaster for each job."
    }
  },
  {
    name: "I know people",
    moveType: "move",
    playbook: "Fixer",
    rollType: "style",
    description: "Once per mission you may introduce a new Contact. Name the contact, say what they do, then roll Style.<br><br>After you've rolled, describe how you contact them; the MC will ask some questions.",
    results: {
      success: "You've worked with the contact before; they have talent. Write them down as a Contact.",
      partial: "You've never met them before, they're an unknown quantity.",
      failure: "You know them all right. Tell the MC why they dislike you."
    }
  },
  // === Choose one more ===
  {
    name: "Backup",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "You have a group of \"associates\" who provide security. This is a small gang of 5-10 hired thugs (2-harm +small +employees 1-armour). Pick 2:<br>• Your associates are well armed: add 1 harm<br>• Your associates are well armoured: add 1 armour and +obvious<br>• Your associates are ex-military: add +disciplined<br>• Your associates are more than muscle to you: replace +employees with +loyal<br>• Your associates have bikes or a couple of other vehicles: add +mobile<br>• You have a large group of associates (15-30): replace +small with +medium<br><br>Gain the following job, and +1 crew:<br>• Protection: Your associates have your back. Disaster: Your associates have pissed off the wrong people",
    results: {}
  },
  {
    name: "Balls in the air",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "+1 crew and choose a new job.",
    results: {}
  },
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did your first piece of cyberware.",
    results: {}
  },
  {
    name: "Deal of a lifetime",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "When you hit the street to sell something and roll a 7-9, choose one fewer result.",
    results: {}
  },
  {
    name: "Facetime",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "When you engage someone in face to face conversation without intervening technology, take +1 forward to fast talk them.",
    results: {}
  },
  {
    name: "Hard to find",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "You keep a low profile and actively avoid the people you owe. When you hit the street and roll a 7-9, choose one fewer result.",
    results: {}
  },
  {
    name: "Reputation",
    moveType: "move",
    playbook: "Fixer",
    rollType: "edge",
    description: "When you meet someone of consequence who might have heard of you, roll Edge. Either you or the MC can say whether someone is \"of consequence\", but once you've made the reputation move on someone, they're \"of consequence\" and will be a recurring part of the story.",
    results: {
      success: "Say what they know about you, and take +1 forward with them.",
      partial: "Say what they know about you.",
      failure: "The MC will decide what they've heard about you, if anything."
    }
  },
  {
    name: "Sales engineer",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "You've demonstrated the use of just about every piece of gear available on the street. When you produce equipment, take +1 forward with that piece of gear if you use it immediately.",
    results: {}
  },
  {
    name: "Smooth",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "When you help or interfere with someone, roll Style instead of Links.",
    results: {}
  },
  {
    name: "Street kingpin",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "+1 crew and choose a new job.",
    results: {}
  },
  {
    name: "Word on the street",
    moveType: "move",
    playbook: "Fixer",
    rollType: "",
    description: "When you research by listening to or recalling street level gossip, take an additional [intel], even on a miss.",
    results: {}
  }
];
