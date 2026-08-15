# The Sprawl — Foundry VTT Module

A [Foundry VTT](https://foundryvtt.com/) v13 module for **The Sprawl**, Hamish
Cameron's cyberpunk *Powered by the Apocalypse* game. It provides custom
character and threat sheets plus compendium packs of moves, playbooks,
cyberware, gear and tags, built on [Asacolips' PbtA
system](https://foundryvtt.com/packages/pbta).

Built in the same style as the companion
[Chasing Adventure](https://github.com/do-joe/chasing-adventure) module.

## Features

- **Six stats** — Cool, Edge, Meat, Mind, Style, Synth — with the standard
  `2d6 + stat` roll (Strong Hit 10+ / Weak Hit 7-9 / Miss 6-).
- **Harm Clock** and countdown-clock-friendly sheet, Armor, Cred, XP, and the
  `[Intel]` / `[Gear]` mission holds.
- Compendium packs:
  - **Basic Moves**, **Matrix Moves**, **Directives**
  - **Playbook Moves** for all ten playbooks — Driver, Fixer, Hacker, Hunter,
    Infiltrator, Killer, Pusher, Reporter, Soldier, Tech
  - **Cyberware**, **Gear**, **Tags**, **Playbooks**
- A **Threat** (NPC) sheet with its own Harm Clock, tags, and custom moves.

## Requirements

- Foundry VTT **v13+**
- The **Powered by the Apocalypse** system (`pbta`) **1.1.16+**

## Installation (local development)

```bash
npm install                 # install the Foundry CLI
npm run generate            # data/*.mjs -> packs/*/_source/*.json
npm run build               # _source -> compiled LevelDB packs
```

Then copy or symlink this folder into `{userData}/Data/modules/the-sprawl/`,
enable **The Sprawl** in a PbtA-system world, and reload.

## Editing content

All game content lives as plain-JS arrays in [`data/`](data/). Edit a file,
then re-run `npm run generate && npm run build`. See [`CLAUDE.md`](CLAUDE.md) for
the data schema and full architecture notes.

The compiled LevelDB packs are git-ignored — rebuild them from the checked-in
`_source` JSON with `npm run build`.

## Credits

*The Sprawl* is © Hamish Cameron / Ardens Ludere. This module is an unofficial
fan-made tool for running the game in Foundry VTT and contains rules text for
that purpose.
