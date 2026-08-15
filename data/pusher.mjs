export const pusherMoves = [
  // === Starting Moves ===
  {
    name: "Driven",
    moveType: "move",
    playbook: "Pusher",
    rollType: "edge",
    description: "<strong>Starting Move.</strong> When you begin a mission that furthers your vision, roll Edge.<br><br>You may spend 1 hold before rolling any other move to take +1 or -2 forward to the move.",
    results: {
      success: "gain 3 hold",
      partial: "gain 1 hold",
      failure: ""
    }
  },
  {
    name: "Vision thing",
    moveType: "move",
    playbook: "Pusher",
    rollType: "style",
    description: "<strong>Starting Move.</strong> When you have time and space for an emotional connection with someone and you passionately advocate for your vision, roll Style.<br><br>Spend 1 hold to have the targeted NPCs:<br>• give you something you want<br>• do something you ask<br>• fight to protect you or your cause<br>• disobey an order given by someone with authority or leverage over them<br><br>When you use this move on a PC, spend your hold to help or interfere as if you had rolled a 10+ (i.e. give them +1 or -2). If you miss against a PC, they gain 2 hold against you which they can use in the same way.",
    results: {
      success: "gain 2 hold",
      partial: "gain 1 hold",
      failure: ""
    }
  },
  // === Optional Moves ===
  {
    name: "Believers",
    moveType: "move",
    playbook: "Pusher",
    rollType: "",
    description: "You are part of a gang, tribe, band, corporation or similar group. You can go to them for aid, for resources or to hide out until the heat dies down. As a group, they're pretty trustworthy, but they will make demands on you in return (your gang counts as a Contact). By default this group has a core of about 20 people as well as various associates and groupies.<br><br>What kind of gang is it? Choose one: Street, Corporate, Entertainment/Media, Military, Political<br><br>How big is your gang? Choose a size and choose two tags:<br>• Small: 10 or fewer (loyal, mobile, well-armed, specialists)<br>• Medium: 20-40 (mobile, well-armed, specialists)<br>• Large: 50-100 (well-connected, resources, self-sufficient)<br>• Huge: 200+ (well-connected, resources, spread out, self-sufficient)<br><br>Define your gang's territory. Do they control a few blocks of the streets? Do they operate out of a compound or an arcology?<br><br>Choose one: poor, wanted, hard to find, unreliable, violent, hated<br><br>Who leads your gang? If your gang is small, you may be the leader. Otherwise, choose one: immoral, demanding, grasping, a real fucker, useless, absent<br><br>What are your gang's main gigs? Choose two: commerce, crime, parties, muscle, deliveries, entertainment, infiltration, scavenging, activism, politics",
    results: {}
  },
  {
    name: "Bring it on home",
    moveType: "move",
    playbook: "Pusher",
    rollType: "",
    description: "Whenever you ask someone a question with <strong>one million points of light</strong>, you may ask a follow up question from the list. When you succeed at <strong>vision thing</strong>, gain 1 extra hold.",
    results: {}
  },
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Pusher",
    rollType: "",
    description: "Choose another piece of cyberware at character creation or in downtime. Describe how you got it and paid for it the same as you did your first piece of cyberware.",
    results: {}
  },
  {
    name: "Famous",
    moveType: "move",
    playbook: "Pusher",
    rollType: "",
    description: "Your face is well known beyond the narrow scope of your people. Unless you disguise yourself, you will be recognised by many people you meet. If someone recognises you, you take +1 forward against them, but people will find out that you met them. Both you and the MC can declare that someone recognises you.",
    results: {}
  },
  {
    name: "Inner circle",
    moveType: "move",
    playbook: "Pusher",
    rollType: "",
    description: "You have a group of loyal confidantes within your larger circle of believers. This is a small gang of 5-10 believers (2-harm small loyal 1-armour). Pick 2:<br>• Your confidantes are well armed: add +1 harm<br>• Your confidantes are well armoured: +1 armour and +obvious<br>• Your confidantes are ex-military: add +disciplined<br>• Your confidantes have bikes or a couple of other vehicles: add +mobile",
    results: {}
  },
  {
    name: "One million points of light",
    moveType: "move",
    playbook: "Pusher",
    rollType: "",
    description: "When you successfully advocate for your vision with <strong>vision thing</strong>, ask one of the following questions. You may spend 1 hold to ask one of the following questions:<br>• What do you wish I'd do?<br>• How are you vulnerable?<br>• Are you telling the truth?<br>• What do you intend to do?<br>• How are you connected to the current events?<br>• What do you most desire?",
    results: {}
  },
  {
    name: "Opportunistic",
    moveType: "move",
    playbook: "Pusher",
    rollType: "edge",
    description: "When you <strong>help</strong> or <strong>interfere</strong> with someone, roll Edge.",
    results: {}
  },
  {
    name: "People person",
    moveType: "move",
    playbook: "Pusher",
    rollType: "",
    description: "When you <strong>hit the street</strong> among people who share your vision and roll a 7-9, choose one fewer result.",
    results: {}
  },
  {
    name: "Rabble rouser",
    moveType: "move",
    playbook: "Pusher",
    rollType: "",
    description: "You may use <strong>vision thing</strong> to sway a potentially sympathetic crowd.",
    results: {}
  },
  {
    name: "Silver tongue",
    moveType: "move",
    playbook: "Pusher",
    rollType: "",
    description: "When you <strong>fast talk</strong> someone and roll 7+, you get a little something extra. Take [intel].",
    results: {}
  }
];
