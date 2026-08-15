export const matrixMoves = [
  {
    name: "Login",
    moveType: "matrix",
    rollType: "synth",
    description: "When you attempt to gain access to a system, roll Synth.",
    results: {
      success: "You're in clean.",
      partial: "You're in, but choose one:<br>• Passive trace (+1 trace)<br>• ICE is activated<br>• An alert is triggered (advance the active Mission Clock)<br>• Your access is restricted - take -1 ongoing to matrix moves in this system while your access is restricted",
      failure: "You're in, but the MC chooses two."
    }
  },
  {
    name: "Compromise Security",
    moveType: "matrix",
    rollType: "mind",
    description: "When you attempt to compromise a sub-system's security, roll Mind.<br><br>You may spend 1 hold to activate a security measure on that sub-system.",
    results: {
      success: "Gain 3 hold over the sub-system you have compromised.",
      partial: "Gain 1 hold.",
      failure: "You trigger an alert, which may have additional consequences."
    }
  },
  {
    name: "Manipulate Systems",
    moveType: "matrix",
    rollType: "synth",
    description: "When you attempt to manipulate a digitally-controlled aspect of a facility, roll Synth.<br><br>You may spend 1 hold to activate routines on that sub-system.",
    results: {
      success: "Gain 3 hold over the sub-system you are manipulating.",
      partial: "Gain 1 hold.",
      failure: ""
    }
  },
  {
    name: "Melt ICE",
    moveType: "matrix",
    rollType: "edge",
    description: "When you attempt to evade, destroy or disable an activated ICE construct, roll Edge.",
    results: {
      success: "You evade, destroy, or temporarily disable the system, your choice.",
      partial: "You evade, destroy, or temporarily disable the system, your choice, but the system successfully executes a routine before you can disable it.",
      failure: ""
    }
  },
  {
    name: "Jack Out",
    moveType: "matrix",
    rollType: "cool",
    description: "When you, your programs, or your deck are about to be damaged by ICE, you can try to jack out. Roll Cool.",
    results: {
      success: "You disconnect yourself from the system before any serious harm occurs.",
      partial: "You jack out, but choose one:<br>• You lose some data<br>• You take some of the established consequences<br>• The owners of the target system trace you to your current location",
      failure: "You take the established consequences... and you're still connected."
    }
  }
];
