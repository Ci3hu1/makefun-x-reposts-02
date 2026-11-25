// makefun-x-reposts-02
// Entry point: hand the graded list of X posts (POSTS.json) to the grader.
//
// The bounty is judged on the X posts themselves — their reposts, quotes
// and likes, read by the house through FxTwitter — not on what this program
// computes. So this program does one small job and does it exactly: read
// POSTS.json from the repository, check that it is a well-formed list of
// 1 to 15 real X post addresses, and copy it byte-for-byte to the location
// the grader reads, with mode 0644. Anything malformed is a hard error
// (specific message, non-zero exit) so a bad list never reaches the grader
// silently. Node 22+ standard library only; no dependencies, no network.
//
// Destination selection, in order:
//   1. $MAKEFUN_OUTPUT_DIR is set  -> $MAKEFUN_OUTPUT_DIR/POSTS.json
//   2. /output exists as a directory -> /output/POSTS.json
//   3. otherwise                     -> ./out/POSTS.json (current directory)
// Source selection: $MAKEFUN_BOT_DIR/POSTS.json when set, else the
// POSTS.json sitting next to this script (/bot/POSTS.json in the grader).

import {
  chmodSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir: string = dirname(fileURLToPath(import.meta.url));
const botDir: string = process.env.MAKEFUN_BOT_DIR ?? scriptDir;
const sourcePath: string = join(botDir, "POSTS.json");

const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/\s]+\/(status|i\/web\/status)\/\d+$/;

// POSTS.json must be {"posts": [...]} with 1 to 15 X post addresses.
// A list of more than 15 is refused by the gate even where some repeat,
// and the placeholder the starter ships ("<handle>", "<id>") is no post's
// address, so it fails here on purpose until real posts are filled in.
function validatePosts(): string[] {
  const raw: string = readFileSync(sourcePath, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    const detail: string =
      error instanceof Error ? error.message : String(error);
    throw new Error(`POSTS.json is not valid JSON: ${detail}`);
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error(`POSTS.json must be a JSON object {"posts": [...]}`);
  }
  const posts: unknown = (parsed as Record<string, unknown>).posts;
  if (!Array.isArray(posts)) {
    throw new Error(`POSTS.json "posts" must be an array of post addresses`);
  }
  if (posts.length < 1 || posts.length > 15) {
    throw new Error(
      `POSTS.json must name 1 to 15 posts, got ${posts.length}`,
    );
  }
  for (const item of posts) {
    if (typeof item !== "string" || !POST_URL.test(item.trim())) {
      throw new Error(
        `POSTS.json entry is not an X post address: ${JSON.stringify(item)}`,
      );
    }
  }
  return posts as string[];
}

function pickDestination(): string {
  const outDir: string | undefined = process.env.MAKEFUN_OUTPUT_DIR;
  if (outDir !== undefined && outDir.trim().length > 0) {
    return join(outDir, "POSTS.json");
  }
  if (existsSync("/output") && statSync("/output").isDirectory()) {
    return "/output/POSTS.json";
  }
  return join(process.cwd(), "out", "POSTS.json");
}

function main(): void {
  try {
    if (!existsSync(sourcePath)) {
      throw new Error(`source not found: ${sourcePath}`);
    }
    const posts: string[] = validatePosts();
    const target: string = pickDestination();
    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(sourcePath, target);
    chmodSync(target, 0o644);
    console.log(
      `Copied ${sourcePath} -> ${target} (${posts.length} post(s))`,
    );
  } catch (error) {
    const message: string =
      error instanceof Error ? error.message : String(error);
    console.error(`main.ts failed: ${message}`);
    process.exitCode = 1;
  }
}

main();
