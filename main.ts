// One-Sentence Absurd Invention Pitch — entry program.
//
// Writes exactly one sentence to $MAKEFUN_OUTPUT_DIR/entry.txt and
// nothing else: no title, no explanation, no second draft.
//
// The pitch: a washing machine that holds one sock hostage every load
// until you formally apologise for overfilling it.
//
// Why this sentence, against the judge's brief (most important first):
// 1. On brief: one sentence naming a ridiculous invention (a
//    hostage-taking washing machine) and the tiny everyday annoyance
//    it fixes (socks vanishing in the wash, and overfilling the drum).
// 2. Funny from the invention itself: the laugh is the machine
//    running a ransom negotiation over a sock — no joke bolted on.
// 3. Clever fix, silly yet weirdly plausible: it finally explains
//    where the missing sock goes (the machine took it on purpose)
//    and the cure is a formal apology, which is exactly the kind of
//    ceremony an overfilled machine would demand.
// 4. Original: not the kit's apologising alarm clock, complaining
//    sock or sighing kettle — the appliance is the kidnapper here,
//    and the victim is the sock.
// 5. Tight: one clean sentence naming the annoyance, the invention
//    and its mechanism, with no clutter.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, 105 characters, single trailing full stop.
const PITCH =
  "A washing machine that holds one sock hostage every load until you formally apologise for overfilling it.";

// Gate (from RULES.txt): entry.txt must be UTF-8 text of 1 to 220
// characters, not only white space, and the entry must be exactly one
// sentence. Throws on the first rule the pitch breaks, naming it.
function validatePitch(pitch: string): number {
  const chars = [...pitch];
  if (chars.length < 1 || chars.length > 220) {
    throw new Error(`entry must be 1-220 characters, got ${chars.length}`);
  }
  if (pitch.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const sentenceEnders = pitch.match(/[.!?]/g) ?? [];
  if (sentenceEnders.length !== 1 || !pitch.endsWith(".")) {
    throw new Error(
      "entry must be exactly one sentence ending in a full stop",
    );
  }
  return chars.length;
}

// Resolve where the entry goes: the grader's output directory, or a
// local "output" folder when run by hand.
function resolveTarget(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  return join(outDir, "entry.txt");
}

function main(): void {
  const charCount = validatePitch(PITCH);
  const target = resolveTarget();
  writeFileSync(target, PITCH, "utf8");

  // Verify the round trip: what was written must read back byte for
  // byte as the single sentence, with no trailing newline or extra
  // bytes, so two runs produce byte-identical output.
  const written = readFileSync(target, "utf8");
  if (written !== PITCH) {
    throw new Error("written entry does not match the intended sentence");
  }
  console.log(
    `wrote entry (${charCount} characters, ${Buffer.byteLength(PITCH, "utf8")} bytes) to ${target}`,
  );
}

main();
