# The Sprawl — Foundry VTT PbtA Module

## Project Goal

A Foundry VTT v13 module for **The Sprawl** (Hamish Cameron's cyberpunk *Powered
by the Apocalypse* game), built on Asacolips' **PbtA** system. It provides
character/threat sheets and compendium packs (basic moves, matrix moves,
directives, ten playbooks' moves, cyberware, gear, tags, playbooks) so a GM can
run The Sprawl without hand-writing TOML.

This module mirrors the architecture of the companion `chasing-adventure`
module: a JS `pbtaSheetConfig` hook defines the sheet, and compendium content is
authored as plain-JS data files compiled to LevelDB via the Foundry CLI.

## Reference Material

The full rules text (converted from the PDF) lives in `rules/` — one markdown
file per chapter. `rules/README.md` is the index. This is the source of truth
for all game content. Page markers like `<!-- p.70 -->` cite the printed book.

## Architecture

### Sheet config (the core)

`module/the-sprawl.mjs` registers two hooks:

- `init` — sets `game.pbta.tagConfigOverride` (weapon / armor / gear / cyberware
  tag autocomplete lists).
- `pbtaSheetConfig` — sets `game.settings.set('pbta','sheetConfigOverride',true)`
  and calls `configSheet()`.

`module/helper/config-sheet.mjs` builds `game.pbta.sheetConfig`:

- **Roll:** `2d6`, results 10+ / 7-9 / 6-. **No** stat toggle — The Sprawl has no
  stat-based advantage/disadvantage (unlike Chasing Adventure), so the module
  does **not** patch `RollPbtA.configureModifiers`.
- **Stats (6):** Cool, Edge, Meat, Mind, Style, Synth. Rated -1..+2 at creation
  (`minMod: -2`, `maxMod: 3`).
- **Character top attributes:** Harm Clock (`Clock`, 6 segments
  1500/1800/2100/2200/2300/0000), Armor, Cred, XP (`Resource` max 10).
- **Character left attributes:** Look, Directives, Links, Contacts, [Intel] hold,
  [Gear] hold, plus playbook-tagged fields (Driver → Vehicles & Drones, Hacker →
  Cyberdeck).
- **Move types:** `basic`, `playbook` (playbook: true), `matrix`, `directive`.
- **Equipment types:** `weapon`, `armor`, `gear`, `cyberware`.
- **NPC (Threat):** Harm Clock, Armor, Threat Type, Instinct/Want, Tags, custom
  moves, weapons/gear.

Localization keys live in `languages/en.json` under the `sprawl.*` namespace.

### Content pipeline

Content is authored as plain-JS arrays in `data/*.mjs`, then transformed to
Foundry document JSON and compiled to LevelDB packs.

```
data/*.mjs  --(node generate-packs.mjs)-->  packs/<name>/_source/*.json  --(node build.mjs)-->  packs/<name>/  (LevelDB)
```

- `npm run generate` — regenerate every `packs/*/_source/*.json` from `data/`.
  Deterministic IDs (sha256 of `pack:name`) so rebuilds are stable and diffable.
- `npm run build` — compile every `_source/` dir into a LevelDB pack with the
  official `@foundryvtt/foundryvtt-cli`.
- `npm run deploy` — build then rsync to the Foundry server (see `deploy.sh`).

**Data-file schemas** (see `generate-packs.mjs` for the authoritative transform):

Move:
```js
{ name, moveType, rollType, playbook?, description, results: { success, partial, failure } }
```
`rollType` is one of `cool|edge|meat|mind|style|synth` (or `ask`) to enable the
system's auto-roll; any other value (links, cred, "harm suffered", legwork, or
"") is blanked to a no-roll move and the instruction stays in the description.

Equipment:
```js
{ name, equipmentType: "weapon"|"armor"|"gear"|"cyberware", tags: JSON.stringify([...]), description }
```

Tag: `{ name, description }` · Playbook: `{ name, description }`

### Data files

`basic-moves`, `matrix-moves`, `directives`, `driver`, `fixer`, `hacker`,
`hunter`, `infiltrator`, `killer`, `pusher`, `reporter`, `soldier`, `tech`,
`cyberware`, `gear`, `tags`, `playbooks`.

## Git strategy

- **Commit:** everything under `data/` and `packs/*/_source/*.json` (diffable).
- **Ignore:** `node_modules/` and compiled LevelDB output (`*.ldb`, `LOCK`,
  `LOG`, `CURRENT`, `MANIFEST-*`) — rebuild with `npm run build`.

## Local testing

1. `npm install`
2. `npm run generate && npm run build`
3. Symlink/copy the module into `{userData}/Data/modules/the-sprawl/`.
4. In a PbtA-system world, enable **The Sprawl**, reload, and confirm the
   character sheet shows the six stats, the Harm Clock, and the move/equipment
   tabs; confirm the compendium packs populate.

## Conventions

- ESModules (`.mjs`), Foundry v13, PbtA `1.1.16+`.
- Keep `config-sheet.mjs` the clean, well-commented heart of the module.
- Author content in `data/`, never by hand-editing LevelDB.
