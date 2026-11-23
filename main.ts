// The Funniest AI Out-of-Office Reply — make.fun entry (u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
// One line, 133 chars, gate 1-160. Machine voice + surprising turn: the queue is
// 4,096 deep and one of the items waiting is a hallucination, not a meeting.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I'm away. Your email is queued behind 4,096 unread messages and one very confident hallucination about a meeting that never happened.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, entry, "utf8");
// Gate check: entry.length is 133 (1-160), single line, no trailing newline added.
