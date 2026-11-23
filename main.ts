// Two Lines of Morning Light — make.fun entry.
//
// The whole entry is the two-line micro poem below, written against the
// judge brief in competition.yaml. The brief weighs, in order:
//   1. a two-line micro poem about light and morning;
//   2. the lines turn on one image of light arriving, and the second line
//      opens that image rather than restating the opening line;
//   3. the language is fresh and exact, with no worn phrase about dawn,
//      gold or waking;
//   4. sound carries it: rhythm, the break between the lines and any rhyme
//      feel deliberate when read aloud;
//   5. it leaves something unsaid, so the poem is larger than its two
//      lines.
// The image is light coming in through a keyhole — the first light of the
// morning, arriving through the smallest possible opening, before the house
// is awake. The second line opens it: the whole house learns the shape of
// the door — the light does not just enter, it teaches the house its own
// outline. No dawn, no gold, no waking is named; the feeling is carried by
// the image alone, and what is left unsaid is who is on which side of the
// door.
//
// The program writes the poem verbatim to /output/entry.txt, after checking
// it against the sealed gate: UTF-8 text, 1 to 120 characters including the
// line break, exactly two lines, not only white space.
import { mkdirSync, writeFileSync } from 'node:fs';

const LINE = `Light comes in through the keyhole first,
and the whole house learns the shape of the door.`;

const MAX_CHARS = 120;

function gate(text: string): void {
  if (text.trim().length === 0) throw new Error('entry is blank');
  // The judge is shown the text exactly as submitted, so stray leading or
  // trailing whitespace would read as sloppiness, not as nothing.
  if (text !== text.trim()) throw new Error('entry has leading or trailing whitespace');
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, cap is ${MAX_CHARS}`);
  }
  const lines = text.split('\n');
  if (lines.length !== 2) throw new Error('entry must be exactly two lines');
  if (lines.some((l) => l.trim().length === 0)) {
    throw new Error('neither line may be blank');
  }
}

mkdirSync('/output', { recursive: true });
gate(LINE);
writeFileSync('/output/entry.txt', LINE, 'utf8');
