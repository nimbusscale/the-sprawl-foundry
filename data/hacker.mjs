// The Sprawl — Hacker (Simplified Matrix Playbook)
// A streamlined redesign: the Matrix is not a separate minigame. When jacked
// in, use the normal Basic Moves with the stat substitutions in "Jack In".
export const hackerMoves = [
  // === Starting Moves (you get both) ===
  {
    name: "Jack In",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When you're connected to the Matrix, you can penetrate and manipulate secure digital systems. Use the normal Basic Moves with these substitutions:<br><br>• <strong>Assess +Synth</strong> — read a network, spot ICE, analyze a counter-hacker, identify vulnerabilities, or understand a rapidly changing digital situation.<br>• <strong>Research +Mind</strong> — search databases, logs, communications, personnel records, archives, or paydata.<br>• <strong>Act Under Pressure +Synth</strong> — spoof credentials, bypass protection, manipulate a digitally controlled system, alter data, or do something technically difficult while opposed.<br>• <strong>Act Under Pressure +Cool</strong> — get yourself safely disconnected when ICE or another immediate threat is trying to keep you online.<br>• <strong>Mix It Up +Edge</strong> — attack, evade, trap, sandbox, or disable active ICE or a counter-hacker in order to seize a digital objective.<br>• <strong>Help or Interfere +Links</strong> — use your access to assist or hinder another character as normal.<br><br>Fast Talk and Play Hardball work normally when interacting with people, AIs, avatars, or other entities capable of being influenced.<br><br>If an action is routine, uncontested, and you're already in a position to do it, don't roll just because it's hacking.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Console Cowboy",
    moveType: "move",
    playbook: "Hacker",
    rollType: "mind",
    description: "When you establish unauthorized access to a secure system, roll Mind.<br><br>Hold lasts until you jack out or lose access to the system. Spend 1 hold to:<br><br>• <strong>Control</strong> — bypass one digital barrier, or perform one normal operation on a subsystem you can reach, without rolling (loop cameras, unlock doors, alter a record, disable an alarm, kill lights, redirect an elevator, stop machinery, delete a file).<br>• <strong>Ghost</strong> — prevent one alert or one increase in Trace caused by your intrusion.<br>• <strong>Counter</strong> — cancel one ICE or counter-hacker consequence directed at you, your deck, or your software.<br>• <strong>Open a Door</strong> — create a digital advantage for yourself or a teammate; give +1 forward when someone acts directly on the opening you created.<br>• <strong>Scrub</strong> — erase the evidence of one specific digital action, or reduce Trace by 1.",
    results: {
      success: "You're in clean. Gain 3 hold.",
      partial: "You're in. Gain 1 hold and choose one:<br>• Trace +1<br>• ICE activates and starts hunting you<br>• Your intrusion triggers an alert<br>• Your access is restricted; protected parts of the system still need to be breached",
      failure: "You're in, but gain no hold. The MC chooses two of the 7-9 options and makes a move."
    }
  },
  {
    name: "Trace & ICE",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "<strong>Trace.</strong> Each system starts at Trace 0.<br>• <strong>Trace 1:</strong> the system knows someone is inside.<br>• <strong>Trace 2:</strong> security is narrowing down who and where.<br>• <strong>Trace 3:</strong> you've been identified and physically located — expect Corporate Clocks, physical security, severed connections, and other appropriate MC moves.<br><br>Trace normally resets after the intrusion ends. Alerts, evidence, Corporate Clock advances, and angry corporations do not.<br><br><strong>ICE</strong> is opposition, not a separate combat system.<br>• <strong>Blue ICE</strong> traces you, raises alarms, locks you out, and summons help.<br>• <strong>Red ICE</strong> can also disable software or damage your equipment.<br>• <strong>Black ICE</strong> can also inflict physical harm or trap you online.<br><br>When ICE actively stands between you and your objective, Mix It Up, Act Under Pressure, spend Console Cowboy hold, use an appropriate move, or get out.",
    results: { success: "", partial: "", failure: "" }
  },

  // === Choose One Additional Move ===
  {
    name: "Black ICE Vet",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When Black ICE gets through your defenses, choose one thing it cannot do as part of that consequence:<br>• harm you<br>• trap you online<br>• identify or locate you",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Chromed",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "Choose another piece of cyberware. Describe why you got it and who paid for it as normal.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "ICE Breaker",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "Once per intrusion, when ICE successfully acts against you, cancel that consequence. If you immediately act against that ICE, take +1 forward.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Neural Scars",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "You have 1-armour against harm caused by Black ICE.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Programming on the Fly",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "Once per intrusion, invoke any program you don't normally have as though it were installed on your deck.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Rep",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When you use a recognizable Matrix identity or avatar:<br>• roll Synth instead of Style to Fast Talk<br>• roll Synth instead of Edge to Play Hardball<br><br>When your reputation causes trouble for the mission, mark experience.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Search Optimisation",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When you Research in the Matrix, you may always ask a follow-up Research question. On a 10+, also take an additional [intel].",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Tech Support",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When you Help or Interfere through a system you've penetrated, roll Mind instead of Links.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Zeroed",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "Your digital identity is exceptionally well concealed. The first time Trace would increase during each intrusion, it doesn't.",
    results: { success: "", partial: "", failure: "" }
  },

  // === Cyberdeck (choose and name one deck) ===
  {
    name: "Cyberdeck: Performance Deck",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "Built for raw speed. Once per intrusion, before making a Matrix roll, overclock the deck and take +1 forward to that roll.<br><br>Choose 2 programs.<br><br>(Cyberdecks no longer have ratings or program slots. Your deck provides one specialization and carries your chosen programs.)",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Cyberdeck: Ghost Deck",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "Built around exploits, backdoors, and maintaining privileged access. Gain +1 Console Cowboy hold whenever you roll, even on a miss. On a miss, resolve the MC's consequences first, then gain the 1 hold so you can't immediately erase the failure that created it.<br><br>Choose 2 programs.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Cyberdeck: Toolbox Deck",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "A heavily customized collection of specialized hardware and software. Choose 4 programs instead of 2.",
    results: { success: "", partial: "", failure: "" }
  },

  // === Programs (always available; invoke once per intrusion) ===
  {
    name: "Program: Alert",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When closely examining a network, ICE construct, or counter-hacker, invoke Alert to take +1 forward to Assess.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Program: Defend",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When fighting, evading, or containing ICE or a counter-hacker, invoke Defend to take +1 forward to Mix It Up.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Program: Eject",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When attempting an emergency disconnect, invoke Eject to take +1 forward to Act Under Pressure.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Program: Identity Protection",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When Trace would increase, invoke Identity Protection to reduce that increase by 1.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Program: Lockdown",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When bypassing or disabling digital security, invoke Lockdown to take +1 forward to Act Under Pressure.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Program: Manipulate",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When seizing or reprogramming a digitally controlled system, invoke Manipulate to take +1 forward to Act Under Pressure.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Program: Sift",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When searching a secure system for information or valuable paydata, invoke Sift to take +1 forward to Research.",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Program: Efficiency Routines",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When you spend Console Cowboy hold on Control, invoke Efficiency Routines to affect two closely related functions instead of one (loop two adjacent camera feeds, unlock a pair of security doors, alter both an employee record and its access permissions).",
    results: { success: "", partial: "", failure: "" }
  },
  {
    name: "Program: Safety Cutout",
    moveType: "move",
    playbook: "Hacker",
    rollType: "",
    description: "When Black ICE would inflict physical harm on you, invoke Safety Cutout to take no harm. Your connection is immediately severed.",
    results: { success: "", partial: "", failure: "" }
  }
];
