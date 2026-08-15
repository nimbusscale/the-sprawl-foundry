export const configSheet = async () => {
  const i18n = (key) => game.i18n.localize(key);

  game.pbta.sheetConfig = {
    // The Sprawl is a standard 2d6 + stat Powered by the Apocalypse game.
    rollFormula: "2d6",
    minMod: -2,
    maxMod: 3,
    // The Sprawl has no stat-based advantage/disadvantage, so no statToggle.
    rollResults: {
      success: {
        start: 10,
        end: null,
        label: i18n("sprawl.rollResults.success")
      },
      partial: {
        start: 7,
        end: 9,
        label: i18n("sprawl.rollResults.partial")
      },
      failure: {
        start: null,
        end: 6,
        label: i18n("sprawl.rollResults.failure")
      }
    },
    actorTypes: {
      character: {
        // The six Sprawl stats (rated -1 to +2 at creation, capped at +3).
        stats: {
          cool: { label: i18n("sprawl.character.stats.cool"), value: 0 },
          edge: { label: i18n("sprawl.character.stats.edge"), value: 0 },
          meat: { label: i18n("sprawl.character.stats.meat"), value: 0 },
          mind: { label: i18n("sprawl.character.stats.mind"), value: 0 },
          style: { label: i18n("sprawl.character.stats.style"), value: 0 },
          synth: { label: i18n("sprawl.character.stats.synth"), value: 0 }
        },
        // Top attributes — the countdown-clock and resource trackers.
        attributes: {
          harm: {
            label: i18n("sprawl.character.attrTop.harm.label"),
            description: i18n("sprawl.character.attrTop.harm.description"),
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Clock",
            value: 0,
            max: 6,
            steps: ["1500", "1800", "2100", "2200", "2300", "0000"]
          },
          armor: {
            label: i18n("sprawl.character.attrTop.armor.label"),
            description: i18n("sprawl.character.attrTop.armor.description"),
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Number",
            value: 0
          },
          cred: {
            label: i18n("sprawl.character.attrTop.cred.label"),
            description: i18n("sprawl.character.attrTop.cred.description"),
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Number",
            value: 0
          },
          xp: {
            label: i18n("sprawl.character.attrTop.xp.label"),
            description: i18n("sprawl.character.attrTop.xp.description"),
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Resource",
            value: 0,
            max: 10
          }
        },
        // Left attributes — narrative fields and mission holds.
        attrLeft: {
          look: {
            label: i18n("sprawl.character.attrLeft.look.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          directives: {
            label: i18n("sprawl.character.attrLeft.directives.label"),
            description: i18n("sprawl.character.attrLeft.directives.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          links: {
            label: i18n("sprawl.character.attrLeft.links.label"),
            description: i18n("sprawl.character.attrLeft.links.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          contacts: {
            label: i18n("sprawl.character.attrLeft.contacts.label"),
            description: i18n("sprawl.character.attrLeft.contacts.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          intel: {
            label: i18n("sprawl.character.attrLeft.intel.label"),
            description: i18n("sprawl.character.attrLeft.intel.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "Number",
            value: 0
          },
          gearHold: {
            label: i18n("sprawl.character.attrLeft.gearHold.label"),
            description: i18n("sprawl.character.attrLeft.gearHold.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "Number",
            value: 0
          },
          // Playbook-specific fields
          vehicles: {
            label: i18n("sprawl.character.attrLeft.vehicles.label"),
            description: i18n("sprawl.character.attrLeft.vehicles.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Driver",
            value: ""
          },
          cyberdeck: {
            label: i18n("sprawl.character.attrLeft.cyberdeck.label"),
            description: i18n("sprawl.character.attrLeft.cyberdeck.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            playbook: "Hacker",
            value: ""
          }
        },
        moveTypes: {
          basic: {
            label: i18n("sprawl.character.moveTypes.basic.label"),
            moves: [],
            creation: true
          },
          playbook: {
            label: i18n("sprawl.character.moveTypes.playbook.label"),
            moves: [],
            playbook: true
          },
          matrix: {
            label: i18n("sprawl.character.moveTypes.matrix.label"),
            moves: []
          },
          directive: {
            label: i18n("sprawl.character.moveTypes.directive.label"),
            moves: []
          }
        },
        equipmentTypes: {
          weapon: {
            label: i18n("sprawl.character.equipmentTypes.weapon.label"),
            moves: []
          },
          armor: {
            label: i18n("sprawl.character.equipmentTypes.armor.label"),
            moves: []
          },
          gear: {
            label: i18n("sprawl.character.equipmentTypes.gear.label"),
            moves: []
          },
          cyberware: {
            label: i18n("sprawl.character.equipmentTypes.cyberware.label"),
            moves: []
          }
        }
      },
      // Threats / NPCs. The Sprawl's MC runs Groups, Loners, Places, etc.
      npc: {
        attributes: {
          harm: {
            label: i18n("sprawl.npc.attrTop.harm.label"),
            description: i18n("sprawl.npc.attrTop.harm.description"),
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Clock",
            value: 0,
            max: 6,
            steps: ["1500", "1800", "2100", "2200", "2300", "0000"]
          },
          armor: {
            label: i18n("sprawl.npc.attrTop.armor.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "top",
            type: "Number",
            value: 0
          }
        },
        attrLeft: {
          threatType: {
            label: i18n("sprawl.npc.attrLeft.threatType.label"),
            description: i18n("sprawl.npc.attrLeft.threatType.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          instinct: {
            label: i18n("sprawl.npc.attrLeft.instinct.label"),
            description: i18n("sprawl.npc.attrLeft.instinct.description"),
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          },
          tags: {
            label: i18n("sprawl.npc.attrLeft.tags.label"),
            description: null,
            customLabel: false,
            userLabel: false,
            position: "left",
            type: "LongText",
            value: ""
          }
        },
        moveTypes: {
          custom: {
            label: i18n("sprawl.npc.moveTypes.custom.label"),
            moves: []
          }
        },
        equipmentTypes: {
          weapon: {
            label: i18n("sprawl.npc.equipmentTypes.weapon.label"),
            moves: []
          },
          gear: {
            label: i18n("sprawl.npc.equipmentTypes.gear.label"),
            moves: []
          }
        }
      }
    }
  };

  // Hide PbtA sheet-config options that aren't relevant to The Sprawl.
  await game.settings.set('pbta', 'hideRollFormula', true);
  await game.settings.set('pbta', 'hideForward', false);
  await game.settings.set('pbta', 'hideOngoing', false);
  await game.settings.set('pbta', 'hideHold', false);
  await game.settings.set('pbta', 'hideRollMode', false);
  await game.settings.set('pbta', 'hideUses', false);
};
