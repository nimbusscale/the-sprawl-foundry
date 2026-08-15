import crypto from "crypto";
import fs from "fs";
import path from "path";

// Core / peripheral moves
import { basicMoves } from "./data/basic-moves.mjs";
import { matrixMoves } from "./data/matrix-moves.mjs";
import { directives } from "./data/directives.mjs";

// Playbook moves
import { driverMoves } from "./data/driver.mjs";
import { fixerMoves } from "./data/fixer.mjs";
import { hackerMoves } from "./data/hacker.mjs";
import { hackerClassicMoves } from "./data/hacker-classic.mjs";
import { hunterMoves } from "./data/hunter.mjs";
import { infiltratorMoves } from "./data/infiltrator.mjs";
import { killerMoves } from "./data/killer.mjs";
import { pusherMoves } from "./data/pusher.mjs";
import { reporterMoves } from "./data/reporter.mjs";
import { soldierMoves } from "./data/soldier.mjs";
import { techMoves } from "./data/tech.mjs";

// Equipment
import { cyberware } from "./data/cyberware.mjs";
import { gear } from "./data/gear.mjs";

// Reference
import { tags } from "./data/tags.mjs";
import { playbooks } from "./data/playbooks.mjs";

// Stats that the PbtA system can auto-roll. Any other rollType (links, cred,
// legwork, harm-suffered, etc.) is rolled manually, so we blank it out and
// leave the instruction in the move description.
const ROLLABLE_STATS = new Set(["cool", "edge", "meat", "mind", "style", "synth", "ask", "prompt", "formula"]);

// Generate a deterministic 16-char alphanumeric ID from a seed string.
function generateId(seed) {
  const hash = crypto.createHash("sha256").update(seed).digest("hex");
  return hash.slice(0, 16);
}

const STATS_STAMP = {
  systemId: "pbta",
  systemVersion: "1.1.16",
  coreVersion: "13.0",
  createdTime: null,
  modifiedTime: null,
  lastModifiedBy: null
};

function wrapHtml(text) {
  if (!text) return "";
  const trimmed = String(text).trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("<")) return trimmed;
  return `<p>${trimmed}</p>`;
}

// Create a move document.
function createMove(packName, move) {
  const id = generateId(`${packName}:${move.name}`);
  const rollType = ROLLABLE_STATS.has(move.rollType) ? move.rollType : "";
  return {
    _id: id,
    name: move.name,
    type: "move",
    img: "icons/svg/dice-target.svg",
    effects: [],
    folder: null,
    flags: {},
    system: {
      name: "",
      description: wrapHtml(move.description),
      requiresMove: "",
      moveType: move.moveType || packName.replace("-moves", ""),
      rollFormula: "",
      moveGroup: "",
      moveResults: {
        success: {
          key: "system.moveResults.success.value",
          label: "10+",
          value: wrapHtml(move.results?.success)
        },
        partial: {
          key: "system.moveResults.partial.value",
          label: "7-9",
          value: wrapHtml(move.results?.partial)
        },
        failure: {
          key: "system.moveResults.failure.value",
          label: "6-",
          value: wrapHtml(move.results?.failure)
        }
      },
      uses: 0,
      playbook: move.playbook || "",
      rollType,
      rollMod: 0,
      choices: ""
    },
    _stats: STATS_STAMP,
    _key: `!items!${id}`,
    sort: 0,
    ownership: { default: 0 }
  };
}

// Create an equipment document.
function createEquipment(packName, item) {
  const id = generateId(`${packName}:${item.name}`);
  return {
    _id: id,
    name: item.name,
    type: "equipment",
    img: item.equipmentType === "cyberware" ? "icons/svg/circuitry.svg" : "icons/svg/item-bag.svg",
    effects: [],
    folder: null,
    flags: {},
    system: {
      name: "",
      description: wrapHtml(item.description),
      equipmentType: item.equipmentType || "gear",
      tags: item.tags || "[]",
      quantity: 1,
      weight: 0,
      uses: item.uses || 0
    },
    _stats: STATS_STAMP,
    _key: `!items!${id}`,
    sort: 0,
    ownership: { default: 0 }
  };
}

// Create a tag document.
function createTag(tag) {
  const id = generateId(`tags:${tag.name}`);
  return {
    _id: id,
    name: tag.name,
    type: "tag",
    img: "icons/svg/book.svg",
    effects: [],
    folder: null,
    flags: {},
    system: {
      description: wrapHtml(tag.description)
    },
    _stats: STATS_STAMP,
    _key: `!items!${id}`,
    sort: 0,
    ownership: { default: 0 }
  };
}

// Create a playbook document.
function createPlaybook(pb) {
  const id = generateId(`playbooks:${pb.name}`);
  return {
    _id: id,
    name: pb.name,
    type: "playbook",
    img: "icons/svg/book.svg",
    effects: [],
    folder: null,
    flags: {},
    system: {
      slug: pb.name.toLowerCase(),
      description: wrapHtml(pb.description),
      choiceSets: []
    },
    _stats: STATS_STAMP,
    _key: `!items!${id}`,
    sort: 0,
    ownership: { default: 0 }
  };
}

// Write a JSON source file.
function writeSource(packName, doc) {
  const sourceDir = path.join("packs", packName, "_source");
  fs.mkdirSync(sourceDir, { recursive: true });
  const safeName = doc.name.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
  const filename = `${safeName}_${doc._id}.json`;
  fs.writeFileSync(path.join(sourceDir, filename), JSON.stringify(doc, null, 2) + "\n");
}

let totalFiles = 0;

// Move packs (moveType is carried on each move object).
const movePacks = [
  ["basic-moves", basicMoves],
  ["matrix-moves", matrixMoves],
  ["directives", directives],
  ["driver-moves", driverMoves],
  ["fixer-moves", fixerMoves],
  ["hacker-moves", hackerMoves],
  ["hacker-classic-moves", hackerClassicMoves],
  ["hunter-moves", hunterMoves],
  ["infiltrator-moves", infiltratorMoves],
  ["killer-moves", killerMoves],
  ["pusher-moves", pusherMoves],
  ["reporter-moves", reporterMoves],
  ["soldier-moves", soldierMoves],
  ["tech-moves", techMoves]
];
for (const [packName, moves] of movePacks) {
  for (const move of moves) writeSource(packName, createMove(packName, move));
  console.log(`Generated ${moves.length} entries for ${packName}`);
  totalFiles += moves.length;
}

// Equipment packs.
const equipmentPacks = [
  ["cyberware", cyberware],
  ["gear", gear]
];
for (const [packName, list] of equipmentPacks) {
  for (const item of list) writeSource(packName, createEquipment(packName, item));
  console.log(`Generated ${list.length} entries for ${packName}`);
  totalFiles += list.length;
}

// Tags.
for (const tag of tags) writeSource("tags", createTag(tag));
console.log(`Generated ${tags.length} entries for tags`);
totalFiles += tags.length;

// Playbooks.
for (const pb of playbooks) writeSource("playbooks", createPlaybook(pb));
console.log(`Generated ${playbooks.length} entries for playbooks`);
totalFiles += playbooks.length;

console.log(`\nDone! Generated ${totalFiles} total source files.`);
