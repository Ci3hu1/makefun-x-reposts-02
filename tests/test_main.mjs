import { test } from "node:test";
import assert from "node:assert/strict";
import {
  chmodSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repoDir = join(fileURLToPath(import.meta.url), "..", "..");
const mainTs = join(repoDir, "main.ts");

function runMain(botDir, outDir) {
  return spawnSync(
    "node",
    [mainTs],
    {
      env: {
        ...process.env,
        MAKEFUN_BOT_DIR: botDir,
        MAKEFUN_OUTPUT_DIR: outDir,
      },
      encoding: "utf8",
    },
  );
}

function fixture(postsJson) {
  const base = mkdtempSync(join(tmpdir(), "xreposts-"));
  const bot = join(base, "bot");
  const out = join(base, "out");
  mkdirSync(bot, { recursive: true });
  writeFileSync(join(bot, "POSTS.json"), postsJson);
  return { base, bot, out };
}

const VALID = JSON.stringify({
  posts: [
    "https://x.com/ci3hu1/status/2125077003611292003",
    "https://x.com/ci3hu1/status/2124952049179890172",
  ],
});

test("valid POSTS.json is copied byte-identical with mode 0644", () => {
  const { base, bot, out } = fixture(VALID);
  try {
    const r = runMain(bot, out);
    assert.equal(r.status, 0, r.stderr);
    const target = join(out, "POSTS.json");
    assert.ok(existsSync(target));
    assert.equal(readFileSync(target, "utf8"), VALID);
    assert.equal(statSync(target).mode & 0o777, 0o644);
    assert.match(r.stdout, /2 post\(s\)/);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("repeat runs are deterministic", () => {
  const { base, bot, out } = fixture(VALID);
  try {
    assert.equal(runMain(bot, out).status, 0);
    const first = readFileSync(join(out, "POSTS.json"), "utf8");
    assert.equal(runMain(bot, out).status, 0);
    assert.equal(readFileSync(join(out, "POSTS.json"), "utf8"), first);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("malformed JSON is a hard error", () => {
  const { base, bot, out } = fixture("{not json");
  try {
    const r = runMain(bot, out);
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /not valid JSON/);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("placeholder address is refused", () => {
  const { base, bot, out } = fixture(
    JSON.stringify({ posts: ["https://x.com/<handle>/status/<id>"] }),
  );
  try {
    const r = runMain(bot, out);
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /not an X post address/);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("more than 15 posts is refused", () => {
  const many = Array.from(
    { length: 16 },
    (_, i) => `https://x.com/ci3hu1/status/212500000000000000${i % 10}`,
  );
  const { base, bot, out } = fixture(JSON.stringify({ posts: many }));
  try {
    const r = runMain(bot, out);
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /1 to 15 posts/);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("non-X url is refused", () => {
  const { base, bot, out } = fixture(
    JSON.stringify({ posts: ["https://example.com/status/123"] }),
  );
  try {
    const r = runMain(bot, out);
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /not an X post address/);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("missing POSTS.json is a hard error", () => {
  const base = mkdtempSync(join(tmpdir(), "xreposts-"));
  const bot = join(base, "bot");
  const out = join(base, "out");
  mkdirSync(bot, { recursive: true });
  try {
    const r = runMain(bot, out);
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /source not found/);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});

test("twitter.com address passes", () => {
  const { base, bot, out } = fixture(
    JSON.stringify({
      posts: ["https://twitter.com/ci3hu1/status/2125077003611292003"],
    }),
  );
  try {
    assert.equal(runMain(bot, out).status, 0);
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
