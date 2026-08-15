export const basicMoves = [
  {
    name: "Act Under Pressure",
    moveType: "basic",
    rollType: "cool",
    description: "When you race against the clock, act while in danger or act to avoid danger, roll Cool.",
    results: {
      success: "You do it, no problem.",
      partial: "You stumble, hesitate, or flinch: the MC will offer you a worse outcome, hard bargain, or ugly choice.",
      failure: ""
    }
  },
  {
    name: "Apply First Aid",
    moveType: "basic",
    rollType: "cool",
    description: "When you treat someone's wounds using appropriate medical equipment, roll Cool.",
    results: {
      success: "If their Harm Clock is at 2100 or less, reduce their harm by two segments. If their Harm Clock is at more than 2100, reduce their harm by one segment.",
      partial: "Reduce their harm by one segment. If their Harm Clock is still at more than 2100, they take -1 ongoing until they receive proper medical attention.",
      failure: ""
    }
  },
  {
    name: "Assess",
    moveType: "basic",
    rollType: "edge",
    description: "When you closely study a person, place or situation, or when you quickly size up an opponent or a charged situation, roll Edge.<br><br>In the ensuing action, you may spend 1 hold at any time to ask the MC a question from the list below if your examination could have revealed the answer. The MC may ask you questions to clarify your intent. Take +1 forward when acting on the answers.<br>• What potential complication do I need to be wary of?<br>• What do I notice despite an effort to conceal it?<br>• How is ______ vulnerable to me?<br>• How can I avoid trouble or hide here?<br>• What is my best way in/way out/way past?<br>• Where can I gain the most advantage?<br>• Who or what is my biggest threat in this situation?<br>• Who or what is in control here?",
    results: {
      success: "Gain 3 hold.",
      partial: "Gain 1 hold.",
      failure: ""
    }
  },
  {
    name: "Play Hardball",
    moveType: "basic",
    rollType: "edge",
    description: "When you get in someone's face threatening violence and you intend to carry through, roll Edge.",
    results: {
      success: "NPCs do what you want. PCs choose: do what you want, or suffer the established consequences.",
      partial: "For NPCs, the MC chooses 1:<br>• they attempt to remove you as a threat, but not before suffering the established consequences<br>• they do it, but they want payback. Add them as a Threat<br>• they do it, but tell someone all about it. Advance the appropriate Mission Clock<br><br>PCs choose: do what you want, or suffer the established consequences. They gain +1 forward to act against you.",
      failure: ""
    }
  },
  {
    name: "Acquire Agricultural Property",
    moveType: "basic",
    rollType: "meat",
    description: "When you hit 0000 on your Harm Clock, roll Meat.",
    results: {
      success: "You survive until the medics arrive.",
      partial: "You survive at a cost. Pick one:<br>• +owned<br>• substandard treatment (-1 to a stat)<br>• cyberware damage (give one piece of cyberware a negative tag)",
      failure: "You bleed out on the street."
    }
  },
  {
    name: "Mix It Up",
    moveType: "basic",
    rollType: "meat",
    description: "When you use violence against an armed force to seize control of an objective, state that objective and roll Meat.",
    results: {
      success: "You achieve your objective.",
      partial: "You achieve your objective, but choose 2:<br>• you make too much noise. Advance the relevant Mission Clock<br>• you take harm as established by the fiction<br>• an ally takes harm as established by the fiction<br>• something of value breaks",
      failure: ""
    }
  },
  {
    name: "Research",
    moveType: "basic",
    rollType: "mind",
    description: "When you investigate a person, place, object, or service using a library, dossier or database (or combination of them), ask a question from the list below and roll Mind.<br>• Where would I find ______?<br>• How secure is ______?<br>• Who or what is related to ______?<br>• Who owned or employed ______?<br>• Who or what is ______ most valuable to?<br>• What is the relationship between ______ and ______?",
    results: {
      success: "Take [intel]; the MC will answer your question and answer a follow-up question from the list as well.",
      partial: "Take [intel]; the MC will answer your question.",
      failure: "The MC will answer your question... and make a move."
    }
  },
  {
    name: "Fast Talk",
    moveType: "basic",
    rollType: "style",
    description: "When you try to convince someone to do what you want with promises, lies or bluster, roll Style.",
    results: {
      success: "NPCs do what you want. PCs choose whether to do it or not. If they do, they mark experience. If they don't, they must act under pressure to go against your stated wishes.",
      partial: "NPCs do it, but someone will find out: the MC will advance the appropriate Countdown Clock. For PCs choose one:<br>• If they do what you want, they mark experience<br>• If they don't do it, they must act under pressure to go against your stated wishes<br><br>Then it's up to them.",
      failure: ""
    }
  },
  {
    name: "Hit the Street",
    moveType: "basic",
    rollType: "style",
    description: "When you go to a Contact for help, roll Style.",
    results: {
      success: "You get what you want. On a 10+, you get a little something extra (choose either [intel] or [gear]).",
      partial: "You get what you want, but choose 2 from the list below:<br>• Your request is going to cost you extra<br>• Your request is going to take some time to put together<br>• Your request is going to attract unwanted attention, complications or consequences<br>• Your contact needs you to help them out with something. If you turn them down take -1 ongoing to this move till you make it right",
      failure: ""
    }
  },
  {
    name: "Declare a Contact",
    moveType: "basic",
    rollType: "",
    description: "When you need to call in a favour from a new contact, name and describe the Contact, then say why the Contact owes you a favour or why you owe them a favour. The MC will ask you some questions about the Contact and your relationship. Add the Contact to your list.<br><br>You can only declare a contact once per mission, although certain Playbook Moves may allow you to gain more contacts in similar ways.",
    results: {
      success: "",
      partial: "",
      failure: ""
    }
  },
  {
    name: "Produce Equipment",
    moveType: "basic",
    rollType: "",
    description: "When you produce the equipment you need at the right time, describe how and why your professionalism and forethought told you to bring this equipment on the mission and spend [gear]. You must spend [gear] to produce equipment.",
    results: {
      success: "",
      partial: "",
      failure: ""
    }
  },
  {
    name: "Reveal Knowledge",
    moveType: "basic",
    rollType: "",
    description: "When you reveal your knowledge of the opposition's preparations, dispositions or environment, describe how you discovered that information and spend [intel]. You must spend [intel] to reveal knowledge. Take +1 forward to exploit the opportunity offered by that information.",
    results: {
      success: "",
      partial: "",
      failure: ""
    }
  },
  {
    name: "Help or Interfere",
    moveType: "basic",
    rollType: "links",
    description: "When you help or hinder another character, roll Links with them.",
    results: {
      success: "They take +1 or -2 forward, your choice.",
      partial: "They take +1 or -2 forward, your choice, but you are implicated in the results of the other character's move and may expose yourself to danger, retribution, or cost.",
      failure: ""
    }
  },
  {
    name: "Go Under the Knife",
    moveType: "basic",
    rollType: "cred",
    description: "When you have new cyberware installed by a street doctor, roll Cred spent (max +2).<br><br>When you have new cyberware installed in accordance with a corporate contract, ignore all of that bad stuff. You're +owned. Your cyberware works exactly the way they intend it.",
    results: {
      success: "The operation was a complete success.",
      partial: "The cyberware doesn't work as well as advertised, choose one:<br>• +damaging: sometimes it hurts like hell and eventually it will do permanent nerve damage<br>• +hardware decay: it works now, but it's just a matter of time...<br>• +substandard: it works, but not as well as it should<br>• +unreliable: sometimes it doesn't work",
      failure: "There have been... complications."
    }
  },
  {
    name: "Get the Job",
    moveType: "basic",
    rollType: "edge",
    description: "When you negotiate the terms of a job, roll Edge.",
    results: {
      success: "Choose 3 from the list below:<br>• the employer provides useful information [intel]<br>• the employer provides useful assets [gear]<br>• the job pays well<br>• the meeting doesn't attract attention<br>• the employer is identifiable",
      partial: "Choose 1 from the list below:<br>• the employer provides useful information [intel]<br>• the employer provides useful assets [gear]<br>• the job pays well<br>• the meeting doesn't attract attention<br>• the employer is identifiable",
      failure: ""
    }
  },
  {
    name: "Getting Paid",
    moveType: "basic",
    rollType: "",
    description: "When you go to a meet to get paid by your employer, roll and add the number of unfilled segments on the Legwork Clock.",
    results: {
      success: "Choose 3 from the list below:<br>• it's not a set-up or an ambush<br>• you are paid in full<br>• the meeting doesn't attract the attention of outside parties<br>• the employer is identifiable<br>• you learned something from the mission; everyone marks experience",
      partial: "Choose 1 from the list below:<br>• it's not a set-up or an ambush<br>• you are paid in full<br>• the meeting doesn't attract the attention of outside parties<br>• the employer is identifiable<br>• you learned something from the mission; everyone marks experience",
      failure: ""
    }
  },
  {
    name: "Harm",
    moveType: "basic",
    rollType: "",
    description: "When you suffer harm (even 0-harm or s-harm) lower the harm suffered by the level of your armour (if any), fill in a number of segments on your Harm Clock equal to the remaining harm, and roll harm suffered.<br><br>Note that the dice results for harm are reversed; low is successful and high is complicated.",
    results: {
      success: "Choose 1:<br>• You're out of action: unconscious, trapped, incoherent or panicked<br>• Take the full harm of the attack, before it was reduced by armour; if you already took the full harm of the attack, take +1-harm<br>• Lose the use of a piece of cyberware until you can get it repaired<br>• Lose a body part (arm, leg, eye)",
      partial: "The MC will choose 1:<br>• You lose your footing<br>• You lose your grip on whatever you're holding<br>• You lose track of someone or something you're attending to<br>• Someone gets the drop on you",
      failure: ""
    }
  }
];
