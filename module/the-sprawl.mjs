import { configSheet } from "./helper/config-sheet.mjs";

Hooks.once('init', () => {
  // Define custom PbtA tags for The Sprawl. These populate the tag
  // autocomplete for weapons, armour, gear, and cyberware.
  game.pbta.tagConfigOverride = {
    actor: {
      all: '[]',
      character: '[{"value":"owned"},{"value":"hunted"}]',
      npc: '[{"value":"Group"},{"value":"Horde"},{"value":"loyal"},{"value":"wanted"},{"value":"hard to find"},{"value":"unreliable"},{"value":"violent"},{"value":"hated"}]'
    },
    item: {
      all: '[]',
      weapon: '['
        + '{"value":"intimate", "description":"Optimum range: close enough to kiss"},'
        + '{"value":"hand", "description":"Optimum range: close enough to touch"},'
        + '{"value":"close", "description":"Optimum range: within a few steps"},'
        + '{"value":"near", "description":"Optimum range: within a couple dozen metres"},'
        + '{"value":"far", "description":"Optimum range: within a block"},'
        + '{"value":"ex", "description":"Optimum range: several hundred metres away"},'
        + '{"value":"AP", "description":"Target subtracts 2 from their armour value"},'
        + '{"value":"area", "description":"Harms everyone in the area of effect"},'
        + '{"value":"autofire", "description":"Can temporarily gain +area and +reload"},'
        + '{"value":"breach", "description":"Makes big holes in hard targets; +AP and +loud, cannot be silenced"},'
        + '{"value":"clumsy", "description":"Large and unwieldy; hard to move quickly or quietly with"},'
        + '{"value":"dangerous", "description":"On a miss, the user suffers harm"},'
        + '{"value":"discreet", "description":"Easy to hide and often overlooked"},'
        + '{"value":"flechette", "description":"The target\'s armour value is doubled"},'
        + '{"value":"implant", "description":"Concealed within the body via cyberware"},'
        + '{"value":"linked", "description":"Can interface with a neural interface / targeting suite"},'
        + '{"value":"loud", "description":"Unmistakable sound; everyone nearby hears it"},'
        + '{"value":"messy", "description":"Makes a mess of people and things; if +loud, cannot be silenced"},'
        + '{"value":"numerous", "description":"Easy to hide (+discreet) and always more around"},'
        + '{"value":"quick", "description":"If speed matters, quick weapons go first"},'
        + '{"value":"reload", "description":"Must spend time reloading after firing"}'
        + ']',
      armor: '['
        + '{"value":"clumsy", "description":"Large and unwieldy; hard to move quickly or quietly with"},'
        + '{"value":"discreet", "description":"Easy to hide and often overlooked"}'
        + ']',
      gear: '['
        + '{"value":"encrypted"},'
        + '{"value":"jamming"},'
        + '{"value":"satellite relay"},'
        + '{"value":"recording"},'
        + '{"value":"thermographic"},'
        + '{"value":"light amplification"},'
        + '{"value":"magnification"},'
        + '{"value":"flare compensation"},'
        + '{"value":"simsense"},'
        + '{"value":"discreet"}'
        + ']',
      cyberware: '['
        + '{"value":"encrypted"},'
        + '{"value":"inaccessible partition"},'
        + '{"value":"thermographic"},'
        + '{"value":"light amplification"},'
        + '{"value":"magnification"},'
        + '{"value":"flare compensation"},'
        + '{"value":"recording"},'
        + '{"value":"dampening"},'
        + '{"value":"wide frequency"},'
        + '{"value":"jamming"},'
        + '{"value":"satellite relay"},'
        + '{"value":"multi-tasking"},'
        + '{"value":"high capacity"},'
        + '{"value":"high speed"},'
        + '{"value":"substandard", "description":"It works, but not as well as it should"},'
        + '{"value":"unreliable", "description":"Sometimes it doesn\'t work"},'
        + '{"value":"hardware decay", "description":"It works now, but it\'s just a matter of time"},'
        + '{"value":"damaging", "description":"Sometimes it hurts; eventually causes permanent nerve damage"}'
        + ']'
    }
  };
});

Hooks.once('pbtaSheetConfig', () => {
  // Take over the sheet configuration from the PbtA system's TOML form.
  game.settings.set('pbta', 'sheetConfigOverride', true);

  // Load The Sprawl sheet config.
  configSheet();
});
